/**
 * "About Jesus Christ" content — a sequence of pages walking through Jesus'
 * life, death, resurrection, and promised return. Each page is shown on its own
 * detail screen, reached from the About Jesus list.
 *
 * Page 1 (`who_is_jesus`) uses a name/meaning list of titles; every other page
 * uses a plain list of key events. Both are optional so each page renders only
 * what it has.
 */

import type { Lang } from '@/data/figures';

export type Bilingual = Record<Lang, string>;

export type NamedMeaning = { name: string; meaning: string };

export type JesusPage = {
  id: string;
  order: number;
  title: Bilingual;
  subtitle: Bilingual;
  summary: Bilingual;
  /** Only on the opening "Who is Jesus?" page. */
  titles?: Record<Lang, NamedMeaning[]>;
  /** Present on the narrative pages. */
  keyEvents?: Record<Lang, string[]>;
  significance: Bilingual;
  closingNote?: Bilingual;
  reference: string;
};

/** Shown on the list screen to frame the whole section. */
export const ABOUT_JESUS_INTRO: Bilingual = {
  en: "A walk through the life of Jesus Christ — who He is, His birth, ministry, death, resurrection, and the promise of His return. Tap any chapter to read more.",
  sn: 'Rwendo muupenyu hwaJesu Kristu — kuti ndiani, kuberekwa kwake, ushumiri, rufu, kumuka, uye chivimbiso chokudzoka kwake. Baya chitsauko chero kuti uverenge zvakawanda.',
};

export const ABOUT_JESUS_NOTE: Bilingual = {
  en: "Each page below is designed as a separate screen. Fields marked 'source_type: scripture' are drawn directly from the Bible. Fields marked 'source_type: tradition' come from early church history and tradition rather than the Bible itself.",
  sn: "Peji rimwe nerimwe pazasi rakagadzirwa sechiratidziro chakasiyana. Zvakanyorwa zvine 'source_type: scripture' zvinobva muBhaibheri chairo. Zvine 'source_type: tradition' zvinobva munhoroondo yechechi yekutanga netsika, kwete muBhaibheri chairo."
};

