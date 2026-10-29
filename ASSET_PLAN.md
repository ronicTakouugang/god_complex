# THE GOD COMPLEX — Asset Plan

> Every asset the experience needs, by chapter, with its source and status. The rules for how each looks are in [DESIGN.md](DESIGN.md) and [VISUAL_DIRECTION.md](VISUAL_DIRECTION.md). Where each one appears is in [EXPERIENCE_MAP.md](EXPERIENCE_MAP.md).
>
> **Status key:**
> - **HAVE**: locked, in `concept/reference/`.
> - **DERIVE**: made from a locked image with an edit or crop.
> - **MAKE**: new image generation or authoring.
> - **WRITE**: authored text, built as live HTML.
> - **CODE**: drawn by the site (SVG or CSS).

---

## 0. Production rules

1. **Masters** are at least 2400px on the long edge, saved as PNG in `assets-src/` (outside the built site). Astro generates AVIF and WebP at responsive widths. Never ship a master.
2. **Two crops per panel:** **landscape** (16:9 or 21:9) for desktop and **portrait** (4:5 or 9:16) for phones. Each is art-directed separately, by regenerating or extending, never by squeezing one image.
3. **State pairs must line up pixel for pixel.** A *world* state and its *drained* state need the same composition, so the cross-fade lines up. Make the drained state as an **edit of the world state** (as `undoing-05` was made from `kneel-02`), never as a fresh generation.
4. **Every generated image goes through the selection check** in VISUAL_DIRECTION §7.4: silhouette, face rule, a story reason for every element, skin warmth, no superhero clichés.
5. **Provenance:** every shipped raster keeps its prompt or origin in a sidecar file (`<file>.json`).
6. **Anything synthetic that could pass for real** (fake press photos, the volunteer's photograph) is labelled as fiction on the page.
7. **Budget:** each image is at most 350 KB in AVIF at 1600px wide. The first viewport's image is at most 200 KB and gets preloaded.

---

## 1. Prerequisite: supporting cast designs

The site shows **Mara, Duarte, Solvang, Ivone and Djina**, mostly in documents and photos, and none of them has a design yet. Before making any chapter assets, run a short turnaround pass for each (one sheet, one locked image), with the same five-point check.

| ID | Character | Key traits (from CHARACTER_BIBLE §6) | Status |
|---|---|---|---|
| C1 | Mara Okafor | 44, British-Nigerian neurologist, practical clothing, often holding a tablet or a file | MAKE |
| C2 | Duarte Mbala | 61, blind, a former radio host who now repairs radios, scanner | MAKE |
| C3 | Ingrid Solvang | 58, Norwegian bioethicist, an office director, index cards | MAKE |
| C4 | Ivone Semedo | 91, a former morna singer, care-home resident | MAKE |
| C5 | Djina Lopes | 36, primary-school teacher in Ribeira da Prata | MAKE |

**Note:** the face rule applies only to Lua. Other characters' faces can be shown.

---

## 2. Illustrations by chapter

### Prologue · The Window
| ID | Asset | States | Crops | Source | Status |
|---|---|---|---|---|---|
| P-1 | Tagus, ferry **capsized**, Lua kneeling small at the water's edge | world (colour) | L + P | Edit of `lua-power-tagus.png`: ferry overturned, river in full colour | MAKE |
| P-2 | Tagus, ferry **righting**, river and ferry drained, Lua and the city in colour | drained | L + P | `lua-power-tagus.png` (portrait) | HAVE (P) / DERIVE (L: extend sideways) |
| P-3 | Tagus, ferry **upright**, passengers dry on deck, colour returned | world | L + P | Edit of P-2 | MAKE |

### I · AMNESTY
| ID | Asset | States | Crops | Source | Status |
|---|---|---|---|---|---|
| I-1 | Cyclist on Rua da Conceição, Lua in the kneel | world | L + P | `lua-pose-kneel.png` | HAVE (P) / DERIVE (L) |
| I-2 | The same moment, drained, with Lua in colour | drained | L + P | `lua-power-undoing-peak.jpg` | HAVE (P) / DERIVE (L) |
| I-3 | The same street afterwards: cyclist sitting up, bike whole, no scar left | world | L + P | Edit of I-1 | MAKE |
| I-4 | **CCTV still:** a colour-keeping motion smear of a figure, the badge sharp, with timestamp overlay (set in code) | — | L | Generate | MAKE |
| I-5 | **Press photo:** the shrine at Cais do Sodré, candles, flowers, printed photos of the smear | world | L + P | Generate | MAKE |
| I-6 | **Witness photo:** a crowd at a rescue, one smeared figure among sharp faces | — | L | Generate | MAKE |

### II · The Static
| ID | Asset | Source | Status |
|---|---|---|---|
| II-1 | World map linework (land outlines only) | Natural Earth 1:110m (public domain), drawn as SVG | CODE |
| II-2 | Mara at her desk at night, files around her, seen from behind or to the side | Generate, after C1 | MAKE |
| II-3 | Tobi's childhood photo that Mara "can't feel": a family snapshot | Generate, synthetic, labelled | MAKE |

### III · The Correlation
| ID | Asset | Source | Status |
|---|---|---|---|
| III-1 | The two-row ledger (rescues and losses, times) | Data from the canon timeline, built as live HTML with SVG ticks | CODE + WRITE |
| III-2 | Case 0632 file | WRITE | WRITE |

### IV · The Red Door
| ID | Asset | States | Crops | Source | Status |
|---|---|---|---|---|---|
| IV-1 | The Ribeira da Prata valley: cane terraces, chapel, sea beyond | world | L + P | Generate. A fictional village, no real place copied. | MAKE |
| IV-2 | **The red door**, a photographic view, in a whitewashed wall | world | P | Generate | MAKE |
| IV-3 | **Lua's ballpoint sketch of the red door** (blue ink on notebook paper), drawn to match IV-2's geometry for the overlay | — | P | Draw by hand or generate, then trace | MAKE |
| IV-4 | Djina and Lua at the village fountain at dusk (Lua seen from behind) | world | L + P | Generate, after C5 | MAKE |
| IV-5 | The same fountain, drained (for the moment Lua reads the Correlation) | drained | L + P | Edit of IV-4 | MAKE |

### V · Nearest to Her
| ID | Asset | Source | Status |
|---|---|---|---|
| V-1 | Solvang's index card with her husband's name, handwritten by **Solvang** (pencil, not blue) | Object photo, generate | MAKE |
| V-2 | The volunteer's photograph clipped to the Protocol form: an ordinary person, synthetic, labelled | Generate | MAKE |
| V-3 | Duarte's voiceprint | An SVG waveform from synthetic data | CODE |
| V-4 | Duarte in his flat with the scanner, headphones on the table | Generate, after C2 | MAKE |
| V-5 | **Lua's silhouette without the headphone loop** (after the betrayal) | Edit of `lua-pose-refusal.jpg` | DERIVE |

### VI · Night Zero
| ID | Asset | Source | Status |
|---|---|---|---|
| VI-1 | The Santa Luzia corridor at night, Room 7's door | Generate | MAKE |
| VI-2 | **Celeste's staff photo, before Night Zero:** face visible, long braided hair, **filled badge CELESTE S.** (VISUAL_DIRECTION §6, Stage 0) | Generate. **Check it against the turnaround**: same person, same uniform, new and crisp. | MAKE |
| VI-3 | The evidence box: phone, lanyard, folded cardigan, Missing Person file | Object photo, generate | MAKE |
| VI-4 | **The name card *CELESTE S.***, held in Ivone's hands | Generate, after C4 | MAKE |
| VI-5 | **The Hand**, used as this chapter's quiet panel | `lua-pose-hand.png` | HAVE (P) / DERIVE (L) |

### VII · The Lisbon Choice
| ID | Asset | States | Crops | Source | Status |
|---|---|---|---|---|---|
| VII-1 | Lisbon at its most beautiful: ochre and azulejo, the river, evening | world | L + P | Generate | MAKE |
| VII-2 | Lisbon struck: the quake and the surge coming up the Tagus, Lua kneeling at Cais do Sodré | world | L + P | Generate | MAKE |
| VII-3 | VII-2 drained, with Lua in colour | drained | L + P | Edit of VII-2 | MAKE |
| VII-4 | VII-2 after a **refusal**: the city damaged, in colour, nothing undone | world | L + P | Edit of VII-2 | MAKE |

### Ending · What you forgot
| ID | Asset | Source | Status |
|---|---|---|---|
| E-1 | **The badge with *CELESTE S.* in the holder** (the *longing* ending) | Edit of `lua-emblem-stilllife.png`, badge centred, at a larger size | MAKE |
| E-2 | **The badge blank** (the *herself* ending) | `lua-emblem-stilllife.png`, recomposed with the badge centred, at a larger size | DERIVE |
| E-3 | **The badge held in Lua's hand, the grey city behind** (the *refuse* ending) | Generate | MAKE |

---

## 3. Documents (live text, written)

All of these are **real HTML text** styled as documents, not images. They also need copywriting.

| ID | Document | Chapter | Author in the story | Status |
|---|---|---|---|---|
| D-1 | Prologue captions and the blink line | P | Narrator | WRITE |
| D-2 | *Diário do Tejo* front page, **AMNESTY** (headline, deck, first paragraphs) | I | A fictional newspaper | WRITE |
| D-3 | Five contradicting witness statements | I | The Continuity Office's transcripts | WRITE |
| D-4 | Four or five Acute Episodic Loss case notes, including Mara's own | II | Mara | WRITE |
| D-5 | Mara's direct-address passages (about six short ones) | II–VII | Mara | WRITE |
| D-6 | The Okafor Correlation abstract plus Case 0632 | III | Mara | WRITE |
| D-7 | The Office's response memo (classified) | III | The Office | WRITE |
| D-8 | Djina's morna verse in **Kriolu plus a translation**. **Original lyrics, checked by a Kriolu speaker.** | IV | Djina's mother | WRITE + REVIEW |
| D-9 | Solvang's experiment report | V | Solvang | WRITE |
| D-10 | The Protocol for Consensual Allocation form | V | The Office | WRITE |
| D-11 | The record of Duarte's disclosure (the voiceprint handover) | V | The Office | WRITE |
| D-12 | Celeste Semedo's missing-person file (summary) | VI | The police (fictional, no real insignia) | WRITE |
| D-13 | **The Night Archive transcript**, 14 March 2031, 01:30 | VI | Celeste | WRITE |
| D-14 | The three Choice statements and their consequences | VII | Narrator | WRITE |
| D-15 | *Os que eu deixei*, notebook entries (names) | VII (refuse) | Lua, **handwriting** | WRITE |
| D-16 | "What you forgot", credits, the fiction disclaimer | E | — | WRITE |

**Language rule:** every Portuguese and Kriolu line gets a native-speaker check before launch (PRODUCT.md dignity commitment). Until then, mark them `REVIEW` in the source.

---

## 4. Symbols and SVG

| ID | Asset | Spec | Status |
|---|---|---|---|
| S-1 | **The mark: the blank badge** | A vertical rectangle with a lanyard slot. Works at 16px (favicon), at 24px (top bar) and large (end). Single colour. | CODE |
| S-2 | Wordmark lock-up: the mark plus **THE GOD COMPLEX** | Archivo width 70, weight 800. Built from live type, no outlined text. | CODE |
| S-3 | Stamp: **CLASSIFIED — LETHE** | `--stamp`, ink-uneven edge, rotation variable | CODE |
| S-4 | Stamp: **GABINETE DE CONTINUIDADE** (a fictional seal, typographic only, no stars or arms) | Same | CODE |
| S-5 | Stamp: **RECEIVED** with a date slot | Same | CODE |
| S-6 | **White-out masks**: three correction-fluid edge variants, used as `mask-image` | Soft, irregular, grainy | CODE |
| S-7 | Black-bar redaction | Plain rectangle, line height | CODE |
| S-8 | Icons: contents, sound on, sound off, settings, close, hold indicator | Authored SVG, 1.5px stroke, square ends, 24px grid | CODE |
| S-9 | **Hand-lettered *Eu sou a Lua*** and ***Os que eu deixei*** | Traced from a real ballpoint sample (yours or a collaborator's), in `--self` | MAKE |
| S-10 | Undoing edge: the grain-broken drain edge | A noise texture used as the mask edge | CODE |

---

## 5. Textures

| ID | Asset | Spec | Status |
|---|---|---|---|
| T-1 | Paper tile for the FILE ground | A real paper scan, seamless, 512px, very subtle | MAKE (scan or generate) |
| T-2 | Image grain | Applied **at image export**, not as a CSS overlay, so it stays consistent across images | Pipeline |
| T-3 | Correction-fluid texture for white-out | Seamless, at most 256px | MAKE |

---

## 6. Fonts

| ID | Face | Licence | Subset | Status |
|---|---|---|---|---|
| F-1 | Archivo (variable, width plus weight) | OFL | Latin plus Latin Extended | Download, self-host as woff2 |
| F-2 | Literata (variable, optical size plus weight, with italic) | OFL | Latin plus Latin Extended | Download, self-host as woff2 |
| F-3 | Handwriting face for running notebook lines | OFL, chosen at build time (DESIGN §3.1) | Latin plus Latin Extended | Choose, then self-host |

---

## 7. Audio (off by default; v1 = ambience only, so A-4 and A-5 are deferred)

| ID | Asset | Note | Status |
|---|---|---|---|
| A-1 | Ambient rain and city (Lisbon night) | Licensed or recorded field audio | MAKE |
| A-2 | River and storm (Tagus) | Same | MAKE |
| A-3 | **Silence**: the audio cut, handled in code (a gain ramp to zero) | No file | CODE |
| A-4 | The morna verse, sung | **An original composition and performance.** Not a recording of an existing song. | MAKE (needs a musician) |
| A-5 | The Night Archive confession | Needs a voice actor; transcript is primary | MAKE (needs an actor) |

---

## 8. Order of production

1. **Supporting cast** (C1–C5), because several chapter assets depend on them.
2. **Prologue** (P-1 to P-3) and the **Ending badges** (E-1 to E-3). They're the bookends, and the first build milestone needs them.
3. **Chapters I and IV.** I is the first press chapter; IV is the emotional centre and the most saturated.
4. **Chapters V, VI and VII.**
5. **Writing** (D-1 to D-16) runs in parallel from the start. **The Kriolu review is on the critical path for launch.**

**What exists today:** 11 locked images. 4 can be used as they are (as portrait crops), and 6 more assets are crops or edits of them. **About 31 new illustrations** are needed, including the 5 cast sheets, plus the hand-lettering and two textures.
