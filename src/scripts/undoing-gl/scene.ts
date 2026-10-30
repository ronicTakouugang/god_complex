/**
 * Puts a WebGL canvas over one Undoing scene (HoldScene with data-gl), following the hold through the
 * scene's `undoing` events. The <img> layers stay in the page underneath: they are hidden only once the
 * canvas has drawn its first frame, and shown again the instant anything goes wrong.
 *
 * Frames are drawn only when something changes (a hold step, the colour's return, a camera move, a resize)
 * and never while the scene is off screen or the tab is hidden. Nothing renders at rest.
 */
import { Renderer, stats, type Plates, type Uniforms } from './renderer';
import { chooseTier, type Tier } from './capability';
import { OPENING, REST, shotAt, type Move } from './camera';
import type { UndoingState } from '../hold';
import { store } from '../store';

const DPR: Record<Exclude<Tier, 'css'>, number> = { high: 2, low: 1.5 };
const SLOW_MS = 24;

const ready = (img: HTMLImageElement) =>
  img.complete && img.naturalWidth > 0
    ? img.decode().catch(() => undefined)
    : new Promise<void>((res) => {
        img.addEventListener('load', () => res(), { once: true });
        img.addEventListener('error', () => res(), { once: true });
      });

const loadImage = (src: string) => {
  const img = new Image();
  img.decoding = 'async';
  img.src = src;
  return ready(img).then(() => img);
};

const smooth = (x: number) => { const t = Math.min(1, Math.max(0, x)); return t * t * (3 - 2 * t); };

class GLScene {
  private renderer?: Renderer;
  private canvas?: HTMLCanvasElement;
  private raf = 0;
  private visible = true;
  private state: UndoingState = { phase: 'idle', p: 0, ret: 0, ox: 0.5, oy: 0.6 };
  private move?: Move;
  private moveStart = 0;
  private dpr: number;
  private samples: number[] = [];
  private lastFrame = 0;
  private slowed = false;
  private retried = false;
  private cleanup: (() => void)[] = [];

  constructor(readonly scene: HTMLElement, private tier: Exclude<Tier, 'css'>) {
    this.dpr = Math.min(window.devicePixelRatio || 1, DPR[tier]);
  }

  private layer = (name: string) => this.scene.querySelector<HTMLImageElement>(`img.layer-${name}`) ?? undefined;

  async start() {
    const harm = this.layer('harm');
    const drained = this.layer('drained');
    if (!harm || !drained) return false;
    const after = this.layer('after');
    const cctv = this.layer('cctv');
    const depthSrc = this.scene.dataset.depth;
    await Promise.all([harm, drained, after, cctv].filter(Boolean).map((i) => ready(i!)));
    const depth = depthSrc ? await loadImage(depthSrc) : undefined;
    const plates: Plates = { harm, drained, after, cctv, depth: depth && depth.naturalWidth ? depth : undefined };

    const canvas = document.createElement('canvas');
    canvas.className = 'layer layer-gl';
    canvas.setAttribute('aria-hidden', 'true');
    // Above the plates, below anything the scene holds (captions, slot content).
    const lastPlate = [...this.scene.querySelectorAll('img.layer')].at(-1)!;
    (lastPlate.closest('picture') ?? lastPlate).after(canvas);
    this.canvas = canvas;
    try {
      this.renderer = new Renderer(canvas, plates);
    } catch {
      canvas.remove();
      return false;
    }
    canvas.addEventListener('webglcontextlost', this.onLost);
    canvas.addEventListener('webglcontextrestored', this.onRestored);

    // A visitor returning to a finished scene: start from its finished state.
    const cls = this.scene.classList;
    if (cls.contains('is-drained')) this.state = { ...this.state, phase: 'done', p: 1, ret: cls.contains('is-after') ? 1 : 0 };

    this.bind();
    // The opening move is ours only if the page is still holding its first shot (opening.ts, global.css).
    const root = document.documentElement;
    const opening = this.scene.dataset.camera === 'opening' && root.dataset.opening === 'pending' && this.state.phase === 'idle';
    if (opening) {
      this.move = OPENING[this.tier];
      this.moveStart = performance.now();
    }
    this.renderer.resize(this.dpr);
    this.draw(performance.now());
    // Hide the <img> layers only once the canvas holds the same picture.
    requestAnimationFrame(() => {
      if (!this.renderer?.disposed) this.scene.classList.add('gl-on');
      if (this.move) {
        root.dataset.opening = 'gl';
        this.moveStart = performance.now();
        this.request();
      }
    });
    return true;
  }

