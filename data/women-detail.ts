/**
 * Extended, women-of-valour content shown on the figure detail screen.
 *
 * Same idea as data/disciples-detail.ts and data/prophets-detail.ts. Women have
 * a `title` epithet (e.g. "Mother of Nations") shown as the badge, and no
 * "calling" field. `legacy` is flagged when it comes from tradition rather than
 * scripture.
 */

import type { Bilingual } from '@/data/disciples-detail';
import type { Lang } from '@/data/figures';

export type WomanDetail = {
  title: Bilingual;
  background: Bilingual;
  historicalContext: Bilingual;
  notableMoments: Record<Lang, string[]>;
  legacy: Bilingual;
  /** True when `legacy` comes from tradition rather than scripture. */
  legacyTradition: boolean;
  reference: string;
};

export const WOMAN_DETAILS: Record<string, WomanDetail> = {
  sarah: {
    title: { en: 'Mother of Nations', sn: 'Amai Vendudzi' },
    background: {
      en: 'Wife of Abraham, originally named Sarai, whose name was changed by God as part of His covenant promise that she would become the mother of many nations.',
      sn: 'Mudzimai waAbrahamu, aimbonzi Sarai, zita rake rakachinjwa naMwari sechikamu chevimbiso yesungano yake yekuti aizova amai vendudzi zhinji.',
    },
    historicalContext: {
      en: "Traveled with Abraham from Ur to Canaan, living as a nomadic wife through decades of waiting for God's promise to be fulfilled.",
      sn: 'Akafamba naAbrahamu kubva kuUri kuenda kuKenani, achirarama souyu asina musha kwemakore akawanda achimirira vimbiso yaMwari kuti izadzikiswe.',
    },
    notableMoments: {
      en: [
        "Laughed in disbelief when she overheard that she would bear a son at ninety years old, then later named her son Isaac, meaning 'laughter,' when the promise came true.",
        'Showed courage and resilience being taken into foreign royal households twice due to Abraham presenting her as his sister to protect himself, and was protected by God both times.',
        "Advocated fiercely for her son Isaac's inheritance, insisting that Hagar and Ishmael be sent away.",
      ],
      sn: [
        "Akaseka asingatendi paakanzwa kuti aizobereka mwanakomana ave nemakore makumi mapfumbamwe, gare gare ndokutumidza mwanakomana wake Isaka, zvinoreva 'kuseka,' vimbiso payakazadzikiswa.",
        "Akaratidza ushingi nokusimba achitorwa kudzimba dzoumambo dzokunze kaviri nokuda kwaAbrahamu kumuratidza semunin'ina wake kuti azvidzivirire, uye akadzivirirwa naMwari nguva dzose mbiri.",
        'Akamiririra zvakasimba nhaka yomwanakomana wake Isaka, achisimbisa kuti Hagari naIshumaeri vaendeswe kure.',
      ],
    },
    legacy: {
      en: 'Remembered in the New Testament as an example of faith, called the mother of all who believe, and praised for considering God faithful to His promise.',
      sn: 'Anorangarirwa muTestamende Itsva somuenzaniso wokutenda, achinzi amai vavose vanotenda, uye achirumbidzwa nokufunga kuti Mwari akatendeka kuvimbiso yake.',
    },
    legacyTradition: false,
    reference: 'Genesis 17:15-19, Genesis 18:9-15, Genesis 21:1-12, Hebrews 11:11',
  },
  miriam: {
    title: { en: 'Prophetess and Protector', sn: 'Muporofitakadzi Uye Mudziviriri' },
    background: {
      en: 'Sister of Moses and Aaron, first appearing as a young girl watching over baby Moses hidden among the reeds of the Nile.',
      sn: "Hanzvadzi yaMozisi naAroni, aiwanikwa pakutanga somusikana muduku achitarisira Mozisi mucheche akavigwa pakati petsanga dzeNairi.",
    },
    historicalContext: {
      en: "Lived through the Israelites' slavery in Egypt and the exodus, playing a public leadership role during the wilderness wandering.",
      sn: 'Akararama kubudikidza nouranda hwevaIsraeri muEgipita uye kubuda kwavo, achiita basa rehutungamiri hunoonekwa panguva yokudzungaira murenje.',
    },
    notableMoments: {
      en: [
        "Cleverly arranged for her own mother to be hired as Moses' nurse after Pharaoh's daughter found him among the reeds.",
        "Led the women of Israel in singing and dancing with tambourines to celebrate God's deliverance at the Red Sea.",
        "Was struck with a skin disease after speaking against Moses' authority alongside Aaron, and was restored only after Moses interceded for her.",
      ],
      sn: [
        'Akaronga nenjere kuti amai vake pachavo vashandiswe somurapi waMozisi mushure mokunge mwanasikana waFarao amuwana pakati petsanga.',
        'Akatungamirira vakadzi veIsraeri kuimba nokutamba nemakandiro kupembera kununurwa kwaMwari paGungwa Dzvuku.',
        'Akarohwa nechirwere cheganda mushure mokutaura zvinorwisa simba raMozisi pamwe naAroni, ndokuporeswa chete Mozisi paakamunyengeterera.',
      ],
    },
    legacy: {
      en: 'Later remembered by the prophet Micah as one of three leaders, alongside Moses and Aaron, whom God sent to lead Israel out of Egypt.',
      sn: 'Gare gare akarangarirwa nomuporofita Mika somumwe wavatungamiri vatatu, pamwe naMozisi naAroni, avo Mwari akatuma kutungamirira Israeri kubuda muEgipita.',
    },
    legacyTradition: false,
    reference: 'Exodus 2:4-8, Exodus 15:20-21, Numbers 12:1-15, Micah 6:4',
  },
  rahab: {
    title: { en: 'The Courageous Innkeeper', sn: 'Muchengeti Weimba Ane Ushingi' },
    background: {
      en: 'A Canaanite woman living in Jericho, whose home built into the city wall made her an unlikely but strategic host for spies.',
      sn: 'Mukadzi weKenani aigara muJeriko, imba yake yakavakwa murusvingo rweguta ichimuita muchengeti asingatarisirwi asi ane zano revasori.',
    },
    historicalContext: {
      en: "Lived in Jericho just before its destruction by the invading Israelites under Joshua, at a time when news of Israel's God had already spread fear throughout Canaan.",
      sn: 'Aigara muJeriko rinenge risati raparadzwa nevaIsraeri vaipinda pasi paJoshua, panguva apo mashoko aMwari weIsraeri akanga atomwaira kutya muKenani rose.',
    },
    notableMoments: {
      en: [
        "Hid two Israelite spies on her roof under stalks of flax and lied to the king's men about their whereabouts to protect them.",
        'Declared her belief that the Lord had given the land to Israel, having heard how He had dried up the Red Sea and defeated other kings.',
        'Negotiated the safety of her entire family in exchange for her help, marked by a scarlet cord hung from her window as a sign for the invading army.',
      ],
      sn: [
        'Akaviga vasori vaviri veIsraeri padenga rake pasi pemashanga emufirakisi ndokunyepera varume vamambo pamusoro penzvimbo yavo kuti avadzivirire.',
        'Akazivisa kutenda kwake kuti Jehovha akanga apa nyika kuIsraeri, aine nzeve dzokuti akaomesa sei Gungwa Dzvuku uye akakunda madzimambo mamwe.',
        'Akakwikwidza kuchengetedzwa kwemhuri yake yose muchinjano nokubatsira kwake, kwakaratidzwa netambo tsvuku yaiva pahwindo rake sechiratidzo chehondo yaipinda.',
      ],
    },
    legacy: {
      en: "Later became an ancestor of King David and is listed in the genealogy of Jesus in Matthew's Gospel, and is praised in the New Testament for her faith and works.",
      sn: 'Gare gare akava tateguru waMambo Dhavhidhi uye anonyorwa mudzinza raJesu muEvhangeri yaMatewu, uye anorumbidzwa muTestamende Itsva nokuda kwokutenda kwake namabasa ake.',
    },
    legacyTradition: false,
    reference: 'Joshua 2:1-21, Joshua 6:22-25, Matthew 1:5, Hebrews 11:31, James 2:25',
  },
  deborah: {
    title: { en: 'The Judge Who Led an Army', sn: 'Mutongi Akatungamirira Hondo' },
    background: {
      en: 'The only woman among Israel\'s judges, known for sitting under a palm tree between Ramah and Bethel where Israelites came to her for judgment.',
      sn: 'Mukadzi mumwe chete pakati pevatongi veIsraeri, anozivikanwa nokugara pasi pomuchindwe pakati peRama neBheteri kwaiuya vaIsraeri kwaari vachitsvaka kutongwa.',
    },
    historicalContext: {
      en: 'Led during a period when Israel was oppressed by King Jabin of Canaan and his commander Sisera, who had 900 iron chariots.',
      sn: 'Akatungamirira munguva iyo Israeri yakanga ichimanikidzwa naMambo Jabhini weKenani nomukuru wehondo yake Sisera, akanga aine ngoro dzesimbi mazana mapfumbamwe.',
    },
    notableMoments: {
      en: [
        "Summoned the military commander Barak and relayed God's command to gather an army against Sisera's forces.",
        'Was asked by Barak to go with him into battle, and agreed, but told him the honor of the victory would go to a woman instead of him.',
        'Composed, together with Barak, a triumphant song of victory celebrated as one of the oldest pieces of Hebrew poetry in the Bible.',
      ],
      sn: [
        'Akadana mukuru wehondo Bharaki ndokududzira murayiro waMwari wokuunganidza hondo kurwisa mauto aSisera.',
        'Akakumbirwa naBharaki kuti aende naye kuhondo, ndokubvuma, asi akamuudza kuti rukudzo rwokukunda ruchaendera kumukadzi panzvimbo yake.',
        'Akagadzira, pamwe naBharaki, rwiyo runopembera rwokukunda runoonekwa serimwe remashoko akare enhetembo dzechiHebheru muBhaibheri.',
      ],
    },
    legacy: {
      en: 'Remembered as a rare example in the Old Testament of a woman holding the highest position of judicial and military leadership in Israel.',
      sn: 'Anorangarirwa somuenzaniso usinganyanyi kuwanikwa muTestamende Yekare womukadzi aiva nechinzvimbo chepamusoro chehutongi nehutungamiri hwehondo muIsraeri.',
    },
    legacyTradition: false,
    reference: 'Judges 4:4-16, Judges 5',
  },
  jael: {
    title: { en: 'The Tent-Peg Deliverer', sn: 'Mununuri Ane Mbambo Yetende' },
    background: {
      en: "Wife of Heber the Kenite; her family had a treaty of peace with Sisera's king, which made her decisive action all the more unexpected.",
      sn: 'Mudzimai waHebheri muKeni; mhuri yake yakanga ine sungano yerugare namambo waSisera, izvo zvakaita kuti chiito chake chinotsunga chinyanye kusatarisirwa.',
    },
    historicalContext: {
      en: "Acted in the aftermath of Deborah and Barak's battle against Sisera's forces, when the defeated commander fled on foot.",
      sn: 'Akaita chiito chake mushure mehondo yaDhebhora naBharaki pamusoro pamauto aSisera, apo mukuru wehondo akakundwa akatiza netsoka.',
    },
    notableMoments: {
      en: [
        'Invited the fleeing Sisera into her tent, covered him with a blanket, and gave him milk to drink, lulling him into a false sense of safety.',
        'Waited until he fell asleep from exhaustion, then drove a tent peg through his temple with a hammer, killing him instantly.',
        "Was celebrated in Deborah's victory song as 'most blessed of women,' credited with securing Israel's deliverance.",
      ],
      sn: [
        'Akakoka Sisera aitiza mutende rake, akamufukidza nejira, akamupa mukaka kuti anwe, achimuchengetedza mukufunga kwenhema kwokuti akachengeteka.',
        'Akamirira kusvikira arara nokuneta, ndokubva adziva mbambo yetende napanhengo dzake nesando, achimuuraya pakarepo.',
        "Akarumbidzwa murwiyo rwokukunda rwaDhebhora se'akaropafadzwa kupfuura vakadzi vose,' achikudzwa nokuwanikwa kwokununurwa kweIsraeri.",
      ],
    },
    legacy: {
      en: 'Remains one of the most debated figures in the Old Testament, remembered both for her decisive courage and for the violence of her method.',
      sn: 'Anoramba ari mumwe wevanhu vanonyanya kupokanwa muTestamende Yekare, achirangarirwa zvose nokutsunga kwake nokuomarara kwenzira yake.',
    },
    legacyTradition: true,
    reference: 'Judges 4:17-22, Judges 5:24-27',
  },
  ruth: {
    title: { en: 'The Loyal Foreigner', sn: 'Mutorwa Akatendeka' },
    background: {
      en: 'A Moabite woman who married into an Israelite family living in Moab during a famine, later widowed alongside her mother-in-law Naomi.',
      sn: 'Mukadzi weMoabhi akaroorwa mumhuri yeIsraeri yaigara kuMoabhi panguva yenzara, gare gare akafirwa nomurume pamwe navamwene wake Naomi.',
    },
    historicalContext: {
      en: "Set during the period of the judges, a time of famine in Israel that had driven Naomi's family to seek refuge in Moab.",
      sn: 'Zvakaitika munguva yevatongi, nguva yenzara muIsraeri yakanga yaita kuti mhuri yaNaomi itsvake utiziro kuMoabhi.',
    },
    notableMoments: {
      en: [
        "Refused to leave Naomi when she decided to return to Bethlehem, declaring, 'Where you go I will go, and your people will be my people, and your God my God.'",
        'Worked long hours gleaning leftover grain in the fields to provide for herself and Naomi, catching the attention of the landowner Boaz.',
        "Followed Naomi's guidance to approach Boaz as a kinsman-redeemer, leading to their marriage and the continuation of Naomi's family line.",
      ],
      sn: [
        "Akaramba kusiya Naomi paakasarudza kudzokera kuBhetrehema, achizivisa kuti, 'Kwaunoenda ndiko kwandichaenda, uye vanhu vako vachava vanhu vangu, naMwari wako achava Mwari wangu.'",
        'Akashanda maawa akareba achiunganidza zviyo zvasara muminda kuti azviraramise iye naNaomi, achikwezva ngwarira yomuridzi weminda Bhowazi.',
        'Akatevera kutungamirirwa naNaomi kuswedera kuna Bhowazi somudzikinuri wehama, izvo zvakaguma nomuchato wavo nokuenderera mberi kwedzinza raNaomi.',
      ],
    },
    legacy: {
      en: "Became the great-grandmother of King David and is listed in the genealogy of Jesus in Matthew's Gospel, a remarkable inclusion for a foreign-born woman.",
      sn: 'Akava ambuya vaMambo Dhavhidhi uye anonyorwa mudzinza raJesu muEvhangeri yaMatewu, chinhu chinoshamisa kune mukadzi akaberekerwa kunze kweIsraeri.',
    },
    legacyTradition: false,
    reference: 'Ruth 1:16-17, Ruth 2, Ruth 4:13-17, Matthew 1:5',
  },
  hannah: {
    title: { en: 'The Woman of Prayer', sn: 'Mukadzi Wenyengetero' },
    background: {
      en: 'One of two wives of Elkanah, deeply loved by her husband but tormented year after year by her rival wife Peninnah over her inability to bear children.',
      sn: 'Mumwe wevakadzi vaviri vaElikana, aidiwa zvikuru nemurume wake asi achitambudzwa gore negore nomuvengani wake Penina nokuda kwokusagona kubereka vana.',
    },
    historicalContext: {
      en: 'Lived during the final years of the period of the judges, worshiping annually at the tabernacle in Shiloh under the priest Eli.',
      sn: 'Akararama munguva dzokupedzisira dzevatongi, achinamata gore negore patebhenekeri muShiro pasi pomupristi Eri.',
    },
    notableMoments: {
      en: [
        'Prayed so silently but with such visible anguish at the tabernacle that the priest Eli initially assumed she was drunk.',
        'Vowed that if God gave her a son, she would give him back to the Lord for all the days of his life.',
        "Kept her vow after Samuel was born, bringing him to live and serve at the tabernacle once he was weaned, and composed a prayer of praise celebrating God's power to lift up the lowly.",
      ],
      sn: [
        'Akanyengetera achinyarara asi nokushungurudzika kunoonekwa patebhenekeri zvokuti mupristi Eri pakutanga akafunga kuti aive akadhakwa.',
        'Akapika kuti kana Mwari akamupa mwanakomana, aizomudzosera kuna Jehovha mazuva ose oupenyu hwake.',
        'Akachengeta mhiko yake mushure mokunge Samueri aberekwa, achimuunza kuti agare uye ashumire patebhenekeri kana arumurwa, ndokugadzira munyengetero worumbidzo achipembera simba raMwari rokusimudzira vakaderera.',
      ],
    },
    legacy: {
      en: "Her son Samuel became one of Israel's most significant prophets and judges, anointing both King Saul and King David.",
      sn: 'Mwanakomana wake Samueri akava mumwe wevaporofita nevatongi vanokosha zvikuru veIsraeri, achizodza Mambo Sauro naMambo Dhavhidhi.',
    },
    legacyTradition: false,
    reference: '1 Samuel 1:1-20, 1 Samuel 1:24-28, 1 Samuel 2:1-10',
  },
  abigail: {
    title: { en: 'The Peacemaker', sn: 'Mugadziri Werugare' },
    background: {
      en: 'Described as intelligent and beautiful, married to the wealthy but harsh and foolish Nabal, whose behavior repeatedly caused conflict.',
      sn: 'Anotsanangurwa senomuchenjeri uye ane rukudzo, akaroorwa naNabhari, mupfumi asi aiva neutsinye uye upenzi, hunhu hwaiwanzokonzera nharo.',
    },
    historicalContext: {
      en: "Lived during David's years as a fugitive from King Saul, when David's men had protected Nabal's shepherds and flocks without reward.",
      sn: 'Akararama munguva yemakore aDhavhidhi seakatiza kuna Mambo Sauro, apo varume vaDhavhidhi vainge vadzivirira vafudzi nemakwai aNabhari pasina mubairo.',
    },
    notableMoments: {
      en: [
        "Acted swiftly and secretly, without consulting her husband, to send a generous gift of food to David's men after Nabal insulted them.",
        'Rode out personally to meet David, humbly appealing to him not to take needless revenge and bloodshed on her household.',
        "Was praised by David for her good judgment, and after Nabal's sudden death, became David's wife.",
      ],
      sn: [
        'Akaita nokukurumidza uye muchivande, pasina kubvunza murume wake, kutumira chipo chinopa nomwoyo wose chezvokudya kuvarume vaDhavhidhi mushure mokunge Nabhari avazvidza.',
        'Akatasva ari oga kunosangana naDhavhidhi, achikumbira nokuzvininipisa kuti arege kutsiva pasina chikonzero uye kudeura ropa paimba yake.',
        'Akarumbidzwa naDhavhidhi nokuda kwokufunga kwake kwakanaka, uye mushure morufu rwaNabhari runokurumidza, akava mudzimai waDhavhidhi.',
      ],
    },
    legacy: {
      en: 'Remembered as a model of wisdom and diplomacy, credited with saving her entire household through calm, decisive action.',
      sn: 'Anorangarirwa somuenzaniso wounyanzvi nokuzvibata, achikudzwa nokuponesa imba yake yose kuburikidza nechiito chinodzikama uye chinotsunga.',
    },
    legacyTradition: false,
    reference: '1 Samuel 25:2-42',
  },
  huldah: {
    title: { en: 'The Prophetess Who Confirmed the Word', sn: 'Muporofitakadzi Akasimbisa Shoko' },
    background: {
      en: 'Little is recorded of her family beyond her husband Shallum, who was the keeper of the royal wardrobe; she lived in Jerusalem in a section known as the Second Quarter.',
      sn: 'Zvishoma zvakanyorwa nezvemhuri yake kunze komurume wake Sharumi, aiva muchengeti wenguo dzoumambo; aigara muJerusarema mudunhu rainzi Dunhu Rechipiri.',
    },
    historicalContext: {
      en: 'Consulted during the reign of King Josiah, after workers repairing the temple discovered a long-lost scroll of the Law.',
      sn: 'Akabvunzwa munguva yaMambo Josiya, mushure mevashandi vaigadzirisa temberi vawana gwaro reMurau rakanga rarasika kwenguva refu.',
    },
    notableMoments: {
      en: [
        'Was sought out by the high priest and royal officials specifically for her prophetic authority when the rediscovered scroll caused alarm.',
        'Confirmed that the disasters described in the scroll would indeed come upon Judah for its unfaithfulness, but that Josiah himself would be spared from seeing it due to his humble response.',
        "Her confirmation of the scroll's authority directly triggered Josiah's sweeping religious reforms across the kingdom.",
      ],
      sn: [
        'Akatsvakwa nomupristi mukuru navakuru voumambo nokuda kwesimba rake rouporofita apo gwaro rakawanikwazve rakakonzera kutya.',
        'Akasimbisa kuti njodzi dzakatsanangurwa mugwaro dzaizosvika chaizvo pamusoro peJudha nokuda kwokusatendeka kwavo, asi Josiya pachake aizosiiwa asingazvioni nokuda kwokupindura kwake kunozvininipisa.',
        'Kusimbisa kwake simba regwaro kwakakonzera zvakananga shanduko huru dzechitendero dzaJosiya muumambo hwose.',
      ],
    },
    legacy: {
      en: "Stands as clear scriptural evidence that a woman's prophetic authority was sought and trusted at the highest levels of government during the monarchy.",
      sn: 'Anomira souchapupu chakajeka muBhaibheri chokuti simba rouporofita romukadzi rakatsvakwa uye rakavimbwa nazvinzvimbo dzepamusoro dzehurumende panguva youmambo.',
    },
    legacyTradition: false,
    reference: '2 Kings 22:11-20, 2 Chronicles 34:22-28',
  },
  esther: {
    title: { en: 'The Queen Who Risked Everything', sn: 'Mambokadzi Akaisa Zvose Panjodzi' },
    background: {
      en: 'A Jewish orphan raised by her cousin Mordecai in Persia, who rose from obscurity to become queen after a kingdom-wide search for a new wife for King Xerxes.',
      sn: 'Nherera yechiJudha yakarerwa nehama yake Modhekai muPezhiya, akakwira kubva mukusazivikanwa kuenda kuva mambokadzi mushure mokutsvakwa kwakaita umambo hwose vachitsvaka mudzimai mutsva waMambo Zekisesi.',
    },
    historicalContext: {
      en: 'Lived in the Persian Empire during the reign of King Xerxes, at a time when the official Haman plotted the annihilation of all Jews in the empire.',
      sn: 'Akararama muUmambo hwePezhiya munguva yaMambo Zekisesi, panguva iyo mukuru Hamani akaronga kuparadzwa kwavaJudha vose muumambo.',
    },
    notableMoments: {
      en: [
        "Kept her Jewish identity hidden on Mordecai's advice until the critical moment when it needed to be revealed.",
        "Was challenged by Mordecai with the famous words, 'Who knows but that you have come to your royal position for such a time as this?'",
        "Called for a three-day fast among the Jewish community before approaching the king unsummoned, declaring, 'If I perish, I perish.'",
        "Exposed Haman's plot at a banquet she carefully orchestrated, resulting in the reversal of the decree and the saving of her people.",
      ],
      sn: [
        'Akachengeta uJudha hwake hwakavanzika sezano raModhekai kusvikira panguva inokosha payaifanira kuratidzwa.',
        "Akapikiswa naModhekai nemashoko anozivikanwa okuti, 'Ndianiko anoziva kuti hausati wasvika panzvimbo yako youmambo nokuda kwenguva yakadai?'",
        "Akadana kutsanya kwemazuva matatu pakati penharaunda yechiJudha asati aswedera kuna mambo asina kudanwa, achizivisa kuti, 'Kana ndikafa, ndichafa hangu.'",
        'Akafumura zano raHamani pamabiko aakaronga zvakanaka, izvo zvakaguma nokushandurwa komurau uye kuponeswa kwevanhu vake.',
      ],
    },
    legacy: {
      en: 'Her courage is commemorated annually in the Jewish festival of Purim, celebrating the deliverance of the Jewish people.',
      sn: 'Ushingi hwake hunorangarirwa gore negore muchisangano chechiJudha cheParimi, chichipembera kununurwa kwevanhu vechiJudha.',
    },
    legacyTradition: false,
    reference: 'Esther 2:5-17, Esther 4:13-16, Esther 5-7',
  },
  'mary-mother-of-jesus': {
    title: { en: 'The Willing Servant', sn: 'Muranda Anozvipira' },
    background: {
      en: 'A young woman from Nazareth, engaged to Joseph, whose ordinary life was interrupted by an angelic announcement of extraordinary significance.',
      sn: 'Musikana muduku aibva kuNazareta, akatsidzirwa kuna Josefa, hupenyu hwake hwenguva dzose hwakaganhurwa nechiziviso chengirozi chine chikuru chinoshamisa.',
    },
    historicalContext: {
      en: 'Lived in Roman-occupied Galilee, where an unexplained pregnancy before marriage could have carried severe social and even legal consequences.',
      sn: 'Aigara muGarirea rakanga ratapwa neRoma, apo mimba isina kutsanangurika mudzimai asati aroorwa yaigona kuunza migumisiro yakaomarara munharaunda kunyange nomumutemo.',
    },
    notableMoments: {
      en: [
        "Responded to the angel Gabriel's announcement of a miraculous pregnancy with the words, 'I am the Lord's servant. May your word to me be fulfilled.'",
        "Traveled to visit her relative Elizabeth and composed a song of praise, the Magnificat, celebrating God's care for the humble and hungry.",
        "Endured the long journey to Bethlehem while pregnant, and later fled with Joseph and the infant Jesus to Egypt to escape Herod's massacre of children.",
        "Stood at the foot of the cross witnessing her son's execution, and was present with the disciples at Pentecost after the resurrection.",
      ],
      sn: [
        "Akapindura chiziviso chengirozi Gabhirieri chemimba inoshamisa nemashoko okuti, 'Ndiri muranda waJehovha. Shoko renyu kwandiri ngarizadzikiswe.'",
        'Akafamba kunoshanya hama yake Erizabheti ndokugadzira rwiyo rworumbidzo, iyo Magnificat, ichipembera kuchengeta kwaMwari kwevakaderera nevane nzara.',
        'Akatsungirira rwendo rurefu kuenda kuBhetrehema aine mimba, gare gare akatiza naJosefa nomwana Jesu kuenda kuEgipita kutiza kuurayiwa kwevana naHerodhi.',
        'Akamira pasi pomuchinjikwa achiona kuurayiwa kwomwanakomana wake, uye aivapo nevadzidzi paPendekosti mushure mokumuka.',
      ],
    },
    legacy: {
      en: 'Referenced as blessed among women and honored across Christian tradition, though the degree of veneration given to her varies significantly between different Christian traditions.',
      sn: 'Anodudzwa saakaropafadzwa pakati pevakadzi uye anokudzwa mutsika dzechiKristu dzose, kunyange zvazvo huwandu hwokukudzwa kwaanopiwa huchisiyana zvikuru pakati petsika dzakasiyana dzechiKristu.',
    },
    legacyTradition: false,
    reference: 'Luke 1:26-38, Luke 1:46-55, Matthew 2:13-15, John 19:25-27, Acts 1:14',
  },
  'mary-magdalene': {
    title: { en: 'The First Witness of the Resurrection', sn: 'Chapupu Chekutanga Chekumuka' },
    background: {
      en: 'A woman from Magdala who had been delivered from severe affliction, described as seven demons, and afterward became a devoted follower of Jesus.',
      sn: 'Mukadzi aibva kuMagadhara akanga anunurwa padambudziko rakaomarara, rinotsanangurwa semadhimoni manomwe, uye mushure mezvo akava mutevedzeri anozvipira waJesu.',
    },
    historicalContext: {
      en: 'Part of a group of women who traveled with Jesus and supported His ministry out of their own means, unusual for the social norms of the time.',
      sn: 'Chikamu cheboka revakadzi vaifamba naJesu uye vaitsigira ushumiri hwake nezvavo pachavo, izvo zvakanga zvisinganyanyi kuitika mumitemo yenharaunda yenguva iyoyo.',
    },
    notableMoments: {
      en: [
        'Stood among the small group of women who remained at the cross while most of the male disciples had fled in fear.',
        'Went to the tomb early on the first day of the week, only to find the stone rolled away and the body gone.',
        'Was the first person Jesus appeared to after His resurrection, initially mistaking Him for the gardener before He spoke her name.',
        "Was sent by Jesus Himself to tell the other disciples the news, earning her the traditional title 'apostle to the apostles.'",
      ],
      sn: [
        'Akamira pakati peboka diki revakadzi vakaramba varipo pamuchinjikwa apo vazhinji vevadzidzi vechirume vainge vatiza vachitya.',
        'Akaenda kuguva mangwanani ezuva rekutanga revhiki, achingowana dombo rakakunguruswa uye mutumbi wasara.',
        'Aiva munhu wekutanga Jesu akazviratidza kwaari mushure mekumuka kwake, pakutanga achimufungira somurimi wemunda Jesu asati ataura zita rake.',
        "Akatumwa naJesu pachake kuti audze vamwe vadzidzi nhau, izvo zvakamupa zita retsika rekuti 'mupostori kuvapostori.'",
      ],
    },
    legacy: {
      en: "Historically the subject of much confusion and later legend, often wrongly conflated with an unnamed 'sinful woman' elsewhere in the Gospels, a connection not supported by the biblical text itself.",
      sn: "Munhoroondo akava chinhu chokuvhiringidzika kukuru uye tsika dzakazotevera, kazhinji achisanganiswa zvisina kunaka no'mukadzi ane zvivi' asina zita mune imwe nzvimbo muEvhangeri, hukama husingatsigirwe norugwaro rweBhaibheri chairwo.",
    },
    legacyTradition: true,
    reference: 'Luke 8:1-3, John 19:25, John 20:1-18',
  },
  'proverbs-31-woman': {
    title: {
      en: 'Eshet Chayil — Woman of Noble Character',
      sn: 'Eshet Chayil — Mukadzi Ane Hunhu Hunokudzwa',
    },
    background: {
      en: 'Presented as the words of King Lemuel, taught to him by his mother, describing the qualities of an excellent wife and household manager.',
      sn: 'Anoratidzwa semashoko aMambo Remueri, akadzidziswa naamai vake, achitsanangura hunhu hwomudzimai akanaka uye mufambisi wemhuri.',
    },
    historicalContext: {
      en: 'Forms the closing poem of the book of Proverbs, structured as an acrostic in the original Hebrew, with each line beginning with a successive letter of the Hebrew alphabet.',
      sn: 'Anogadzira nhetembo yokupedzisira yebhuku raZvirevo, yakagadzirwa se-acrostic mumutauro wechiHebheru wepakutanga, mutsara mumwe nomumwe uchitanga nechitsamba chinotevera chearufabheti wechiHebheru.',
    },
    notableMoments: {
      en: [
        'Described as rising while it is still night to provide food for her household and assign tasks to her servants.',
        'Praised for her business sense, considering and buying a field, and planting a vineyard with the fruit of her hands.',
        "Described as clothed with 'strength and dignity,' able to laugh without fear of the future, and speaking with wisdom and faithful instruction.",
        "Summarized in the poem's famous closing verses as a woman who fears the Lord above all else, more valuable than rubies.",
      ],
      sn: [
        'Anotsanangurwa semuka husiku huchipo kuti apa zvokudya kumhuri yake uye kupa mabasa kuvashandi vake.',
        'Anorumbidzwa nokuda kwenjere dzake dzebhizinesi, achifunga uye kutenga munda, achisima munda wemizambiringa nezvibereko zvemaoko ake.',
        "Anotsanangurwa akapfeka 'simba nechiremera,' achikwanisa kuseka asingatyi ramangwana, uye achitaura nouchenjeri nedzidziso yakatendeka.",
        'Anopedzeswa mundima dzinozivikanwa dzokupedzisira dzenhetembo somukadzi anotya Jehovha kupfuura zvose, anokosha kupfuura marubhi.',
      ],
    },
    legacy: {
      en: 'The Hebrew phrase describing her, eshet chayil, is still sung or recited by Jewish husbands to their wives on the Sabbath as a blessing and expression of honor.',
      sn: 'Mashoko echiHebheru anomutsanangura, eshet chayil, achiri kuimbwa kana kududzwa nevarume vechiJudha kuvadzimai vavo paSabata sechikomborero uye kuratidza rukudzo.',
    },
    legacyTradition: true,
    reference: 'Proverbs 31:10-31',
  },
};

export function getWomanDetail(id: string): WomanDetail | undefined {
  return WOMAN_DETAILS[id];
}
