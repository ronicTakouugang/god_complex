/**
 * The homepage in English: the source text every translation follows.
 * `{n}` marks where the forgettable number sits in a sentence. Strings ending in Html carry inline markup.
 */
export const en = {
  title: 'The God Complex · Case LETHE',
  description:
    'An interactive case file on AMNESTY, a woman who can undo any harm she sees. Every rescue costs a stranger a memory. An original graphic-novel universe.',
  skip: 'Skip to the case file',

  holdIdle: 'Hold to undo',
  holdHolding: 'Keep holding',
  holdDoneTagus: 'Undone at 21:14',
  holdHint: 'Press and hold the button or the picture, or hold the Space key, to undo the capsizing. Turn on “Tap instead of hold” in the settings to undo with one press.',

  tagusAlt: "Night on the Tagus in a storm. A white ferry lies on its side in the river with people in the water. A woman kneels at the water's edge, seen from behind.",
  tagusStamp: '18 June 2032 · 21:14 · the Tagus, Lisbon',
  tagusBefore: '{n} people in the water. 41 of them are dying. You have seven minutes.',
  tagusAfterStamp: '21:15',
  tagusAfter: 'The ferry is upright. All {n} of them are dry on deck, and they all remember the water.',

  claim: '“She can undo any harm.”',
  claimFootHtml: '<cite>Diário do Tejo</cite>, 19 June 2032',
  lede: 'The press call her AMNESTY. The Continuity Office calls her Subject LETHE. This is its file on what she does, and on what it costs.',
  // The village line is typed letter by letter and forgotten halfway through the name, which stays in Portuguese.
  costPre: 'At 21:14, three thousand four hundred kilometres away, ',
  costPost: ' forgot why it was a village.',
  costNoscript: 'At 21:14 she undid it. At the same minute, far away, a village forgot why it was a village.',
  inThisFile: 'In this file',
  linkWitnesses: 'Witness statements',
  linkRules: 'Observed properties',
  linkRegister: 'Register of losses',
  fileRef: 'Continuity Office, Lisbon · Case LETHE · opened 19 June 2032',

  morningH: 'The morning after',
  refused: 'You didn’t hold. Forty-one people drowned at 21:14, and no one, anywhere, forgot anything. But she didn’t wait for you: at 21:14 she said yes.',
  paperLabel: 'Front page of the Diário do Tejo, Saturday 19 June 2032',
  deck: '212 people pulled from the Tagus, unhurt. Not one witness can say who did it.',
  pullquote: '“She can undo any harm,” says a woman who was pulled from the river. Page 3.',
  dateline: 'Saturday, 19 June 2032 · Lisbon',
  after1Html: 'By dawn there were candles along the river at Cais do Sodré. By the weekend people were calling her <span lang="pt">Nossa Senhora do Tejo</span>, Our Lady of the Tagus.',
  after2Html: 'Months later, a columnist pointed out that <em>amnesty</em> and <em>amnesia</em> share a root: the Greek word for forgetting. By then nobody was laughing.',

  quiet: '“The quietest second of my life.”',
  quietCiteHtml: 'A passenger on the <cite>Barreiro Nova</cite>, describing 21:14 to the Continuity Office',

  figureAlt: 'A rainy tram stop at night under a wall of blue tiles. A woman in a long, darned grey-blue cardigan stands with her hands in her pockets, old headphones round her neck and an empty badge on a teal lanyard, her head turned away. People walk past without looking at her.',
  revealH: 'Nobody can describe her',
  revealIntro: 'Five people saw her undo the Tagus, from the quay and from the ferry’s deck. This is what they told investigators that night.',
  witnesses: [
    { q: 'A tall man in a grey coat. He knelt on the stones like he was praying.', who: 'Witness 1, Cais do Sodré' },
    { q: 'She was a girl. Sixteen, maybe. Her hair was in her face.', who: 'Witness 2, ferry deck' },
    { q: 'An old woman in a long cardigan. I would swear to it.', who: 'Witness 3, Cais do Sodré' },
    { q: 'I looked straight at her for a whole minute. I can’t tell you one thing.', who: 'Witness 4, riverside café' },
    { q: 'There was a lanyard round the neck. The card in it was blank.', who: 'Witness 5, ferry deck' },
  ],
  verdict: 'Every witness remembers what she did. None of them can tell you what she looks like.',

  cyclistAlt: 'A rainy Lisbon street at night. A cyclist lies on the cobbles beside his bike, and a woman in a grey-blue cardigan kneels with her hand flat on his chest, her face turned away.',
  cyclistStamp: 'Lisbon, 2031',
  cyclistCaption: 'A cyclist, a wet street, a car that didn’t stop.',
  maraAlt: 'Dr Mara Okafor at her desk at night under a lamp, reading glasses pushed up into her locs, writing in a ledger marked Registry. A cold mug of coffee, case files, and a phone with a child’s photo beside her.',
  maraName: 'Dr Mara Okafor',
  maraCaption: 'Neurologist. Compiler of the register of Acute Episodic Loss.',
  handAlt: 'A small room at night. A woman sits on the edge of a narrow bed with her back to us, headphones on, looking at writing on the back of her hand under a desk lamp.',
  handAltPhone: 'A woman sits on the edge of a narrow bed at night with her back to us, headphones on, looking at writing on the back of her hand under a desk lamp.',
  handCaption: 'Every night she writes it on the back of her hand. I am Lua.',

  rulesH: 'Seven minutes and a yes',
  rulesIntro: 'The rule is the same for one life as for a ferry. Try it once more, on a smaller harm.',
  holdCrash: 'Hold to undo the crash',
  holdDone: 'Undone',
  crashCost: 'The crash is undone. Somewhere, someone forgot something of the same weight. So did this page. The first caption you read now says:',
  quoted: '{n} people in the water. 41 of them are dying.',
  slipIntro: 'What the Continuity Office could confirm. Part of it is redacted.',
  slipTitle: 'Case LETHE · observed properties',
  slipSub: 'Continuity Office, Lisbon. Revised February 2033.',
  slipBefore: 'Before',
  slipBeforeRows: [
    ['Undoable harm', 'last 7 minutes'],
    ['Reach', 'sight or touch'],
    ['Works on', 'injury, not illness'],
  ],
  slipMoment: 'The moment',
  slipMomentRows: [
    ['Needs', 'the subject’s yes'],
    ['Sound', 'none'],
    ['Keeps its colour', 'the subject'],
  ],
  slipAfter: 'After',
  slipAfterRows: [
    ['The saved remember', 'everything'],
    ['A stranger loses', 'an equal memory'],
    ['Comes back', 'never'],
  ],
  slipTotalSaved: 'One life saved',
  slipTotalGone: 'One memory gone',

  letterH: 'Why you have this file',
  letterFromHtml: 'From Dr Mara Okafor<br />Lisbon, 2033',
  letter: [
    'You’re reading this because I’ve stopped trusting the people I work for.',
    'For two years I’ve collected cases of something that shouldn’t exist: healthy adults who wake up without one piece of their own life. A husband. A childhood. The words to every song their mother sang.',
    'The Continuity Office calls her Subject LETHE. The newspapers call her AMNESTY. I think of her every time my son shows me a photograph of himself at three and waits for me to feel something.',
    'I’m not asking you to hate her. I’m asking you to look at what she costs, the way I’ve had to.',
  ],
  letterSign: 'Mara Okafor',
  letterRole: 'Clinical neurologist, Acute Episodic Loss surveillance',

  registerH: 'Acute Episodic Loss',
  registerNote: 'Register compiled by Dr M. Okafor. Healthy adults who lost one part of their own past, suddenly and completely. Cause unknown.',
  registerCaption: 'A page of the register: case, place, date and time of onset, and what was lost.',
  // Places stay as written in the register; `when` is "date · time".
  register: [
    {
      group: 'A person',
      rows: [
        { place: 'Porto', no: '0117', when: '14 May 2031 · 17:42', what: 'Her grandmother. Every memory of her, gone between two sentences.' },
        { place: 'Lyon', no: '0244', when: '3 Aug 2031 · 09:10', what: 'His twin brother. He thinks the photographs show a cousin.' },
        { place: 'Montréal', no: '0301', when: '21 Sep 2031 · 22:05', what: 'Her husband of thirty-one years.' },
      ],
    },
    {
      group: 'A childhood',
      rows: [
        { place: 'Geneva', no: '0388', when: '9 Oct 2031 · 08:15', what: 'Her son’s first five years. She compiled this register.' },
        { place: 'Recife', no: '0402', when: '30 Oct 2031 · 14:27', what: 'His own childhood, up to the age of eleven.' },
      ],
    },
    {
      group: 'A home',
      rows: [
        { place: 'Kraków', no: '0415', when: '12 Nov 2031 · 06:30', what: 'The street she grew up on. She walked down it the same morning.' },
        { place: 'Luanda', no: '0466', when: '2 Jan 2032 · 19:48', what: 'The village his family came from.' },
        { place: 'Rotterdam', no: '0519', when: '17 Mar 2032 · 11:52', what: 'The flat she lived in for twenty years.' },
      ],
    },
    {
      group: 'Something shared',
      rows: [
        { place: 'Osaka', no: '0548', when: '26 Apr 2032 · 23:14', what: 'The festival her street held every August.' },
        { place: 'Mindelo', no: '0590', when: '30 May 2032 · 16:02', what: 'The words of a song he has sung for fifty years.' },
      ],
    },
  ],
  withheld: 'Entry withheld by the Continuity Office.',
  registerEndHtml: 'Page 1 of 95 · 1,140 cases to date<br />One entry on this page has been withheld by the Continuity Office.',

  effectsAlt: 'Personal effects laid out like evidence on a grey-blue cardigan: an empty badge holder on a teal lanyard, a worn black notebook, a blue ballpoint, and old studio headphones with one cup wrapped in silver tape.',
  sealedH: 'The rest is sealed',
  sealedText: 'Five more chapters of Case LETHE are still under the Continuity Office’s seal: who pays, why them, and where it began. Some of the evidence has already leaked.',
  sealedCta: 'Read the leaked records',

  badgeAlt: 'An empty badge holder on a teal lanyard, close up: a blank white card where a name should be.',
  contentsH: 'Case contents',
  chapters: ['The window', 'AMNESTY', 'The static'],
  sealedChapter: 'Sealed',
  sealedChapterSr: ' chapter',
  releaseH: 'This release',
  // {archive} becomes a link to the archive.
  release: 'The prologue, the first two parts of the file, and {archive}. The illustrations are working concept art.',
  releaseLink: 'six leaked records',
  settingsH: 'Settings',
  clear: 'Forget this visit and start again',
  legal: 'THE GOD COMPLEX is a work of fiction. All persons and case files are invented. Institutions named in the story are portrayed fictionally. Nothing you do here leaves this browser.',

  // Spoken to screen readers when a cost lands.
  sayTagus: 'The ferry is upright and everyone on deck is dry. At the same minute, far away, a village forgot its own history.',
  sayCyclist: 'The crash is undone. Somewhere, someone forgot something of the same weight, and so did this page: the number of people in the water is gone.',
};

export type HomeText = typeof en;
