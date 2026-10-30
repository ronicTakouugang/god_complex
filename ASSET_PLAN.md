# THE GOD COMPLEX — Asset Plan

> Every asset the experience needs, by chapter, with its source and status. **The prioritised key-art checklist is §10.** The rules for how each looks are in [DESIGN.md](DESIGN.md) and [VISUAL_DIRECTION.md](VISUAL_DIRECTION.md). Where each one appears is in [EXPERIENCE_MAP.md](EXPERIENCE_MAP.md).
>
> **Status key:**
> - **HAVE**: locked, in `concept/reference/`.
> - **DERIVE**: made from a locked image with an edit or crop.
> - **MAKE**: new image generation or authoring.
> - **WRITE**: authored text, built as live HTML.
> - **CODE**: drawn by the site (SVG or CSS).

---

## v1 build: what is temporary (2026-10-29)

The first release (`src/pages/index.astro`) uses these locked images, copied into `src/assets/img/`. Every one is **working concept art at 1536px or less** and needs the 2× upscale (§0, rule 1) before launch. Nothing on the page is a stand-in from outside the project.

| On the page | File in `src/assets/img/` | From `concept/reference/` | Replace with |
|---|---|---|---|
| Prologue stage: harm, drained, after | `tagus-harm.png`, `tagus-drained.png`, `tagus-after.png` | `prologue-capsized`, `lua-power-tagus`, `prologue-after` | Upscaled masters, plus **landscape (L) versions** (P-1, P-3), because on desktop the portrait images are cropped to the stage. `tagus-after` doesn't line up pixel for pixel; it's used as the colour-return layer. |
| "Nobody can describe her" figure | `lua-tramstop.jpg` | `lua-standing-tramstop` | **Done (K-2, 2026-10-30):** a finished night panel replaces the design sheet; the paper edge fade was removed. Needs the 2× upscale. |
| Cyclist stage: harm, drained, after | `cyclist-harm.png`, `cyclist-drained.jpg`, `cyclist-after.jpg` | `lua-pose-kneel`, `cyclist-drained-aligned`, `cyclist-after` | **Done (K-3b, K-3d, 2026-10-30):** all three line up pixel for pixel, and the colour now returns to the street afterwards. Remaining: the boots in `cyclist-after` should be clogs. |
| Mara (stage slide and letter portrait) | `mara-desk.jpg` | `mara-desk` | **Done (K-5a, 2026-10-30):** Mara at her desk at night replaces the cast sheet. |
| Eu sou a Lua (stage slide, phone figure) | `hand.png` | `lua-pose-hand-left` | **Done (K-5b, 2026-10-30):** mirrored so the inscription is on her **left** hand, with the writing re-set to read correctly. Hand-lettering (S-9) still to come. |
| "The rest is sealed" | `effects.png` | `lua-emblem-stilllife` | Upscaled. |
| Footer badge | `badge.png` | `badge-blank` | Upscaled. It's visibly soft at desktop width. |

**Written as sample content** (fiction, consistent with CHARACTER_BIBLE but not yet reviewed): the witness statements, the *Diário do Tejo* front page, the observed-properties slip, Mara's letter, and the eleven register entries (AEL-0117 to AEL-0632). The case numbers, places, dates and losses are invented to fit §3.2 of the bible; confirm them before launch.

---

## 0. Production rules

1. **Masters** are at least 2400px on the long edge, saved as PNG in `assets-src/` (outside the built site). Astro generates AVIF and WebP at responsive widths. Never ship a master. **The current image tool outputs at most 1536px**, so every locked image needs a **2× upscale** (an AI upscaler) before production. Until then, the 1536px files are fine for building and layout.
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
| C1 | Mara Okafor | 44, British-Nigerian neurologist, practical clothing, often holding a tablet or a file | HAVE (`concept/reference/cast-*.png`) |
| C2 | Duarte Mbala | 61, blind, a former radio host who now repairs radios, scanner | HAVE (`concept/reference/cast-*.png`) |
| C3 | Ingrid Solvang | 58, Norwegian bioethicist, an office director, index cards | HAVE (`concept/reference/cast-*.png`) |
| C4 | Ivone Semedo | 91, a former morna singer, care-home resident | HAVE (`concept/reference/cast-*.png`) |
| C5 | Djina Lopes | 36, primary-school teacher in Ribeira da Prata | HAVE (`concept/reference/cast-*.png`) |

