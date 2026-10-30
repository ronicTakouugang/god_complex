/**
 * Hold to undo (DESIGN.md §7.3, EXPERIENCE_MAP.md §3).
 * The hold IS the drain: a paper-grey field spreads from the point under the hand while it is
 * held, recedes if released early, and commits at --t-hold. Colour then returns from the edges
 * inward, and the cost lands on the page as white-out.
 */
import { store } from './store';

const HOLD_MS = 1200;
const RETURN_MS = 2000;
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const tapMode = () => document.documentElement.dataset.tap === 'on';

/** cubic-bezier(x1, y1, x2, y2) as a function of progress, solved by Newton's method. */
function bezier(x1: number, y1: number, x2: number, y2: number) {
  const a = (p1: number, p2: number) => 1 - 3 * p2 + 3 * p1;
  const b = (p1: number, p2: number) => 3 * p2 - 6 * p1;
  const c = (p1: number) => 3 * p1;
  const at = (t: number, p1: number, p2: number) => ((a(p1, p2) * t + b(p1, p2)) * t + c(p1)) * t;
  const slope = (t: number, p1: number, p2: number) => 3 * a(p1, p2) * t * t + 2 * b(p1, p2) * t + c(p1);
  return (x: number) => {
    let t = x;
    for (let i = 0; i < 8; i++) {
      const d = slope(t, x1, x2);
      if (Math.abs(d) < 1e-6) break;
      t -= (at(t, x1, x2) - x) / d;
    }
    return at(Math.min(1, Math.max(0, t)), y1, y2);
  };
}
/** The site's --ease-in-out token (DESIGN.md §7.2), for motion driven from script. */
export const easeInOut = bezier(0.65, 0, 0.35, 1);

export type Phase = 'idle' | 'holding' | 'releasing' | 'committed' | 'done';

/** What the scene element announces on every change (`undoing` event), so an optional renderer
 *  (src/scripts/undoing-gl) can draw the same moment. The CSS layers never depend on it. */
export interface UndoingState {
  phase: Phase;
  /** The drain, 0 to 1: the hold's progress. */
  p: number;
  /** The colour's return from the edges, 0 to 1, already eased. */
  ret: number;
  /** Where the drain starts, as a fraction of the scene. */
  ox: number;
  oy: number;
}

class Undoing {
  phase: Phase = 'idle';
  private p = 0;
  private ret = 0;
  private last = 0;
  private raf = 0;
  private buttons: HTMLButtonElement[] = [];

  constructor(
    readonly scene: HTMLElement,
    private onCost: (restoring: boolean) => void,
  ) {
    this.buttons = [...document.querySelectorAll<HTMLButtonElement>(`[data-hold="${scene.dataset.undo}"]`)];
    this.bindScene();
    this.buttons.forEach((b) => this.bindButton(b));
  }

  get hasAfter() {
    return this.scene.querySelector('.layer-after') !== null;
  }

  private ox = 0;
  private oy = 0;

  /** The radius at which the drain's feathered edge (solid to 80%) just reaches the farthest corner,
   *  so the scene finishes draining exactly when the hold commits, not before. */
  private max() {
    const r = this.scene.getBoundingClientRect();
    const far = Math.max(
      Math.hypot(this.ox, this.oy),
      Math.hypot(r.width - this.ox, this.oy),
      Math.hypot(this.ox, r.height - this.oy),
      Math.hypot(r.width - this.ox, r.height - this.oy),
    );
    return far / 0.8;
  }

  private setOrigin(x?: number, y?: number) {
    const r = this.scene.getBoundingClientRect();
    if (x === undefined || y === undefined) {
      const [ox, oy] = (this.scene.dataset.origin ?? '50% 60%').split(' ').map((v) => parseFloat(v) / 100);
      x = r.left + r.width * ox;
      y = r.top + r.height * oy;
    }
    this.ox = x - r.left;
    this.oy = y - r.top;
    this.scene.style.setProperty('--x', `${this.ox}px`);
    this.scene.style.setProperty('--y', `${this.oy}px`);
  }

  private paint() {
    this.scene.style.setProperty('--r', `${this.p * this.max()}px`);
    this.buttons.forEach((b) => b.style.setProperty('--p', String(this.p)));
    this.emit();
  }

  private emit() {
    const r = this.scene.getBoundingClientRect();
    const detail: UndoingState = {
      phase: this.phase, p: this.p, ret: this.ret,
      ox: r.width ? this.ox / r.width : 0.5, oy: r.height ? this.oy / r.height : 0.6,
    };
    this.scene.dispatchEvent(new CustomEvent('undoing', { detail }));
  }

  private label(state: 'idle' | 'holding' | 'done') {
    this.buttons.forEach((b) => {
      const text = b.dataset[`label${state[0].toUpperCase()}${state.slice(1)}` as 'labelIdle'];
      const span = b.querySelector('.btn-text');
      if (text && span) span.textContent = text;
      if (state === 'done') b.setAttribute('aria-disabled', 'true');
    });
  }

