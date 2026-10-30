/** The homepage's words in each language. Each translation must have exactly the English shape (HomeText). */
import type { Lang } from '../index';
import { en, type HomeText } from './en';
import { fr } from './fr';
import { es } from './es';
import { zh } from './zh';
import { checkHome } from '../shape';

export const HOME: Record<Lang, HomeText> = { en, fr, es, zh };
for (const [lang, t] of Object.entries({ fr, es, zh })) checkHome(en, t, lang);
