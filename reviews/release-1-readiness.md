# THE GOD COMPLEX: first-release readiness report

**Date:** 30 October 2026 · **Build:** `main` at `7d3ea24`, plus this report · **Verdict: not ready.** Criterion 6 was fixed the same day (see the update below). Criterion 11 still fails, and four checks still need people and real devices.

## How this was checked

- **Documents read:** CHARACTER_BIBLE, STORY_BIBLE, VISUAL_DIRECTION, PRODUCT, DESIGN, EXPERIENCE_MAP, ASSET_PLAN and the reference README.
- **Built and served:** a production build (`astro build`), served locally (`astro preview`) and driven in headless Chrome.
- **Page audit:** all 8 pages at 1440px desktop, 390px phone and 320px small phone. It checks console errors, failed requests, headings, duplicate ids, alt text, control names, colour contrast, focus rings, horizontal overflow, layout shift and load time.
- **Behaviour tests:**
  - the hold, the cyclist hold, the register, and reduced motion;
  - the archive's unlock order, Esc, Back, keyboard tab order, Enter and the no-JavaScript page;
  - lifting black bars;
  - motion and view transitions;
  - the evidence images.
- **Design checks:** Taste lint and the Impeccable detector.
- **Link check:** every internal link.
- **Searches of the shipped HTML:** for the antagonist's name and ideology, and for placeholder or review text.

**Not checked by any of the above:** real phones, Safari and Firefox, a real screen reader, and whether real visitors understand the story. Where a criterion depends on these, the report says so.

## The twelve criteria

| # | Criterion | Result | Evidence |
|---|---|---|---|
| 1 | The hero has a consistent, recognisable identity | **PASS** | Every image of Lua on the site comes from the locked references: the Tagus set, the tram-stop figure, the cyclist set, the Hand and the badge. They share the silhouette (knee-length cardigan, headphone loop, small head, teal lanyard with blank badge), the grey-blue against a warm Lisbon, and the face rule: her face is never shown and never erased. Minor deviations are listed under optional improvements: both knees down in the Tagus images, and boots in `cyclist-after`. |
| 2 | The homepage establishes the central premise | **PASS** (by inspection) | The first screen shows "The God Complex", the press claim "She can undo any harm", and the line "This is its file on what she does, and on what it costs", beside the capsized ferry with a hold-to-undo button. Checked on desktop and phone. |
| 3 | The visitor can understand the cost of the powers | **PASS** (by inspection) | The cost is shown before it is explained. Holding through the Tagus ends in a blink and the line "[forgotten] forgot why it was a village", with the place name whited out. The cyclist hold whites out a passenger's quoted "212". After that hold, the observed-properties slip unseals: "A stranger loses an equal memory · Comes back: never". It is reinforced by the register of 1,140 cases and Mara's letter. All of this verified, including with reduced motion. **Whether visitors grasp it unaided is NOT VERIFIED:** there has been no visitor test. |
| 4 | The narrative has a compelling opening | **PASS** (editorial judgement) | The opening is an interactive Tagus rescue: harm, then the drain to grey, then the cost, then the morning after. A design critique scored it and its five fixes are in. "Compelling" is a judgement about how readers react; **no audience has seen it**, so treat this as provisional. |
| 5 | The archive has meaningful, connected records | **PASS** | Five records unlock in the reading order the bible sets: the ferry incident, the Setúbal statement, the interim analysis, Okafor's notes, and the 1970 *Flor de Maio*. Cross-references open and close with that order, and margin connections link the records. The chain reaches the Okafor Correlation and opens the 1970 mystery. Out-of-order visits are flagged, and three black bars can be lifted. The archive test passes end to end, including keyboard use and the page without JavaScript. |
| 6 | The antagonist has a clear ideological conflict with the hero | **PASS** (after the update) | Originally FAIL: Solvang appeared only behind two black bars, and her ideology was nowhere on the site. **Fixed:** a sixth archive record, *The Director’s memorandum* (LETHE-DIR-0003, 12 February 2033), unseals after Okafor’s notes. In it Solvang accepts the Correlation and calls Lua’s mercy “a lottery” whose losers “never agreed to play”. She sets it against her own triage work (“in daylight, by rules, with names written down … Mercy that answers to no one is not kinder. It is only faster.”). Mara answers in the margin: “She kneels because someone is dying in front of her. This would have her stand up first and check a list.” Revelation 2 stays sealed: no steering, no experiment, no Protocol or Tithe by name. Verified: unlock order, lifting the bar, the evidence image, the audit at both widths, and a clean console. |
| 7 | The interface is visually coherent and distinctive | **PASS** | Three visual modes (night scenes, case-file paper, and the warm everyday world) used consistently. Two kinds of hiding: black bars that can be lifted, and white-out that never can. The colour roles hold (red for the Office, blue ink for Lua). Taste lint: 0 problems. Taste inspector: 0 failures; its warnings are deliberate choices (no video, little motion) or a measuring artefact. Impeccable detector: nothing found. |
| 8 | Navigation and interactive elements work | **PASS** | All internal links return 200 (8 pages, 25 links including anchors), and missing pages get the 404 page. Verified: the holds (with interrupting and resuming), the tap-instead setting, the stage slides, unsealing, opening and closing records, Esc, the Back button, Enter from the keyboard, lifting bars and the unlock order. |
| 9 | Desktop and mobile layouts are usable | **PASS** (Chrome emulation) | No horizontal overflow at 1440, 390 or 320px. Layout shift ≤ 0.034 everywhere. The largest image or text appears within 0.6s, and frames hold at 60fps on a slowed-down phone. **Real devices are NOT VERIFIED**: the touch hold on iOS Safari and Android Chrome, and desktop Safari and Firefox, have not been tried. Page transitions are Chrome-only by design; other browsers get a normal page load. |
| 10 | Accessibility and reduced motion are addressed | **PASS** (automated and DOM checks) | One h1 per page, no skipped heading levels, no duplicate ids. Alt text on every image, a name on every control, contrast passing, visible focus rings, skip links. Redactions and forgotten words are announced to screen readers ("[redacted by the Continuity Office]", "[forgotten]"). The keyboard paths are verified. **Reduced motion verified:** the holds still finish, black bars lift without moving, page changes are instant cuts. **A real screen-reader session (NVDA, VoiceOver) is NOT VERIFIED.** |
| 11 | No essential artwork or content left as placeholder | **FAIL** | There is no lorem ipsum or empty slot. But the project's own launch rules mark three things as unfinished. (a) **Unconfirmed sample copy:** the register's eleven cases, the witness statements, the newspaper front page, the observed-properties slip and Mara's letter are labelled "sample content … confirm before launch" (ASSET_PLAN, v1 build section). (b) **Portuguese text** must be checked by a native speaker before launch (ASSET_PLAN §3): *Eu sou a Lua*, *Nossa Senhora do Tejo* and the place and newspaper names. (c) **Image resolution:** the rule is a 2× upscale before launch (ASSET_PLAN §0). The opening Tagus images, the cyclist harm image and The Hand are about 1024px wide, but are shown up to about 1370 device pixels on high-density screens. The badge and still life are 1536px and visibly soft at desktop width. |
| 12 | Critical console errors and broken interactions resolved | **PASS** | Zero console errors or warnings and zero failed requests on every page at every width, and in every test run. One test check, the Tagus white-out, reads too early about one run in three and passes on rerun. That is the test's timing, not the site. |

