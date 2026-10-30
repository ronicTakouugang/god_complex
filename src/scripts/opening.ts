/**
 * The opening camera move without WebGL (DESIGN.md §7, level A): the page paints its first shot with CSS
 * (an inline script sets data-opening="pending" before first paint; global.css frames the plates).
 * If the WebGL scene claims the move, it sets data-opening="gl" and this does nothing. If it has not
 * claimed it shortly after load, CSS plays the same move as a transform transition. Any input skips it,
 * and it plays once per visit.
 */
import { store } from './store';

const CLAIM_MS = 1500;

export function initOpening() {
  const root = document.documentElement;
  if (root.dataset.opening !== 'pending') return;
  const scene = document.querySelector<HTMLElement>('.scene[data-camera="opening"]');
  if (!scene) {
    root.dataset.opening = 'done';
    return;
  }
  const opts = { capture: true, passive: true } as const;
  const events = ['wheel', 'keydown', 'touchstart', 'pointerdown'] as const;
  const off = () => events.forEach((t) => removeEventListener(t, skip, opts));
  const done = () => {
    off();
    store.set('opening', 'seen');
    if (root.dataset.opening !== 'gl') root.dataset.opening = 'done';
  };
  // A cut to the page's framing: no transition, so a hold or a scroll starts from the real picture.
  function skip() {
    const s = root.dataset.opening;
    if (s !== 'pending' && s !== 'css') return off();
    root.classList.add('opening-cut');
    done();
  }
  events.forEach((t) => addEventListener(t, skip, opts));

  const play = () => {
    if (root.dataset.opening !== 'pending') return off();
    root.dataset.opening = 'css';
    const plate = scene.querySelector('img.layer');
    const ms = parseFloat(getComputedStyle(plate ?? scene).transitionDuration) * 1000 || 0;
    window.setTimeout(done, ms + 100);
  };
  const wait = () => window.setTimeout(play, CLAIM_MS);
  if (document.readyState === 'complete') wait();
  else addEventListener('load', wait, { once: true });
}