  start(x?: number, y?: number) {
    if (this.phase === 'committed' || this.phase === 'done') return;
    this.setOrigin(x, y);
    this.scene.classList.add('is-holding');
    // Reduced motion still needs a real hold: consent is the hold, not a single key press.
    // The drain is a swap there (global.css), so the loop only drives the button's progress bar.
    this.phase = 'holding';
    this.label('holding');
    this.loop();
  }

  release() {
    if (this.phase !== 'holding') return;
    this.phase = 'releasing';
    this.label('idle');
    this.emit();
  }

  private loop() {
    cancelAnimationFrame(this.raf);
    this.last = performance.now();
    const tick = (now: number) => {
      const dt = now - this.last;
      this.last = now;
      if (this.phase === 'holding') {
        this.p = Math.min(1, this.p + dt / HOLD_MS);
        if (this.p >= 1) {
          this.paint();
          this.commit();
          return;
        }
      } else if (this.phase === 'releasing') {
        // Released before the yes: colour floods back from the hand outward.
        this.p = Math.max(0, this.p - dt / (HOLD_MS * 0.5));
        if (this.p <= 0) {
          this.phase = 'idle';
          this.scene.classList.remove('is-holding');
          this.paint();
          return;
        }
      } else return;
      this.paint();
      this.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  }

  commit() {
    this.phase = 'committed';
    this.p = 1;
    this.paint();
    this.scene.classList.add('is-drained');
    this.label('done');
    if (this.hasAfter) {
      window.setTimeout(() => this.returnColour(), reduced() ? 200 : 700);
    } else {
      window.setTimeout(() => this.finish(false), reduced() ? 200 : 900);
    }
  }

  /** Colour comes back from the frame's edges inward; the last place is under the hand. */
  private returnColour() {
    const max = this.max();
    if (reduced()) {
      this.ret = 1;
      this.scene.classList.add('is-after');
      this.finish(false);
      return;
    }
    const t0 = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / RETURN_MS);
      // The drain is linear (forgetting isn't eased); the return breathes out on --ease-in-out.
      this.scene.style.setProperty('--r2', `${(1 - easeInOut(t)) * max}px`);
      this.ret = easeInOut(t);
      this.emit();
      if (t < 1) requestAnimationFrame(step);
      else {
        this.scene.classList.add('is-after');
        this.finish(false);
      }
    };
    this.scene.classList.add('is-returning');
    requestAnimationFrame(step);
  }

  private finish(restoring: boolean) {
    this.phase = 'done';
    this.scene.classList.remove('is-holding', 'is-returning');
    this.scene.classList.add('is-done');
    this.emit();
    this.onCost(restoring);
  }

  /** Put the scene straight into its finished state (returning visitor). */
  restore() {
    this.phase = 'committed';
    this.p = 1;
    this.ret = this.hasAfter ? 1 : 0;
    this.scene.classList.add('is-drained', 'is-done');
    if (this.hasAfter) this.scene.classList.add('is-after');
    this.scene.style.setProperty('--r', '9999px');
    this.scene.style.setProperty('--r2', '0px');
    this.label('done');
    this.finish(true);
  }

  private bindScene() {
    const s = this.scene;
    s.addEventListener('contextmenu', (e) => e.preventDefault());
    s.addEventListener('pointerdown', (e) => {
      if (e.button !== 0 || tapMode()) return;
      this.start(e.clientX, e.clientY);
    });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach((t) => s.addEventListener(t, () => this.release()));
  }

  private bindButton(b: HTMLButtonElement) {
    b.addEventListener('contextmenu', (e) => e.preventDefault());
    b.addEventListener('pointerdown', (e) => {
      if (e.button !== 0 || tapMode()) return;
      e.preventDefault();
      this.start();
    });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach((t) => b.addEventListener(t, () => this.release()));
    b.addEventListener('keydown', (e) => {
      if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) {
        e.preventDefault();
        if (tapMode()) this.tap();
        else this.start();
      }
    });
    b.addEventListener('keyup', (e) => {
      if (e.key === ' ' || e.key === 'Enter') this.release();
    });
    // Tap mode: one press is the yes (DESIGN.md §8). Keyboard presses are handled above.
    b.addEventListener('click', (e) => {
      if (tapMode() && e.detail > 0) this.tap();
    });
  }

  tap() {
    if (this.phase === 'committed' || this.phase === 'done') return;
    this.setOrigin();
    this.scene.classList.add('is-holding');
    this.commit();
  }
}

/** Speaks one of the page's prepared lines (data-say-*, in the page's language) to screen readers. */
const announce = (key: 'sayTagus' | 'sayCyclist') => {
  const live = document.getElementById('announce');
  if (live) live.textContent = live.dataset[key] ?? '';
};
const forgottenWord = () => document.getElementById('announce')?.dataset.forgotten ?? '[forgotten]';

