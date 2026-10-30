/**
 * The archive in each language. Every translation has the English records' exact structure: the same ids,
 * unlock order, blocks, notes, cross-references and bars, with only the words changed
 * (checked by scripts/check-i18n.mjs).
 */
import type { Lang } from '../i18n';
import { records as en, type ArchiveRecord } from './archive';
import { records as fr } from './archive.fr';
import { records as es } from './archive.es';
import { records as zh } from './archive.zh';
import { checkArchive } from '../i18n/shape';

export const ARCHIVE: Record<Lang, ArchiveRecord[]> = { en, fr, es, zh };
for (const [lang, recs] of Object.entries({ fr, es, zh })) checkArchive(en, recs, lang);

export function archive(lang: Lang) {
  const records = ARCHIVE[lang];
  return {
    records,
    byId: (id: string) => records.find((r) => r.id === id),
    /** Records in the order their events happened: the archive's chronology. */
    chronological: [...records].sort((a, b) => a.event.iso.localeCompare(b.event.iso)),
  };
}