**Totals after the update:** 11 PASS (4 with checks still outstanding), 1 FAIL (criterion 11).

> **Update 2026-10-30, languages:** the site now also exists in French, Spanish and Simplified Chinese, at `/fr/`, `/es/` and `/zh/` (homepage, archive and interface). It passes the same behaviour tests and page audit in every language. The three translations are first drafts and **add three native-speaker reviews to criterion 11** (TRANSLATION.md).

## Remaining critical defects (block release)

1. ~~The antagonist is absent as an idea (criterion 6).~~ **Fixed 2026-10-30** with the Director’s memorandum.
2. **Content not signed off (criterion 11a–b).** The sample copy and the Portuguese text need the owner's confirmation and a native speaker's review, as the project's dignity commitment requires.
3. **Images below production resolution (criterion 11c).** The opening image, the first thing every visitor sees, is soft on high-density screens.

## Checks still to make (no tool here can)

- **Real devices:** the hold on iOS Safari and Android Chrome, especially that the page doesn't scroll during a press. Plus desktop Safari and Firefox.
- **A screen-reader pass:** NVDA on Windows and VoiceOver on iPhone, through the prologue, a hold, and a record with a lifted bar.
- **A visitor test:** five people, unaided. Afterwards, can they say what she does and what it costs?

## Optional improvements (do not block release)

- **Social sharing:** no Open Graph or Twitter card tags, and no og:image. It needs the hosting URL. The portrait (K-1) is ready to crop.
- **Art corrections:**
  - the Tagus kneel (both knees down; deferred to an artist);
  - boots instead of clogs in `cyclist-after`;
  - `cyclist-harm` is lower resolution (1027px) than its pair (1694px).
- **Fonts:** about 196 KB; cutting them down to the characters used would roughly halve that.
- **The "What you forgot" ending** isn't built. The memories it would use are already recorded but never shown.
- **Small things:** the archive index's 0.034 layout shift when a record unseals; the test's white-out timing.

## Plan to clear the blockers, in priority order

1. **Done.** ~~Give the antagonist her argument (blocker 1, about half a day, code and writing).**
   - Add the planned **"Office's response memo"** (ASSET_PLAN D-7, a chapter III document) to the archive as a sixth record, signed by Dr Ingrid Solvang as Director. It unseals after Okafor's notes, because it answers the Correlation.
   - It should state her position: structure over improvised mercy, "a miracle without a protocol is a lottery", and a case for managing the cost instead of leaving it to chance.
   - **To protect Revelation 2, it must not reveal** that she can steer the cost, her experiment, her husband, or the Tithe by name.
   - Use `solvang-office.jpg` as its evidence image.
   - Update CHARACTER_BIBLE and EXPERIENCE_MAP §6 (the archive becomes six records) in the same change, then rerun the archive and lift tests.~~ Done: archive record LETHE-DIR-0003, with all tests passing.
2. **Content sign-off (blocker 2, owner's decision, then a reviewer).** Confirm or edit the sample copy listed in criterion 11a, and send the Portuguese strings to a native speaker. A Kriolu review is not needed for this release, because no Kriolu is shipped.
3. **Upscale the images on the first screens (blocker 3, about an hour with a free upscaler such as Upscayl).**
   - Upscale `tagus-harm`, `tagus-drained`, `tagus-after`, `cyclist-harm`, `hand`, `badge` and `effects` by 2×. Upscale both images of an aligned pair with the same settings, so they still line up.
   - I'll swap them in and rerun the alignment overlays and the audit.
4. **Make the outstanding checks:** real devices, the screen reader, five visitors. Fix whatever they find.
5. **Choose hosting,** then add the social-sharing tags with K-1.

**Release when 1–4 are done.** Per the brief, no new heroes or unrelated features until then.