/** The blink: one white frame where the cost lands (DESIGN.md §7.3, §7.5). The words under it vanish for that frame. */
const blink = (el: Element | null) => {
  if (!el || reduced()) return;
  el.classList.add('blinking');
  window.setTimeout(() => el.classList.remove('blinking'), 100);
};

/** White-out: what the power took. Screen readers hear "[forgotten]" (in the page's language) from then on.
 *  `paint` brushes it on in front of the visitor (global.css .whiteout.painting); restored visits skip it. */
function forget(el: Element, paint = false) {
  el.classList.add('whiteout');
  if (paint) {
    el.classList.add('painting');
    el.addEventListener('animationend', () => el.classList.remove('painting'), { once: true });
  }
  const sr = el.querySelector('.sr-only');
  if (sr) sr.textContent = forgottenWord();
}

/** The blink comes first; the white-out is brushed on as it ends. */
const BLINK_MS = 100;

/** The village line is set as it is written, and forgotten halfway through the name
 *  (EXPERIENCE_MAP.md, Prologue: "immediately whited out halfway through"). */
function typeCost(line: HTMLElement, instant: boolean, paint: boolean) {
  const chars = [...line.querySelectorAll<HTMLElement>('.typed .ch')];
  const name = line.querySelector('.fname');
  if (!name) return;
  const nameChars = [...name.querySelectorAll('.ch')];
  // A few letters show, never a word: the village is named only in Chapter III (EXPERIENCE_MAP.md).
  const cut = chars.indexOf(nameChars[4] as HTMLElement);
  if (instant) {
    chars.forEach((c) => c.classList.add('on'));
    forget(name, paint);
    return;
  }
  let i = 0;
  const step = () => {
    if (i === cut) {
      blink(line);
      window.setTimeout(() => forget(name, true), BLINK_MS);
    }
    chars[i]?.classList.add('on');
    i += 1;
    // The pause comes after the white-out, so the visitor sees the gap before the sentence ends.
    if (i < chars.length) window.setTimeout(step, i === cut + 1 ? 520 : 26);
  };
  step();
}

export function initHolds() {
  const tagus = document.getElementById('scene-tagus');
  const cyclist = document.getElementById('scene-cyclist');

  if (tagus) {
    const u = new Undoing(tagus, (restoring) => {
      const line = document.getElementById('cost-tagus');
      line?.removeAttribute('hidden');
      document.querySelectorAll('[data-caption="tagus-before"]').forEach((el) => el.setAttribute('hidden', ''));
      document.querySelectorAll('[data-caption="tagus-after"]').forEach((el) => el.removeAttribute('hidden'));
      document.querySelectorAll('[data-refused]').forEach((el) => el.setAttribute('hidden', ''));
      store.set('prologue', 'undone');
      if (line) typeCost(line, restoring || reduced(), !restoring);
      if (!restoring) {
        announce('sayTagus');
      }
    });
    if (store.get('prologue') === 'undone') u.restore();

    // Scrolling past the harm without holding is a refusal (EXPERIENCE_MAP.md §3, P).
    const card = document.getElementById('prologue');
    if (card) {
      new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0 && u.phase === 'idle' && !store.get('prologue')) {
          store.set('prologue', 'refused');
          document.querySelectorAll('[data-refused]').forEach((el) => el.removeAttribute('hidden'));
        }
      }).observe(card);
      if (store.get('prologue') === 'refused') document.querySelectorAll('[data-refused]').forEach((el) => el.removeAttribute('hidden'));
    }
  }

  if (cyclist) {
    const u = new Undoing(cyclist, (restoring) => {
      const cost = document.getElementById('cost-cyclist');
      cost?.removeAttribute('hidden');
      // Paying lifts the Office's black bars on the slip's "After" rows.
      document.querySelectorAll('[data-sealed]').forEach((el) => el.removeAttribute('data-sealed'));
      store.set('cyclist', 'undone');
      const forgotten = new Set((store.get('forgotten') ?? '').split('|').filter(Boolean));
      forgotten.add('212 people in the water');
      store.set('forgotten', [...forgotten].join('|'));
      const take = (paint: boolean) => document.querySelectorAll('[data-forget="212"]').forEach((el) => forget(el, paint));
      if (restoring) {
        take(false);
        return;
      }
      const say = () => announce('sayCyclist');
      if (reduced()) {
        take(true);
        say();
        return;
      }
      // Let the number be read in front of the visitor, then take it: blink, then the white-out is brushed on.
      window.setTimeout(() => {
        blink(cost?.querySelector('.quoted') ?? null);
        window.setTimeout(() => take(true), BLINK_MS);
        say();
      }, 1100);
    });
    if (store.get('cyclist') === 'undone') u.restore();
  }
}
