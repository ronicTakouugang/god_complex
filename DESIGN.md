# THE GOD COMPLEX — Design System

> **Status: pre-build specification** (2026-10-29). It translates the approved canon into rules for the web experience. After the build, it gets reconciled against what actually shipped (Impeccable's documenter step), and differences are resolved in favour of the canon, never by quietly drifting.
>
> **v1 build decisions that override this file** (made with the Taste skill; record any reversal here):
> - **Composition:** the Taste direction is **split stage** (seed 1907602659, `.taste-skill/direction.json`). A fixed picture half holds the undoable scene, beside a scrolling case-file column.
> - **Labels are not uppercase or tracked.** The `label` step (§3.2) is dropped. Labels are sentence case at 14px or more.
> - **No chapter numerals.** §3.2 allowed I–VII; Taste bans index numbering. Chapters are named only.
> - **No hairline rules in documents.** §6 rules are replaced by space, tone steps and dot leaders. Real `<table>` markup is kept for the register.
> - **Five type sizes:** 14 / 18 / 27 / 52 px and display (`--fs-*` in `src/styles/global.css`).
> - **The drain edge is a soft radial mask with a 20% feather.** The grain-broken edge (S-10) is still to be made.
> - **Motion pass (2026-10-29),** following Emil Kowalski's principles via the installed `improve-animations` and `animate` skills.
>   - **Removed:** nothing on the page moves on its own.
>   - **Entrances:** only the witness statements (staggered), the register sheet, and the night panel (a motionless 1.2s fade). The archive has none, because it is visited too often.
>   - **The power:** the stage crossfade is 700ms on `--ease-in-out` with a 2px blur on the outgoing picture. The colour return eases on `--ease-in-out`, while the drain stays linear. After the blink, the white-out paints on left to right in 260ms on `--ease-out`.
>   - **The archive:** black bars peel up and away in 220ms on `--ease-out`, and the words fade in. A newly unsealed record peels open once in the index.
>   - **Navigation:** pages change through cross-document View Transitions. The root crossfades in 180ms, and a record's title travels from its index row in 260ms. The opt-in sits inline in each page head, because it must be known at the first render.
>   - **Hover:** hover motion is gated to fine pointers, and keyboard focus never moves text.
>   - **Reduced motion:** holds still need a real hold, the white-out fades in over 200ms, bars don't peel, and page changes are plain cuts.
>
> **Sources of authority, in order:**
> 1. [CHARACTER_BIBLE.md](CHARACTER_BIBLE.md): story facts.
> 2. [VISUAL_DIRECTION.md](VISUAL_DIRECTION.md) and [concept/reference/](concept/reference/README.md): how the hero and her world look.
> 3. This file: how the website looks and behaves.
> 4. [EXPERIENCE_MAP.md](EXPERIENCE_MAP.md): what happens where.
> 5. [ASSET_PLAN.md](ASSET_PLAN.md): what has to be made.

---

## 0. The idea in one sentence

**The site enacts the power: the visitor can undo harm, and every time they do, the page forgets something.** Every visual rule below serves that sentence.

The site is not a superhero landing page, portfolio, fan wiki or comic template. It's an investigation the visitor walks through, and is complicit in.

---

## 1. Registers

The site speaks in **three registers**. Each has its own ground, type and texture. A section belongs to exactly one register, and changing register is a narrative event.

| Register | What it is | Ground | Text | Used for |
|---|---|---|---|---|
| **NIGHT** | The story as it happened: graphic-novel panels | Ink `#17191C` | Bone `#E8E2D4` | Scenes, captions, the Undoing, the Choice |
| **FILE** | The investigation: what the institutions wrote down | Bone `#E8E2D4` paper | Ink `#17191C` | Case files, the Okafor Correlation, Office memos, forms |
| **WORLD** | Places with their own colour, at full saturation | One world colour owns the field (§2.2) | Ink or Bone, whichever passes contrast | Ribeira da Prata, Lisbon before the Choice |

**Why these three:** the visitor moves between *what happened* (night), *what was recorded* (file), and *what is being lost* (world). Because the WORLD register is the most saturated, draining it hurts most.

---

## 2. Colour

### 2.1 Tokens

These are the canon hexes from VISUAL_DIRECTION §2.4. The names below are the CSS custom properties.

| Token | Hex | Role | Never |
|---|---|---|---|
| `--ink` | `#17191C` | Night ground, text on paper, Office **black bars** | — |
| `--bone` | `#E8E2D4` | Paper ground, text on night | — |
| `--paper-grey` | `#CDC8BE` | What the world drains to during an undoing | Used as decoration |
| `--blink` | `#F6F3EC` | **White-out**: the forgetting. The blink frame. | Over Lua's face. As a background. |
| `--stamp` | `#A3322B` | Continuity Office marks only: stamps, case numbers, classification | On Lua, on anything she authored, on buttons |
| `--self` | `#2B3A8C` | Lua's handwriting, and only hers | For links, UI or anyone else's words |
| `--lua` | `#5D6A77` | Her cardigan; figure-related accents | Body text (4.3:1 on bone, so large text only) |
| `--ochre` | `#C9973F` | World: Lisbon light | — |
| `--azulejo` | `#2C5C8F` | World: Lisbon tiles | — |
| `--terracotta` | `#B5523B` | World: roofs, the red door | Confused with `--stamp` side by side |
| `--atlantic` | `#1F6F78` | World: the sea between | — |
| `--cane` | `#6E8B3D` | World: Ribeira's terraces | — |

### 2.2 Semantic rules

1. **There are two kinds of hiding, and they never swap.**
   - **Black bar (`--ink`) = the Office is concealing something.** It can be lifted, and the information still exists.
   - **White-out (`--blink`) = the power took it.** It can't be lifted, only *relearned, as new* (canon L3).
2. **Stamp red belongs to the institution.** If the Office didn't author it, it isn't red.
3. **Ballpoint blue belongs to Lua's self.** If Lua didn't write it, it isn't blue. This includes link colour: links use underline plus weight, never blue.
4. **Saturation belongs to the world.** The UI chrome is quiet: ink, bone and paper-grey only.
5. **Colour is never the only signal.** Every drained or forgotten state also changes text or shape, for colour-blind visitors and in high-contrast mode.
6. **Colour strategy:** full palette, held in registers. NIGHT and FILE are restrained. WORLD moments are **drenched**: one world colour owns the whole field, not an accent dotted across a neutral page.

### 2.3 Contrast (checked, WCAG 2.2 AA)

| Pair | Ratio | Use |
|---|---|---|
| Ink on Bone | 13.7:1 | Body text |
| Bone on Ink | 13.7:1 | Body text |
| Stamp on Bone | 5.3:1 | Text OK |
| Self on Bone | 7.8:1 | Text OK |
| Lua on Bone | 4.3:1 | **Large text (≥24px, or ≥19px bold) only** |

Each WORLD field must have its text pair checked during the build. If a pair fails, use the other text colour, never a grey.

---

## 3. Typography

### 3.1 Faces

There are three voices, each with a reason. All are OFL-licensed and self-hosted as `woff2`, with no Google-hosted stylesheet.

| Voice | Face | Why this face | Used for |
|---|---|---|---|
| **The Institution** | **Archivo** (variable: width 62–125, weight 100–900) | A grotesque built for print and news. Its width axis gives condensed stamps and headers, and expanded case numbers, from one family. It reads like forms, not like tech. | FILE register, UI, chapter titles, wordmark, dates, case numbers (tabular figures) |
| **The Story** | **Literata** (variable, optical size 7–72) | A serif built for long-form reading on screens. At display optical sizes it has a literary graphic-novel register, without the overused fashionable serifs. | Narrative prose, caption boxes, testimony, Mara's voice when she speaks to the visitor |
| **Lua's hand** | **Hand-lettered SVG** for fixed phrases (*Eu sou a Lua*, notebook titles). A handwriting font for running notebook lines, chosen at build time from OFL candidates (Reenie Beanie, Nanum Pen Script, Gochi Hand) by one test: does it read as **a carer's quick ballpoint print** at 18px? | Her notebooks, her hand, *Os que eu deixei*. Nothing else. | |

**Handwriting is identity.** Only Lua writes by hand on this site. Mara's annotations are typed (Archivo, regular, in `--ink` at 72% opacity on paper). She's a clinician, and her notes are clinical.

### 3.2 Scale

The scale is fluid, minimum to maximum across 360 to 1600px viewports. Each step is an obvious jump.

| Step | Size | Face and setting | Use |
|---|---|---|---|
| `display` | clamp(3rem, 9vw, 6rem) | Archivo width 70, weight 800, uppercase, tracking -0.02em | Wordmark, chapter openers |
| `title` | clamp(2rem, 4.5vw, 3.25rem) | Literata optical size 60, weight 500 | Scene titles, big statements |
| `lede` | clamp(1.25rem, 2vw, 1.5rem) | Literata optical size 24, weight 400 | Narration |
| `body` | 1.0625rem (17px) to 1.125rem | Literata optical size 14, weight 400, line-height 1.6, 62–70ch | Prose |
| `file` | 0.9375rem (15px) to 1rem | Archivo width 100, weight 400, line-height 1.5 | Case file text |
| `label` | 0.8125rem (13px) | Archivo width 85, weight 600, tracking +0.04em, uppercase | Form field labels **inside documents only** |
| `stamp` | variable | Archivo width 62, weight 800, uppercase | Stamps (as SVG, §6) |

**Rules**
- **No kickers or eyebrows** above headings. A heading stands on its own.
- **Chapter numbers are allowed** (I–VII). They carry information: how far into the case you are, and what's still sealed.
- **Tabular figures** everywhere a number is a record (times, case numbers, counts). `21:14` must never shift when it changes.
- **No monospace and no typewriter faces.** The classified-file look is earned through form structure, not a Courier costume.
- **Portuguese and Kriolu** are set in the same faces with correct diacritics, and marked `lang="pt"` or `lang="kea"`.

---

### 3.3 Other scripts (added 2026-10-30)

**Simplified Chinese** uses no extra webfont: Chinese characters fall through from Archivo and Literata to the reader's system Hei and Song faces (PingFang SC, Microsoft YaHei, Noto Sans SC; Songti SC, Noto Serif SC, SimSun), so Latin words (AMNESTY, LETHE, numbers) keep the house faces. In Chinese: no italics (emphasis dots instead), no negative tracking, running text at line height 1.75 and headings at 1.35. The title wordmark *The God Complex* is never translated.

## 4. Layout and composition

### 4.1 Principles

1. **Composition follows register.**
   - **NIGHT** is built from panels: full-bleed or deliberately framed images sequenced like a graphic novel, with comics gutters in ink.
   - **FILE** is built from **sheets**: documents that keep a real document's anatomy (header block, reference number, fields, margins, signature line). On desktop they sit at their real proportion (1:√2, max 840px wide). On mobile they run edge to edge.
   - **WORLD** is built from **fields**: the colour owns the viewport, and image and text sit inside it.
2. **The figure sits low.** Lua sits in the lower third, with the world rising above her (VISUAL_DIRECTION §2.2). Never centre her as a hero.
3. **No centred hero layout, no split hero, no card grids.** A screen is one scene, one document, or one field.
4. **Quiet follows dense.** A dense document is followed by a quiet panel. Vary scale, register and density, inside one spacing rhythm.
5. **More space above a heading than below it.**
6. **Asymmetry with intent.** Documents sit off-centre on desktop, leaving a **margin column** for Mara's annotations and evidence references.

### 4.2 Grid and spacing

- **Base unit:** 4px. **Scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192.
- **Desktop (≥1024px):** 12 columns, 24px gutters, outer margin clamp(24px, 5vw, 96px). A FILE sheet spans 7 columns, and the margin column spans 3.
- **Tablet (600–1023px):** 8 columns, 20px gutters.
- **Phone (<600px):** 4 columns, 16px side gutters, and no horizontal scroll ever.
- **Measure:** prose 62–70ch, file text up to 80ch.

### 4.3 Comics grammar on the web

- **Caption boxes:** rectangular, `--bone` on night panels, Literata, with no rounded corners and no shadow. On phones a caption moves **below** the image whenever it can't keep 4.5:1 over it.
- **Gutters:** solid `--ink`, 8–16px. A panel never has a border radius.
- **Panel transitions** are cuts, not slides (§7).

---

## 5. Image treatment

- **The source is the locked reference set** in `concept/reference/`. Website images are derived from it, never from early explorations. See ASSET_PLAN.
- **The face rule is absolute** (VISUAL_DIRECTION §2.5): her face is hidden by staging, never by erasure. There is no white, blur or bleach over her face, ever. **Alt text never describes her face** ("a woman kneeling, seen from behind").
- **In-world photographs** (press, CCTV, Office evidence) show her as the **colour-keeping motion smear, with the badge as the one sharp element.**
- **Two image states:** most narrative images have a *world* state (colour) and a *drained* state (paper grey, Lua alone in colour). The drained state is a separately made asset. A CSS greyscale filter would drain her too, which breaks the canon.
- **Grain:** every image carries a fine paper grain, consistent across all of them. No other filters: no duotones, no vignettes, no lens flares.
- **Documents are live text, never pictures of documents.** Stamps and seals are SVG, and paper texture is a background asset. A screen reader must be able to read every case file.

---

## 6. Borders, textures and archival detail

Each detail exists because a real object in the world has it.

| Detail | Where it appears | Rule |
|---|---|---|
| **Paper texture** | FILE ground | One subtle scanned-paper tile, under 3% visible variation. Never on NIGHT. |
| **Rules** | Document fields and header blocks | 1px `--ink` at 60%. Inside documents only, never as page decoration. |
| **Stamps** | Office documents | SVG, `--stamp`, rotated −3° to +3°, slight ink unevenness built into the SVG. **At most one stamp per document.** |
| **Black bars** | Office redactions | Solid `--ink` rectangles at the height of the text line. Their accessible text says "[redacted by the Continuity Office]". |
| **White-out** | Forgetting | `--blink` rectangles with a **soft, irregular edge** (correction-fluid texture as an SVG mask). Their accessible text says "[forgotten]". |
| **Case numbers** | Office documents, index | `LETHE-0632` style, Archivo width 110, tabular figures |
| **The blank badge** | The site's mark (§6.1) | — |

**Banned:** torn-paper edges, coffee stains, paper clips, tape, pushpins, string-and-corkboard "investigation walls", folder tabs, polaroid frames. These are investigation costumes. The documents here are clean, institutional and frightening because they're ordinary.

### 6.1 The mark

**The blank badge**, a vertical rectangle with a lanyard slot, drawn as SVG. It's used as the favicon, in the corner wordmark lock-up, and in the closing image. It's the only emblem. There's no crest, no logo, and nothing that resembles a real institution's emblem (EU stars, the WHO emblem, Portuguese state arms).

---

## 7. Motion

### 7.1 Philosophy

**Motion subtracts.** The site's signature motion is the power itself: colour leaving, sound cutting, harm reversing, colour coming back. Everything else is quiet so that this lands.

- **One authored moment per chapter**, never the same entrance on every section.
- **Content is visible by default.** Motion never gates whether text can be read.
- **Every motion can be interrupted.** Releasing a hold reverses it from wherever it is.
- **Exponential ease-out** for arrivals, and linear for the drain itself, because forgetting isn't eased.

### 7.2 Tokens

| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Arrivals, reveals |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Register changes |
| `--t-ui` | 160ms | Hover, focus, toggles |
| `--t-reveal` | 700ms | Text and document arrival |
| `--t-hold` | 1200ms | Hold needed to say "yes" |
| `--t-return` | 2000ms | Colour flooding back from the edges |
| `--t-blink` | 1 frame, at most 100ms | The white frame |

### 7.3 The Undoing, as motion

1. **The Pull:** ambient sound thins (if sound is on), and the image's periphery loses detail.
2. **Hold:** a paper-grey field spreads from the pointer (or from the image centre on keyboard), and its radius tracks the hold. **The hold *is* the drain.** It has a **soft, grain-broken edge, never a ring or a line** (concept/reference README).
3. **Commit** at `--t-hold`: the drained state locks, the harm reverses (cross-fade or image sequence), and sound cuts to silence.
4. **Return:** colour comes back from the frame's **edges inward** over `--t-return`, and the last thing to recover colour is the point under the hand.
5. **The blink:** one `--blink` frame appears where the cost lands, and something on the page becomes white-out.
6. **Release before commit:** colour floods back from the pointer outward, and nothing is undone or paid.

**About the blink's length:** in the story, the payer experiences "half a second of white silence" (CHARACTER_BIBLE §3.4). On screen the blink is a single frame. The first is the payer's subjective experience and the second is what an observer sees, so the two don't contradict each other.

### 7.4 Reduced motion (`prefers-reduced-motion: reduce`)

- The drain becomes an instant swap to the drained state, with a 300ms opacity cross-fade.
- **The blink becomes a 200ms fade to white-out, with no flash.**
- Scroll-linked motion becomes static positions.
- The meaning stays intact: every state change is also stated in text.

### 7.5 Flash safety

There is never more than one flash in any 1-second window (WCAG 2.3.1). The blink never covers more than 25% of the viewport.

---

## 8. Navigation and interaction patterns

- **No navigation bar.** There are only two persistent controls, both small, in Archivo `label`:
  - Top left: the **mark plus "CASE LETHE"**, which links back to the top.
  - Top right: **Contents** and **Sound** (off by default).
- **Contents** opens the **dossier index**: chapter titles I–VII. Chapters not yet reached show their title under a **black bar**, because the Office is hiding what's ahead. Reached chapters show their title. The visitor may jump around, but the index says what they'll miss.
- **Hold to undo** is the site's only special gesture.
  - On touch, the visitor presses and holds. The long-press callout and text selection are disabled on the hold target only.
  - On keyboard, the visitor focuses the control and holds Space or Enter.
  - Settings include **"Tap instead of hold"** as an alternative to the hold gesture.
- **Text links** use underline with a 0.15em offset and weight, never colour alone.
- **Buttons** are rectangular, 1px `--ink` or `--bone` outline, and Archivo `label`. **Primary actions are named by their verb** ("Hold to undo", "Write a name", "Choose"), never "Learn more".
- **Settings** (one small panel): Sound, Tap instead of hold, and Clear what this site remembers. Reduced motion follows the operating system.

---

## 9. Responsive behaviour

- **Mobile-first.** Most visitors arrive from a link on their phone.
- **Panels:** portrait crops on phones and landscape crops on desktop. These are **separate art-directed crops**, never one image squeezed to fit (ASSET_PLAN lists both).
- **FILE sheets:** edge to edge on phones, with the margin column folded inline after the paragraph it annotates.
- **Captions** move below the image on phones when contrast requires it.
- **The hold target** is at least 64×64px, and on phones it fills the image.
- Use `100svh`, not `100vh`, and respect safe-area insets.
- Test at widths 360, 390, 768, 1024, 1280, 1440 and 1920.

---

## 10. Accessibility (WCAG 2.2 AA)

- **Semantic structure:** one `h1` (the title), one `h2` per chapter, and documents as `<article>` with real headings.
- **Every narrative state change is announced** through a polite live region, for example: "The ferry is upright. Somewhere, a village has forgotten its history."
- **Redactions:** black bars and white-out carry accessible text. **Forgotten content stays recoverable** in "What you forgot" at the end, where it can be *relearned*, which matches canon L3.
- **No information conveyed by colour alone.**
- **Focus:** a visible 2px ring in `--bone` on night and `--ink` on paper, offset 3px. Never removed.
- **Keyboard:** everything works, including the hold. The order follows the story.
- **Media:** sound is off by default, every sound has a transcript, and there's no autoplay with sound.
- **Language:** `lang` attributes on Portuguese and Kriolu. Translations are shown inline, not hidden behind hover.
- **Browser surfaces:** text selection in `--paper-grey` on ink and `--lua` on bone, the caret in `--self`, themed scrollbars, and themed focus rings.
- **Without JavaScript:** the whole story is still readable. Hold moments show both states as a still sequence with their text.

---

## 11. Anti-patterns (explicit bans)

| Banned | Why |
|---|---|
| A hero portrait, or any image showing her face | Canon, and the face rule |
| A white blur, white-out or bleach over her face | Racially harmful depiction (VISUAL_DIRECTION §2.5) |
| Glows, beams, particles, auras, sparks, energy lines | The power subtracts |
| A ring or outline around the Undoing zone | Concept reference notes |
| Superhero landing tropes: centred hero, split hero, stats band, "meet the hero" card grid, power cards | It's not that kind of site |
| Card grids of equal-size boxes | Lazy containers |
| Kickers or eyebrows above headings | Craft floor ban |
| Gradient text, decorative gradients, glassmorphism, neon | No narrative reason |
| Monospace or typewriter faces as a "classified" costume | Costume, not structure |
| Investigation-wall props: corkboard, string, pushpins, polaroids, coffee stains, torn paper | Costume |
| Hard offset (zero-blur) shadows | Not this world |
| Real institutional emblems (EU, WHO, Portuguese state, police) | Impersonation. Institutions are named in the story but never branded. |
| Stamp red on Lua; ballpoint blue on anything that isn't hers | Colour semantics |
| Emoji or Unicode glyphs as icons | Icons are authored SVG with a 1.5px stroke |
| Autoplay sound; scroll-jacking that blocks reading; motion that hides text | Accessibility |
| Lore dumps (wiki-style biographies, power stat tables) | The visitor investigates. They aren't briefed. |
| Kriolu phrases not checked by a speaker | Dignity commitment (PRODUCT.md) |

**Footer, on every page:** "THE GOD COMPLEX is a work of fiction. All persons and case files are invented. Institutions named in the story are portrayed fictionally."
