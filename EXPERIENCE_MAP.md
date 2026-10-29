# THE GOD COMPLEX — Experience Map

> The visitor's journey, from first encounter to the final choice. The reveal order follows the knowledge table in [CHARACTER_BIBLE.md](CHARACTER_BIBLE.md) §8.1. Visual rules come from [DESIGN.md](DESIGN.md), and the assets for each chapter are in [ASSET_PLAN.md](ASSET_PLAN.md).
>
> **Status: APPROVED** (2026-10-29). Decisions are recorded in §5.

---

## 0. The frame

**Who the visitor is in the story:** someone who has been given **Case LETHE**, the Continuity Office's file on AMNESTY, by **Dr Mara Okafor**. She's leaking it before the Office can bury it. Mara is the guide. She speaks to the visitor directly in short Literata passages, and annotates the documents in the margin.

**How long it takes:** 8 to 15 minutes in one sitting. Seven chapters plus a prologue and an ending. It's one long page with chapter anchors. No routing is needed, and the dossier index jumps between anchors.

**What the visitor does:** they read, they look, and **three times they're asked to hold.** Each hold is an undoing, and each one costs something.

**What the site does in return:** **it forgets.** Every undoing the visitor performs whites out something they've already seen, or something they wrote. That's the STORY_BIBLE §8 idea, made concrete.

---

## 1. The visitor's state

This is everything the site remembers. It lives only in the browser, and the site works without it.

| Key | Values | Set in | Read in |
|---|---|---|---|
| `prologue` | `undone` · `refused` · *unset* | Prologue | I, VII, Ending |
| `forgotten[]` | the items whited out during the visit | Every hold | Ending, "What you forgot" |
| `name` | text the visitor wrote, or *none* | IV (optional) | VII |
| `choice` | `longing` · `herself` · `refuse` | VII | Ending |
| `reached` | the highest chapter seen | Scroll | Dossier index |

- **A returning visitor** sees "You've been here before" in the index, with an option to start again, which clears everything.
- **No storage available** (private mode, blocked storage): the visit still works, and nothing persists.
- **Nothing is ever sent anywhere.** The `name` never leaves the device, and the site says so where it asks.

---

## 2. Journey at a glance

| # | Chapter | Register | Canon phase | The visitor learns | Feeling | Signature moment |
|---|---|---|---|---|---|---|
| P | **The Window** | NIGHT | I | Someone can undo harm, and it costs | Awe, then complicity | **Hold 1:** undo the Tagus |
| I | **AMNESTY** | NIGHT + press | I | The public's saint, whom nobody can describe | Wonder, unease | Contradicting witness statements |
| II | **The Static** | FILE | II | People around the world are forgetting | Clinical dread | The case map fills |
| III | **The Correlation** | FILE | III | Every rescue was paid for, to the minute | The click of horror | Two timelines lock together |
| IV | **The Red Door** | WORLD → NIGHT | IV | Who pays: a face, a village. Her past was stolen. | Grief, intimacy | The dream sketch over the real door. **The name.** |
| V | **Nearest to Her** | FILE (stamp-heavy) | IV–V | It was never random. She steers it. The people she loves are next. | Vertigo, betrayal | The Protocol form |
| VI | **Night Zero** | NIGHT, Santa Luzia | V | She did this before, and chose to forget | Devastation, recognition | Her own voice, and the name card |
| VII | **The Lisbon Choice** | WORLD → drained | VI | Someone must forget | Dread, responsibility | **Hold 3:** the visitor chooses |
| E | **What you forgot** | FILE → the badge | — | What the visit cost | Quiet | Relearn, as new |

(Hold 2 is in Chapter I, see below.)

---

## 3. Chapter by chapter

### P · The Window (first viewport)

- **What they learn:** a harm is happening (the ferry *Barreiro Nova* has capsized in the Tagus), and it can be undone.
- **Feeling:** awe, then complicity, because *the visitor does it.*
- **Visual:** NIGHT. Full-bleed **Tagus in colour, ferry capsized** (portrait on phones, wide on desktop). Lua is small, kneeling at the water's edge in the lower third. Three lines of Literata caption, set low:
  > *18 June 2032. 21:14.*
  > *212 people in the water. 41 of them are dying.*
  > *You have seven minutes.*

  A single control: **Hold to undo.** The top bar shows only the mark and Contents.
- **Interaction:**
  - **Hold** (1.2s): the river drains to paper grey from the pointer, while Lua keeps her colour. The ferry rises (righting sequence), sound cuts, and colour returns from the edges. Then **the blink**: one more line appears under the caption and is immediately whited out halfway through: *"At 21:14, 3,400 km away, ████████ forgot why it was a village."* State: `prologue = undone`.
  - **Scroll past without holding:** the image stays in colour and the capsized ferry stays. One line appears: *"41 people drowned at 21:14. No one forgot anything."* Then, as Chapter I opens: *"She didn't wait for you. At 21:14, she said yes."* The canon stands, because she undid it anyway. State: `prologue = refused`.