export const JESUS_PAGES: JesusPage[] = [
  {
    id: 'who_is_jesus',
    order: 1,
    title: { en: 'Who is Jesus?', sn: 'Jesu Ndiani?' },
    subtitle: { en: 'The Word Made Flesh', sn: 'Shoko Rakava Nyama' },
    summary: {
      en: 'Jesus of Nazareth is presented in the Bible as both fully God and fully human — the eternal Word who existed before creation, who became a man to live among humanity and reconcile people to God.',
      sn: 'Jesu weNazareta anoratidzwa muBhaibheri saiye ari Mwari chaiye uye munhu chaiye — Shoko risingaperi rakanga riripo nyika isati yasikwa, rakava munhu kuti agare pakati pevanhu uye ayananise vanhu kuna Mwari.',
    },
    titles: {
      en: [
        { name: 'Immanuel', meaning: 'God with us' },
        { name: 'Messiah / Christ', meaning: 'The Anointed One' },
        { name: 'Son of God', meaning: 'Divine Son of the Father' },
        {
          name: 'Son of Man',
          meaning:
            "Jesus' own preferred title, tying Him to humanity and to a heavenly figure in Daniel's prophecy",
        },
        { name: 'Lamb of God', meaning: 'The one who takes away the sin of the world' },
        { name: 'The Word', meaning: 'The eternal expression of God, present from the beginning' },
      ],
      sn: [
        { name: 'Imanueri', meaning: 'Mwari anesu' },
        { name: 'Mesiya / Kristu', meaning: 'Muzodziwa' },
        { name: 'Mwanakomana waMwari', meaning: 'Mwanakomana waMwari waMasimba' },
        {
          name: 'Mwanakomana weMunhu',
          meaning:
            'Zita raJesu raaifarira, richimubatanidza nevanhu uye nemufananidzo wekudenga muuporofita hwaDhanieri',
        },
        { name: 'Gwayana raMwari', meaning: 'Iye anobvisa chivi chenyika' },
        { name: 'Shoko', meaning: 'Kuratidzwa kwaMwari kusingaperi, kwaivapo kubva pakutanga' },
      ],
    },
    significance: {
      en: 'Christian belief holds that in Jesus, God became visible and approachable, bridging the gap between the divine and humanity through His life, death, and resurrection.',
      sn: 'Chitendero chechiKristu chinoti muna Jesu, Mwari akaonekwa uye akasvikika, achisanganisa mukaha uripo pakati poumwari nouvanhu kuburikidza noupenyu hwake, rufu, nokumuka kwake.',
    },
    reference: 'John 1:1-14, Matthew 1:23, Daniel 7:13-14, John 1:29',
  },
  {
    id: 'birth_of_jesus',
    order: 2,
    title: { en: 'The Birth of Jesus', sn: 'Kuberekwa kwaJesu' },
    subtitle: { en: 'Born in Bethlehem', sn: 'Akaberekerwa muBhetrehema' },
    summary: {
      en: 'Jesus was born to Mary, a young virgin engaged to a carpenter named Joseph, fulfilling ancient prophecies that the Messiah would be born in the small town of Bethlehem.',
      sn: 'Jesu akaberekwa naMaria, mhandara diki yaiva nechitsidzo nomuvezi ainzi Josefa, achizadzikisa uporofita hwakare hwokuti Mesiya aizoberekerwa mudunhu diki reBhetrehema.',
    },
    keyEvents: {
      en: [
        'The angel Gabriel announced to Mary that she would conceive by the Holy Spirit and give birth to the Son of God, though she was still a virgin.',
        'Joseph, though initially planning to quietly end the engagement, was reassured by an angel in a dream and took Mary as his wife.',
        'Mary and Joseph traveled to Bethlehem for a Roman census, where Jesus was born and laid in a manger because there was no room at the inn.',
        'Shepherds in nearby fields were visited by an angel announcing the birth, and a multitude of angels praised God, prompting the shepherds to go find the child.',
        'Wise men from the East followed a star to Jerusalem and then Bethlehem, bringing gifts of gold, frankincense, and myrrh to honor the newborn king.',
      ],
      sn: [
        'Ngirozi Gabhirieri yakazivisa Maria kuti aizova nemimba noMweya Mutsvene ndokubereka Mwanakomana waMwari, kunyange achiri mhandara.',
        'Josefa, kunyange achitanga kuronga kupedza chitsidzo pachivande, akavimbiswa nengirozi muchiroto ndokutora Maria semudzimai wake.',
        'Maria naJosefa vakaenda kuBhetrehema nokuda kwekuverengwa kwevanhu kweRoma, uko Jesu akaberekwa ndokuradzikwa muchidyiro chemombe nokuti pakanga pasina nzvimbo paimba yevaeni.',
        'Vafudzi vaiva muminda yepedyo vakashanyirwa nengirozi ichizivisa kuberekwa, uye ngirozi zhinji dzakarumbidza Mwari, izvo zvakaita kuti vafudzi vaende kunotsvaga mwana.',
        'Vachenjeri vaibva kuMabvazuva vakatevera nyeredzi kuenda kuJerusarema ndokuzoenda kuBhetrehema, vachiunza zvipo zvegoridhe, zvipfungaidzo zvinonhuwira, nemura kukudza mambo mucheche.',
      ],
    },
    significance: {
      en: 'The virgin birth is understood in Christian teaching as the means by which God entered human history without the corruption of sin, while His humble birthplace reflects a recurring theme of God working through the lowly and unexpected.',
      sn: 'Kuberekwa nemhandara kunonzwisiswa mudzidziso yechiKristu senzira yaMwari yaakapinda nayo munhoroondo yevanhu asina kusvibiswa nechivi, apo nzvimbo yake yakaderera yokuberekera inoratidza dingindira rinodzokorora rokuti Mwari anoshanda kuburikidza nevakaderera nezvisingatarisirwi.',
    },
    reference: 'Luke 1:26-38, Matthew 1:18-25, Luke 2:1-20, Matthew 2:1-12',
  },
  {
    id: 'early_life',
    order: 3,
    title: { en: 'Early Life and Hidden Years', sn: 'Hupenyu Hwepakutanga Nemakore Akavanzika' },
    subtitle: { en: 'Growing Up in Nazareth', sn: 'Kukura kuNazareta' },
    summary: {
      en: 'After a dangerous escape to Egypt, Jesus grew up in the small town of Nazareth, living a quiet, largely undocumented life until He began His public ministry around the age of thirty.',
      sn: 'Mushure mokutiza kunotyisa kuenda kuEgipita, Jesu akakura mudunhu diki reNazareta, achirarama upenyu hwakanyarara, husina kunyorwa zvakadzama kusvikira atanga ushumiri hwake hweruzhinji ave nemakore anenge makumi matatu.',
    },
    keyEvents: {
      en: [
        "Joseph was warned in a dream to flee to Egypt with Mary and Jesus to escape King Herod's massacre of infant boys in Bethlehem.",
        "The family returned from Egypt after Herod's death and settled in Nazareth in Galilee, fulfilling another prophetic expectation.",
        "At age twelve, Jesus stayed behind in the temple in Jerusalem, astonishing religious teachers with His understanding, and told His worried parents He had to be about His Father's business.",
        'Scripture summarizes the next roughly eighteen years simply by saying Jesus grew in wisdom and stature, and in favor with God and man.',
      ],
      sn: [
        'Josefa akanyeverwa muchiroto kuti atize kuenda kuEgipita naMaria naJesu kutiza kuurayiwa kwevacheche vechikomana naMambo Herodhi muBhetrehema.',
        'Mhuri yakadzoka kubva kuEgipita mushure morufu rwaHerodhi ndokugara kuNazareta muGarirea, ichizadzikisa rimwe tariro youporofita.',
        'Ava nemakore gumi nemaviri, Jesu akasara mutemberi muJerusarema, achishamisa vadzidzisi verudzidziso nokunzwisisa kwake, ndokuudza vabereki vake vaityira kuti aifanira kunge ari pabasa raBaba vake.',
        'Rugwaro runopfupisa makore anenge gumi nemasere anotevera nokungoti Jesu akakura mundangariro nomuviri, uye murunyoro naMwari nevanhu.',
      ],
    },
    significance: {
      en: "The long, quiet years before His ministry are often seen as underscoring Jesus' full humanity, growing and maturing like any other person, sharing an ordinary human experience before His public calling began.",
      sn: 'Makore marefu, akanyarara asati atanga ushumiri hwake anowanzoonekwa sokusimbisa uvanhu hwaJesu hwakazara, achikura uye achisimba somumwe munhu wese, achigovana chiitiko chevanhu chenguva dzose kudanwa kwake kweruzhinji kusati kwatanga.',
    },
    reference: 'Matthew 2:13-23, Luke 2:39-52',
  },
  {
    id: 'baptism_and_temptation',
    order: 4,
    title: { en: 'Baptism and Temptation', sn: 'Rubhabhatidzo Nokuedzwa' },
    subtitle: { en: 'The Start of Public Ministry', sn: 'Kutanga Kweushumiri Hweruzhinji' },
    summary: {
      en: "Jesus' public ministry began with His baptism by John the Baptist in the Jordan River, followed immediately by forty days of testing in the wilderness.",
      sn: 'Ushumiri hweruzhinji hwaJesu hwakatanga norubhabhatidzo rwake naJohani Mubhabhatidzi muRwizi rweJodhani, gare gare achitevera nemazuva makumi mana ekuedzwa murenje.',
    },
    keyEvents: {
      en: [
        'John the Baptist initially hesitated to baptize Jesus, feeling it should be the reverse, but agreed after Jesus insisted it was necessary to fulfill all righteousness.',
        "As Jesus came up out of the water, the Holy Spirit descended on Him like a dove, and a voice from heaven declared, 'This is my Son, whom I love; with him I am well pleased.'",
        'Jesus was led into the wilderness where He fasted for forty days and was tempted by the devil to turn stones to bread, to test God by jumping from the temple, and to gain worldly power through worship of Satan.',
        'Jesus resisted each temptation by quoting scripture, after which angels came and attended to Him.',
      ],
      sn: [
        'Johani Mubhabhatidzi pakutanga akazeza kubhabhatidza Jesu, achinzwa kuti zvaifanira kuve zvakapesana, asi akabvuma mushure mokunge Jesu asimbisa kuti zvaifanira kuitika kuzadzikisa kururama kwose.',
        "Jesu paakabuda mumvura, Mweya Mutsvene wakaburuka pamusoro pake sengiti, uye izwi rakabva kudenga rikazivisa kuti, 'Uyu ndiye Mwanakomana wangu, wandinoda; ndinofara maari.'",
        'Jesu akaperekedzwa murenje uko akatsanya kwemazuva makumi mana ndokuedzwa nadhiabhorosi kuti ashandure matombo ave chingwa, kuedza Mwari nokusvetuka kubva mutemberi, uye kuwana simba renyika nokunamata Satani.',
        'Jesu akaramba kuedzwa kwega kwega achidudza rugwaro, mushure mezvo ngirozi dzakauya ndokumushandira.',
      ],
    },
    significance: {
      en: 'The baptism publicly identified Jesus and affirmed His divine sonship, while His victory over temptation in the wilderness is seen as demonstrating His qualification to represent humanity perfectly, succeeding where others had failed.',
      sn: 'Rubhabhatidzo rwakaratidza pachena Jesu uye rukasimbisa uMwanakomana hwake hwoumwari, apo kukunda kwake pakuedzwa murenje kunoonekwa sokuratidza kukwana kwake kumirira vanhu zvizere, achikunda pane vamwe vakakundikana.',
    },
    reference: 'Matthew 3:13-17, Matthew 4:1-11',
  },
  {
    id: 'calling_disciples_ministry_begins',
    order: 5,
    title: { en: 'Calling the Disciples', sn: 'Kudana Vadzidzi' },
    subtitle: { en: 'Gathering a Band of Followers', sn: 'Kuunganidza Boka Revatevedzeri' },
    summary: {
      en: 'Jesus called twelve ordinary men from a range of backgrounds to leave their livelihoods and follow Him, forming the core group who would carry His message forward.',
      sn: 'Jesu akadana varume gumi nevaviri vasingazivikanwe vaibva munhoroondo dzakasiyana-siyana kuti vasiye zvavaiitira upenyu vomutevera, vachigadzira boka guru raizoendesa mberi shoko rake.',
    },
    keyEvents: {
      en: [
        'Jesus called fishermen Simon Peter and Andrew, then James and John, directly from their boats and nets on the Sea of Galilee.',
        'He called Matthew, a despised tax collector, directly from his tax booth, showing His willingness to call people from every social standing.',
        'After a night in prayer, Jesus chose twelve from among a larger group of followers to be His closest disciples, later called apostles.',
        'He began performing miracles and teaching in synagogues throughout Galilee, quickly gathering large crowds.',
      ],
      sn: [
        'Jesu akadana varedzi vehove Simoni Petro naAndiriya, ndokuzoti Jakobho naJohani, zvakananga vachibva mumagwa avo nemimbure paGungwa reGarirea.',
        'Akadana Matewu, muteresi aizvidzwa, zvakananga achibva pachigaro chake chekutera, achiratidza kuda kwake kudana vanhu vanobva munhoroondo dzose dzenharaunda.',
        'Mushure mousiku hwokunyengetera, Jesu akasarudza gumi nevaviri kubva muboka guru revatevedzeri kuti vave vadzidzi vake vapedyo, gare gare vainzi vapostori.',
        'Akatanga kuita zvishamiso nokudzidzisa musinagoge muGarirea rose, achikurumidza kuunganidza vanhu vazhinji.',
      ],
    },
    significance: {
      en: "The calling of ordinary, flawed individuals to be Jesus' closest followers is seen as reflecting a consistent biblical pattern of God using unlikely people to accomplish significant purposes.",
      sn: 'Kudanwa kwevanhu vasingazivikanwe, vane zvikanganiso kuti vave vatevedzeri vaJesu vapedyo kunoonekwa sokuratidza mufananidzo unodzokorora weBhaibheri wokuti Mwari anoshandisa vanhu vasingatarisirwi kuita zvinangwa zvikuru.',
    },
    reference: 'Matthew 4:18-22, Matthew 9:9, Luke 6:12-16',
  },
  {
    id: 'teachings_and_parables',
    order: 6,
    title: { en: 'Teachings and Parables', sn: 'Dzidziso Nemifananidzo' },
    subtitle: { en: 'The Kingdom of God Explained', sn: 'Umambo hwaMwari Hunotsanangurwa' },
    summary: {
      en: "Jesus taught extensively about the nature of God's kingdom, often using parables — simple stories drawn from everyday life that carried deeper spiritual meaning.",
      sn: 'Jesu akadzidzisa zvakadzama pamusoro pehunhu hwoumambo hwaMwari, kazhinji achishandisa mifananidzo — nyaya dziri nyore dzinobva muupenyu hwazuva nezuva dzine zvinoreva zvakadzama zvomweya.',
    },
    keyEvents: {
      en: [
        "In the Sermon on the Mount, Jesus taught the Beatitudes, redefined the law's inward intent, and taught the Lord's Prayer as a model for prayer.",
        "He told the Parable of the Sower, explaining how people respond differently to God's word depending on the condition of their hearts.",
        "The Parable of the Good Samaritan redefined who counts as a 'neighbor,' challenging listeners to show mercy even across ethnic and religious lines.",
        "The Parable of the Prodigal Son illustrated God's eager, unconditional welcome for anyone who returns to Him in repentance.",
        'Jesus frequently taught that the kingdom of God was already present in Him yet still awaiting a future, complete fulfillment.',
      ],
      sn: [
        'MuMharidzo yePagomo, Jesu akadzidzisa Zvikomborero, akatsanangurazve chinangwa chomukati chomurau, ndokudzidzisa Munyengetero waShe somuenzaniso womunyengetero.',
        'Akataura Mufananidzo woMukushi, achitsanangura kuti vanhu vanopindura sei zvakasiyana kushoko raMwari zvichienderana nemamiriro emwoyo yavo.',
        "Mufananidzo woMuSamaria Akanaka wakatsanangurazve kuti ndiani anonzi 'muvakidzani,' uchiedza vateereri kuratidza ngoni kunyange pakati pemitauro nezvitendero zvakasiyana.",
        'Mufananidzo woMwanakomana Akarasika wakaratidza kugamuchira kwaMwari kusina mamiriro, kunoshuvira, kuno wese anodzoka kwaari netsvondo.',
        'Jesu aiwanzodzidzisa kuti umambo hwaMwari hwakanga hwatova huripo maari asi huchiri kumirira kuzadzikiswa kuzere kweramangwana.',
      ],
    },
    significance: {
      en: 'His parables are considered some of the most enduring teaching tools in religious history, communicating profound truths in accessible, memorable ways that continue to be studied and applied today.',
      sn: 'Mifananidzo yake inoonekwa seimwe yezvishandiso zvokudzidzisa zvinogara zvichishanda munhoroondo yechitendero, ichitaura zvokwadi zvakadzama nenzira dziri nyore, dzinorangarirwa, dzichiri kudzidzwa nokushandiswa nhasi.',
    },
    reference: 'Matthew 5-7, Matthew 13:1-23, Luke 10:25-37, Luke 15:11-32',
  },
  {
    id: 'miracles',
    order: 7,
    title: { en: 'Miracles', sn: 'Zvishamiso' },
    subtitle: { en: 'Signs of the Kingdom', sn: 'Zviratidzo Zvoumambo' },
    summary: {
      en: 'Jesus performed numerous miracles across the Gospels, including healing the sick, casting out demons, controlling nature, and raising the dead, each pointing to His divine authority.',
      sn: 'Jesu akaita zvishamiso zvakawanda muEvhangeri, kusanganisira kuporesa vanorwara, kudzinga madhimoni, kutonga zvisikwa, uye kumutsa vakafa, chimwe nechimwe chichinongedzera kusimba rake roumwari.',
    },
    keyEvents: {
      en: [
        'Turned water into wine at a wedding in Cana, His first recorded miracle, described as revealing His glory to His disciples.',
        'Fed five thousand people with just five loaves and two fish, with twelve baskets of leftovers gathered afterward.',
        "Calmed a violent storm on the Sea of Galilee with a simple command, prompting the disciples to ask, 'What kind of man is this?'",
        'Healed a man born blind by making mud from His saliva and the ground, then sending him to wash in the Pool of Siloam.',
        "Raised His friend Lazarus from the dead after four days in the tomb, declaring beforehand, 'I am the resurrection and the life.'",
      ],
      sn: [
        'Akashandura mvura ikava waini pamuchato kuKana, chishamiso chake chekutanga chakanyorwa, chinotsanangurwa sechinoratidza mbiri yake kuvadzidzi vake.',
        'Akagutsa vanhu zviuru zvishanu nezvingwa zvishanu chete nehove mbiri, matengu gumi nemaviri ezvakasara akaunganidzwa gare gare.',
        "Akadzikamisa dutu rine simba paGungwa reGarirea nomurayiro uri nyore, izvo zvakaita kuti vadzidzi vabvunze, 'Ndomunhu rudzii uyu?'",
        'Akaporesa murume akaberekwa akapofumara nokuita matope nemate ake nevhu, ndokumutuma kunoshamba muDziva reSiroami.',
        "Akamutsa shamwari yake Razaro kubva kuvakafa mushure memazuva mana muguva, azivisa kutanga achiti, 'Ndini kumuka noupenyu.'",
      ],
    },
    significance: {
      en: "Miracles in the Gospels are consistently described as 'signs' pointing beyond themselves to Jesus' identity as the Son of God, rather than mere displays of power.",
      sn: "Zvishamiso muEvhangeri zvinogara zvichitsanangurwa se'zviratidzo' zvinonongedzera kupfuura zvazvo kuenda pahunhu hwaJesu soMwanakomana waMwari, panzvimbo pokungoratidza simba chete.",
    },
    reference: 'John 2:1-11, Matthew 14:13-21, Mark 4:35-41, John 9:1-12, John 11:1-44',
  },
  {
    id: 'transfiguration',
    order: 8,
    title: { en: 'The Transfiguration', sn: 'Kushandurwa Chimiro' },
    subtitle: { en: 'A Glimpse of Glory', sn: 'Kuonekwa Kwembiri' },
    summary: {
      en: 'On a mountain before three of His disciples, Jesus was briefly transformed to reveal His divine glory, appearing alongside Moses and Elijah.',
      sn: 'Pagomo pamberi pevadzidzi vake vatatu, Jesu akashandurwa kwenguva pfupi kuratidza mbiri yake youmwari, achionekwa pamwe naMozisi naEriya.',
    },
    keyEvents: {
      en: [
        'Jesus took Peter, James, and John up a high mountain, where His face shone like the sun and His clothes became dazzling white.',
        'Moses and Elijah appeared and spoke with Jesus about His coming departure, which He would accomplish in Jerusalem.',
        "Peter, overwhelmed, suggested building three shelters, before a bright cloud enveloped them and a voice declared, 'This is my Son, whom I love; listen to him.'",
        'The disciples were instructed to tell no one about the vision until after Jesus had risen from the dead.',
      ],
      sn: [
        'Jesu akatora Petro, Jakobho, naJohani kuenda pagomo refu, uko chiso chake chakapenya sezuva uye nguo dzake dzikachena kupenya.',
        'Mozisi naEriya vakaonekwa vachitaura naJesu pamusoro pekuenda kwake kuchauya, kwaaizoita muJerusarema.',
        "Petro, akashamisika, akaronga kuvaka matende matatu, gore rinopenya risati ravafukidza uye izwi rikazivisa kuti, 'Uyu ndiye Mwanakomana wangu, wandinoda; muteererei.'",
        'Vadzidzi vakarayirwa kuti varege kuudza munhu pamusoro pechiratidzo ichi kusvikira Jesu amuka kuvakafa.',
      ],
    },
    significance: {
      en: "The event is understood as confirming Jesus' identity as the fulfillment of the Law (represented by Moses) and the Prophets (represented by Elijah), while foreshadowing His future resurrected glory.",
      sn: 'Chiitiko ichi chinonzwisiswa sokusimbisa hunhu hwaJesu sokuzadzikiswa kwoMurau (unomiririrwa naMozisi) noVaporofita (vanomiririrwa naEriya), apo chichifanotaridza mbiri yake yeramangwana yokumuka.',
    },
    reference: 'Matthew 17:1-9',
  },
  {
    id: 'triumphal_entry',
    order: 9,
    title: { en: 'The Triumphal Entry', sn: 'Kupinda Nokukunda' },
    subtitle: { en: 'Arrival in Jerusalem', sn: 'Kusvika muJerusarema' },
    summary: {
      en: 'Jesus entered Jerusalem days before His death, riding on a young donkey, fulfilling ancient prophecy and receiving a royal welcome from the crowds.',
      sn: 'Jesu akapinda muJerusarema mazuva mashoma asati afa, akatasva mbongoro diki, achizadzikisa uporofita hwakare uye achigamuchirwa noumambo nevanhu vazhinji.',
    },
    keyEvents: {
      en: [
        "Jesus sent two disciples ahead to bring a colt that had never been ridden, fulfilling Zechariah's prophecy of a king coming 'gentle and riding on a donkey.'",
        "Large crowds spread their cloaks and palm branches on the road, shouting 'Hosanna' and hailing Jesus as the coming king.",
        'Religious leaders, uneasy about the public acclaim, asked Jesus to rebuke the crowds, but He replied that if they were silent, the stones would cry out.',
        "Jesus wept over Jerusalem, foreseeing its coming destruction because it did not recognize the time of God's visitation.",
      ],
      sn: [
        "Jesu akatuma vadzidzi vaviri mberi kuti vaunze mbongoro yakanga isati yatasvwa, achizadzikisa uporofita hwaZekariya hwamambo achiuya 'akapfava uye akatasva mbongoro.'",
        "Vanhu vazhinji vakawaridza majasi avo namatavi emichindwe pamugwagwa, vachidanidzira 'Hosana' vachikudza Jesu sowamambo achiuya.",
        'Vatungamiriri verudzidziso, vasina kugadzikana nokuda kwerukudzo rweruzhinji, vakakumbira Jesu kuti atsiure vanhu, asi akapindura kuti kana vakanyarara, matombo aizodanidzira.',
        'Jesu akachema pamusoro peJerusarema, achifanoona kuparadzwa kwaro kuchauya nokuti rakanga risina kuziva nguva yokushanyirwa naMwari.',
      ],
    },
    significance: {
      en: "The event marked the beginning of the final week of Jesus' earthly life, often called Holy Week, and stands in the Gospels as a public, prophetic declaration of His identity as the promised king.",
      sn: 'Chiitiko ichi chakaratidza kutanga kwevhiki rekupedzisira roupenyu hwaJesu hwenyika, hunowanzonzi Vhiki Dzvene, uye hunomira muEvhangeri sokuzivisa kweruzhinji, kwouporofita, kwohunhu hwake somambo akavimbiswa.',
    },
    reference: 'Zechariah 9:9, Matthew 21:1-11, Luke 19:41-44',
  },
  {
    id: 'last_supper',
    order: 10,
    title: { en: 'The Last Supper', sn: 'Chirairo Chekupedzisira' },
    subtitle: { en: 'A Final Meal, A New Meaning', sn: 'Chikafu Chekupedzisira, Zvinoreva Zvitsva' },
    summary: {
      en: "On the night before His crucifixion, Jesus shared a final Passover meal with His disciples, instituting what Christians now observe as Communion or the Lord's Supper.",
      sn: 'Usiku husati hwarovererwa, Jesu akagovana chikafu chekupedzisira chePasika nevadzidzi vake, achitanga chinozivikanwa nemaKristu nhasi seChirairo kana Chirairo chaShe.',
    },
    keyEvents: {
      en: [
        "Jesus washed His disciples' feet, a task usually reserved for the lowest servant, teaching them a lesson in humble service.",
        "He took bread, broke it, and said, 'This is my body given for you; do this in remembrance of me,' then shared a cup, calling it 'the new covenant in my blood.'",
        'Jesus predicted that one of the twelve would betray Him, causing confusion and distress among the disciples, and privately identified Judas as the betrayer.',
        "He gave His disciples a 'new command,' to love one another as He had loved them, calling it the mark by which His followers would be known.",
      ],
      sn: [
        'Jesu akashambidza tsoka dzevadzidzi vake, basa raiwanzoitwa nomushandi wakaderera, achivadzidzisa dzidziso yokushumira nokuzvininipisa.',
        "Akatora chingwa, akachimedura, akati, 'Uyu muviri wangu wakupiwa nokuda kwenyu; itai izvi mukundirangarira,' ndokugovana mukombe, achiudana kuti 'sungano itsva muropa rangu.'",
        'Jesu akafanotaura kuti mumwe wevanegumi nevaviri aizomutengesa, izvo zvakakonzera kuvhiringidzika nokushungurudzika pakati pevadzidzi, ndokuratidza pachivande Judhasi somutengesi.',
        "Akapa vadzidzi vake 'murayiro mutsva,' wokudanana sokudanana kwaakanga avaita, achiudana kuti ndicho chiratidzo chaizozivikanwa nacho vatevedzeri vake.",
      ],
    },
    significance: {
      en: "The meal reframed the Passover's ancient theme of deliverance from slavery around Jesus' own body and blood, establishing a memorial meal still observed across nearly all Christian traditions today.",
      sn: 'Chikafu ichi chakachinja dingindira rekare rePasika rokununurwa kubva kuuranda richipoteredza muviri neropa raJesu chaiye, richigadzira chikafu chokurangarira chichiri kucherechedzwa munzira dzose dzechiKristu nhasi.',
    },
    reference: 'John 13:1-17, Luke 22:14-23, Matthew 26:20-25, John 13:34-35',
  },
  {
    id: 'gethsemane_and_betrayal',
    order: 11,
    title: { en: 'Gethsemane and Betrayal', sn: 'Getsemani Nokutengeswa' },
    subtitle: { en: 'Anguish in the Garden', sn: 'Kushungurudzika muBindu' },
    summary: {
      en: 'After the Last Supper, Jesus went to the Garden of Gethsemane to pray, wrestling in deep anguish with what lay ahead before being arrested.',
      sn: 'Mushure moChirairo Chekupedzisira, Jesu akaenda kuBindu reGetsemani kunonyengetera, achirwisana nokushungurudzika kwakadzika nezvaizouya asati asungwa.',
    },
    keyEvents: {
      en: [
        'Jesus asked Peter, James, and John to keep watch with Him as He prayed, but found them asleep multiple times.',
        "In deep distress, Jesus prayed, 'My Father, if it is possible, may this cup be taken from me; yet not as I will, but as you will,' with sweat described as like drops of blood.",
        'Judas arrived with an armed crowd sent by the religious authorities and identified Jesus with a kiss, the prearranged signal.',
        "Peter drew a sword and struck a servant of the high priest, but Jesus healed the man's ear and rebuked the use of violence.",
        'All the disciples fled as Jesus was arrested and led away to face trial before the religious council.',
      ],
      sn: [
        'Jesu akakumbira Petro, Jakobho, naJohani kuti varinde naye achinyengetera, asi akavawana varere kakawanda.',
        "Mukushungurudzika kwakadzika, Jesu akanyengetera achiti, 'Baba vangu, kana zvichigona, ngamukombe uyu ubviswe kwandiri; asi kwete sokuda kwangu, asi sokuda kwenyu,' nezvidikari zvakatsanangurwa sedonhwe reropa.",
        'Judhasi akasvika neboka rakashonga zvombo rakatumwa nevatungamiriri verudzidziso ndokuratidza Jesu nokumutsvoda, chiratidzo chakanga charongwa kare.',
        'Petro akavhomora bakatwa ndokurova muranda womupristi mukuru, asi Jesu akaporesa nzeve yomurume ndokutsiura kushandiswa kwoutsinye.',
        'Vadzidzi vose vakatiza Jesu paakasungwa ndokutungamirirwa kunotongwa pamberi pedare rechitendero.',
      ],
    },
    significance: {
      en: "The scene reveals Jesus' full humanity in His anguish and fear, while His submission to God's will despite that fear is understood as a model of obedience under extreme pressure.",
      sn: 'Chiitiko ichi chinoratidza uvanhu hwaJesu hwakazara mukushungurudzika nokutya kwake, apo kuzvipira kwake kuda kwaMwari kunyange nokutya uku kunonzwisiswa somuenzaniso wokuteerera pasi pomutoro mukuru.',
    },
    reference: 'Matthew 26:36-56, Luke 22:39-53',
  },
  {
    id: 'trial_and_crucifixion',
    order: 12,
    title: { en: 'The Trial and Crucifixion', sn: 'Kutongwa Nokurovererwa' },
    subtitle: { en: 'The Cross', sn: 'Muchinjikwa' },
    summary: {
      en: 'Jesus was tried before both Jewish religious authorities and the Roman governor Pilate, ultimately condemned to death by crucifixion — a brutal Roman method of execution reserved for the worst offenders.',
      sn: 'Jesu akatongwa pamberi pevatungamiriri verudzidziso rwechiJudha uye pamberi pomutongi weRoma Pirato, achizopiwa mhosva yorufu nokurovererwa pamuchinjikwa — nzira ine utsinye yeRoma yokuuraya vanhu yaichengeterwa vanotadza vakaipisisa.',
    },
    keyEvents: {
      en: [
        'Jesus was questioned by the high priest and the Sanhedrin, who charged Him with blasphemy after He affirmed He was the Son of God.',
        'Brought before Pilate, Jesus was found to have committed no crime under Roman law, but Pilate ultimately yielded to pressure from the crowd, releasing a criminal named Barabbas in His place.',
        "Roman soldiers mocked Jesus, dressing Him in a purple robe and pressing a crown of thorns onto His head before He was led to Golgotha, 'the place of the skull.'",
        "Jesus was crucified between two criminals, and a sign reading 'King of the Jews' was placed above His head.",
        "From the cross, Jesus spoke words of forgiveness for His executioners, care for His mother, and finally, 'It is finished,' before He died.",
        "At the moment of His death, the curtain in the temple separating the Holy of Holies was torn in two from top to bottom, and Roman soldiers present declared, 'Surely he was the Son of God.'",
      ],
      sn: [
        'Jesu akabvunzwa nomupristi mukuru neSanihedirini, avo vakamupomera mhosva yokunyomba mushure mokunge asimbisa kuti aiva Mwanakomana waMwari.',
        'Auyiswa pamberi paPirato, Jesu akaonekwa asina mhosva yaakaita pasi pomutemo weRoma, asi Pirato akazorasika mudzimai kumanikidzwa neboka ravanhu, akasunungura mhondi ainzi Bharabhasi panzvimbo yake.',
        "Mauto eRoma akaseka Jesu, achimushongedza johvo yepepuru nokumanikidza korona yeminzwa pamusoro pake asati atungamirirwa kuGorogota, 'nzvimbo yedehenya.'",
        "Jesu akarovererwa pakati pemhondi mbiri, uye chidudziro chainzi 'Mambo weVaJudha' chakaiswa pamusoro pake.",
        "Ari pamuchinjikwa, Jesu akataura mashoko okuregerera vaimuuraya, kuchengeta amai vake, uye pakupedzisira, 'Zvapedzwa,' asati afa.",
        "Panguva yokufa kwake, jira retemberi rakaparadzanisa Nzvimbo Tsvenetsvene rakabvarurwa kaviri kubva kumusoro kusvika pasi, uye mauto eRoma vaivapo vakazivisa kuti, 'Zvirokwazvo uyu aiva Mwanakomana waMwari.'",
      ],
    },
    significance: {
      en: "Christian belief holds that Jesus' death on the cross served as a substitutionary sacrifice, taking on the penalty for humanity's sin, and that the torn temple curtain symbolized direct access to God being opened to all people.",
      sn: 'Chitendero chechiKristu chinoti rufu rwaJesu pamuchinjikwa rwakashanda sechibayiro chinotsiviwa, achitakura mutongo wechivi chevanhu, uye kuti jira retemberi rakabvaruka kwaimirira kusvika kwakanaka kuna Mwari kwakavhurirwa vanhu vose.',
    },
    reference:
      'Matthew 26:57-68, John 18:28-19:16, Matthew 27:27-56, Luke 23:34-46, John 19:30, Mark 15:38-39',
  },
  {
    id: 'resurrection',
    order: 13,
    title: { en: 'The Resurrection', sn: 'Kumuka' },
    subtitle: { en: 'He Is Risen', sn: 'Amuka' },
    summary: {
      en: 'On the third day after His crucifixion, Jesus rose bodily from the dead, an event Christians regard as the central, defining truth of the entire Christian faith.',
      sn: 'Nezuva rechitatu mushure mokurovererwa kwake, Jesu akamuka nomuviri kubva kuvakafa, chiitiko chinoonekwa nemaKristu sechokwadi chikuru, chinotsanangura kutenda kwose kwechiKristu.',
    },
    keyEvents: {
      en: [
        'Women, including Mary Magdalene, arrived at the tomb early on the first day of the week to find the heavy stone rolled away and the tomb empty.',
        'An angel announced to the women that Jesus had risen, just as He had said, and instructed them to tell the disciples.',
        'Jesus appeared personally to Mary Magdalene, to two travelers on the road to Emmaus, to the gathered disciples, and later to more than five hundred people at once.',
        "Thomas, who had doubted the other disciples' reports, touched Jesus' wounds and declared, 'My Lord and my God.'",
        'Jesus ate with His disciples and explained how the Scriptures had foretold His suffering and resurrection, opening their minds to understand.',
      ],
      sn: [
        'Vakadzi, kusanganisira Maria Magadharini, vakasvika kuguva mangwanani ezuva rekutanga revhiki kuti vawane dombo rinorema rakunguruswa uye guva risina chinhu.',
        'Ngirozi yakazivisa kuvakadzi kuti Jesu akanga amuka, sezvaakanga ataura, ndokuvarayira kuti vaudze vadzidzi.',
        'Jesu akazviratidza pachake kuna Maria Magadharini, kuvafambi vaviri vaienda kuEmausi, kuvadzidzi vakaunganidzwa, uye gare gare kuvanhu vanopfuura mazana mashanu panguva imwe chete.',
        "Tomasi, uyo akanga asingatendi zvidudziro zvevamwe vadzidzi, akabata maronda aJesu ndokuzivisa kuti, 'Ishe wangu naMwari wangu.'",
        'Jesu akadya nevadzidzi vake ndokutsanangura kuti Magwaro akanga afanotaura sei kutambura kwake nokumuka kwake, achivhura pfungwa dzavo kuti vanzwisise.',
      ],
    },
    significance: {
      en: "The resurrection is presented in the New Testament as proof of Jesus' victory over sin and death, and as the guarantee of future resurrection for all who trust in Him.",
      sn: 'Kumuka kunoratidzwa muTestamende Itsva souchapupu hwokukunda kwaJesu pamusoro pechivi norufu, uye sechivimbiso chokumuka kweramangwana kune vose vanovimba naye.',
    },
    reference: 'Luke 24:1-12, Matthew 28:1-10, Luke 24:13-35, John 20:24-29, 1 Corinthians 15:6',
  },
  {
    id: 'ascension_and_great_commission',
    order: 14,
    title: { en: 'The Ascension and Great Commission', sn: 'Kukwira Kudenga Nomurayiro Mukuru' },
    subtitle: { en: 'Sending His Followers Out', sn: 'Kutuma Vatevedzeri Vake' },
    summary: {
      en: 'Before returning to heaven, Jesus gave His disciples final instructions to carry His message to the entire world, then ascended before their eyes.',
      sn: 'Asati adzokera kudenga, Jesu akapa vadzidzi vake mirayiridzo yokupedzisira yokuendesa shoko rake kunyika yose, ndokukwira kudenga vachiona.',
    },
    keyEvents: {
      en: [
        'Jesus appeared to His disciples over a period of forty days, teaching them about the kingdom of God.',
        'He commanded them to go and make disciples of all nations, baptizing them and teaching them to obey everything He had commanded.',
        'He promised that He would be with them always, to the very end of the age.',
        'Jesus was taken up into the sky before their eyes, and a cloud hid Him from their sight, while two angels told the disciples He would return in the same way He had left.',
      ],
      sn: [
        'Jesu akazviratidza kuvadzidzi vake kwenguva yemazuva makumi mana, achivadzidzisa pamusoro poumambo hwaMwari.',
        'Akavarayira kuti vaende vaite vanhu vose vave vadzidzi, vachivabhabhatidza uye vachivadzidzisa kuteerera zvose zvaakanga avarayira.',
        'Akavimbisa kuti aizova navo nguva dzose, kusvikira pakupera kwenyika.',
        'Jesu akatorwa achikwidzwa kudenga vachiona, uye gore rakamuvanza pameso avo, apo ngirozi mbiri dzakaudza vadzidzi kuti aizodzoka nenzira imwecheteyo yaakaenda nayo.',
      ],
    },
    significance: {
      en: "The Great Commission is regarded across Christian tradition as the foundational mandate for global missionary work, while the ascension marks Jesus' return to divine authority alongside the promise of His future return.",
      sn: 'Murayiro Mukuru unoonekwa munzira dzose dzechiKristu somurayiro unokosha webasa rouvhangeri hwepasi rose, apo kukwira kudenga kunoratidza kudzokera kwaJesu kusimba roumwari pamwe nechivimbiso chokudzoka kwake kuchauya.',
    },
    reference: 'Acts 1:3-11, Matthew 28:18-20',
  },
  {
    id: 'promise_of_return',
    order: 15,
    title: { en: 'The Promise of His Return', sn: 'Chivimbiso Chokudzoka Kwake' },
    subtitle: { en: 'Looking Forward in Hope', sn: 'Kutarisira Mberi Netariro' },
    summary: {
      en: "Throughout the New Testament, Jesus and His followers repeatedly point forward to His promised second coming, when He will return in glory to fully establish God's kingdom.",
      sn: 'MuTestamende Itsva yose, Jesu nevatevedzeri vake vanoramba vachinongedzera mberi kukudzoka kwake kwechipiri kwakavimbiswa, apo achadzoka nembiri kuti agadze zvizere umambo hwaMwari.',
    },
    keyEvents: {
      en: [
        'Jesus taught that no one knows the exact day or hour of His return, urging His followers to remain watchful and faithful rather than trying to predict a timeline.',
        'He compared His unexpected return to a thief coming in the night, and to a bridegroom arriving when the wedding party least expects him.',
        "The apostle Paul described believers being caught up to meet the returning Christ in the air, an event traditionally referred to as the 'rapture' in some Christian teaching.",
        "The book of Revelation closes with a vivid vision of Christ's ultimate victory, a new heaven and new earth, and God dwelling directly among His people.",
      ],
      sn: [
        'Jesu akadzidzisa kuti hapana anoziva zuva kana awa chaiyo yokudzoka kwake, achikurudzira vatevedzeri vake kuramba vakarindira uye vakatendeka panzvimbo pokuedza kufanotaura nguva.',
        'Akaenzanisa kudzoka kwake kusingatarisirwi nembavha inouya usiku, uye nomuchato paanosvika boka romuchato risingamutarisiri.',
        "Mupostori Pauro akatsanangura vatendi vachitorwa kunosangana naKristu anodzoka mumhepo, chiitiko chinowanzonzi 'rapture' mune dzimwe dzidziso dzechiKristu.",
        'Bhuku raZvakazarurwa rinopedzisira nechiratidzo chinodzama chokukunda kwaKristu kwokupedzisira, denga idzva nenyika itsva, uye Mwari achigara zvakananga pakati pevanhu vake.',
      ],
    },
    significance: {
      en: "The promise of Jesus' return functions across Christian tradition as a central source of hope, motivating perseverance and holy living while awaiting the final restoration of all things.",
      sn: 'Chivimbiso chokudzoka kwaJesu chinoshanda munzira dzose dzechiKristu setariro huru inosimbaradza kutsungirira noupenyu hutsvene vachimirira kuvandudzwa kwokupedzisira kwezvinhu zvose.',
    },
    closingNote: {
      en: "This concludes the overview of Jesus' life, death, resurrection, and promised return — the central story at the heart of the Christian faith.",
      sn: 'Izvi zvinopedzisa pfupiso youpenyu hwaJesu, rufu, kumuka, uye chivimbiso chokudzoka — nyaya inokosha iri pamoyo wechitendero chechiKristu.',
    },
    reference: 'Matthew 24:36-44, 1 Thessalonians 4:16-17, Revelation 21:1-4',
  },
];

export function getJesusPage(id: string): JesusPage | undefined {
  return JESUS_PAGES.find((p) => p.id === id);
}