**Note:** the face rule applies only to Lua. Other characters' faces can be shown.

---

## 2. Illustrations by chapter

### Prologue · The Window
| ID | Asset | States | Crops | Source | Status |
|---|---|---|---|---|---|
| P-1 | Tagus, ferry **capsized**, Lua kneeling small at the water's edge | world (colour) | L + P | Edit of `lua-power-tagus.png`: ferry overturned, river in full colour | HAVE (P): `prologue-capsized.png` · L: MAKE |
| P-2 | Tagus, ferry **righting**, river and ferry drained, Lua and the city in colour | drained | L + P | `lua-power-tagus.png` (portrait) | HAVE (P) / DERIVE (L: extend sideways) |
| P-3 | Tagus, ferry **upright**, passengers dry on deck, colour returned | world | L + P | Edit of P-2 | HAVE (P): `prologue-after.png` · L: MAKE |

### I · AMNESTY
| ID | Asset | States | Crops | Source | Status |
|---|---|---|---|---|---|
| I-1 | Cyclist on Rua da Conceição, Lua in the kneel | world | L + P | `lua-pose-kneel.png` | HAVE (P) / DERIVE (L) |
| I-2 | The same moment, drained, with Lua in colour | drained | L + P | `lua-power-undoing-peak.jpg` | HAVE (P) / DERIVE (L) |
| I-3 | The same street afterwards: cyclist sitting up, bike whole, no scar left | world | L + P | Edit of I-1 | HAVE (P): `cyclist-after.jpg` |
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
| E-1 | **The badge with *CELESTE S.* in the holder** (the *longing* ending) | E-2 plus the name set as **live text** on the white card (no AI lettering) | CODE |
| E-2 | **The badge blank** (the *herself* ending) | `lua-emblem-stilllife.png`, recomposed with the badge centred, at a larger size | HAVE: `badge-blank.png` |
| E-3 | **The name card held in Lua's hand, the damaged city behind in colour** (the *refuse* ending) | Generate | HAVE: `badge-refuse.png` |

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
| D-7 | The Office's response memo (classified) | III | The Office | WRITTEN: archive record LETHE-DIR-0003, the Director’s memorandum (2026-10-30) |
| D-8 | Djina's morna verse in **Kriolu plus a translation**. **Original lyrics, checked by a Kriolu speaker.** | IV | Djina's mother | WRITE + REVIEW |
| D-9 | Solvang's experiment report | V | Solvang | WRITE |
| D-10 | The Protocol for Consensual Allocation form | V | The Office | WRITE |
| D-11 | The record of Duarte's disclosure (the voiceprint handover) | V | The Office | WRITE |
| D-12 | Celeste Semedo's missing-person file (summary) | VI | The police (fictional, no real insignia) | WRITE |
| D-13 | **The Night Archive transcript**, 14 March 2031, 01:30 | VI | Celeste | WRITE |
| D-14 | The three Choice statements and their consequences | VII | Narrator | WRITE |
| D-15 | *Os que eu deixei*, notebook entries (names) | VII (refuse) | Lua, **handwriting** | WRITE |
| D-16 | "What you forgot", credits, the fiction disclaimer | E | — | WRITE |

**Language rule:** every Portuguese and Kriolu line gets a native-speaker check before launch (PRODUCT.md dignity commitment). Until then, mark them `REVIEW` in the source. **Since 2026-10-30 every document also exists in French, Spanish and Simplified Chinese**; those translations need their own native review ([TRANSLATION.md](TRANSLATION.md)).

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

---

## 9. Archive evidence (for `/archive/`, added 2026-10-29)

Each record has room for one evidence image, using the `figure` block in `src/content/archive.ts`. Every one is fiction and is captioned as a reconstruction. The face rule applies: Lua never appears with a visible face.

