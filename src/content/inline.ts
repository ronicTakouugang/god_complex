/** Parses the archive's inline markup (see src/content/archive.ts) into segments a component can render. */
export type Seg =
  | { k: 'text'; v: string }
  | { k: 'em'; v: string }
  /** A black bar. With `reveal`, the visitor can lift it (DESIGN.md §2.2: the Office's secrets still exist). */
  | { k: 'bar'; w: number; reveal?: string }
  | { k: 'white'; w: number }
  | { k: 'ref'; to: string; v: string };

const TOKEN = /\[\[(bar|white):(\d+(?:\.\d+)?)(?:\|([^\]]+))?\]\]|\[\[ref:([a-z0-9-]+)\|([^\]]+)\]\]|\*([^*]+)\*/g;

export function parseInline(text: string): Seg[] {
  const out: Seg[] = [];
  let last = 0;
  for (const m of text.matchAll(TOKEN)) {
    if (m.index > last) out.push({ k: 'text', v: text.slice(last, m.index) });
    if (m[1] === 'bar') out.push({ k: 'bar', w: Number(m[2]), reveal: m[3] });
    else if (m[1] === 'white') out.push({ k: 'white', w: Number(m[2]) });
    else if (m[4]) out.push({ k: 'ref', to: m[4], v: m[5] });
    else out.push({ k: 'em', v: m[6] });
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push({ k: 'text', v: text.slice(last) });
  return out;
}

/** Plain text for places that cannot hold markup (meta descriptions, aria labels). */
export const plainInline = (text: string) =>
  parseInline(text)
    .map((s) => (s.k === 'text' || s.k === 'em' || s.k === 'ref' ? s.v : s.k === 'bar' ? '[redacted]' : '[forgotten]'))
    .join('');
