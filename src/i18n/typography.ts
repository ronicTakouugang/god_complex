/**
 * French typography: a non-breaking space before : and a narrow one before ; ! ? and inside « ».
 * Applied to whole dictionaries, so translations can be written (and reviewed) with ordinary spaces.
 * Archive markup is untouched: its tokens ([[bar:13]], [[ref:id|…]]) never have a space before the colon.
 */
const NBSP = ' ';
const NNBSP = ' ';

const fix = (s: string) =>
  s
    .replace(/ :/g, `${NBSP}:`)
    .replace(/ ([;!?])/g, `${NNBSP}$1`)
    .replace(/« /g, `«${NNBSP}`)
    .replace(/ »/g, `${NNBSP}»`);

/** Deep-maps every string in a value through the French spacing rules. */
export function frenchSpacing<T>(value: T): T {
  if (typeof value === 'string') return fix(value) as T;
  if (Array.isArray(value)) return value.map((v) => frenchSpacing(v)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, frenchSpacing(v)])) as T;
  }
  return value;
}
