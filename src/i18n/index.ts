/**
 * The site's languages (PRODUCT.md §Languages). English lives at the root; the others under /fr/, /es/, /zh/.
 * Every page is built once per language from the same templates; only the words change.
 * Translations are first drafts until a native speaker has reviewed them (TRANSLATION.md).
 */
export const LANGS = ['en', 'fr', 'es', 'zh'] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_INFO: Record<Lang, { html: string; name: string; short: string }> = {
  en: { html: 'en', name: 'English', short: 'EN' },
  fr: { html: 'fr', name: 'Français', short: 'FR' },
  es: { html: 'es', name: 'Español', short: 'ES' },
  zh: { html: 'zh-Hans', name: '中文', short: '中文' },
};

/** A site path in the given language: `href('fr', '/archive/')` is `/fr/archive/`. */
export const href = (lang: Lang, path: string) => (lang === 'en' ? path : `/${lang}${path}`);

/** The same page in another language: strips this page's language prefix and adds the other's. */
export const swap = (pathname: string, to: Lang) => {
  const bare = pathname.replace(/^\/(fr|es|zh)(?=\/|$)/, '') || '/';
  return href(to, bare);
};

/** The non-English languages, for getStaticPaths. */
export const OTHER_LANGS = LANGS.filter((l) => l !== 'en');
