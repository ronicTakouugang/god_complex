/**
 * Entry point: loads the WebGL Undoing only when a page asks for it (HoldScene with gl) and only after the
 * page has loaded, so it never competes with the first picture. Reduced motion and ?gl=0 never fetch it.
 */
export function loadUndoingGL() {
  if (!document.querySelector('.scene[data-gl]')) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (new URLSearchParams(location.search).get('gl') === '0') return;
  const idle = (fn: () => void) => ('requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: 600 }) : setTimeout(fn, 120));
  const go = () => idle(() => { import('./scene').then((m) => m.initUndoingGL()).catch(() => undefined); });
  if (document.readyState === 'complete') go();
  else addEventListener('load', go, { once: true });
}