  private bind() {
    const on = <K extends keyof WindowEventMap>(t: EventTarget, type: K | string, fn: EventListener, opts?: AddEventListenerOptions) => {
      t.addEventListener(type, fn, opts);
      this.cleanup.push(() => t.removeEventListener(type, fn, opts));
    };
    on(this.scene, 'undoing', ((e: CustomEvent<UndoingState>) => {
      this.state = e.detail;
      if (e.detail.phase === 'holding') this.skip();
      this.request();
    }) as EventListener);
    const skip = () => this.skip();
    on(window, 'wheel', skip, { passive: true });
    on(window, 'keydown', skip);
    on(window, 'touchstart', skip, { passive: true });
    on(this.scene, 'pointerdown', skip);

    const ro = new ResizeObserver(() => { this.renderer?.resize(this.dpr); this.request(); });
    ro.observe(this.scene);
    const io = new IntersectionObserver(([e]) => { this.visible = e.isIntersecting; if (this.visible) this.request(); });
    io.observe(this.scene);
    const mo = new MutationObserver(() => this.request());
    mo.observe(this.scene, { attributes: true, attributeFilter: ['class'] });
    this.cleanup.push(() => { ro.disconnect(); io.disconnect(); mo.disconnect(); });
    on(document, 'visibilitychange', () => { if (!document.hidden) this.request(); });
  }

  /** Any input ends the opening move: it cuts to the page's own framing (never blocks reading). */
  private skip() {
    if (!this.move) return;
    this.endMove();
    this.request();
  }

  private endMove() {
    this.move = undefined;
    store.set('opening', 'seen');
    document.documentElement.dataset.opening = 'done';
  }

  private request() {
    if (this.raf || !this.visible || document.hidden || !this.renderer || this.renderer.disposed) return;
    this.raf = requestAnimationFrame((now) => {
      this.raf = 0;
      this.draw(now);
    });
  }

  private uniforms(now: number): Uniforms {
    const s = this.state;
    let shot = REST;
    if (this.move) {
      const t = now - this.moveStart;
      shot = shotAt(this.move, t);
      if (t >= this.move.ms) { this.endMove(); shot = REST; }
    }
    const pos = (getComputedStyle(this.layer('harm')!).objectPosition || '50% 50%').split(' ').map((v) => parseFloat(v) / 100);
    const pulling = s.phase === 'holding' || s.phase === 'releasing';
    return {
      pos: [pos[0] ?? 0.5, pos[1] ?? 0.5],
      origin: [s.ox, s.oy],
      p: s.p,
      ret: s.ret,
      committed: s.phase === 'committed' || s.phase === 'done' ? 1 : 0,
      cam: [shot.x, shot.y, shot.zoom],
      par: shot.par,
      // The Pull rises with the first third of the hold and fades as the field covers the frame.
      pull: pulling ? smooth(s.p / 0.35) * (1 - smooth((s.p - 0.6) / 0.4)) : 0,
      lens: this.scene.classList.contains('is-cctv') ? 1 : 0,
      time: 0,
    };
  }

  private draw(now: number) {
    if (!this.renderer || this.renderer.disposed) return;
    this.renderer.render(this.uniforms(now));
    this.watch(now);
    if (this.move) this.request();
  }

  /** Too slow while animating: first draw at 1x, then give the scene back to CSS. */
  private watch(now: number) {
    const animating = this.move || this.state.phase === 'holding' || this.state.phase === 'releasing' || (this.state.ret > 0 && this.state.ret < 1);
    if (animating && this.lastFrame) this.samples.push(now - this.lastFrame);
    this.lastFrame = animating ? now : 0;
    if (this.samples.length < 30) return;
    const avg = this.samples.reduce((a, b) => a + b, 0) / this.samples.length;
    this.samples = [];
    if (new URLSearchParams(location.search).has('perf')) console.info(`[undoing-gl] ${avg.toFixed(1)} ms/frame at ${this.dpr}x`);
    if (avg <= SLOW_MS) return;
    if (!this.slowed && this.dpr > 1) {
      this.slowed = true;
      this.dpr = 1;
      this.renderer?.resize(1);
    } else this.fallback();
  }

  private onLost = (e: Event) => {
    e.preventDefault();
    this.scene.classList.remove('gl-on');
  };

  private onRestored = () => {
    if (this.retried || !this.canvas) return this.fallback();
    this.retried = true;
    this.restart();
  };

  private restart() {
    this.dispose();
    void this.start();
  }

  /** Back to the CSS layers for good: they never left the page. */
  fallback() {
    this.scene.classList.remove('gl-on');
    this.dispose();
  }

  dispose() {
    cancelAnimationFrame(this.raf);
    this.raf = 0;
    this.cleanup.forEach((f) => f());
    this.cleanup = [];
    this.renderer?.dispose();
    this.renderer = undefined;
    this.canvas?.remove();
    this.canvas = undefined;
    this.scene.classList.remove('gl-on');
  }
}

/** Starts WebGL on every scene that asks for it, if this visit gets WebGL at all. */
export function initUndoingGL() {
  const tier = chooseTier();
  const w = window as Window & { __undoingGL?: unknown };
  w.__undoingGL = { tier, stats };
  if (tier === 'css') return;
  const scenes: GLScene[] = [];
  const boot = () => {
    document.querySelectorAll<HTMLElement>('.scene[data-gl]').forEach((el) => {
      const s = new GLScene(el, tier);
      scenes.push(s);
      void s.start().then((ok) => { if (!ok) el.classList.remove('gl-on'); });
    });
  };
  boot();
  // Leaving the page releases the GPU; coming back from the back/forward cache starts again.
  addEventListener('pagehide', () => { scenes.splice(0).forEach((s) => s.dispose()); });
  addEventListener('pageshow', (e) => { if (e.persisted) boot(); });
}