| ID | Record | Asset | Status |
|---|---|---|---|
| AR-1 | LETHE-INC-0001 | **Quay camera 3 still**, 21:14:05. A colour-keeping motion smear of a kneeling figure at the quay edge; only the badge holder is sharp, and the card is blank. Night, rain, CCTV grain. The timestamp is added in code. | HAVE: `ar1-cctv.png`, placed |
| AR-2 | AEL-0261 / S1 | **Rafael's swimming bag on a school bench.** An ordinary object, no people, soft morning light. | HAVE: `ar2-swimbag.png`, placed |
| AR-3 | AEL-IA-07 | Event plot: 229 onset events on a timeline, one large mark at 21:14 on 18 June 2032 | CODE (SVG from data) |
| AR-4 | LETHE-PER-0019 | **A page of Mara's notebook**, her handwriting in **black** ink (blue belongs to Lua), with the line "Tobi's 3rd birthday — the cake shaped like a boat" taped in from 2029. The words will be overlaid as live text. | HAVE: `ar4-notebook.png`, placed |
| AR-5 | LETHE-HIS-1970 | **The Mindelo harbour log**, March 1970: a ledger page with faded handwriting in Portuguese, a lamp-oil stain, the harbour stamp. Plus a black-and-white 1970s photograph of a small schooner at anchor in Mindelo bay. | HAVE: `ar5-harbour-log.png`, placed |

**Prompts** (style reference: `lua-emblem-stilllife.png` for the objects, `lua-power-tagus.png` for night scenes):
- **AR-1:** "Grainy night CCTV frame from a high camera over a wet stone quay on a river, rain. At the water's edge a kneeling figure appears only as a soft ghosted motion smear that keeps its colours (grey-blue, brown skin tones); one small object on the figure is perfectly sharp: an empty clear badge holder on a teal lanyard with a blank white card. No face visible, no text, no timestamp."
- **AR-2:** "Overhead documentary photograph of a child's blue swimming bag on a wooden school bench, a folded towel beside it, soft morning light, muted natural colours, no people, no text."
- **AR-4:** "Overhead photograph of an open spiral notebook, dense handwriting in black ink on one page, a small yellowed note taped onto the facing page, a reading-glasses case at the edge, desk lamp light, no legible words, no blue ink."
- **AR-5:** "Archival photograph of an old harbour log book open on a desk: ruled ledger pages, faded brown ink handwriting, a lamp-oil stain, a round ink stamp; beside it a small black-and-white 1970s photograph of a two-masted schooner at anchor in a mountainous bay. No legible words."

---

## 10. Key art pass: the prioritised checklist (added 2026-10-30)

The character illustrations set the quality ceiling of the whole experience. This pass replaces every design sheet still shown on the site with finished art and adds the missing key images. It is ordered by the six priorities below. **Ships now** marks an image that replaces or fixes something visible in the current release; do those first within each group.

**Two canon adjustments to the brief:**
- **"Primary portrait" means a portrait without the face.** CLAUDE.md and VISUAL_DIRECTION §2.5 forbid her face and a portrait hero. Her portrait is built from what replaces the face: **the hands, the blank badge, the collar loop, the neck and jaw, the kneel.** It never opens the site (§7.5); it serves as the social card and as the panel for chapter I.
- **The antagonist is introduced as the Director, not yet as the woman who paid.** Solvang's face may be shown. Her **husband's index card is a Revelation 2 spoiler** (bible §6.3, §8.1) and must not be legible in her introduction image.

**No stock photography of people, ever.** Every figure is original generated art made from the locked references. Licensed or public-domain sources are allowed only for things with no identity: paper scans, textures, map linework (II-1).

### 10.1 The character lock (paste into every prompt that shows Lua)

> Lua: a 35-year-old Black Cape Verdean woman, 1.68 m, lean, realistic proportions (about 7.25 heads tall), narrow sloping shoulders, long arms, **large capable hands**, deep brown skin with warm undertones, close-cropped natural hair in short coils about 3 cm long. A worn **knee-length grey-blue knit cardigan** (shawl collar, no buttons, two deep patch pockets, ribbed cuffs pushed to the elbows, pilled, hem stretched unevenly, darned patches in ochre, deep blue and brown yarn), a charcoal crew-neck tee, straight navy work trousers worn pale at the knees, black non-slip care clogs with the right toe scuffed. **1990s matte-black over-ear studio headphones resting around her neck**, one cup cracked and taped with silver tape, coiled cable running to her right pocket. A **muted teal lanyard** with a clear badge holder holding only a **blank white card**. Blue ballpoint writing on the back of her **left** hand.

