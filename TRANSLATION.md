# THE GOD COMPLEX: Translation guide

> How the site is translated, the terms every language must use, and what still needs a native speaker. Languages and where they live are set in [PRODUCT.md](PRODUCT.md) (Languages). Canon wins over any translation: if a translated line changes a fact, the translation is wrong.

## Status

| Language | Path | Homepage | Archive (6 records) | Interface | Native review |
|---|---|---|---|---|---|
| English (source) | `/` | `src/i18n/home/en.ts` | `src/content/archive.ts` | `src/i18n/ui.ts` | Source text; owner sign-off pending (readiness report, criterion 11) |
| French | `/fr/` | `src/i18n/home/fr.ts` | `src/content/archive.fr.ts` | `ui.ts` (fr) | **First draft. Needs review before release.** |
| Spanish | `/es/` | `src/i18n/home/es.ts` | `src/content/archive.es.ts` | `ui.ts` (es) | **First draft. Needs review before release.** |
| Simplified Chinese | `/zh/` | `src/i18n/home/zh.ts` | `src/content/archive.zh.ts` | `ui.ts` (zh) | **First draft. Needs review before release.** |

All three translations were drafted on 2026-10-30 and are release blockers until a native speaker has reviewed them (readiness report, criterion 11). When a review is done, record the reviewer and date here.

## Rules

1. **Words change, structure never does.** Every translation keeps the English record ids, unlock order, blocks, rows, margin-note positions, images, black bars (and which can be lifted), white-outs and cross-references. The build checks this (`src/i18n/shape.ts`) and fails if a translation drifts.
2. **Markup inside archive text** stays as written: `*emphasis*`, `[[bar:N]]`, `[[bar:N|words that can be lifted]]`, `[[white:N]]`, `[[ref:record-id|linked words]]`. Translate only the words after the `|`. Never use HTML in archive text.
3. **`{n}`** in homepage strings marks the number the power takes ("212"). Keep it, in whatever position the sentence needs. **`{archive}`** becomes the archive link.
4. **Portuguese stays Portuguese** in every language: *Eu sou a Lua*, *Nossa Senhora do Tejo* (followed by a translation), *Diário do Tejo*, street and place names in Lisbon, and the village **Ribeira da Prata**, which is typed letter by letter and whited out. It must stay in Latin letters.
5. **Never translated:** THE GOD COMPLEX / The God Complex, AMNESTY, LETHE, case and record codes (AEL-0261, LETHE-INC-0001), ship names (*Barreiro Nova*, *Flor de Maio*) and personal initials (I. M., R. P., T. Varela).
6. **French typography** is applied by code (`src/i18n/typography.ts`): write ordinary spaces before `: ; ! ?` and inside « », and the build sets the non-breaking ones.
7. **Chinese typography:** a space between Chinese and Latin letters or numbers (`水中有 212 人`); full-width punctuation; Chinese quotation marks “ ”. Emphasis is shown with emphasis dots, not italics (set in CSS).
8. **Register:** the documents are official, flat and exact; Mara's notes are private and clipped; witnesses speak plainly. Keep each voice. The homepage's second person is *vous* in French, *tú* in Spanish, *你* in Chinese.

## Glossary

| English | French | Spanish | Chinese |
|---|---|---|---|
| Continuity Office | Bureau de la Continuité | Oficina de Continuidad | 连续性办公室 |
| Case LETHE | dossier LETHE | caso LETHE | LETHE 案 |
| Subject LETHE / the subject | le sujet LETHE / le sujet | el Sujeto LETHE / el sujeto | 对象 LETHE / 对象 |
| AMNESTY | AMNESTY | AMNESTY | AMNESTY |
| undo (a harm) / undone | défaire / défait | deshacer / deshecho | 逆转 / 已逆转 |
| reversal (the Office's word) | inversion | reversión | 逆转 |
| Hold to undo | Maintenir pour défaire | Mantén pulsado para deshacer | 按住以逆转 |
| Tap instead of hold | Toucher au lieu de maintenir | Tocar en lugar de mantener | 轻触代替按住 |
| Acute episodic loss (AEL) | perte épisodique aiguë (AEL) | pérdida episódica aguda (AEL) | 急性情景记忆丧失（AEL） |
| onset | début | inicio | 发病 |
| payer / someone who paid | personne ayant payé | quien paga / persona que ha pagado | 付出者 / 付出代价的人 |
| the cost | le coût | el coste | 代价 |
| the Okafor Correlation | la corrélation d'Okafor | la correlación de Okafor | 奥卡福相关性 |
| register (Mara's) | registre | registro | 登记册 |
| redacted (black bar) | caviardé | tachado | 已涂黑 |
| forgotten (white-out) | oublié | olvidado | 已遗忘 |
| sealed / unsealed | sous scellés / descellé | sellado / desellado | 封存 / 解封 |
| lift the redaction | lever le caviardage | levantar la tachadura | 揭开涂黑 |
| record (archive document) | pièce | documento | 档案 |
| signature (of the power) | signature | firma | 特征 |
| protocol ("a miracle without a protocol is a lottery") | protocole / loterie | protocolo / lotería | 规程 / 抽签 |
| The window / AMNESTY / The static (chapters) | La fenêtre / AMNESTY / Les parasites | La ventana / AMNESTY / La estática | 窗口 / AMNESTY / 杂音 |

**Names in Chinese:** main characters and cities take their standard Chinese forms (玛拉·奥卡福, 英格丽·索尔旺, 露阿 for Lua; 里斯本, 特茹河 for the Tagus, 塞图巴尔, 明德卢, 索德雷码头 for Cais do Sodré). Minor people keep Latin initials (C. Brandão, R. Pires, T. Varela). Reviewers: confirm 露阿 for *Lua* (it should read as a woman's name and keep the sound).

## For reviewers

- Read the homepage file and the archive file for your language side by side with the English. The English files are the source.
- Check facts against [CHARACTER_BIBLE.md](CHARACTER_BIBLE.md): dates, numbers, who knows what. Nothing may reveal more than the English does (Revelations 1–3 stay sealed).
- Check that no interface word is left in English (the build will not catch that).
- Then run `npm run build`: it fails if the structure no longer matches.
