# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, generating a static site with no backend. Hosting is undecided, so the build output must stay plain static files that can be deployed anywhere: GitHub Pages, Vercel, Netlify or a basic file host.

## Users

The primary visitors are **peers, prospective clients and a course or community audience** who come to the site as a **showcase piece**: a flagship work of world-building and digital craft, made with the same method as the author's earlier *Museum of Lost Futures*. They arrive from a shared link, a portfolio or a talk, curious but with no prior knowledge of the story. Their job is to experience the work and judge its craft.

## Product Purpose

An interactive narrative experience that introduces an original superhero universe, **THE GOD COMPLEX**, and its hero AMNESTY (Lua). The site works like a premium graphic novel, a classified government investigation and a cinematic universe at once. The visitor uncovers the truth about a dangerous, misunderstood, morally compromised person.

Success means the visitor **reaches the end, feels the moral weight, and shares it**. Success is not how much lore they absorb.

## Positioning

It is not a superhero landing page, portfolio, fan wiki or comic template. What only this work can claim is that **the site enacts the hero's power**: learning the truth costs the visitor something, just as every rescue costs the world a memory.

## Operating Context

- It is read on desktop and on phones, usually in one sitting of about 5 to 15 minutes, often opened from a social or chat link.
- The canon lives in `STORY_BIBLE.md`, `CHARACTER_BIBLE.md` and `VISUAL_DIRECTION.md`. The locked concept art is in `concept/reference/`.

## Capabilities and Constraints

- Static and client-side only. No authentication, database or server.
- Any state the visitor builds up (progress, choices) lives in the browser and is optional. The site must work without it.
- The source images are large (2–7 MB each), so the site needs responsive image handling.
- **The final choice** (the Lisbon Choice) is put to the visitor. Whether choices are aggregated across visitors is **undecided** and would need a backend. Out of scope for now.
- Language: English, with Portuguese and Kriolu phrases used as in the canon. Localisation is **undecided**.

## Brand Commitments

- The title is **THE GOD COMPLEX**. The hero's alias is **AMNESTY**, and she calls herself **Lua**.
- The canon rules in `STORY_BIBLE.md` §9 and `CHARACTER_BIBLE.md` are binding. In particular: the hero's face is never shown and never whited out, every rescue appears with its cost, lost memories never return, and the hero is *the subject* or *they* in case files.
- It is an original property and must not borrow from existing franchises.
- Cape Verdean culture is portrayed specifically and with dignity, never as exotic decoration.

## Evidence on Hand

- Locked concept art in `concept/reference/`: the turnaround, three poses, two Undoing images, the Tagus Miracle and the emblem still life, with usage notes in `concept/reference/README.md`.
- **Not on hand, and not to be invented as if real:** in-world documents (case files, maps, transcripts) still have to be written and designed as fiction. There are no real press, testimonials or audience figures.
- The site contains no real people or organisations. All institutions in it are fictional.

## Product Principles

1. **The visitor investigates.** The site reveals the story in the order of the knowledge table in CHARACTER_BIBLE §8.1, and never gives the answer first.
2. **Every wonder has a price on the same screen.** No rescue appears without its cost close by.
3. **Subtraction over decoration.** The power is shown by removing colour, sound and information. Nothing is added for show.
4. **Craft must carry the story.** Every interaction and motion has a narrative reason. Anything that is only impressive gets cut.
5. **Leave the visitor with the dilemma, not a verdict.**

## Accessibility & Inclusion

- Target WCAG 2.2 AA.
- Complete `prefers-reduced-motion` alternatives for every narrative effect.
- Redaction and "forgetting" effects must never hide content that a screen reader or keyboard user needs to follow the story.
- Respect the face-rendering rule (VISUAL_DIRECTION §2.5) in every image. It exists to prevent racially harmful depiction.
