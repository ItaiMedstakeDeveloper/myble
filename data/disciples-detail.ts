/**
 * Extended, disciple-only content shown on the figure detail screen.
 *
 * The generic `Figure` shape (see data/figures.ts) carries just enough for the
 * shared card + detail layout used by every category. Disciples get this richer
 * biography on top, keyed by the same figure `id`. Fields tagged as
 * `source_type: tradition` in the source data are noted so the UI can flag that
 * they come from church tradition rather than scripture.
 */

import type { Lang } from '@/data/figures';

export type Bilingual = Record<Lang, string>;

export type DiscipleDetail = {
  alsoKnownAs: string;
  occupation: Bilingual;
  calling: Bilingual;
  keyRole: Bilingual;
  notableMoment: Bilingual;
  traditionAfter: Bilingual;
  /** True when `traditionAfter` comes from church tradition, not scripture. */
  traditionSourced: boolean;
  reference: string;
};

/** Shown once on the screen to explain the tradition vs. scripture distinction. */
export const SOURCE_NOTE: Bilingual = {
  en: "Sections marked “Tradition” come from early church history and tradition, not the Bible itself, and vary between sources.",
  sn: "Zvikamu zvine “Tsika” zvinobva munhoroondo yechechi yekutanga netsika, kwete muBhaibheri chairo, uye zvinosiyana pane zvinyorwa zvakasiyana.",
};