**Style lock:** inked graphic-novel line work with a confident brush, restrained flat colour, paper grain. A warm, saturated Lisbon (ochre, azulejo blue, terracotta, Atlantic teal) against her quiet grey-blue. Warm key light on her skin.

**Lighting lock, for night exteriors:** a warm sodium-amber key from one side (the street), a cool teal fill from the river, rain falling. **For interiors:** a single warm practical lamp, deep shadow, no fill.

**Negative (always):** visible face, frontal face, white or blur over the face, cape, cloak, hood, mask, armour, spandex, chest emblem, glow, aura, particles, lightning, halo, superhero pose, fists raised, flying, neon, lens flare, writing on the right hand.

**Attach as references, every time:** `lua-turnaround-front.png` and `lua-turnaround-back.jpg`, plus the locked pose closest to the new image (`lua-pose-kneel.png`, `lua-pose-refusal.jpg` or `lua-pose-hand.png`).

### 10.2 Consistency check (run on every candidate, in addition to §7.4)

| Check | Pass when |
|---|---|
| Face | Out of frame, turned away, or in shadow. Never erased. |
| Silhouette | At 64px in solid black: column, collar loop, small round head and the drop are all readable. |
| Hair | Short coils about 3 cm. No length, no braids (braids belong to Celeste, Stage 0 only). |
| Hands | Large. The inscription is on the **left** hand. |
| Kneel | **One knee down**, the other foot planted. Never both knees. |
| Headphones | Around the neck; one cup silver-taped; coiled cable to the right pocket. |
| Badge | Teal lanyard, clear holder, **blank** white card. |
| Cardigan | Knee length, never belted, darns in ochre, blue and brown (not dark grey). |
| Proportions | About 7.25 heads. Never heroic 8–9. |
| Skin | Warm and saturated, including inside a drained scene. |
| Colour roles | No Stamp Red on her. No blue ink on anyone else. |

### 10.3 The checklist

#### 1. The primary portrait

| ID | Asset | Ships now | Crops | Status |
|---|---|---|---|---|
| K-1 | **The faceless portrait.** Waist-up, three-quarter from behind her left shoulder, at night on the quay. Her head is turned toward the river, so the frame shows her jaw line, ear, neck and the coils of her hair, but not her face. Her **left hand** is raised to her chest, holding the empty badge holder toward the light: the inscription and the blank card are both sharp. The headphone loop sits on her collar. | Becomes the **og:image** (1200×630), which is currently missing | L 16:9 (and 1200×630) + P 4:5 | HAVE: `lua-portrait-quay.jpg` (2528×1696) |
| K-1b | **The identity close-up.** Her two hands only: the left hand with the inscription resting on the right, the blank badge between them, the cardigan cuffs pushed back. It stands in for a face in close-ups. | — | P 4:5 + square | MAKE |

**K-1 prompt:** *[character lock]* "Waist-up graphic-novel portrait seen from behind her left shoulder, three-quarter back view, her head turned away toward a dark river so only her jaw line, ear, neck and short coiled hair are visible; her left hand raised to her chest holding an empty clear badge holder with a blank white card toward the light, blue ballpoint writing 'Eu sou a Lua' on the back of that left hand, the headphones resting around her neck, rain, a warm sodium streetlight from the left, cool teal river light from the right, Lisbon quay lamps out of focus behind her." *[style lock] [negative]*
**Attach:** `lua-turnaround-back.jpg`, `lua-turnaround-left.png`, `lua-pose-hand.png`. **Save candidates to** `concept/explorations/k1-*.png`.

#### 2. Full body: silhouette and costume

| ID | Asset | Ships now | Crops | Status |
|---|---|---|---|---|
| K-2 | **The establishing figure.** A finished in-world full-body panel of Lua standing in her ordinary posture (§3): slightly hunched, hands in her cardigan pockets, the headphones around her neck, at a rain-wet tram stop under an azulejo wall. Three-quarter back view. The figure fills about 70% of the frame height, and all five silhouette features read clearly. | **Replaces `lua-front.png`** (the turnaround sheet) in the "Nobody can describe her" section | P 3:4 + L | HAVE: `lua-standing-tramstop.jpg` |
| K-2s | **Solid-black silhouette** traced from K-2 and from `lua-pose-kneel.png`. A reference for the silhouette test, not shown on the site. | — | — | DERIVE |

