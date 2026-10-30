/**
 * La page d’accueil en français. PREMIÈRE VERSION : à relire par un locuteur natif avant publication (TRANSLATION.md).
 * Écrite avec des espaces ordinaires ; frenchSpacing() pose les espaces insécables.
 */
import type { HomeText } from './en';
import { frenchSpacing } from '../typography';

export const fr: HomeText = frenchSpacing({
  title: 'The God Complex · Dossier LETHE',
  description:
    'Un dossier interactif sur AMNESTY, une femme capable de défaire tout mal qu’elle voit. Chaque sauvetage coûte un souvenir à un inconnu. Un univers original de roman graphique.',
  skip: 'Aller au dossier',

  holdIdle: 'Maintenir pour défaire',
  holdHolding: 'Continuez',
  holdDoneTagus: 'Défait à 21:14',
  holdHint: 'Maintenez le bouton ou l’image enfoncés, ou la barre d’espace, pour défaire le naufrage. Activez « Toucher au lieu de maintenir » dans les réglages pour défaire d’une seule pression.',

  tagusAlt: 'La nuit sur le Tage, dans la tempête. Un ferry blanc est couché sur le flanc, des gens à l’eau. Une femme est agenouillée au bord de l’eau, vue de dos.',
  tagusStamp: '18 juin 2032 · 21:14 · le Tage, Lisbonne',
  tagusBefore: '{n} personnes à l’eau. 41 d’entre elles sont en train de mourir. Vous avez sept minutes.',
  tagusAfterStamp: '21:15',
  tagusAfter: 'Le ferry est droit. Les {n} sont au sec sur le pont, et toutes se souviennent de l’eau.',

  claim: '« Elle peut défaire n’importe quel mal. »',
  claimFootHtml: '<cite>Diário do Tejo</cite>, 19 juin 2032',
  lede: 'La presse l’appelle AMNESTY. Le Bureau de la Continuité l’appelle le sujet LETHE. Ceci est son dossier sur ce qu’elle fait, et sur ce que cela coûte.',
  costPre: 'À 21:14, à trois mille quatre cents kilomètres de là, ',
  costPost: ' a oublié pourquoi c’était un village.',
  costNoscript: 'À 21:14, elle l’a défait. À la même minute, très loin, un village a oublié pourquoi c’était un village.',
  inThisFile: 'Dans ce dossier',
  linkWitnesses: 'Témoignages',
  linkRules: 'Propriétés observées',
  linkRegister: 'Registre des pertes',
  fileRef: 'Bureau de la Continuité, Lisbonne · Dossier LETHE · ouvert le 19 juin 2032',

  morningH: 'Le lendemain matin',
  refused: 'Vous n’avez pas maintenu. Quarante et une personnes se sont noyées à 21:14, et personne, nulle part, n’a rien oublié. Mais elle ne vous a pas attendu : à 21:14, elle a dit oui.',
  paperLabel: 'La une du Diário do Tejo, samedi 19 juin 2032',
  deck: '212 personnes sorties du Tage, indemnes. Aucun témoin ne peut dire qui l’a fait.',
  pullquote: '« Elle peut défaire n’importe quel mal », affirme une femme repêchée dans le fleuve. Page 3.',
  dateline: 'Samedi 19 juin 2032 · Lisbonne',
  after1Html: 'À l’aube, il y avait des bougies le long du fleuve, au Cais do Sodré. Dès le week-end, on l’appelait <span lang="pt">Nossa Senhora do Tejo</span>, Notre-Dame du Tage.',
  after2Html: 'Des mois plus tard, un chroniqueur fit remarquer qu’<em>amnistie</em> et <em>amnésie</em> ont la même racine : le mot grec pour l’oubli. Plus personne ne riait.',

  quiet: '« La seconde la plus silencieuse de ma vie. »',
  quietCiteHtml: 'Une passagère du <cite>Barreiro Nova</cite>, décrivant 21:14 au Bureau de la Continuité',

  figureAlt: 'Un arrêt de tram sous la pluie, la nuit, devant un mur d’azulejos bleus. Une femme dans un long gilet gris-bleu reprisé se tient les mains dans les poches, un vieux casque autour du cou et un badge vide au bout d’un cordon bleu-vert, la tête détournée. Les passants ne la regardent pas.',
  revealH: 'Personne ne peut la décrire',
  revealIntro: 'Cinq personnes l’ont vue défaire le Tage, depuis le quai et depuis le pont du ferry. Voici ce qu’elles ont dit aux enquêteurs cette nuit-là.',
  witnesses: [
    { q: 'Un grand homme en manteau gris. Il s’est agenouillé sur les pierres comme pour prier.', who: 'Témoin 1, Cais do Sodré' },
    { q: 'C’était une jeune fille. Seize ans, peut-être. Elle avait les cheveux dans le visage.', who: 'Témoin 2, pont du ferry' },
    { q: 'Une vieille femme dans un long gilet. Je pourrais le jurer.', who: 'Témoin 3, Cais do Sodré' },
    { q: 'Je l’ai regardée en face pendant une minute entière. Je ne peux rien vous dire.', who: 'Témoin 4, café au bord du fleuve' },
    { q: 'Il y avait un cordon autour du cou. La carte dedans était vierge.', who: 'Témoin 5, pont du ferry' },
  ],
  verdict: 'Chaque témoin se souvient de ce qu’elle a fait. Aucun ne peut vous dire à quoi elle ressemble.',

  cyclistAlt: 'Une rue de Lisbonne sous la pluie, la nuit. Un cycliste est étendu sur les pavés à côté de son vélo, et une femme en gilet gris-bleu est agenouillée, la main posée à plat sur sa poitrine, le visage détourné.',
  cyclistStamp: 'Lisbonne, 2031',
  cyclistCaption: 'Un cycliste, une rue mouillée, une voiture qui ne s’est pas arrêtée.',
  maraAlt: 'La Dr Mara Okafor à son bureau, la nuit, sous une lampe, ses lunettes de lecture relevées dans ses locks, écrivant dans un registre marqué Registry. Une tasse de café froid, des dossiers, et un téléphone avec la photo d’un enfant à côté d’elle.',
  maraName: 'Dr Mara Okafor',
  maraCaption: 'Neurologue. Elle tient le registre de la perte épisodique aiguë.',
  handAlt: 'Une petite chambre, la nuit. Une femme est assise au bord d’un lit étroit, de dos, un casque sur les oreilles, et regarde ce qui est écrit sur le dos de sa main sous une lampe de bureau.',
  handAltPhone: 'Une femme est assise au bord d’un lit étroit, la nuit, de dos, un casque sur les oreilles, et regarde ce qui est écrit sur le dos de sa main sous une lampe de bureau.',
  handCaption: 'Chaque soir, elle l’écrit sur le dos de sa main. Je suis Lua.',

  rulesH: 'Sept minutes et un oui',
  rulesIntro: 'La règle est la même pour une vie que pour un ferry. Essayez encore une fois, sur un mal plus petit.',
  holdCrash: 'Maintenir pour défaire l’accident',
  holdDone: 'Défait',
  crashCost: 'L’accident est défait. Quelque part, quelqu’un a oublié quelque chose du même poids. Cette page aussi. La première légende que vous avez lue dit maintenant :',
  quoted: '{n} personnes à l’eau. 41 d’entre elles sont en train de mourir.',
  slipIntro: 'Ce que le Bureau de la Continuité a pu confirmer. Une partie est caviardée.',
  slipTitle: 'Dossier LETHE · propriétés observées',
  slipSub: 'Bureau de la Continuité, Lisbonne. Révisé en février 2033.',
  slipBefore: 'Avant',
  slipBeforeRows: [
    ['Mal réversible', '7 dernières minutes'],
    ['Portée', 'la vue ou le toucher'],
    ['Agit sur', 'les blessures, pas les maladies'],
  ],
  slipMoment: 'Le moment',
  slipMomentRows: [
    ['Il faut', 'le oui du sujet'],
    ['Son', 'aucun'],
    ['Garde sa couleur', 'le sujet'],
  ],
  slipAfter: 'Après',
  slipAfterRows: [
    ['Les sauvés se souviennent', 'de tout'],
    ['Un inconnu perd', 'un souvenir équivalent'],
    ['Revient', 'jamais'],
  ],
  slipTotalSaved: 'Une vie sauvée',
  slipTotalGone: 'Un souvenir perdu',

  letterH: 'Pourquoi ce dossier est entre vos mains',
  letterFromHtml: 'De la Dr Mara Okafor<br />Lisbonne, 2033',
  letter: [
    'Vous lisez ceci parce que j’ai cessé de faire confiance aux gens pour qui je travaille.',
    'Depuis deux ans, je rassemble les cas d’une chose qui ne devrait pas exister : des adultes en bonne santé qui se réveillent sans un morceau de leur propre vie. Un mari. Une enfance. Les paroles de toutes les chansons que chantait leur mère.',
    'Le Bureau de la Continuité l’appelle le sujet LETHE. Les journaux l’appellent AMNESTY. Je pense à elle chaque fois que mon fils me montre une photo de lui à trois ans et attend que je ressente quelque chose.',
    'Je ne vous demande pas de la haïr. Je vous demande de regarder ce qu’elle coûte, comme j’ai dû le faire.',
  ],
  letterSign: 'Mara Okafor',
  letterRole: 'Neurologue clinicienne, surveillance de la perte épisodique aiguë',

  registerH: 'Perte épisodique aiguë',
  registerNote: 'Registre tenu par la Dr M. Okafor. Des adultes en bonne santé qui ont perdu une part de leur propre passé, soudainement et entièrement. Cause inconnue.',
  registerCaption: 'Une page du registre : cas, lieu, date et heure du début, et ce qui a été perdu.',
  register: [
    {
      group: 'Une personne',
      rows: [
        { place: 'Porto', no: '0117', when: '14 mai 2031 · 17:42', what: 'Sa grand-mère. Tous ses souvenirs d’elle, disparus entre deux phrases.' },
        { place: 'Lyon', no: '0244', when: '3 août 2031 · 09:10', what: 'Son frère jumeau. Il croit que les photos montrent un cousin.' },
        { place: 'Montréal', no: '0301', when: '21 sept. 2031 · 22:05', what: 'Son mari depuis trente et un ans.' },
      ],
    },
    {
      group: 'Une enfance',
      rows: [
        { place: 'Genève', no: '0388', when: '9 oct. 2031 · 08:15', what: 'Les cinq premières années de son fils. C’est elle qui tient ce registre.' },
        { place: 'Recife', no: '0402', when: '30 oct. 2031 · 14:27', what: 'Sa propre enfance, jusqu’à l’âge de onze ans.' },
      ],
    },
    {
      group: 'Un foyer',
      rows: [
        { place: 'Cracovie', no: '0415', when: '12 nov. 2031 · 06:30', what: 'La rue où elle a grandi. Elle l’a descendue le matin même.' },
        { place: 'Luanda', no: '0466', when: '2 janv. 2032 · 19:48', what: 'Le village d’où venait sa famille.' },
        { place: 'Rotterdam', no: '0519', when: '17 mars 2032 · 11:52', what: 'L’appartement où elle a vécu vingt ans.' },
      ],
    },
    {
      group: 'Quelque chose de partagé',
      rows: [
        { place: 'Osaka', no: '0548', when: '26 avr. 2032 · 23:14', what: 'La fête que sa rue donnait chaque mois d’août.' },
        { place: 'Mindelo', no: '0590', when: '30 mai 2032 · 16:02', what: 'Les paroles d’une chanson qu’il chante depuis cinquante ans.' },
      ],
    },
  ],
  withheld: 'Entrée retenue par le Bureau de la Continuité.',
  registerEndHtml: 'Page 1 sur 95 · 1 140 cas à ce jour<br />Une entrée de cette page a été retenue par le Bureau de la Continuité.',

  effectsAlt: 'Des effets personnels disposés comme des pièces à conviction sur un gilet gris-bleu : un porte-badge vide au bout d’un cordon bleu-vert, un carnet noir usé, un stylo bille bleu et un vieux casque de studio dont un écouteur est entouré de ruban adhésif argenté.',
  sealedH: 'Le reste est sous scellés',
  sealedText: 'Cinq autres chapitres du dossier LETHE sont encore sous les scellés du Bureau de la Continuité : qui paie, pourquoi eux, et où tout a commencé. Une partie des pièces a déjà fuité.',
  sealedCta: 'Lire les pièces divulguées',

  badgeAlt: 'Un porte-badge vide au bout d’un cordon bleu-vert, en gros plan : une carte blanche vierge là où devrait se trouver un nom.',
  contentsH: 'Sommaire du dossier',
  chapters: ['La fenêtre', 'AMNESTY', 'Les parasites'],
  sealedChapter: 'Scellé',
  sealedChapterSr: ' (chapitre)',
  releaseH: 'Cette édition',
  release: 'Le prologue, les deux premières parties du dossier et {archive}. Les illustrations sont des recherches graphiques en cours.',
  releaseLink: 'six pièces divulguées',
  settingsH: 'Réglages',
  clear: 'Oublier cette visite et recommencer',
  legal: 'THE GOD COMPLEX est une œuvre de fiction. Toutes les personnes et tous les dossiers sont inventés. Les institutions nommées dans l’histoire sont représentées de manière fictive. Rien de ce que vous faites ici ne quitte ce navigateur.',

  sayTagus: 'Le ferry est droit et tout le monde est au sec sur le pont. À la même minute, très loin, un village a oublié sa propre histoire.',
  sayCyclist: 'L’accident est défait. Quelque part, quelqu’un a oublié quelque chose du même poids, et cette page aussi : le nombre de personnes à l’eau a disparu.',
});