export const DISCIPLE_DETAILS: Record<string, DiscipleDetail> = {
  'simon-peter': {
    alsoKnownAs: 'Cephas / Simon Bar-Jonah',
    occupation: { en: 'Fisherman', sn: 'Muredzi wehove' },
    calling: {
      en: 'Called by Jesus while fishing on the Sea of Galilee with his brother Andrew.',
      sn: 'Akadanwa naJesu paairedza paGungwa reGarirea nemukoma wake Andiriya.',
    },
    keyRole: {
      en: 'Recognized as the leader among the twelve; the first to confess Jesus as the Christ; became a foundational leader of the early church.',
      sn: 'Aizivikanwa somutungamiri pakati pevanegumi nevaviri; ndiye wekutanga kupupura kuti Jesu ndiye Kristu; akava mutungamiri anokosha wechechi yekutanga.',
    },
    notableMoment: {
      en: 'Denied knowing Jesus three times before the rooster crowed, then was restored by Jesus after the resurrection.',
      sn: 'Akaramba katatu kuti anoziva Jesu jongwe risati rarira, asi akadzoreredzwa naJesu mushure mekumuka kwake.',
    },
    traditionAfter: {
      en: 'Tradition holds he ministered in Rome and was crucified upside down, feeling unworthy to die in the same manner as Jesus.',
      sn: 'Tsika inoti akashumira muRoma uye akarovererwa pamuchinjikwa akaiswa nemusoro pasi, achinzwa kusakodzera kufa nenzira imwecheteyo naJesu.',
    },
    traditionSourced: true,
    reference: 'Matthew 4:18-20, Matthew 16:16-18, John 21:15-19',
  },
  andrew: {
    alsoKnownAs: 'Brother of Simon Peter',
    occupation: { en: 'Fisherman', sn: 'Muredzi wehove' },
    calling: {
      en: 'Originally a disciple of John the Baptist; was among the first to follow Jesus and brought his brother Peter to Him.',
      sn: 'Aitanga ari mudzidzi waJohani Mubhabhatidzi; aive mumwe wevekutanga kutevera Jesu uye akauyisa mukoma wake Petro kwaari.',
    },
    keyRole: {
      en: 'Known for introducing others to Jesus, including the boy with five loaves and two fish before the feeding of the five thousand.',
      sn: 'Aizivikanwa nekusanganisira vamwe naJesu, kusanganisira mukomana aiva nezvingwa zvishanu nehove mbiri vasati vagutswa vanhu zviuru zvishanu.',
    },
    notableMoment: {
      en: 'Pointed out the boy with the loaves and fish to Jesus before the miraculous feeding of the crowd.',
      sn: 'Akaratidza Jesu mukomana aiva nezvingwa nehove chiitiko chinoshamisa chekugutsa vanhu vazhinji chisati chaitika.',
    },
    traditionAfter: {
      en: 'Tradition says he preached around the Black Sea region and was crucified on an X-shaped cross in Greece.',
      sn: 'Tsika inoti akaparidza munzvimbo dzakapoteredza Gungwa Dema uye akarovererwa pamuchinjikwa wakaita seX kuGirisi.',
    },
    traditionSourced: true,
    reference: 'John 1:35-42, John 6:8-9',
  },
  'james-zebedee': {
    alsoKnownAs: 'James the Greater',
    occupation: { en: 'Fisherman', sn: 'Muredzi wehove' },
    calling: {
      en: "Called along with his brother John while mending nets in their father's boat.",
      sn: "Akadanwa pamwe nemukoma/munin'ina wake Johani vachigadzira mimbure mugwa rababa vavo.",
    },
    keyRole: {
      en: "Part of Jesus' inner circle of three, present at key moments such as the Transfiguration and Gethsemane.",
      sn: 'Aiva mumwe wevatatu vaiva pedyo naJesu, aivapo panguva dzinokosha dzakaita seKushandurwa Chimiro uye muGetsemane.',
    },
    notableMoment: {
      en: "He and John were nicknamed 'Sons of Thunder' by Jesus, reflecting their fiery temperament.",
      sn: "Iye naJohani vakatumidzwa zita rekuti 'Vanakomana veKutinhira' naJesu, zvichiratidza hunhu hwavo hwekushingaira.",
    },
    traditionAfter: {
      en: 'The first apostle to be martyred; put to death by King Herod Agrippa I, as recorded in the book of Acts.',
      sn: 'Ndiye mupostori wekutanga kufa nokuda kwerutendo; akaurayiwa naMambo Herodhi Agripa I, sezvakanyorwa mubhuku raMabasa.',
    },
    traditionSourced: false,
    reference: 'Mark 3:17, Mark 5:37, Acts 12:1-2',
  },
  john: {
    alsoKnownAs: 'The Beloved Disciple',
    occupation: { en: 'Fisherman', sn: 'Muredzi wehove' },
    calling: {
      en: 'Called together with his brother James while working as fishermen on the Sea of Galilee.',
      sn: 'Akadanwa pamwe nemukoma wake Jakobho vachishanda saveredzi vehove paGungwa reGarirea.',
    },
    keyRole: {
      en: 'Traditionally credited with writing the Gospel of John, three epistles, and the book of Revelation; described as the disciple Jesus loved.',
      sn: 'Anonzi ndiye akanyora Evhangeri yaJohani, tsamba nhatu, uye bhuku raZvakazarurwa; anotsanangurwa somudzidzi Jesu waaida.',
    },
    notableMoment: {
      en: 'Was entrusted by Jesus, while on the cross, with the care of His mother Mary.',
      sn: 'Akapiwa naJesu, ari pamuchinjikwa, basa rekuchengeta amai vake Maria.',
    },
    traditionAfter: {
      en: 'Tradition holds he is the only apostle believed to have died of natural causes, in old age at Ephesus, after a period of exile on the island of Patmos.',
      sn: 'Tsika inoti ndiye pastori mumwe chete anonzi akazofa nekusaziva basa rechisikirwo, ave mutana kuEfeso, mushure mekutapwa panzvimbo yeParimo.',
    },
    traditionSourced: true,
    reference: 'John 19:26-27, John 21:20-24',
  },
  philip: {
    alsoKnownAs: '',
    occupation: { en: 'Unknown; from Bethsaida', sn: 'Hazvizivikanwe; aibva kuBhetesaidha' },
    calling: {
      en: 'Called directly by Jesus in Galilee, and immediately went to bring his friend Nathanael to meet Him.',
      sn: 'Akadanwa naJesu chaiye kuGarirea, uye pakarepo akaenda kunotora shamwari yake Natanieri kuti azosangana naye.',
    },
    keyRole: {
      en: 'Practical-minded; asked Jesus how to feed the five thousand and later asked Jesus to show the disciples the Father.',
      sn: 'Aive nemafungiro echokwadi; akabvunza Jesu kuti vaigutsa sei vanhu zviuru zvishanu uye gare gare akakumbira Jesu kuti aratidze vadzidzi Baba.',
    },
    notableMoment: {
      en: 'Brought Greek visitors who wanted to see Jesus during the final Passover week.',
      sn: 'Akaunza vaGiriki vaida kuona Jesu muvhiki repekupedzisira rePasika.',
    },
    traditionAfter: {
      en: 'Tradition holds he preached in Phrygia (modern Turkey) and was martyred there.',
      sn: 'Tsika inoti akaparidza kuFrigiya (Turkey yemazuva ano) uye akafira ikoko.',
    },
    traditionSourced: true,
    reference: 'John 1:43-46, John 6:5-7, John 12:20-22',
  },
  bartholomew: {
    alsoKnownAs: 'Nathanael',
    occupation: { en: 'Unknown; from Cana in Galilee', sn: 'Hazvizivikanwe; aibva kuKana muGarirea' },
    calling: {
      en: 'Brought to Jesus by his friend Philip, initially skeptical that anything good could come from Nazareth.',
      sn: 'Akaunzwa kuna Jesu neshamwari yake Firipi, pakutanga aiva nekusabvuma kuti chinhu chakanaka chingabva kuNazareta.',
    },
    keyRole: {
      en: "Jesus praised him as 'a true Israelite, in whom there is no deceit,' after which Nathanael declared Him the Son of God.",
      sn: "Jesu akamurumbidza kuti 'muIsraeri chaiye, asina unyengeri,' mushure mezvo Natanieri akati ndiye Mwanakomana waMwari.",
    },
    notableMoment: {
      en: 'Was one of the disciples present when Jesus appeared at the Sea of Galilee after the resurrection.',
      sn: 'Aiva mumwe wevadzidzi vaivapo apo Jesu akazviratidza paGungwa reGarirea mushure mekumuka.',
    },
    traditionAfter: {
      en: 'Tradition says he took the gospel to India and Armenia and was martyred, according to some accounts by being skinned alive.',
      sn: 'Tsika inoti akaenda kuIndia neArimeniya achiparidza vhangeri uye akafira ikoko, zvimwe zvinyorwa zvichitaura kuti akaburutswa ganda ari mupenyu.',
    },
    traditionSourced: true,
    reference: 'John 1:45-51, John 21:2',
  },
  thomas: {
    alsoKnownAs: 'Didymus (the Twin)',
    occupation: { en: 'Unknown', sn: 'Hazvizivikanwe' },
    calling: {
      en: 'One of the twelve chosen by Jesus; little is recorded of his calling specifically.',
      sn: 'Mumwe wevanegumi nevaviri vakasarudzwa naJesu; hapana zvakawanda zvakanyorwa nezvekudanwa kwake chaiko.',
    },
    keyRole: {
      en: "Known for doubting the other disciples' report of the resurrection until he saw and touched Jesus' wounds himself.",
      sn: 'Anozivikanwa nekusabvuma mashoko evamwe vadzidzi ekuti Jesu amuka kusvikira aona uye abata maronda aJesu iye pachake.',
    },
    notableMoment: {
      en: "Upon seeing the risen Jesus, declared 'My Lord and my God,' one of the clearest confessions of Jesus' divinity in the Gospels.",
      sn: "Paakaona Jesu amuka, akati 'Ishe wangu naMwari wangu,' rimwe remazwi anoratidza pachena hunaMwari hwaJesu muEvhangeri.",
    },
    traditionAfter: {
      en: 'Tradition holds he traveled as far as India, establishing churches there, and was martyred near Chennai.',
      sn: 'Tsika inoti akafamba kusvika kuIndia, achivaka machechi ikoko, uye akafira pedyo neChennai.',
    },
    traditionSourced: true,
    reference: 'John 11:16, John 20:24-29',
  },
  matthew: {
    alsoKnownAs: 'Levi',
    occupation: { en: 'Tax collector', sn: 'Muteresi' },
    calling: {
      en: "Called by Jesus while sitting at his tax collector's booth, a profession despised by fellow Jews at the time.",
      sn: 'Akadanwa naJesu agere pachigaro chake chekutera, basa raizvidzwa nevamwe vaJudha panguva iyoyo.',
    },
    keyRole: {
      en: 'Traditionally credited as the author of the Gospel of Matthew, which presents Jesus as the fulfillment of Jewish prophecy.',
      sn: 'Anonzi ndiye akanyora Evhangeri yaMatewu, inoratidza Jesu sekuzadzikiswa kwezvakaporofitwa muchiJudha.',
    },
    notableMoment: {
      en: 'Hosted a large feast at his house for Jesus, inviting fellow tax collectors and sinners, drawing criticism from religious leaders.',
      sn: 'Akaita mabiko makuru kumba kwake nokuda kwaJesu, achikoka vamwe vateresi nevatadzi, izvo zvakatsoropodzwa nevatungamiriri verudzidziso.',
    },
    traditionAfter: {
      en: 'Tradition suggests he ministered in Ethiopia or Persia, though accounts of his death vary widely between sources.',
      sn: 'Tsika inoratidza kuti akashumira kuEtiopia kana Peresia, kunyange zvazvo zvinyorwa zvekufa kwake zvichisiyana zvikuru pakati pemabhuku akasiyana.',
    },
    traditionSourced: true,
    reference: 'Matthew 9:9-13',
  },
  'james-alphaeus': {
    alsoKnownAs: 'James the Lesser',
    occupation: { en: 'Unknown', sn: 'Hazvizivikanwe' },
    calling: {
      en: 'One of the twelve chosen by Jesus, though the Gospels record very little detail about him individually.',
      sn: 'Mumwe wevanegumi nevaviri vakasarudzwa naJesu, kunyange zvazvo Evhangeri dzisina kunyora zvakawanda nezvake ari oga.',
    },
    keyRole: {
      en: 'Listed among the twelve apostles in Matthew, Mark, Luke, and Acts, but his specific activities are not separately recorded.',
      sn: 'Anonyorwa pakati pevapostori gumi nevaviri munaMatewu, Marko, Ruka, uye Mabasa, asi zviito zvake chaizvo hazvina kunyorwa zvakasiyana.',
    },
    notableMoment: {
      en: 'Present at Pentecost with the other apostles when the Holy Spirit came upon them.',
      sn: 'Aivapo paPendekosti pamwe nevamwe vapostori apo Mweya Mutsvene wakauya pamusoro pavo.',
    },
    traditionAfter: {
      en: 'Tradition is uncertain and sometimes conflates him with James the brother of Jesus; some accounts say he was martyred in Egypt or Jerusalem.',
      sn: 'Tsika haina chokwadi uye dzimwe nguva inomusanganisa naJakobho hama yaJesu; dzimwe nhoroondo dzinoti akafira kuEgipita kana Jerusarema.',
    },
    traditionSourced: true,
    reference: 'Matthew 10:3, Acts 1:13',
  },
  thaddaeus: {
    alsoKnownAs: 'Lebbaeus',
    occupation: { en: 'Unknown', sn: 'Hazvizivikanwe' },
    calling: {
      en: 'One of the twelve chosen by Jesus; referred to by different names across the Gospel accounts.',
      sn: 'Mumwe wevanegumi nevaviri vakasarudzwa naJesu; anonzi nemazita akasiyana muEvhangeri dzakasiyana.',
    },
    keyRole: {
      en: 'Asked Jesus during the Last Supper why He would reveal Himself to the disciples and not to the world.',
      sn: 'Akabvunza Jesu paChirairo Chekupedzisira kuti sei aizozviratidza kuvadzidzi kwete kunyika.',
    },
    notableMoment: {
      en: 'His question prompted Jesus to teach about the Father and Son making their home with those who love and obey Him.',
      sn: 'Mubvunzo wake wakaita kuti Jesu adzidzise nezveBaba noMwanakomana kugara neavo vanomuda uye vanomuteerera.',
    },
    traditionAfter: {
      en: 'Tradition holds he preached in Armenia and Persia and was martyred there, sometimes alongside the apostle Simon.',
      sn: 'Tsika inoti akaparidza kuArimeniya nekuPeresia uye akafira ikoko, dzimwe nguva pamwe nomupostori Simoni.',
    },
    traditionSourced: true,
    reference: 'John 14:22, Matthew 10:3',
  },
  'simon-zealot': {
    alsoKnownAs: 'Simon the Cananaean',
    occupation: {
      en: 'Unknown; possibly linked to the Zealot political movement',
      sn: "Hazvizivikanwe; pamwe aive nechekuita nesangano rezvematongerwo enyika reVaZeroti",
    },
    calling: {
      en: 'One of the twelve chosen by Jesus; his background suggests he may have once sought political revolution against Rome.',
      sn: 'Mumwe wevanegumi nevaviri vakasarudzwa naJesu; nhoroondo yake inoratidza kuti pamwe aimbotsvaka shanduko yezvematongerwo enyika achirwisana neRoma.',
    },
    keyRole: {
      en: 'Listed among the twelve, though the Gospels record no individual sayings or actions attributed to him by name.',
      sn: 'Anonyorwa pakati pevanegumi nevaviri, kunyange zvazvo Evhangeri dzisina kunyora mashoko kana zviito zvakanyorwa nezita rake ari oga.',
    },
    notableMoment: {
      en: 'His inclusion among the twelve, alongside Matthew the former tax collector, reflects the diversity of backgrounds Jesus called together.',
      sn: 'Kusanganiswa kwake pakati pevanegumi nevaviri, pamwe naMatewu aimbova muteresi, kunoratidza kusiyana kwenhoroondo dzevanhu vakadanwa pamwe naJesu.',
    },
    traditionAfter: {
      en: 'Tradition holds he preached in Persia or Africa and was martyred, though details vary widely between different early church sources.',
      sn: 'Tsika inoti akaparidza kuPeresia kana Afrika uye akafira, kunyange zvazvo tsanangudzo dzichisiyana zvikuru pakati penhoroondo dzechechi yekutanga.',
    },
    traditionSourced: true,
    reference: 'Matthew 10:4, Acts 1:13',
  },
  'judas-iscariot': {
    alsoKnownAs: '',
    occupation: {
      en: 'Unknown; served as treasurer for the group',
      sn: 'Hazvizivikanwe; aiva muchengeti wemari weboka',
    },
    calling: {
      en: 'One of the twelve chosen by Jesus; entrusted with keeping the money bag for the group.',
      sn: 'Mumwe wevanegumi nevaviri vakasarudzwa naJesu; akapiwa basa rekuchengeta homwe yemari yeboka.',
    },
    keyRole: {
      en: 'Betrayed Jesus to the religious authorities for thirty pieces of silver, identifying Him with a kiss in the Garden of Gethsemane.',
      sn: 'Akatengesa Jesu kuvatungamiriri verudzidziso nemari yesirivheri makumi matatu, achimuratidza nekumutsvoda muBindu reGetsemane.',
    },
    notableMoment: {
      en: "Overcome with remorse after the betrayal, he returned the silver and, according to Matthew's account, took his own life.",
      sn: 'Achipfidza zvikuru mushure mokutengesa, akadzosa mari yesirivheri uye, sezvinotaurwa naMatewu, akazviuraya.',
    },
    traditionAfter: {
      en: 'Replaced among the twelve apostles by Matthias, chosen by the remaining disciples through prayer and the casting of lots.',
      sn: 'Akatsiviwa pakati pevapostori gumi nevaviri naMatiyasi, akasarudzwa nevadzidzi vasara vachinyengetera uye vachikanda mijenya.',
    },
    traditionSourced: false,
    reference: 'Matthew 26:14-16, Matthew 26:47-50, Matthew 27:3-5, Acts 1:15-26',
  },
};

export function getDiscipleDetail(id: string): DiscipleDetail | undefined {
  return DISCIPLE_DETAILS[id];
}
