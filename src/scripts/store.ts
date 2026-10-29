/** What the site remembers, in this browser only (EXPERIENCE_MAP.md §1). Never sent anywhere. */
const PREFIX = 'gc.';
const KEYS = ['prologue', 'cyclist', 'forgotten', 'tap', 'archive', 'lifted'];

export const store = {
  get(key: string): string | null {
    try {
      return localStorage.getItem(PREFIX + key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string) {
    try {
      localStorage.setItem(PREFIX + key, value);
    } catch {
      /* private mode or blocked storage: the visit still works */
    }
  },
  clear() {
    try {
      KEYS.forEach((k) => localStorage.removeItem(PREFIX + k));
    } catch {
      /* nothing to clear */
    }
  },
};
