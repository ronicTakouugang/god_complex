# Taste notes: THE GOD COMPLEX v1

## Reading of the brief
This is the first release of an interactive narrative showcase for an original hero. The first screen has to establish who she is without giving the story away. **The one thing the page must get someone to do is hold to undo**, and in doing so feel the cost. The stack is Astro, static. The brand fixes the palette and type (DESIGN.md), so the draw runs with `--keep palette,type`.

**Imagery that truly exists:** the locked illustrations in `concept/reference/`: the Tagus in three states (capsized, drained, after), the kneel and its drained version, the refusal, the hand, the turnaround, the emblem still life, the blank badge, the refuse badge, and five cast sheets. These count as the project's own illustration. There's no photography and no video.

## Inventory (things only this subject has)
1. **The ferry *Barreiro Nova*, the Tagus, 21:14 on 18 June 2032.** 212 in the water, 41 dying.
2. **The seven-minute window.** Harm older than seven minutes is permanent.
3. **The blank badge:** a care-home ID holder with its name card missing, on a teal lanyard printed CASA DE REPOUSO SANTA LUZIA.
4. ***Eu sou a Lua*,** written in blue ballpoint on the back of her left hand, every night.
5. **The colour drain:** the world goes paper-grey while she alone keeps her colour, the sound cuts, and colour returns from the edges.
6. **The blink:** one white frame, and a smell of hot dust, like an old projector bulb.
7. **The name AMNESTY,** from the Greek *amnēstia*, "forgetfulness". *A Ladra*, the Thief.
8. **Case LETHE,** the Continuity Office file, with its stamp red, black bars and case numbers (0632 is Ribeira da Prata).
9. **Witnesses who can't agree on what she looks like:** "a tall man", "a girl", "an old woman".
10. **Mara Okafor's own case:** she lost her son Tobi's first five years. *Acute Episodic Loss.* 1,140 cases.
11. **Lisbon materials:** azulejo blue, ochre plaster, wet cobbles at Cais do Sodré, the red suspension bridge.
12. ***Os que eu deixei*,** "the ones I left", her notebook of the dead she refused.

## The argument (claims and proof)
- **Hero:** A woman can undo harm, and you can try it now → the Tagus capsized, hold to undo.
- **The cost:** Every undoing is paid by someone else's memory → the blink line, a village forgetting.
- **About (who she is):** Nobody can hold her face; she is defined by what she does → her silhouette in three poses, contradicting witness statements.
- **How it works (the power):** The rules, stated by the people investigating her → an Office document of observed rules, and Hold 2 (the cyclist) whiting out something you already read.
- **List (the investigation):** People around the world are forgetting → Mara's register of cases, including her own.
- **CTA (the archive):** The rest of the file is sealed → the dossier index with black bars, and the invitation.
- **Footer:** The badge, blank, and the fiction disclaimer.

## Direction
**split-stage** (seed 1907602659), drawn with `--keep palette,type`.
- **Why this one:** a stage that never moves carries the scene where harm happens and is undone, while the column reads as the case file. Contact-sheet needs dozens of pictures we don't have, and uneven-photographs is too calm for the subject.
- **Redraw:** `section:list=list-printed-menu-sheet`. The case register is a printed document, and the dealt active-list needs one photograph per row, which doesn't exist.
- **Not used:** the dealt "sky and space" photographs. The project's own illustrations take precedence (Taste preference 1–2).

## The idea
On this page, **the colour drain of her power (the world goes grey, only she keeps her colour) and the stranger's forgetting** become **the fixed stage that the visitor themselves drains by holding, while the case-file column beside it forgets a line they have just read**.

**Competitor test:** no other hero's page has a scene the reader empties of colour, paid for with a line they just read.

**The live thing:** **Hold to undo.** Press and hold on the stage or the button. The stage drains from the point under your finger, the ferry rights itself, colour returns from the edges, and a line on the page whites out. It works with a thumb, from the keyboard (hold Space or Enter), and in tap mode. Without script, the before and after are described in text.

