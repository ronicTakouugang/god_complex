/**
 * Translations may change words, never structure. These checks run when the site is built and stop the build
 * if a translation drifts from the English: a missing row, a moved margin note, a lost black bar or cross-reference,
 * a different unlock order. Structure carries the story (what is hidden, what unseals what), so it is canon.
 */
import type { ArchiveRecord, Block } from '../content/archive';

/** The markup tokens in a text, sorted: bars (and whether they lift), white-outs, cross-references. */
const tokens = (s: string) =>
  [...s.matchAll(/\[\[(bar|white):(\d+(?:\.\d+)?)(\|[^\]]+)?\]\]|\[\[ref:([a-z0-9-]+)\|/g)]
    .map((m) => (m[4] ? `ref:${m[4]}` : `${m[1]}:${m[2]}${m[3] ? ':lift' : ''}`))
    .sort()
    .join(',');

const blockShape = (b: Block): unknown => {
  switch (b.t) {
    case 'fields': return ['fields', b.rows.map(([k, v]) => tokens(k + v))];
    case 'log': return ['log', b.rows.map((r) => tokens(r.text))];
    case 'qa': return ['qa', b.rows.map((r) => [r.who.startsWith('R.') ? 'q' : 'a', tokens(r.text)])];
    case 'table': return ['table', b.head.length, b.rows.map((r) => [r.length, tokens(r.join(' '))])];
    case 'figure': return ['figure', b.img];
    case 'p': return ['p', b.voice ?? '', tokens(b.text)];
    default: return [b.t];
  }
};

const recordShape = (r: ArchiveRecord) => ({
  id: r.id,
  ref: r.ref,
  requires: r.requires,
  event: r.event.iso,
  filed: r.filed.iso,
  translated: Boolean(r.translated),
  blocks: r.blocks.map(blockShape),
  notes: r.notes.map((n) => [n.after, tokens(n.text)]),
  connections: r.connections.map((c) => [c.to, tokens(c.note)]),
});

export function checkArchive(en: ArchiveRecord[], other: ArchiveRecord[], lang: string) {
  const a = JSON.stringify(en.map(recordShape));
  const b = JSON.stringify(other.map(recordShape));
  if (a === b) return;
  const ea = en.map(recordShape);
  const eb = other.map(recordShape);
  const at = ea.findIndex((r, i) => JSON.stringify(r) !== JSON.stringify(eb[i]));
  throw new Error(`Archive translation "${lang}" differs in structure from English at record "${en[at]?.id}".\n  en: ${JSON.stringify(ea[at])}\n  ${lang}: ${JSON.stringify(eb[at])}`);
}

/** The homepage: same keys, same list lengths, and the {n} / {archive} markers where English has them. */
export function checkHome(en: Record<string, unknown>, other: Record<string, unknown>, lang: string) {
  const shape = (v: unknown): unknown =>
    typeof v === 'string' ? (v.includes('{n}') ? '{n}' : '') + (v.includes('{archive}') ? '{archive}' : '')
    : Array.isArray(v) ? v.map(shape)
    : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, shape(x)]))
    : typeof v;
  const a = JSON.stringify(shape(en));
  const b = JSON.stringify(shape(other));
  if (a !== b) throw new Error(`Homepage translation "${lang}" differs in structure from English.`);
}
