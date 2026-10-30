/**
 * Camera moves over a plate: timelines of framing (offset as fractions of the frame, and zoom) and depth parallax,
 * eased on the site's --ease-in-out token. Every move ends at zoom 1, offset 0: the CSS framing,
 * so stopping at any moment (skip, reduced motion, a hold) lands exactly where the page already is.
 */
import { easeInOut } from '../hold';

export interface Shot {
  x: number;
  y: number;
  zoom: number;
  /** Depth parallax, plate fractions: how far near things slide against far ones. */
  par: [number, number];
}

export interface Move {
  from: Shot;
  ms: number;
}

/** The framing every move ends on: the page's own crop. */
export const REST: Shot = { x: 0, y: 0, zoom: 1, par: [0, 0] };

/** The opening (EXPERIENCE_MAP.md, Prologue): from the storm over the bridge, down through the rain
 *  to the capsized ferry, settling low on the quay where she kneels in the lower third.
 *  global.css frames the <img> layers at the same start shot (scale(zoom) translateY(-y)) before first paint,
 *  so the move starts from what the visitor already sees. Keep the two in step. */
export const OPENING: Record<'high' | 'low', Move> = {
  high: { from: { x: 0, y: -0.22, zoom: 1.8, par: [0, 0.035] }, ms: 5200 },
  low: { from: { x: 0, y: -0.18, zoom: 1.55, par: [0, 0.018] }, ms: 3600 },
};

/** The framing at time t (ms) into a move. */
export function shotAt(move: Move, t: number): Shot {
  const k = easeInOut(Math.min(1, Math.max(0, t / move.ms)));
  const f = move.from;
  const lerp = (a: number, b: number) => a + (b - a) * k;
  return {
    x: lerp(f.x, REST.x),
    y: lerp(f.y, REST.y),
    zoom: lerp(f.zoom, REST.zoom),
    // Parallax is strongest mid-move and gone at rest, so the resting frame matches the images exactly.
    par: [f.par[0] * Math.sin(Math.PI * k), f.par[1] * Math.sin(Math.PI * k)],
  };
}