**K-2 prompt:** *[character lock]* "Full-body graphic-novel panel, three-quarter view from behind, the woman standing at a rain-wet Lisbon tram stop at night, slightly hunched, both hands in the deep pockets of her knee-length cardigan, head bowed and turned away, headphones resting around her neck, the teal lanyard and blank badge visible where the cardigan hangs open, a wall of blue-and-white azulejo tiles behind her, warm amber streetlight, a yellow tram blurred in the distance, people passing who don't look at her." *[style lock] [negative]*
**Attach:** all four turnaround views. **Acceptance:** passes the silhouette test against `cast-*.png` at 64px.

#### 3. The power in action

| ID | Asset | Ships now | Crops | Status |
|---|---|---|---|---|
| K-3a | ~~The Tagus set, landscape~~ | **Dropped (2026-10-30).** The desktop prologue is a split stage whose image panel is portrait (about 684×800 at 1440px), so the portrait art fills it with a slight crop. No wide version is needed. | — | DROPPED |
| K-3b | **I-3, the cyclist afterwards**: the same street, cyclist sitting up, bike whole, colour returned. An edit of `cyclist-harm.png`. | **Yes.** The cyclist scene stays drained after the hold. | P (+ L) | HAVE: `cyclist-after.jpg` (shoes to fix) |
| K-3c | **The Tagus portrait set, kneel corrected**: P-1 and P-2 fixed to one knee as a matched pair of edits. | **Yes** (phone prologue) | P | DEFERRED to the final artist pass: the figure is small, and an edit must keep P-1 and P-2 pixel-aligned |
| K-3d | **I-2 redone as an edit of `cyclist-harm.png`**: same frame, world drained to paper grey, Lua in full colour. The current `cyclist-drained.jpg` is a different composition, so the drain ring shows two streets at once. | **Yes** (the cyclist hold) | P | HAVE: `cyclist-drained-aligned.jpg` |

**K-3a prompt** (edit of `lua-power-tagus.png`, outpainted to 16:9): "Extend the scene to the left and right: more of the drained river and the warm lit city on the far bank, the same storm sky. Change only her pose: **one knee down**, the other foot planted, her hand flat on the stones. Keep everything else identical." Then make P-1 and P-3 **as edits of that result**, never as fresh generations (§0, rule 3).
**K-3b prompt** (edit of `cyclist-harm.png`): "Same frame, same light. The cyclist is now sitting up on the cobblestones, unhurt, looking at his hands; the bicycle is whole and upright; no blood. Lua has already stood and turned away, walking out of the frame on the right, face not visible." *[negative]*

#### 4. The antagonist

| ID | Asset | Ships now | Crops | Status |
|---|---|---|---|---|
| K-4 | **Dr Ingrid Solvang, introduced.** Her office in the Continuity Office at night: an orderly desk, case folders with stamp-red labels, a pencil, index cards **with their written side face down** in her breast pocket. She stands at a tall window looking down at the warm city and the river. Her face is visible in a cool reflection in the glass. **Lighting is the inverse of Lua's:** cold even institutional light inside, the warm world outside and out of reach. | **In use:** the figure in the Director’s memorandum (archive). Later, the chapter V opener. | L + P | HAVE: `solvang-office.jpg` (P, border cropped) |
| K-4b | **V-1, Solvang's index card** with her husband's name, in **pencil**. Already planned (§2, V-1). Revealed only in chapter V, after Revelation 2. | — | P | MAKE |

**K-4 prompt:** "Graphic-novel panel, a 58-year-old Norwegian woman with a silver bob, charcoal suit and white shirt, standing very still at a tall office window at night, seen from the side; her calm face visible as a faint reflection in the glass; behind her an orderly desk with case folders carrying red labels, a sharpened pencil, a desk lamp switched off; plain white index cards in her breast pocket, writing face down; cold, even, bluish institutional light inside, and through the window the warm amber lights of Lisbon and the dark river far below. Composition: she is high in the frame, looking down." *[style lock]* **Negative:** blue ink, legible writing on the cards, a villain's smile, weapons, dramatic under-lighting.
**Attach:** `cast-solvang.png`. **Acceptance:** her face matches the sheet; no text is legible; no blue ink anywhere on her.

