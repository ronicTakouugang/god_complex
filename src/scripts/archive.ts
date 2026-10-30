/**
 * The archive's behaviour: what the visitor has read (this browser only), which records have unsealed,
 * closing a record with Esc, and returning to the visitor's place in the index.
 */
import { store } from './store';

const KEY = 'archive';

function readSet(): Set<string> {
  try {
    return new Set(JSON.parse(store.get(KEY) ?? '[]') as string[]);
  } catch {
    return new Set();
  }
}

function markRead(id: string) {
  const read = readSet();
  read.add(id);
  store.set(KEY, JSON.stringify([...read]));
}

const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const token = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim() || 'ease-out';

/** A black bar peels away like a strip of tape: up, a slight turn, gone (220ms on --ease-out).
 *  Reduced motion: no movement; the words simply fade in (see settle). */
function peel(bar: HTMLElement | null): Promise<unknown> {
  if (!bar || reduced() || !bar.animate) return Promise.resolve();
  return bar.animate(
    [{ transform: 'none', opacity: 1 }, { transform: 'translateY(-100%) rotate(-4deg)', opacity: 0 }],
    { duration: 220, easing: token('--ease-out'), fill: 'forwards' },
  ).finished.catch(() => undefined);
}

/** What was under the bar settles in place: opacity only, nothing moves under the reader's eye. */
function settle(el: HTMLElement) {
  el.animate?.([{ opacity: 0 }, { opacity: 1 }], { duration: reduced() ? 200 : 180, easing: 'ease' });
}

const met = (requires: string, read: Set<string>) => requires.split(',').filter(Boolean).every((id) => read.has(id));

/** Opens every gated element whose requirements are met. Without script everything is already open. */
function applyGates(read: Set<string>) {
  document.querySelectorAll<HTMLElement>('[data-requires]').forEach((el) => {
    if (met(el.dataset.requires ?? '', read)) el.dataset.open = '';
    else delete el.dataset.open;
  });
  document.querySelectorAll<HTMLElement>('.entry').forEach((row) => {
    const status = row.querySelector('[data-status]');
    const id = row.dataset.id ?? '';
    if (status) status.textContent = read.has(id) ? 'Read' : row.dataset.open !== undefined ? 'Unread' : 'Sealed';
    row.classList.toggle('is-read', read.has(id));
  });
  document.querySelectorAll<HTMLElement>('[data-mark]').forEach((m) => m.classList.toggle('is-read', read.has(m.dataset.mark ?? '')));
}

function initRecord(page: HTMLElement, read: Set<string>) {
  const doc = page.querySelector<HTMLElement>('[data-record]');
  if (!doc) return;
  const id = doc.dataset.record ?? '';
  // The "opened out of order" notice is decided inline before the first paint (RecordView.astro).
  markRead(id);
  const now = readSet();
  applyGates(now);
  // Records this one has just unsealed.
  const box = page.querySelector<HTMLElement>('[data-unsealed]');
  if (box) {
    const opened = [...box.querySelectorAll<HTMLElement>('li')].filter((li) => li.dataset.open !== undefined);
    box.querySelectorAll<HTMLElement>('li').forEach((li) => (li.hidden = li.dataset.open === undefined));
    box.hidden = opened.length === 0;
  }
  // Esc closes the record and returns to its row in the index.
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || e.defaultPrevented) return;
    const href = page.dataset.close;
    if (href) location.href = href;
  });
}

/** Back in the index: put focus on the row the visitor came from, so keyboard users keep their place. */
function restorePlace() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  const row = document.getElementById(id);
  const link = row?.querySelector<HTMLAnchorElement>('.entry-open');
  if (row && link && row.dataset.open !== undefined) {
    row.scrollIntoView({ block: 'center' });
    link.focus({ preventScroll: true });
  }
}

/** Black bars the visitor can lift: the Office's secrets still exist (DESIGN.md §2.2). White-out never lifts. */
function initLifts() {
  let lifted: string[] = [];
  try {
    lifted = JSON.parse(store.get('lifted') ?? '[]') as string[];
  } catch {
    lifted = [];
  }
  const open = async (box: HTMLElement, byHand: boolean) => {
    const btn = box.querySelector<HTMLButtonElement>('.lift');
    const text = box.querySelector<HTMLElement>('.lifted');
    if (!btn || !text || box.dataset.lifting !== undefined) return;
    box.dataset.lifting = '';
    if (byHand) await peel(btn.querySelector<HTMLElement>('.blackbar'));
    btn.hidden = true;
    text.hidden = false;
    if (byHand) {
      settle(text);
      text.tabIndex = -1;
      text.focus();
    }
  };
  document.querySelectorAll<HTMLElement>('[data-lift]').forEach((box) => {
    const key = box.dataset.lift ?? '';
    if (lifted.includes(key)) open(box, false);
    box.querySelector('.lift')?.addEventListener('click', () => {
      void open(box, true);
      if (!lifted.includes(key)) {
        lifted.push(key);
        store.set('lifted', JSON.stringify(lifted));
      }
    });
  });
}

/** The first time the visitor sees a record unsealed in the index, its black-bar title peels off.
 *  Once only: afterwards the row is simply open. */
function revealUnsealed() {
  let seen: string[] = [];
  try {
    seen = JSON.parse(store.get('seen') ?? '[]') as string[];
  } catch {
    seen = [];
  }
  const fresh = [...document.querySelectorAll<HTMLElement>('.entry')].filter(
    (row) => (row.dataset.requires ?? '') !== '' && row.dataset.open !== undefined && !seen.includes(row.dataset.id ?? ''),
  );
  const remember = (id: string) => {
    if (!seen.includes(id)) seen.push(id);
    store.set('seen', JSON.stringify(seen));
  };
  if (reduced()) {
    fresh.forEach((row) => remember(row.dataset.id ?? ''));
    return;
  }
  fresh.forEach((row) => {
    delete row.dataset.open; // shown sealed until the visitor is looking at it
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        window.setTimeout(async () => {
          await peel(row.querySelector<HTMLElement>('.entry-sealed .blackbar'));
          row.dataset.open = '';
          const link = row.querySelector<HTMLElement>('.entry-open');
          if (link) settle(link);
          remember(row.dataset.id ?? '');
        }, 240);
      },
      { threshold: 0.6 },
    );
    io.observe(row);
  });
}

export function initArchive() {
  const read = readSet();
  applyGates(read);
  initLifts();
  if (!document.querySelector('.record-page')) revealUnsealed();
  const page = document.querySelector<HTMLElement>('.record-page');
  if (page) initRecord(page, read);
  // The browser moves focus to the #fragment target as the page finishes loading, so restore after that.
  else if (document.readyState === 'complete') restorePlace();
  else addEventListener('load', () => requestAnimationFrame(restorePlace), { once: true });
}
