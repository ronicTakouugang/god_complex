/**
 * Prototype only (src/pages/lab/tagus.astro): after the cost has landed, the visitor can cut to quay camera 3,
 * the same minute as the Office recorded it, and go from there into the incident report.
 * The cut is a cut (DESIGN.md §4.3), not a slide; the frame then travels into the record's evidence image.
 */
const SETTLE_MS = 2600;

export function initLab() {
  const scene = document.getElementById('scene-tagus');
  const offer = document.querySelector<HTMLElement>('[data-cctv-offer]');
  const cut = document.querySelector<HTMLButtonElement>('[data-cctv]');
  const report = document.querySelector<HTMLAnchorElement>('[data-cctv-report]');
  if (!scene || !offer || !cut || !report) return;

  const show = (delay: number) => window.setTimeout(() => (offer.hidden = false), delay);
  if (scene.classList.contains('is-done')) show(0);
  else {
    const watch = new MutationObserver(() => {
      if (!scene.classList.contains('is-done')) return;
      watch.disconnect();
      show(SETTLE_MS);
    });
    watch.observe(scene, { attributes: true, attributeFilter: ['class'] });
  }

  cut.addEventListener('click', () => {
    scene.classList.add('is-cctv');
    // The same frame becomes the evidence image in LETHE-INC-0001 when the record opens.
    scene.style.setProperty('view-transition-name', 'fig-ev-cctv');
    document.querySelector<HTMLElement>('[data-cctv-stamp]')?.removeAttribute('hidden');
    document.querySelectorAll<HTMLElement>('[data-caption="tagus-after"]').forEach((el) => (el.hidden = true));
    document.querySelectorAll<HTMLElement>('[data-caption="cctv"]').forEach((el) => (el.hidden = false));
    cut.hidden = true;
    report.hidden = false;
    report.focus();
  });
}
