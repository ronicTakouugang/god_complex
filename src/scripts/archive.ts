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
  // Opened before its turn: say so plainly, but never block reading.
  if (!met(doc.dataset.requires ?? '', read)) {
    const early = page.querySelector<HTMLElement>('[data-early]');
    const list = page.querySelector('[data-early-list]');
    if (early && list) {
      list.textContent = page.dataset.requiresTitles ?? '';
      early.hidden = false;
    }
  }
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

export function initArchive() {
  const read = readSet();
  applyGates(read);
  const page = document.querySelector<HTMLElement>('.record-page');
  if (page) initRecord(page, read);
  // The browser moves focus to the #fragment target as the page finishes loading, so restore after that.
  else if (document.readyState === 'complete') restorePlace();
  else addEventListener('load', () => requestAnimationFrame(restorePlace), { once: true });
}
