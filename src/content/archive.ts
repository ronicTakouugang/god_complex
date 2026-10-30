/**
 * The classified investigation archive: five fictional records from Case LETHE.
 * Content only. Presentation lives in src/components/archive/.
 *
 * Canon: CHARACTER_BIBLE.md. Every fact here must agree with it; reveal order follows §8.1.
 * The archive reaches the Okafor Correlation (public, Feb 2033) and seeds one Open mystery
 * (§5.5, "Why Celeste?": the 1970 Flor de Maio). It reveals none of Revelations 1–3.
 *
 * Inline markup in any text field:
 *   *words*            italic
 *   [[bar:6]]          Office black bar, about 6em wide (redacted; can be lifted later in the story)
 *   [[white:5]]        white-out, about 5em wide (forgotten; never lifted)
 *   [[ref:id|words]]   cross-reference to another record (shown as a black bar until that record unseals)
 */

export type Block =
  | { t: 'h'; text: string }
  | { t: 'p'; text: string; voice?: 'story' }
  | { t: 'fields'; rows: [string, string][] }
  | { t: 'log'; caption: string; rows: { time: string; text: string }[] }
  | { t: 'qa'; rows: { who: string; text: string }[] }
  | { t: 'table'; caption: string; head: string[]; rows: string[][] }
  | { t: 'figure'; img: 'tagus-drained' | 'ev-cctv' | 'ev-swimbag' | 'ev-notebook' | 'ev-harbour-log'; alt: string; caption: string }
  | { t: 'sign'; name: string; role: string };

/** An annotation in the margin. `after` is the index of the block it belongs to. */
export interface Note {
  after: number;
  by: string;
  text: string;
}

export interface Connection {
  to: string;
  note: string;
}

export interface ArchiveRecord {
  id: string;
  ref: string;
  kind: string;
  title: string;
  /** One line for the archive index. */
  summary: string;
  origin: string;
  classification: string;
  /** The Continuity Office's stamp: its only mark in stamp red (DESIGN.md §2.2). */
  stamp: string;
  event: { iso: string; label: string };
  filed: { iso: string; label: string };
  entered: string;
  translated?: string;
  /** Records that must be read before this one unseals. */
  requires: string[];
  blocks: Block[];
  notes: Note[];
  connections: Connection[];
}