## Mapping DESIGN.md onto Taste's house rules
- **No small tracked uppercase labels:** DESIGN's `label` step is dropped. Labels are sentence case at 13px or more.
- **No index numbering:** chapter numerals I–VII are dropped. Chapters are named only.
- **No thin rules:** documents carry no hairlines. The register is a real `<table>` (an exempt case), and the slip uses dot leaders.
- **Two typefaces:** Archivo and Literata. Lua's hand is an image only, so there's no third family.
- **Buttons:** square, filled ink. Stamp red is never used on an action.

## Critique

```
ROUND 1
Seen in one second: a cream case-file card with a black-bar band, "She can undo any harm.", one black button; beside it a ferry going down in a storm with a woman kneeling at the water's edge.
Idea (one sentence): the visitor drains the stage by holding, and the column forgets a line they read.
Live thing: hold to undo (Tagus, then the cyclist), keyboard and tap mode included.
Layout words by section: hero=striped card beside the room / morning=newspaper sheet in the column / amnesty=full-width figure + witness list / rules=receipt slip on ink / letter=centred letter / register=printed sheet on ink / sealed=full-bleed evidence photo, text right / footer=contents half + badge photo half.
Scores: design 7 · usability 7 · creativity 8 · content 8 → overall 7.4.
Caps applied: none.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. mobile-fold: the card's min-height and vertical centring push the title and the button below the first screen; the phone sees the image, the band and empty paper. Fix: no min-height on phones, content straight under the band.
2. desktop-page-01: the turnaround's paper is warmer than the page bone, so the figure sits in a visible lighter rectangle. Fix: fade the illustration's edges into the page paper.
3. mobile-page-01: the slip's values wrap into three-line stacks ("what she / can see or / touch"). Fix: shorter labels and values so each row holds on one line at 390px.
```

```
ROUND 2
Seen in one second: on a phone, the drowning ferry and Lua kneeling, the date and "You have seven minutes", then the title. On desktop, the case card beside the ferry.
Idea (one sentence): unchanged; verified in a real browser. The hold drains the river while Lua keeps her colour, the ferry rights, and the column whites out the village.
Live thing: verified at desktop (pointer), keyboard (Space on the cyclist), phone with tap mode plus reduced motion, and an early release that recedes without paying.
Layout words by section: unchanged.
Scores: design 7.5 · usability 7.5 · creativity 8 · content 8 → overall 7.7.
Caps applied: none.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. mobile-page-01: the slip's values still wrap ("injury, not / illness", "an equal / memory") and the result bar breaks over two lines. Fix: the slip text drops to the small step on phones, and the result bar never wraps.
2. tablet-fold: at 768 the 50svh band crops to the stones, and the ferry is out of frame. Fix: tablet object position at 78%.
3. desktop-page-02: the cyclist stage holds for two screens beside the rules, which repeats. It is the dealt split working as designed; the next iteration should vary it (the stage changes earlier, at the try button).
```

```
ROUND 3
Seen in one second: a ferry going down, a kneeling woman, "You have seven minutes"; then "She can undo any harm." with one button. A stranger knows what this is and what to do.
Idea (one sentence): unchanged and working.
Live thing: unchanged, re-verified.
Scores: design 7.5 · usability 8 · creativity 8 · content 8 → overall 7.9.
Caps applied: none.
Still short (for the next iteration):
1. desktop-page-02: the cyclist stage holds through the whole rules section. The split repeats there, the failure the sheet warns about.
2. desktop-page-03: the footer badge is a 1536px source scaled to half of 1440. It's slightly soft; needs the 2x upscale.
3. desktop: the hero headline is 3.6vw (the blueprint's size). The study's strong sites lead with ~8vw; the ferry carries the first screen instead, which is defensible but quiet.
WARN defences: no-footage, because no honest clip of a fictional event exists and a stock river loop would contradict the canon. off-centre at 1440, because the right reading column ends at the measure inside a full-width paper panel that does reach the margin; the panel closes the frame.
```