#### 5. Atmosphere and supporting narrative imagery

| ID | Asset | Ships now | Status |
|---|---|---|---|
| K-5a | **II-2, Mara at her desk at night**, seen from the side: files, the register, a cold cup, a phone with a child's photo face down. | **Replaces `mara.png`** (the cast sheet) on the stage slide and the letter. Attach `cast-mara.png`. | HAVE: `mara-desk.jpg` |
| K-5b | **The Hand, corrected**: `lua-pose-hand.png` with the inscription moved to the **left** hand (edit, or mirror the hand only). | **Yes** (stage slide, phone figure) | HAVE: `lua-pose-hand-left.png` (mirrored in code; AI tools would not move the writing) |
| K-5c | **I-5, the shrine at Cais do Sodré**: candles, flowers, printed photos of the colour-keeping smear, rain. No Lua. | Chapter I | MAKE |
| K-5d | **Lisbon at night, establishing** (L + P): Cais do Sodré in the rain, the river, the bridge, the warm city. The base plate for VII-1 and VII-2. | Chapter VII | MAKE |
| K-5e | VI-1 (the Santa Luzia corridor), IV-1 (the valley), IV-2 (the red door), IV-4 and IV-5 (the fountain) | Gated chapters: **never published before their reveal** (bible §8.1) | MAKE |

#### 6. Symbols, documents and recurring elements

| ID | Asset | Ships now | Status |
|---|---|---|---|
| K-6a | **Badge and still life, regenerated large**: `badge.png` and `effects.png` at 2× | **Yes** (footer, "The rest is sealed"). Visibly soft at desktop width. | DERIVE |
| K-6b | **S-9, hand-lettered *Eu sou a Lua*** in Ballpoint Blue, from a real ballpoint sample | Hand-lettered inscriptions everywhere | MAKE |
| K-6c | **T-1 paper tile** and **T-3 correction-fluid texture** | Grounds the FILE register and the white-out | MAKE (scan) |
| K-6d | Stamps, black bars, white-out masks, the mark | Already built as code (S-1 to S-8) | CODE ✓ |

Documents stay **live text**, never images (§3).

#### 7. Depth maps for the WebGL Undoing (DESIGN.md §7.6)

| ID | Asset | Status |
|---|---|---|
| K-7a | **Depth maps for the Tagus set**: one greyscale map per plate (`tagus-harm`, `tagus-drained`, `tagus-after`), near = white, far = black, about 1024 px, **aligned with its plate**. Prompt for an edit of each plate: "Convert this exact image into a smooth greyscale depth map: nearest surfaces white, farthest black, no lines or text, same framing." Save as `src/assets/img/depth/tagus-*.png`. Until then the shader uses a ground-plane estimate. | MAKE |
| K-7b | The same for the cyclist set, if the cyclist scene moves to WebGL | Later |

**Known defect on the live site (CSS path):** `tagus-after` is not pixel-aligned with `tagus-drained`, so the homepage's colour return shows two figures for about two seconds. The WebGL path avoids it (DESIGN.md §7.6). The CSS fix: return the colour with a `mix-blend-mode: color` copy over the drained plate, then cut to the aftermath. To do before release.

### 10.4 Production order

1. **K-3b** and **K-3d**: done, and in the cyclist hold.
2. **K-2, then K-1**: the hero's image of record. Lock K-2 before K-1, so the portrait derives from a finished figure.
3. **K-5b, K-5a** (done), then **K-6a**: the soft badge and still-life images visible today.
4. **K-4**, then chapters V to VII as they are built.
5. **The 2× upscale** (§0, rule 1) on every locked image, last, after the edits.

**Workflow, unchanged:** generate into `concept/explorations/`, run §10.2, lock the winner into `concept/reference/` with a note in its README, then copy it into `src/assets/img/` and record its prompt in a `.json` sidecar.