export const records: ArchiveRecord[] = [
  {
    id: 'barreiro-nova',
    ref: 'LETHE-INC-0001',
    kind: 'Incident report',
    title: 'Capsizing of the ferry Barreiro Nova',
    summary: 'Seven minutes on the Tagus, timed to the second. No cost identified at the time of filing.',
    origin: 'Lisbon Harbour Incident Unit, river desk',
    classification: 'Confidential',
    stamp: 'Confidential · LETHE',
    event: { iso: '2032-06-18T21:07', label: '18 June 2032, 21:07–21:19' },
    filed: { iso: '2032-06-19', label: '19 June 2032' },
    entered: '2 February 2033',
    requires: [],
    blocks: [
      { t: 'fields', rows: [
        ['Vessel', '*Barreiro Nova*, commuter ferry, Barreiro to Terreiro do Paço'],
        ['Aboard', '212 (passengers and crew)'],
        ['Conditions', 'Sudden squall over the Mar da Palha, visibility under 200 m'],
        ['Casualties', 'None'],
      ] },
      { t: 'h', text: 'Sequence of events' },
      { t: 'log', caption: 'Times from the vessel’s tracker, three quay cameras and the open emergency line.', rows: [
        { time: '21:06:40', text: 'Squall reported mid-river.' },
        { time: '21:07:12', text: 'Collision with the tender of a container ship. The ferry heels and is on her side within forty seconds.' },
        { time: '21:07:58', text: 'First emergency call. The line stays open.' },
        { time: '21:09:30', text: 'Rescue craft dispatched. Estimated arrival 21:19.' },
        { time: '21:12', text: 'Civilian video shows people in the water. Medical review later estimates that 41 of them would not have survived until rescue craft arrived.' },
        { time: '21:14:02', text: 'All three quay cameras and the emergency line record 1.4 seconds of silence. In the same frames the river and the ferry lose all colour; colour returns from the edges of each frame over about two seconds.' },
        { time: '21:14:04', text: 'The ferry is recorded upright and undamaged. Every person aboard is on deck. Their clothing is dry.' },
        { time: '21:14:05', text: 'Camera 3 records a figure kneeling at the quay edge, Cais do Sodré. The figure resolves only as a motion smear. One object is sharp: an identity badge holder on a lanyard. The card in it is blank.' },
        { time: '21:15:30', text: 'The figure leaves on foot, east along the quay. Not traced.' },
        { time: '21:19', text: 'Rescue craft arrive. Nobody is in the water.' },
      ] },
      { t: 'figure', img: 'ev-cctv', alt: 'A grainy fisheye security-camera frame of a wet stone quay at night in the rain. At the water’s edge a kneeling figure is only a ghosted smear; a teal lanyard and an empty white badge hang sharp against it. The ferry is upright on the river behind.', caption: 'Quay camera 3, frame 21:14:05 (reconstruction). The badge holder is the only sharp object in the frame.' },
      { t: 'h', text: 'Findings' },
      { t: 'p', text: 'The ferry’s hull shows no damage and no water inside it. The tender that struck her is still crushed at the bow; its crew are unhurt. Only the ferry was returned.' },
      { t: 'p', text: 'All 212 people aboard describe being in the water. Several describe drowning. None of them is injured.' },
      { t: 'p', text: 'Five witnesses, on the quay and on the ferry’s deck, were interviewed the same night. Their descriptions of the kneeling figure do not agree on height, age or sex. Each witness is certain of their own account.' },
      { t: 'p', text: 'Footage from camera 3: [[bar:12|collected from this unit at 23:05 the same night by officials who did not give their names. No copy was kept.]]' },
      { t: 'p', text: 'The interval between the collision and the reversal is six minutes and fifty seconds.' },
      { t: 'h', text: 'Cost' },
      { t: 'p', text: 'None identified at the time of filing.' },
      { t: 'sign', name: 'Insp. C. Brandão', role: 'River desk, Lisbon Harbour Incident Unit' },
    ],
    notes: [
      { after: 2, by: 'Continuity Office, Oct 2033', text: 'Earliest recording of the full signature: silence, loss of colour, reversal. Compare [[ref:flor-de-maio|the review of October 2033]].' },
      { after: 9, by: 'Continuity Office, Feb 2033', text: 'Under seven minutes. Every reversal on file so far falls inside a seven-minute window.' },
      { after: 11, by: 'Continuity Office, Feb 2033', text: 'Superseded. See [[ref:interim-analysis|the interim analysis]], onset event of 18 June 2032 at 21:14.' },
    ],
    connections: [
      { to: 'interim-analysis', note: '21:14 on 18 June 2032 appears in both records.' },
      { to: 'flor-de-maio', note: 'The same silence and the same loss of colour, sixty-two years earlier.' },
    ],
  },

  {
    id: 'statement-setubal',
    ref: 'AEL-0261 / S1',
    kind: 'Witness statement',
    title: 'Statement of I. M., Setúbal',
    summary: 'A mother describes the morning she stopped knowing her son. She feels nothing missing.',
    origin: 'AEL Surveillance (pilot), field team, Lisbon',
    classification: 'Restricted, medical',
    stamp: 'Received · LETHE',
    event: { iso: '2031-09-02T08:52', label: '2 September 2031, 08:52' },
    filed: { iso: '2031-09-09', label: '9 September 2031' },
    entered: '2 February 2033',
    requires: [],
    blocks: [
      { t: 'fields', rows: [
        ['Subject', 'I. M., 38, accountant, Setúbal'],
        ['Case', 'AEL-0261, acute episodic loss'],
        ['Onset', '2 September 2031, 08:52:17, fixed from a voice message on her phone'],
        ['Interviewer', 'Dr R. Pires'],
      ] },
      { t: 'h', text: 'Transcript' },
      { t: 'qa', rows: [
        { who: 'R. P.', text: 'Tell me about the morning of the second.' },
        { who: 'I. M.', text: 'I was in the car outside the school, recording a message for my sister. Then there was a white. Like a flash with no light in it. And a smell of hot dust, like the projector at school when I was a girl. Half a second. Then I finished the message.' },
        { who: 'R. P.', text: 'What was the message about?' },
        { who: 'I. M.', text: 'My sister says I said “Rafa has his swimming bag,” and then, “Who is Rafa?” I don’t remember saying the second part.' },
        { who: 'R. P.', text: 'Who is Rafael to you now?' },
        { who: 'I. M.', text: 'He’s seven. He lives with us. They tell me he’s my son and I believe them. There are photographs, and he has my father’s teeth. There’s just nothing there. He’s a nice boy someone has asked me to look after.' },
        { who: 'R. P.', text: 'Do you feel that something is missing?' },
        { who: 'I. M.', text: 'No. That’s what frightens my husband. I feel completely well. I’m only frightened because he is.' },
        { who: 'R. P.', text: 'Do you still look after him?' },
        { who: 'I. M.', text: 'Of course. I make his lunch. I know how he likes his bread cut. I don’t know how I know that.' },
        { who: 'R. P.', text: 'Is there anything you remember from his early years?' },
        { who: 'I. M.', text: 'His fifth birthday. They tell me I made the cake. I remember the oven. I remember [[white:5]]. Nothing after that.' },
      ] },
      { t: 'h', text: 'Clinical notes' },
      { t: 'p', text: 'MRI and EEG unremarkable. No lesion, no bleed, no seizure activity. Language, skills and general knowledge intact.' },
      { t: 'p', text: 'Autobiographical memory of the son is absent from his birth to the morning of onset. New memories of him have formed normally since.' },
      { t: 'p', text: 'Prognosis: no recovery has been observed in any case of this kind.' },
      { t: 'figure', img: 'ev-swimbag', alt: 'A child’s blue drawstring swimming bag on a wooden school bench, beside a folded striped towel and a pair of goggles.', caption: 'Photographed at the school, 9 September 2031 (reconstruction): the swimming bag from the voice message.' },
      { t: 'sign', name: 'Dr R. Pires', role: 'AEL Surveillance, field team, Lisbon' },
    ],
    notes: [
      { after: 0, by: 'Continuity Office, Feb 2033', text: 'Onset fixed to the second. See [[ref:interim-analysis|the event table]], 2 September 2031.' },
      { after: 2, by: 'Dr M. Okafor', text: 'The white and the hot dust again. Sixty-one per cent of them describe it.' },
      { after: 6, by: 'Continuity Office, Feb 2033', text: 'At 08:52 the same morning, in Alcântara, a child was pulled from under a bus. See [[ref:okafor-notes|Dr Okafor’s notes]], 26 January.' },
    ],
    connections: [
      { to: 'interim-analysis', note: 'Her case is one row in the event table.' },
      { to: 'okafor-notes', note: '08:52 on 2 September 2031: a boy for a boy.' },
    ],
  },

  {
    id: 'interim-analysis',
    ref: 'AEL-IA-07',
    kind: 'Scientific analysis',
    title: 'Interim analysis of the losses',
    summary: 'What the losses have in common, and the one thing about them that is not random.',
    origin: 'AEL Surveillance Unit, Lisbon',
    classification: 'Restricted, not for distribution',
    stamp: 'Received · LETHE',
    event: { iso: '2033-01-20', label: 'January 2033, covering May 2031 onward' },
    filed: { iso: '2033-01-20', label: '20 January 2033' },
    entered: '2 February 2033',
    requires: ['barreiro-nova', 'statement-setubal'],
    blocks: [
      { t: 'h', text: 'Definition' },
      { t: 'p', text: 'Acute episodic loss (AEL) is the sudden, complete and permanent loss of a healthy adult’s autobiographical memory of one person, one period of their life, or one history they share with others. Language, skills and general knowledge are untouched. Memories formed after onset are normal.' },
      { t: 'h', text: 'Registered cases' },
      { t: 'fields', rows: [
        ['Persons', '1,140, in 41 countries, May 2031 to January 2033'],
        ['Ages', '19 to 88'],
        ['Collective event', 'One. 912 people of a single community, case group AEL-0632, location withheld by the Continuity Office'],
        ['Individual cases', '228'],
        ['Recovery', 'None, in any case'],
      ] },
      { t: 'h', text: 'Clinical picture' },
      { t: 'p', text: 'Imaging shows no structural or functional trace in any of the 318 people scanned. The memory is gone and leaves nothing behind it.' },
      { t: 'p', text: 'Sixty-one per cent describe a half-second of white silence at onset. Thirty-eight per cent describe a smell of hot dust. No one describes pain. Almost no one describes feeling that something is missing; the people around them notice first.' },
      { t: 'p', text: 'What is lost, in the individual cases: a person (41%), a childhood (27%), a home (19%), something shared with others, such as a song or a custom (13%).' },
      { t: 'h', text: 'Distribution' },
      { t: 'p', text: 'No geographic clustering is detectable. Cases are spread across the world in proportion to population. The pattern is consistent with the random selection of individuals.' },
      { t: 'h', text: 'Timing' },
      { t: 'p', text: 'Onset is instantaneous. Where a phone, a recording or a witness fixes it, it can be timed to the second. Cases arrive one at a time; no two individual cases share a minute.' },
      { t: 'table', caption: 'Onset events, selected. Times converted to Lisbon time.', head: ['Onset', 'Persons', 'Case'], rows: [
        ['14 May 2031 · 17:42', '1', 'AEL-0117, Porto'],
        ['2 Sep 2031 · 08:52', '1', 'AEL-0261, Setúbal'],
        ['9 Oct 2031 · 07:15', '1', 'AEL-0388, Geneva (08:15 local)'],
        ['30 May 2032 · 18:02', '1', 'AEL-0590, Mindelo (16:02 local)'],
        ['18 Jun 2032 · 21:14', '912', 'AEL-0632, [[bar:6]]'],
        ['224 further events', '1 each', '—'],
      ] },
      { t: 'h', text: 'Next step' },
      { t: 'p', text: 'If the onsets are events, something else may have happened at the same minutes. That question is outside this unit’s remit. It has been sent to the Continuity Office.' },
      { t: 'sign', name: 'Dr M. Okafor', role: 'Clinical neurologist, AEL Surveillance Unit' },
    ],
    notes: [
      { after: 3, by: 'Continuity Office, Feb 2033', text: 'AEL-0632 location withheld under Office instruction 7. Do not release.' },
      { after: 9, by: 'Dr M. Okafor', text: 'Random. I keep writing that word. I need it to be true.' },
      { after: 12, by: 'Dr M. Okafor', text: 'Instant. Timed. One at a time, except once. Like a payment. What happened at these minutes?' },
      { after: 14, by: 'Continuity Office, Feb 2033', text: '21:14 on 18 June 2032: see [[ref:barreiro-nova|the Barreiro Nova report]].' },
    ],
    connections: [
      { to: 'barreiro-nova', note: 'The largest onset event happened at the minute the ferry was undone.' },
      { to: 'okafor-notes', note: 'Her question in the margin is answered in her own notes.' },
    ],
  },

  {
    id: 'okafor-notes',
    ref: 'LETHE-PER-0019',
    kind: 'Investigator’s notes',
    title: 'Notes of Dr Mara Okafor',
    summary: 'She checks the minutes against the news, finds every one, and then finds her own.',
    origin: 'Personal papers of Dr M. Okafor, notebook and voice memos',
    classification: 'Personal, seized',
    stamp: 'Seized · LETHE',
    event: { iso: '2033-01-21', label: '21 January to 10 February 2033' },
    filed: { iso: '2033-02-14', label: 'Copy seized 14 February 2033' },
    entered: '14 February 2033',
    requires: ['interim-analysis'],
    blocks: [
      { t: 'log', caption: 'Notebook entries and voice memos, transcribed.', rows: [
        { time: '21 Jan', text: 'Sent the interim analysis to the Office with one question: what happened at 21:14 on 18 June? No answer.' },
        { time: '24 Jan, 02:10, voice memo', text: 'Everyone knows what happened at 21:14 on 18 June. I watched it on the news like everyone else. The ferry. I didn’t think of it because I didn’t want to.' },
        { time: '26 Jan', text: 'I went through the press archives minute by minute. Of 229 onset events, I can find a reported rescue at the same minute for 31. The other 198 match nothing anyone wrote down. But every rescue I can find has a case. All 31.' },
        { time: '26 Jan', text: '2 September 2031, 08:52, Alcântara: a boy pulled out from under a bus, unhurt. Nobody can describe the woman who did it. At 08:52 in Setúbal, I. M. forgot her son. A boy for a boy.' },
        { time: '26 Jan', text: 'The earliest event is 14 May 2031, 17:42: a tram on Rua da Conceição, a blind man knocked down who got up again. Nothing in the register before May 2031. Whatever this is, it starts then.' },
        { time: '29 Jan', text: 'AEL-0388. Me. 9 October 2031, 08:15 in Geneva, which is 07:15 in Lisbon. I looked it up. At 07:15 a man fell from scaffolding at Martim Moniz and stood up.' },
        { time: '29 Jan, 23:40, voice memo', text: 'A stranger’s fall cost me Tobi at two, and at three, and at four. She didn’t choose me. Nobody chose me. It’s random. It has to be random, or someone is choosing.' },
        { time: '30 Jan', text: 'Found a note in my own handwriting from 2029: “Tobi’s third birthday. The cake shaped like a boat.” I don’t remember the cake. I believe the note.' },
        { time: '3 Feb', text: 'The Office asked me not to publish. [[bar:13|Dr Solvang asked me herself, in her office, with the door shut.]] They said it would cause panic. I said the word they’re avoiding is cost.' },
        { time: '10 Feb', text: 'Publishing tomorrow. 1,140 people. If this goes out they will call her a thief. If it doesn’t, nobody will ever know what they paid.' },
      ] },
      { t: 'figure', img: 'ev-notebook', alt: 'An open spiral notebook under a desk lamp at night, one page dense with handwriting in black ink, an old yellowed note taped to the facing page, reading glasses beside it.', caption: 'Dr Okafor’s notebook, seized 14 February 2033 (reconstruction). The taped note is from 2029.' },
      { t: 'p', voice: 'story', text: 'The paper was published on 11 February 2033. The newspapers called it the Okafor Correlation.' },
    ],
    notes: [
      { after: 0, by: 'Continuity Office, Feb 2033', text: 'Dr Okafor’s question was received on 21 January and not answered, on instruction.' },
      { after: 0, by: 'Continuity Office, Oct 2033', text: '“It starts then.” See [[ref:flor-de-maio|the historical review]].' },
    ],
    connections: [
      { to: 'statement-setubal', note: 'The boy in Alcântara and the boy in Setúbal.' },
      { to: 'flor-de-maio', note: '“Whatever this is, it starts in 2031.” It doesn’t.' },
    ],
  },

  {
    id: 'flor-de-maio',
    ref: 'LETHE-HIS-1970',
    kind: 'Historical review',
    title: 'The Flor de Maio, 1970',
    summary: 'A harbour log from 1970 with every element of the signature. The subject cannot have been there.',
    origin: 'Continuity Office, historical review, with an extract from the Mindelo harbour log',
    classification: 'Secret',
    stamp: 'Secret · LETHE',
    event: { iso: '1970-03-02T23:40', label: '2 March 1970, 23:40' },
    filed: { iso: '2033-10-06', label: '6 October 2033' },
    entered: '6 October 2033',
    translated: 'Log extract and medical note translated from Portuguese by the Office.',
    requires: ['okafor-notes'],
    blocks: [
      { t: 'h', text: 'Harbour log, Mindelo, São Vicente' },
      { t: 'log', caption: 'Watch officer’s entries, night of 2–3 March 1970.', rows: [
        { time: '23:40', text: 'Schooner *Flor de Maio*, inbound in a gale, strikes the reef at the harbour mouth. Seen from the quay to break up.' },
        { time: '23:41', text: 'Watchman reports that for a moment he heard nothing, “not the sea, not the wind,” and that the lamp on the quay “had no colour in it.” He is a reliable man.' },
        { time: '06:10', text: 'Crew of eight lost. One man found on the rocks below the light, unhurt and dry. The priest calls it a miracle.' },
      ] },
      { t: 'figure', img: 'ev-harbour-log', alt: 'An old harbour log book open on a worn desk, its ruled pages filled with faded handwriting, an oil stain and a round ink stamp. Beside it, a small black-and-white photograph of a two-masted schooner at anchor in a calm bay under bare volcanic mountains.', caption: 'The Mindelo harbour log, March 1970, and a photograph of the Flor de Maio found loose between its pages (reconstruction).' },
      { t: 'h', text: 'Harbour doctor’s note, 20 April 1970' },
      { t: 'p', text: 'A. [[bar:5]], fisherman, 32, the survivor of the *Flor de Maio*. Physically well. He does not remember his wedding, or his wife from before it. Everything else he remembers. His wife sings to him in the evenings. He says it is like hearing her for the first time.' },
      { t: 'h', text: 'Review' },
      { t: 'p', text: 'Found during a review of anomalous survivals recorded in Lusophone ports before 2031. The account contains every element of the LETHE signature: a fatal harm reversed, an interval with no sound and no colour, a survivor unhurt, and afterwards the complete loss of one relationship from autobiographical memory.' },
      { t: 'p', text: 'The Office’s working assumption, from LETHE-INC-0001 onward, is that the phenomenon begins with Subject LETHE in 2031. This record is from 1970.' },
      { t: 'p', text: 'Either the account is mistaken, or the phenomenon is older than the subject.' },
      { t: 'p', text: 'Recommendation: extend the review to every port register held. Director’s response: [[bar:14|Do not extend. Close the review and hold this record under my name. I. S.]]' },
      { t: 'sign', name: 'T. Varela', role: 'Archivist, Continuity Office' },
    ],
    notes: [
      { after: 4, by: 'Continuity Office', text: 'Surname redacted: living relatives. Office privacy rules apply.' },
      { after: 6, by: 'Continuity Office', text: 'Compare [[ref:barreiro-nova|LETHE-INC-0001]], 21:14:02: silence, then colour lost.' },
      { after: 7, by: 'Continuity Office', text: 'And [[ref:okafor-notes|Dr Okafor’s notes]], 26 January: “Nothing before May 2031.”' },
    ],
    connections: [
      { to: 'barreiro-nova', note: 'The same signature on the same kind of night, in 1970 and in 2032.' },
      { to: 'okafor-notes', note: 'Her register begins in 2031. This does not.' },
    ],
  },
];

export const byId = (id: string) => records.find((r) => r.id === id);

/** Records in the order their events happened: the archive's chronology. */
export const chronological = [...records].sort((a, b) => a.event.iso.localeCompare(b.event.iso));
