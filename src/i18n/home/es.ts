/**
 * La página de inicio en español. PRIMERA VERSIÓN: debe revisarla un hablante nativo antes de publicarse (TRANSLATION.md).
 */
import type { HomeText } from './en';

export const es: HomeText = {
  title: 'The God Complex · Caso LETHE',
  description:
    'Un expediente interactivo sobre AMNESTY, una mujer capaz de deshacer cualquier daño que vea. Cada rescate le cuesta un recuerdo a un desconocido. Un universo original de novela gráfica.',
  skip: 'Ir al expediente',

  holdIdle: 'Mantén pulsado para deshacer',
  holdHolding: 'Sigue pulsando',
  holdDoneTagus: 'Deshecho a las 21:14',
  holdHint: 'Mantén pulsado el botón o la imagen, o la barra espaciadora, para deshacer el naufragio. Activa «Tocar en lugar de mantener» en los ajustes para deshacerlo con una sola pulsación.',

  tagusAlt: 'De noche en el Tajo, en plena tormenta. Un ferri blanco está volcado de costado en el río, con gente en el agua. Una mujer está arrodillada en la orilla, de espaldas.',
  tagusStamp: '18 de junio de 2032 · 21:14 · el Tajo, Lisboa',
  tagusBefore: '{n} personas en el agua. 41 de ellas se están muriendo. Tienes siete minutos.',
  tagusAfterStamp: '21:15',
  tagusAfter: 'El ferri está a flote. Las {n} están secas en cubierta, y todas recuerdan el agua.',

  claim: '«Puede deshacer cualquier daño».',
  claimFootHtml: '<cite>Diário do Tejo</cite>, 19 de junio de 2032',
  lede: 'La prensa la llama AMNESTY. La Oficina de Continuidad la llama Sujeto LETHE. Este es su expediente sobre lo que hace, y sobre lo que cuesta.',
  costPre: 'A las 21:14, a tres mil cuatrocientos kilómetros de allí, ',
  costPost: ' olvidó por qué era un pueblo.',
  costNoscript: 'A las 21:14 ella lo deshizo. En el mismo minuto, muy lejos, un pueblo olvidó por qué era un pueblo.',
  inThisFile: 'En este expediente',
  linkWitnesses: 'Declaraciones de testigos',
  linkRules: 'Propiedades observadas',
  linkRegister: 'Registro de pérdidas',
  fileRef: 'Oficina de Continuidad, Lisboa · Caso LETHE · abierto el 19 de junio de 2032',

  morningH: 'A la mañana siguiente',
  refused: 'No mantuviste pulsado. Cuarenta y una personas se ahogaron a las 21:14, y nadie, en ninguna parte, olvidó nada. Pero ella no te esperó: a las 21:14 dijo que sí.',
  paperLabel: 'Portada del Diário do Tejo, sábado 19 de junio de 2032',
  deck: '212 personas rescatadas del Tajo, ilesas. Ni un solo testigo sabe decir quién lo hizo.',
  pullquote: '«Puede deshacer cualquier daño», dice una mujer a la que sacaron del río. Página 3.',
  dateline: 'Sábado, 19 de junio de 2032 · Lisboa',
  after1Html: 'Al amanecer había velas a lo largo del río, en Cais do Sodré. Ese fin de semana ya la llamaban <span lang="pt">Nossa Senhora do Tejo</span>, Nuestra Señora del Tajo.',
  after2Html: 'Meses después, un columnista señaló que <em>amnistía</em> y <em>amnesia</em> comparten raíz: la palabra griega para el olvido. Para entonces nadie se reía.',

  quiet: '«El segundo más silencioso de mi vida».',
  quietCiteHtml: 'Una pasajera del <cite>Barreiro Nova</cite>, describiendo las 21:14 a la Oficina de Continuidad',

  figureAlt: 'Una parada de tranvía bajo la lluvia, de noche, junto a una pared de azulejos azules. Una mujer con una larga chaqueta de punto gris azulada y zurcida está de pie con las manos en los bolsillos, unos auriculares viejos al cuello y una acreditación vacía colgada de un cordón verde azulado, la cabeza vuelta. La gente pasa sin mirarla.',
  revealH: 'Nadie puede describirla',
  revealIntro: 'Cinco personas la vieron deshacer lo del Tajo, desde el muelle y desde la cubierta del ferri. Esto es lo que dijeron a los investigadores esa noche.',
  witnesses: [
    { q: 'Un hombre alto con un abrigo gris. Se arrodilló en las piedras como si rezara.', who: 'Testigo 1, Cais do Sodré' },
    { q: 'Era una chica. Dieciséis años, quizá. Tenía el pelo en la cara.', who: 'Testigo 2, cubierta del ferri' },
    { q: 'Una anciana con una chaqueta de punto larga. Lo juraría.', who: 'Testigo 3, Cais do Sodré' },
    { q: 'La miré de frente durante un minuto entero. No sabría decirle nada.', who: 'Testigo 4, café junto al río' },
    { q: 'Llevaba un cordón al cuello. La tarjeta estaba en blanco.', who: 'Testigo 5, cubierta del ferri' },
  ],
  verdict: 'Todos los testigos recuerdan lo que hizo. Ninguno sabe decirte cómo es.',

  cyclistAlt: 'Una calle de Lisboa bajo la lluvia, de noche. Un ciclista yace sobre los adoquines junto a su bicicleta, y una mujer con una chaqueta de punto gris azulada está arrodillada con la mano apoyada en su pecho, el rostro vuelto.',
  cyclistStamp: 'Lisboa, 2031',
  cyclistCaption: 'Un ciclista, una calle mojada, un coche que no paró.',
  maraAlt: 'La Dra. Mara Okafor en su escritorio, de noche, bajo una lámpara, con las gafas de leer subidas entre sus rastas, escribiendo en un libro de registro marcado Registry. Una taza de café frío, carpetas de casos y un móvil con la foto de un niño a su lado.',
  maraName: 'Dra. Mara Okafor',
  maraCaption: 'Neuróloga. Autora del registro de la pérdida episódica aguda.',
  handAlt: 'Una habitación pequeña, de noche. Una mujer está sentada al borde de una cama estrecha, de espaldas, con los auriculares puestos, mirando lo que tiene escrito en el dorso de la mano bajo una lámpara de escritorio.',
  handAltPhone: 'Una mujer sentada al borde de una cama estrecha, de noche, de espaldas, con los auriculares puestos, mirando lo que tiene escrito en el dorso de la mano bajo una lámpara de escritorio.',
  handCaption: 'Cada noche se lo escribe en el dorso de la mano. Soy Lua.',

  rulesH: 'Siete minutos y un sí',
  rulesIntro: 'La regla es la misma para una vida que para un ferri. Pruébalo una vez más, con un daño más pequeño.',
  holdCrash: 'Mantén pulsado para deshacer el choque',
  holdDone: 'Deshecho',
  crashCost: 'El choque está deshecho. En algún lugar, alguien olvidó algo del mismo peso. Esta página también. El primer pie de foto que leíste ahora dice:',
  quoted: '{n} personas en el agua. 41 de ellas se están muriendo.',
  slipIntro: 'Lo que la Oficina de Continuidad pudo confirmar. Una parte está tachada.',
  slipTitle: 'Caso LETHE · propiedades observadas',
  slipSub: 'Oficina de Continuidad, Lisboa. Revisado en febrero de 2033.',
  slipBefore: 'Antes',
  slipBeforeRows: [
    ['Daño reversible', 'últimos 7 minutos'],
    ['Alcance', 'la vista o el tacto'],
    ['Actúa sobre', 'lesiones, no enfermedades'],
  ],
  slipMoment: 'El momento',
  slipMomentRows: [
    ['Requiere', 'el sí del sujeto'],
    ['Sonido', 'ninguno'],
    ['Conserva su color', 'el sujeto'],
  ],
  slipAfter: 'Después',
  slipAfterRows: [
    ['Los salvados recuerdan', 'todo'],
    ['Un desconocido pierde', 'un recuerdo equivalente'],
    ['Vuelve', 'nunca'],
  ],
  slipTotalSaved: 'Una vida salvada',
  slipTotalGone: 'Un recuerdo perdido',

  letterH: 'Por qué tienes este expediente',
  letterFromHtml: 'De la Dra. Mara Okafor<br />Lisboa, 2033',
  letter: [
    'Estás leyendo esto porque he dejado de confiar en la gente para la que trabajo.',
    'Durante dos años he reunido casos de algo que no debería existir: adultos sanos que se despiertan sin un pedazo de su propia vida. Un marido. Una infancia. La letra de todas las canciones que cantaba su madre.',
    'La Oficina de Continuidad la llama Sujeto LETHE. Los periódicos la llaman AMNESTY. Pienso en ella cada vez que mi hijo me enseña una foto suya con tres años y espera a que yo sienta algo.',
    'No te pido que la odies. Te pido que mires lo que cuesta, como he tenido que hacerlo yo.',
  ],
  letterSign: 'Mara Okafor',
  letterRole: 'Neuróloga clínica, vigilancia de la pérdida episódica aguda',

  registerH: 'Pérdida episódica aguda',
  registerNote: 'Registro elaborado por la Dra. M. Okafor. Adultos sanos que perdieron una parte de su propio pasado, de golpe y por completo. Causa desconocida.',
  registerCaption: 'Una página del registro: caso, lugar, fecha y hora de inicio, y lo que se perdió.',
  register: [
    {
      group: 'Una persona',
      rows: [
        { place: 'Oporto', no: '0117', when: '14 may 2031 · 17:42', what: 'Su abuela. Todos sus recuerdos de ella, desaparecidos entre dos frases.' },
        { place: 'Lyon', no: '0244', when: '3 ago 2031 · 09:10', what: 'Su hermano gemelo. Cree que las fotos muestran a un primo.' },
        { place: 'Montreal', no: '0301', when: '21 sept 2031 · 22:05', what: 'Su marido desde hacía treinta y un años.' },
      ],
    },
    {
      group: 'Una infancia',
      rows: [
        { place: 'Ginebra', no: '0388', when: '9 oct 2031 · 08:15', what: 'Los cinco primeros años de su hijo. Ella elaboró este registro.' },
        { place: 'Recife', no: '0402', when: '30 oct 2031 · 14:27', what: 'Su propia infancia, hasta los once años.' },
      ],
    },
    {
      group: 'Un hogar',
      rows: [
        { place: 'Cracovia', no: '0415', when: '12 nov 2031 · 06:30', what: 'La calle donde creció. Había pasado por ella esa misma mañana.' },
        { place: 'Luanda', no: '0466', when: '2 ene 2032 · 19:48', what: 'El pueblo del que venía su familia.' },
        { place: 'Róterdam', no: '0519', when: '17 mar 2032 · 11:52', what: 'El piso en el que vivió veinte años.' },
      ],
    },
    {
      group: 'Algo compartido',
      rows: [
        { place: 'Osaka', no: '0548', when: '26 abr 2032 · 23:14', what: 'La fiesta que su calle celebraba cada agosto.' },
        { place: 'Mindelo', no: '0590', when: '30 may 2032 · 16:02', what: 'La letra de una canción que lleva cincuenta años cantando.' },
      ],
    },
  ],
  withheld: 'Entrada retenida por la Oficina de Continuidad.',
  registerEndHtml: 'Página 1 de 95 · 1140 casos hasta la fecha<br />Una entrada de esta página ha sido retenida por la Oficina de Continuidad.',

  effectsAlt: 'Efectos personales dispuestos como pruebas sobre una chaqueta de punto gris azulada: un portatarjetas vacío en un cordón verde azulado, un cuaderno negro gastado, un bolígrafo azul y unos viejos auriculares de estudio con un auricular envuelto en cinta plateada.',
  sealedH: 'El resto está sellado',
  sealedText: 'Otros cinco capítulos del caso LETHE siguen bajo el sello de la Oficina de Continuidad: quién paga, por qué ellos y dónde empezó todo. Parte de las pruebas ya se ha filtrado.',
  sealedCta: 'Leer los documentos filtrados',

  badgeAlt: 'Un portatarjetas vacío en un cordón verde azulado, en primer plano: una tarjeta blanca en blanco donde debería haber un nombre.',
  contentsH: 'Índice del caso',
  chapters: ['La ventana', 'AMNESTY', 'La estática'],
  sealedChapter: 'Sellado',
  sealedChapterSr: ' (capítulo)',
  releaseH: 'Esta edición',
  release: 'El prólogo, las dos primeras partes del expediente y {archive}. Las ilustraciones son arte conceptual en desarrollo.',
  releaseLink: 'seis documentos filtrados',
  settingsH: 'Ajustes',
  clear: 'Olvidar esta visita y empezar de nuevo',
  legal: 'THE GOD COMPLEX es una obra de ficción. Todas las personas y los expedientes son inventados. Las instituciones mencionadas en la historia se presentan de forma ficticia. Nada de lo que hagas aquí sale de este navegador.',

  sayTagus: 'El ferri está a flote y todos en cubierta están secos. En el mismo minuto, muy lejos, un pueblo olvidó su propia historia.',
  sayCyclist: 'El choque está deshecho. En algún lugar, alguien olvidó algo del mismo peso, y esta página también: el número de personas en el agua ha desaparecido.',
};
