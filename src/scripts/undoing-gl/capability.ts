/**
 * Whether this visit gets the WebGL Undoing or stays on the CSS one (the tested baseline).
 * WebGL is an enhancement only: every "no" here leaves the full experience in HTML and CSS.
 */
export type Tier = 'css' | 'low' | 'high';

export function chooseTier(): Tier {
  try {
    const q = new URLSearchParams(location.search).get('gl');
    if (q === '0') return 'css';
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return 'css';
    const nav = navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number };
    if (nav.connection?.saveData) return 'css';
    if (nav.deviceMemory !== undefined && nav.deviceMemory < 4) return 'css';
    const probe = document.createElement('canvas').getContext('webgl2');
    if (!probe) return 'css';
    probe.getExtension('WEBGL_lose_context')?.loseContext();
    if (q === 'low') return 'low';
    // Phones and small screens start on the low tier: smaller render size and gentler depth.
    const small = matchMedia('(max-width: 1023px), (pointer: coarse)').matches;
    return small ? 'low' : 'high';
  } catch {
    return 'css';
  }
}
