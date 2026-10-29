/** Page-level behaviour: section entrances, the stage that follows the column, settings. */
import { store } from './store';

/** Parts of each section arrive in reading order, once (DESIGN.md §7.1). Content is visible without script. */
function initEntrances() {
  const groups = document.querySelectorAll<HTMLElement>('[data-enter]');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    },
    { rootMargin: '0px 0px 15% 0px', threshold: 0 },
  );
  groups.forEach((g) => {
    [...g.children].forEach((c, i) => (c as HTMLElement).style.setProperty('--i', String(i)));
    io.observe(g);
  });
}

/** The fixed half changes to the picture that matches the section in the middle of the screen. */
function initStages() {
  document.querySelectorAll<HTMLElement>('[data-stage]').forEach((stage) => {
    const split = stage.closest('.split');
    if (!split) return;
    const sections = split.querySelectorAll<HTMLElement>('[data-slide]');
    const io = new IntersectionObserver(
      (entries) => {
        // Never swap the picture out from under a hold in progress.
        if (stage.querySelector('.scene.is-holding, .scene.is-returning')) return;
        entries.forEach((e) => {
          if (e.isIntersecting) stage.dataset.active = (e.target as HTMLElement).dataset.slide;
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    sections.forEach((s) => io.observe(s));
  });
}

function initSettings() {
  const root = document.documentElement;
  if (store.get('tap') === 'on') root.dataset.tap = 'on';
  document.querySelectorAll<HTMLButtonElement>('[data-toggle-tap]').forEach((b) => {
    const sync = () => b.setAttribute('aria-pressed', String(root.dataset.tap === 'on'));
    sync();
    b.addEventListener('click', () => {
      root.dataset.tap = root.dataset.tap === 'on' ? 'off' : 'on';
      store.set('tap', root.dataset.tap);
      document.querySelectorAll<HTMLButtonElement>('[data-toggle-tap]').forEach((x) => x.setAttribute('aria-pressed', String(root.dataset.tap === 'on')));
    });
  });
  document.querySelectorAll<HTMLButtonElement>('[data-clear]').forEach((b) =>
    b.addEventListener('click', () => {
      store.clear();
      location.reload();
    }),
  );
}

/** Below desktop, a stage scene moves next to the button that undoes it, so its stage never covers the text. */
function initTravellingScenes() {
  const mq = matchMedia('(min-width: 1024px)');
  const place = () => {
    document.querySelectorAll<HTMLElement>('[data-scene-slot]').forEach((slot) => {
      const scene = document.getElementById(`scene-${slot.dataset.sceneSlot}`);
      const home = document.querySelector<HTMLElement>(`[data-slide-id="${slot.dataset.sceneSlot}"]`);
      if (!scene || !home) return;
      const target = mq.matches ? home : slot;
      if (scene.parentElement !== target) target.prepend(scene);
    });
  };
  place();
  mq.addEventListener('change', place);
}

export function initPage() {
  initTravellingScenes();
  initEntrances();
  initStages();
  initSettings();
}