- **What stays hidden:** her name, her face, how the cost works, who paid. The village is named only in Chapter III.

### I · AMNESTY (2031 to June 2032)

- **What they learn:** the press and the public's version. A saint, *Nossa Senhora do Tejo*. Rescues no one can explain, and **no one can describe her.**
- **Feeling:** wonder, with unease underneath.
- **Visual:** NIGHT, with press artefacts: the *Diário do Tejo* front page **AMNESTY** (the fictional paper's headline, set in Archivo, live text), shrine candles at Cais do Sodré, and **CCTV and press photos with the colour-keeping smear and the one sharp badge.**
- **Interaction:**
  - **The witness wall:** five short witness statements around one smeared photo. Each says something different ("a tall man", "a girl", "an old woman in a coat"). Tapping a statement brings its quote forward, and the photo never resolves. The text says what the photo can't show.
  - **Hold 2, small:** the cyclist on Rua da Conceição (the kneel image, from her 2031 saves). Holding undoes the crash. **The cost lands on the page:** a phrase the visitor read in the Prologue caption gets whited out ("212 people in the water" becomes "███ people in the water"). The visitor learns, without being told, that the cost falls on *what they already hold.* It foreshadows Revelation 2.
  - If `prologue = refused`, the opening line acknowledges it.
- **What stays hidden:** the cost mechanism (the visitor has *felt* it, nobody has explained it), her identity, Mara.

### II · The Static (2031 to 2033, the clinic)

- **What they learn:** scattered cases of **Acute Episodic Loss**. People forgetting a spouse, a childhood, a song. Doctors call them strokes. **Mara is introduced**, and so is her own loss: she can't remember her son Tobi's first five years.
- **Feeling:** clinical dread.
- **Visual:** the first switch to FILE. Bone paper. Mara's case notes as real live-text documents, with patient reference, onset time, *memory lost*, and a blank where the cause should be. Her margin annotations are typed. Then a **world map** in thin `--ink` linework, onto which case dots appear as you scroll, one per case, timestamped.
- **Interaction:** the map fills as you scroll, with a tabular counter of cases. Each dot can be focused, showing its case card (place, time, what was lost). Mara speaks: *"I have 1,140 of these. I am one of them."*
- **What stays hidden:** the link to AMNESTY. The map shows *where*, not *why*.

### III · The Correlation (11 February 2033)

- **What they learn:** **the Okafor Correlation.** Every known rescue matches a memory loss, *to the minute.* Case 0632 is **Ribeira da Prata, 21:14, 18 June 2032**: the village from the Prologue.
- **Feeling:** the click of horror.
- **Visual:** FILE. A **two-row ledger** spanning the screen. The top row is rescues, with dates and times from the press. The bottom row is memory losses, timestamped from Mara's registry. As you scroll, the bottom row **slides into register** with the top row until the times align. Stamp red appears for the first time, on the Office's response: **CLASSIFIED — LETHE.**
- **Interaction:** scroll-linked alignment (static, already aligned, under reduced motion). Then case 0632 opens. The Prologue's white-out **stays** white-out, and the village's name is set fresh beside it: *Ribeira da Prata.* Nothing comes back. The visitor is *learning it, as new.*
- **What stays hidden:** why these particular people pay.

### IV · The Red Door (late 2032 to February 2033, Ribeira da Prata)

- **What they learn:** the people who pay have faces. **Djina Lopes**, the schoolteacher, and a village that has forgotten why it's a village. **Revelation 1:** the dreams Lua drew (a red door, a valley, a singing woman) were **Djina's memories**, not Lua's.
- **Feeling:** grief and intimacy. This is the warmest chapter, so that its loss hurts.
- **Visual:** WORLD, **drenched in cane green and Atlantic teal**, with terracotta for the door. Photographic panels of the valley. Then **Lua's ballpoint sketch of the red door**, the only handwriting on the page so far.
- **Interaction:**
  - **The overlay:** dragging (or using arrow keys) moves Lua's sketch over the photo of the real door. They match. Caption: *"She drew it before she ever saw it. It was never hers."*
  - **The song:** a morna verse in Kriolu with an inline translation. Djina learns it from Lua, *as new* (canon L3). Optional audio, off by default, with a transcript.
  - **The name (optional, needs your approval, see §5):** Mara writes: *"Before you read on, write down a name you would never want to forget. It stays on this device. No one else will see it."* There's a single field with a **No, continue** button. If the visitor writes a name, it's set in Literata in the margin column and stays there for the rest of the visit.
- **What stays hidden:** that she steers it, and the origin.

### V · Nearest to Her (mid to late 2033)

- **What they learn:** **Revelation 2.** The cost falls on **whatever she holds closest** when she says yes. **Solvang** proved it on herself and lost her husband. The **Protocol for Consensual Allocation** ("the Tithe") steers costs onto paid volunteers with a photograph. And the people Lua loves are now in the path. **Duarte's betrayal:** he gave the Office her voiceprint.
- **Feeling:** vertigo, then betrayal.
- **Visual:** FILE, at its most institutional. Stamp red is heaviest here. **Black bars everywhere**, which the Office is hiding. Solvang's experiment report. **The Protocol form**, a real form with the fields filled in: *Volunteer photograph — attached.* Solvang's **index card** with her husband's name. Duarte's voiceprint as an `--ink` waveform, the one trace of Lua that can be tracked.
- **Interaction:**
  - Black bars can be **lifted**: the visitor taps or focuses a bar to reveal the text underneath, because the Office's secrets exist and can be uncovered. This is deliberately the opposite of white-out, which can't be lifted.
  - The Protocol form's final line is unsigned: *"Subject LETHE consents to hold the volunteer's likeness in mind."*
- **What stays hidden:** where it started.

### VI · Night Zero (early 2034, Revelation 3)

- **What they learn:** Mara obtains the missing-person file for **Celeste Semedo** (missing since 14 March 2031). In the evidence box is a phone holding **the Night Archive**. The last recording is Celeste's **confession**, in her own voice: five months of undoings at Santa Luzia, dementia patients who paid, and *"Next time, it's me."* Then 03:12, Ivone's heart, *"Não me esqueças."* Lua was the first payer, and she **chose** to forget.
- **Feeling:** devastation, then recognition.
- **Visual:** NIGHT, interiors, Santa Luzia's corridor. The **first time her face may partly appear**: Celeste before Night Zero (VISUAL_DIRECTION §6, Stage 0), in a staff photo with the **filled badge: CELESTE S.**
- **Interaction:**
  - **The recording:** a timestamped transcript (01:30, 14 March 2031) that you read line by line as you scroll. Optional audio, off by default; it would need an actor's voice.
  - **The name card:** Ivone gives back the card she tore off on Night Zero. It appears as an object, *CELESTE S.*, but **not in the badge holder** yet.
- **What stays hidden:** what she will choose.

### VII · The Lisbon Choice (2034)

- **What they learn:** an earthquake has hit Lisbon and a surge is coming up the Tagus. Tens of thousands will die within the window. The weight of it equals a people's shared history. Solvang's volunteers aren't enough. **Someone must forget, and the visitor decides who.**
- **Feeling:** dread, then responsibility.
- **Visual:** WORLD, **Lisbon at full ochre and azulejo**, at its most beautiful, followed by the harm (the city damaged, the surge). Lua is kneeling at Cais do Sodré, in the lower third. Three choices, set as **three statements, not buttons in a row**, each with its consequence written out in full:
  1. **Let her longing choose.** The Cape Verdean diaspora forgets its shared past, and every morna is gone, including the ones she taught Djina.
  2. **She holds herself.** She loses everything she has become: Duarte, Mara, Djina, Ivone's *"Celeste."*
  3. **Refuse.** The city dies, and she remembers every person.
- **Interaction:** **Hold 3.** Holding one statement commits it. The drain runs, then the blink, and then the consequence:
  - **Longing:** the song from Chapter IV is **whited out**, line by line.
  - **Herself:** the name card and every Lua handwriting element on the page white out, and the badge returns to blank.
  - **Refuse:** there's no drain at all. The city stays in colour, damaged. Lua's notebook *Os que eu deixei* fills with names.
  - **If the visitor wrote a name in IV:** for options 1 and 2, the cost also takes **their name**. It's whited out on screen and **deleted from storage**. It can't be recovered, only written again, as new. Live text: *"Someone, somewhere, forgot ████."*
- **What stays hidden:** what's canon. The bible leaves the outcome open (CHARACTER_BIBLE §8.4), and so does the site. **No verdict.**

### E · What you forgot

- **What they learn:** what their visit cost.
- **Feeling:** quiet.
- **Visual:** FILE, then the final image, **the badge**, in one of three end states (VISUAL_DIRECTION §6): with *CELESTE* in the holder (longing), blank (herself), or the card held in her hand in front of the damaged city, still in colour (refuse).
- **Interaction:** **"What you forgot"** lists every white-out from the visit. Each one has a **Relearn** action that sets the text again, *as new*. It's the accessible record and the story's only grace (Djina's songs). Then "Start again" and the credits, plus the fiction disclaimer.
- **Hidden:** nothing more. The ending is the dilemma, not an answer.

---

## 4. Edge cases

| Case | Behaviour |
|---|---|
| The visitor jumps ahead with the index | Allowed. The skipped holds are treated as `refused`, and the text acknowledges it ("You weren't there"). |
| No JavaScript | The whole story reads as a static sequence. Holds show the before and after stills with their text, and there's no forgetting. |
| Reduced motion | DESIGN §7.4. Every state change is described in text. |
| Screen reader | Live-region announcements at every hold. White-out reads as "[forgotten]", and "What you forgot" is reachable. |
| "Tap instead of hold" enabled | A single press asks "Undo? Yes / No" inline. It's never a modal. |
| Very slow connection | Text arrives first. Images use progressive loading with a low-quality placeholder in the drained palette. |

---

## 5. Decisions (approved 2026-10-29)

1. **The name mechanic is kept,** opt-in, local-only, clearly explained, and actually deleted when the cost lands.
2. **There are three holds:** Prologue (Tagus), Chapter I (cyclist), Chapter VII (the Choice).
3. **Audio in v1 is ambience only:** rain and river, plus the silence cut during an undo. Off by default. The sung morna and the voiced confession are **deferred**; for now the text and transcripts carry them.
4. **The first viewport is the Tagus undo,** and the badge closes the site (VISUAL_DIRECTION §7.5 updated).

---

## 6. The archive (`/archive/`, v1 built 2026-10-29)

The leaked records: five documents from Case LETHE that Dr Okafor copied in late 2033. The homepage reaches it from the bar ("Archive"), the sealed section ("Read the leaked records") and the footer. Content lives in `src/content/archive.ts`; presentation lives in `src/components/archive/`.

- **Order:** the index lists records by the date of their events. Records **unseal in the order Mara read them**:
  1. The Barreiro Nova report and the Setúbal statement are open from the start.
  2. Both of those unseal the interim analysis.
  3. The analysis unseals her notes.
  4. Her notes unseal the 1970 record.
- **Progress** is tracked in this browser only (`gc.archive`), and cleared by "Forget this visit". Without JavaScript, every record is open.
- **Cross-references** to a record that is still sealed show as a black bar until the visitor has read what unseals it.
- **Scope:** the archive reaches the Okafor Correlation (public, February 2033) and seeds one open mystery (CHARACTER_BIBLE §5.5, "Why Celeste?"). **It reveals none of Revelations 1–3.**

| Record | Reference | What it adds |
|---|---|---|
| Capsizing of the ferry *Barreiro Nova* | LETHE-INC-0001 | The Office's own timing of the signature: 6 min 50 s from collision to reversal, 1.4 s of silence on every recording, colour lost and returning from the frame edges, a blank badge on camera, the tender still crushed. No cost identified at filing. |
| Statement of I. M., Setúbal | AEL-0261 / S1 | What paying feels like: the white blink and the hot dust, no sense of loss, a son she cares for and does not know. Skills intact (L2), no recovery (L3). |
| Interim analysis of the losses | AEL-IA-07 | The clinical definition. 1,140 people: 228 individuals and one collective event of 912. No trace on imaging. Distribution "consistent with random selection" (Mara's BELIEF, L4-B). Onsets are instantaneous and arrive one at a time. |
| Notes of Dr Mara Okafor | LETHE-PER-0019 | The Correlation found: all 31 reported rescues match an onset to the minute ("a boy for a boy"). Her own loss (AEL-0388: Tobi at two, three and four). The decision to publish. "Whatever this is, it starts then" (May 2031). |
| The *Flor de Maio*, 1970 | LETHE-HIS-1970 | **The contradiction:** the full signature at Mindelo in 1970, before the subject could have existed. A. ███ (Abílio), the survivor, forgot his wedding; his wife sings to him. The Director's response is redacted. |

**New canon introduced by the archive** (copied into CHARACTER_BIBLE §4.3, §4.5 and §5.5 on 2026-10-29):
- **I. M.** and her son **Rafael**: AEL-0261, Setúbal, 2 Sep 2031, 08:52, paid for a child saved in Alcântara.
- **The register's composition:** 228 individual cases plus 912 people of the collective case AEL-0632. There are 229 onset events, of which 31 match a reported rescue.
- **The first known Lua-era save:** Duarte's tram, 14 May 2031, 17:42, paid by AEL-0117 in Porto.
- **Mara's own case** (AEL-0388) was paid for by a fall at Martim Moniz.
- **The *Flor de Maio*:** wrecked 2 March 1970, 23:40; crew of eight lost; a 32-year-old survivor.
- **Minor characters:** Insp. C. Brandão, Dr R. Pires, archivist T. Varela.
