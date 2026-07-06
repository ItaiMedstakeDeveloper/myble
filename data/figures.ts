/**
 * "People in the Bible" content — disciples, prophets, women, etc.
 *
 * All categories share one shape, so every screen (dashboard cards, category
 * lists, detail pages) is generic. Add a new category by adding a CategoryMeta
 * entry + figures with that `category`; no new screens required.
 *
 * Shona (`sn`) category titles/blurbs are first-pass drafts — tweak to taste.
 */

export type Lang = "en" | "sn";

export type FigureCategory = "disciple" | "prophet" | "woman";

export type FigureContent = {
  name: string;
  /** Badge text (era/theme/etc.). Omitted for disciples, who show no badge. */
  nickname_meaning?: string;
  original_profession: string;
  key_attribute: string;
};

export type Figure = {
  id: string; // language-independent slug used for routing, e.g. "simon-peter"
  category: FigureCategory;
  order: number;
  content: Record<Lang, FigureContent>;
};

export type CategoryMeta = {
  id: FigureCategory;
  title: Record<Lang, string>;
  blurb: Record<Lang, string>;
  emoji: string;
  /**
   * Labels for the two detail fields. The `content` shape is shared across
   * categories, but what each slot means differs (a disciple has a
   * "Profession"; a woman of valour has a "Scripture" reference), so each
   * category names its own slots.
   */
  fieldLabels: {
    original_profession: Record<Lang, string>;
    key_attribute: Record<Lang, string>;
  };
};

export type HomeSection = {
  id: string;
  title: Record<Lang, string>;
  categories: FigureCategory[];
};

export const CATEGORIES: CategoryMeta[] = [
  {
    id: "disciple",
    title: { en: "Know Your Disciples", sn: "Ziva Vadzidzi" },
    blurb: {
      en: "The twelve who followed Jesus",
      sn: "Gumi nevaviri vakatevera Jesu",
    },
    emoji: "🎣",
    fieldLabels: {
      original_profession: { en: "Profession", sn: "Basa" },
      key_attribute: { en: "Known for", sn: "Zvaanozivikanwa nazvo" },
    },
  },
  {
    id: "prophet",
    title: { en: "Know Your Prophets", sn: "Ziva Vaporofita" },
    blurb: {
      en: "God's messengers to the nations in the old testament",
      sn: "Nhume dzaMwari kumarudzi mu testamente yekare",
    },
    emoji: "📜",
    fieldLabels: {
      original_profession: { en: "Key themes", sn: "Misoro mikuru" },
      key_attribute: { en: "Known for", sn: "Zvaanozivikanwa nazvo" },
    },
  },
  {
    id: "woman",
    title: { en: "Women of Valour", sn: "Vakadzi Voushingi" },
    blurb: {
      en: "Powerful women in the Bible",
      sn: "Vakadzi vane simba muBhaibheri",
    },
    emoji: "👑",
    fieldLabels: {
      original_profession: { en: "Scripture", sn: "Rugwaro" },
      key_attribute: { en: "Her story", sn: "Nyaya yake" },
    },
  },
];

export const HOME_SECTIONS: HomeSection[] = [
  {
    id: "people",
    title: { en: "People in the Bible", sn: "Vanhu VeMubhaibheri" },
    categories: ["disciple", "prophet", "woman"],
  },
];

export const FIGURES: Figure[] = [
  {
    id: "simon-peter",
    category: "disciple",
    order: 1,
    content: {
      en: {
        name: "Simon Peter",
        original_profession: "Fisherman",
        key_attribute: "Spokesman for the disciples, denied Jesus three times",
      },
      sn: {
        name: "Simoni Petro",
        original_profession: "Mubati wehove",
        key_attribute: "Aive mutauriri wevadzidzi, akaramba Jesu katatu.",
      },
    },
  },
  {
    id: "andrew",
    category: "disciple",
    order: 2,
    content: {
      en: {
        name: "Andrew",
        original_profession: "Fisherman",
        key_attribute: "Brought his brother Simon to meet Jesus",
      },
      sn: {
        name: "Andireya",
        original_profession: "Mubati wehove",
        key_attribute: "Akaunza mukoma wake Simoni kuna Jesu",
      },
    },
  },
  {
    id: "james-zebedee",
    category: "disciple",
    order: 3,
    content: {
      en: {
        name: "James (Son of Zebedee)",
        original_profession: "Fisherman",
        key_attribute: "First of the 12 to be martyred.",
      },
      sn: {
        name: "Jakobho",
        original_profession: "Mubati wehove",
        key_attribute: "Akatanga kuurayiwa pakati pevaapostora gumi nevaviri.",
      },
    },
  },
  {
    id: "john",
    category: "disciple",
    order: 4,
    content: {
      en: {
        name: "John",
        original_profession: "Fisherman",
        key_attribute: "The 'disciple whom Jesus loved",
      },
      sn: {
        name: "Johani",
        original_profession: "Mubati wehove",
        key_attribute: "Mudzidzi 'aidiwa naJesu",
      },
    },
  },
  {
    id: "philip",
    category: "disciple",
    order: 5,
    content: {
      en: {
        name: "Philip",
        original_profession: "Unspecified (from Bethsaida)",
        key_attribute: "Brought Nathanael to Jesus.",
      },
      sn: {
        name: "Firipi",
        original_profession: "Hazvina kutsanangurwa (aibva kuBhetsaidha)",
        key_attribute: "Akaunza Natanieri kuna Jesu",
      },
    },
  },
  {
    id: "bartholomew",
    category: "disciple",
    order: 6,
    content: {
      en: {
        name: "Bartholomew",
        original_profession: "Unspecified",
        key_attribute:
          "Greeted by Jesus as 'Israelite in whom there is no guile.'",
      },
      sn: {
        name: "Bhatolomeo",
        original_profession: "Hazvina kutsanangurwa",
        key_attribute: "Jesu akati ndiye 'muIsraeri asina kunyengera.'",
      },
    },
  },
  {
    id: "thomas",
    category: "disciple",
    order: 7,
    content: {
      en: {
        name: "Thomas",
        original_profession: "Unspecified",
        key_attribute: "Famously doubted the resurrection of Jesus's",
      },
      sn: {
        name: "Tomasi",
        original_profession: "Hazvina kutsanangurwa",
        key_attribute: "Akakurumbira nekusahadzika rumuko rwaJesu '",
      },
    },
  },
  {
    id: "matthew",
    category: "disciple",
    order: 8,
    content: {
      en: {
        name: "Matthew",
        original_profession: "Tax Collector",
        key_attribute: "Also known as Levi, wrote the Gospel of Matthew.",
      },
      sn: {
        name: "Mateu",
        original_profession: "Muteresi",
        key_attribute: "Aizivikanwawo saRevhi, akanyora Evhangeri yaMateu.",
      },
    },
  },
  {
    id: "james-alphaeus",
    category: "disciple",
    order: 9,
    content: {
      en: {
        name: "James (Son of Alphaeus)",
        original_profession: "Unspecified",
        key_attribute: "Distinguished from James the brother of John.",
      },
      sn: {
        name: "Jakobho (Mwanakomana waArifiyosi)",
        original_profession: "Hazvina kutsanangurwa",
        key_attribute: "Anosiyaniswa naJakobho, mukoma waJohani.",
      },
    },
  },
  {
    id: "thaddaeus",
    category: "disciple",
    order: 10,
    content: {
      en: {
        name: "Thaddaeus",
        original_profession: "Unspecified",
        key_attribute:
          "Asked Jesus why he revealed himself only to the disciples",
      },
      sn: {
        name: "Tadheo",
        original_profession: "Hazvina kutsanangurwa",
        key_attribute:
          "Akabvunza Jesu kuti sei aizozviratidza kuvadzidzi chete",
      },
    },
  },
  {
    id: "simon-zealot",
    category: "disciple",
    order: 11,
    content: {
      en: {
        name: "Simon the Zealot",
        original_profession: "Zealot (Political Rebel)",
        key_attribute: "Formerly part of a radical Jewish political group",
      },
      sn: {
        name: "Simoni muZealoti",
        original_profession: "MuZealoti (Mupanduki wezvematongerwo enyika)",
        key_attribute:
          "Aimbove nhengo yeboka rechiJudha raizvipira kupidigura hutongi hweRoma.",
      },
    },
  },
  {
    id: "judas-iscariot",
    category: "disciple",
    order: 12,
    content: {
      en: {
        name: "Judas Iscariot",
        original_profession: "Treasurer",
        key_attribute: "The disciple who betrayed Jesus",
      },
      sn: {
        name: "Judhasi Isikariyoti",
        original_profession: "Muchengeti wemari",
        key_attribute: "Mudzidzi akatengesa Jesu",
      },
    },
  },
  {
    id: "isaiah",
    category: "prophet",
    order: 1,
    content: {
      en: {
        name: "Isaiah",
        nickname_meaning: "Pre-Exilic",
        original_profession:
          "Holiness of God • Messianic prophecies • Judgment and comfort",
        key_attribute:
          "Known for his sweeping prophecies about the coming Messiah, the fall of nations, and the restoration of Jerusalem.",
      },
      sn: {
        name: "Isaya",
        nickname_meaning: "Pamberi peUtapwa",
        original_profession:
          "Utsvene hwaMwari • Uporofita hweMesiya • Kutongwa nekunyaradzwa",
        key_attribute:
          "Anozivikanwa neuporofita hwake hwakakura pamusoro peMesiya achauya, kuwa kwendudzi, uye kuvandudzwa kweJerusarema.",
      },
    },
  },
  {
    id: "jeremiah",
    category: "prophet",
    order: 2,
    content: {
      en: {
        name: "Jeremiah",
        nickname_meaning: "Pre-Exilic to Exilic",
        original_profession: "Repentance • The new covenant • God's judgment",
        key_attribute:
          "Often called the 'weeping prophet,' he warned Judah of the Babylonian exile and authored both Jeremiah and Lamentations.",
      },
      sn: {
        name: "Jeremiya",
        nickname_meaning: "Pamberi kusvika Panguva yeUtapwa",
        original_profession: "Kutendeuka • Sungano itsva • Kutonga kwaMwari",
        key_attribute:
          "Anowanzonzi 'muporofita anochema,' akanyevera Judha nezveutapwa hweBhabhironi uye akanyora mabhuku eJeremiya neMariro.",
      },
    },
  },
  {
    id: "ezekiel",
    category: "prophet",
    order: 3,
    content: {
      en: {
        name: "Ezekiel",
        nickname_meaning: "Exilic",
        original_profession:
          "Sovereignty of God • Individual responsibility • Restoration of the temple",
        key_attribute:
          "A priest and prophet who ministered to the Jewish exiles in Babylon, offering warnings of judgment but also visions of future restoration.",
      },
      sn: {
        name: "Ezekieri",
        nickname_meaning: "Panguva yeUtapwa",
        original_profession:
          "Ushe hwaMwari • Mutoro womunhu mumwe nomumwe • Kuvandudzwa kwetemberi",
        key_attribute:
          "Mupristi nomuporofita akashumira vatapwa vechiJudha muBhabhironi, achipa nyevero dzekutongwa asiwo zviratidzo zvekuvandudzwa kweramangwana.",
      },
    },
  },
  {
    id: "daniel",
    category: "prophet",
    order: 4,
    content: {
      en: {
        name: "Daniel",
        nickname_meaning: "Exilic",
        original_profession:
          "God's ultimate kingdom • Sovereignty over empires • End-times prophecy",
        key_attribute:
          "Taken captive to Babylon, he rose to prominence in government while remaining faithful to God, known for his apocalyptic visions.",
      },
      sn: {
        name: "Dhanieri",
        nickname_meaning: "Panguva yeUtapwa",
        original_profession:
          "Umambo hwaMwari husingaperi • Ushe pamusoro peumambo • Uporofita hwenguva yekupedzisira",
        key_attribute:
          "Akatapwa achiendeswa kuBhabhironi, akakwira panzvimbo yepamusoro muhurumende achiramba akatendeka kuna Mwari, achizivikanwa nezviratidzo zvake zvechiapokariputi.",
      },
    },
  },
  {
    id: "hosea",
    category: "prophet",
    order: 5,
    content: {
      en: {
        name: "Hosea",
        nickname_meaning: "Pre-Exilic",
        original_profession: "Unconditional love • Spiritual adultery",
        key_attribute:
          "Used his own marriage as a metaphor to illustrate God's steadfast love for an unfaithful Israel.",
      },
      sn: {
        name: "Hosea",
        nickname_meaning: "Pamberi peUtapwa",
        original_profession: "Rudo rusina mamiriro • Ufeve hwomweya",
        key_attribute:
          "Akashandisa muchato wake somufananidzo wokuratidza rudo rwaMwari rusingaperi kuIsraeri isina kutendeka.",
      },
    },
  },
  {
    id: "joel",
    category: "prophet",
    order: 6,
    content: {
      en: {
        name: "Joel",
        nickname_meaning: "Pre-Exilic",
        original_profession: "Day of the Lord • Outpouring of the Spirit",
        key_attribute:
          "Warned of an impending locust plague and called the people to repent, ultimately prophesying the outpouring of the Holy Spirit.",
      },
      sn: {
        name: "Joeri",
        nickname_meaning: "Pamberi peUtapwa",
        original_profession: "Zuva raShe • Kudururwa kwoMweya",
        key_attribute:
          "Akanyevera nezvedenda remhashu raiuya uye akadana vanhu kuti vatendeuke, achizoporofita kudururwa kwoMweya Mutsvene.",
      },
    },
  },
  {
    id: "amos",
    category: "prophet",
    order: 7,
    content: {
      en: {
        name: "Amos",
        nickname_meaning: "Pre-Exilic",
        original_profession: "Social justice • Divine judgment",
        key_attribute:
          "A shepherd from Judah who prophesied to the Northern Kingdom, fiercely condemning social injustice and religious hypocrisy.",
      },
      sn: {
        name: "Amosi",
        nickname_meaning: "Pamberi peUtapwa",
        original_profession: "Kururamisira kwevanhu • Kutonga kwaMwari",
        key_attribute:
          "Mufudzi aibva kuJudha akaporofita kuUmambo hwokuChamhembe, achishoora zvakasimba kusaruramisira kwevanhu neunyengeri hwechitendero.",
      },
    },
  },
  {
    id: "obadiah",
    category: "prophet",
    order: 8,
    content: {
      en: {
        name: "Obadiah",
        nickname_meaning: "Exilic",
        original_profession: "Divine justice • Pride • Hope for Israel",
        key_attribute:
          "Pronounced judgment against the nation of Edom for their cruelty toward Israel during the fall of Jerusalem.",
      },
      sn: {
        name: "Obhadhiya",
        nickname_meaning: "Panguva yeUtapwa",
        original_profession:
          "Kururamisira kwaMwari • Kuzvikudza • Tariro yeIsraeri",
        key_attribute:
          "Akataura kutongwa pamusoro perudzi rweEdhomu nekuda kweutsinye hwavo kuIsraeri panguva yekuwa kweJerusarema.",
      },
    },
  },
  {
    id: "jonah",
    category: "prophet",
    order: 9,
    content: {
      en: {
        name: "Jonah",
        nickname_meaning: "Pre-Exilic",
        original_profession: "God's mercy • Obedience",
        key_attribute:
          "Fled his mission to Nineveh but ultimately preached repentance to the Assyrian capital, illustrating God's mercy to all nations.",
      },
      sn: {
        name: "Jona",
        nickname_meaning: "Pamberi peUtapwa",
        original_profession: "Ngoni dzaMwari • Kuteerera",
        key_attribute:
          "Akatiza basa rake rekuenda kuNinevhe asi akazoparidza kutendeuka kuguta guru reAsiriya, achiratidza ngoni dzaMwari kundudzi dzose.",
      },
    },
  },
  {
    id: "micah",
    category: "prophet",
    order: 10,
    content: {
      en: {
        name: "Micah",
        nickname_meaning: "Pre-Exilic",
        original_profession: "Justice and humility • Messianic lineage",
        key_attribute:
          "Rebuked leaders and citizens for injustice and idolatry, but also foretold the exact birthplace of the Messiah.",
      },
      sn: {
        name: "Mika",
        nickname_meaning: "Pamberi peUtapwa",
        original_profession: "Kururamisira nekuzvininipisa • Dzinza raMesiya",
        key_attribute:
          "Akatsiura vatungamiri nevagari nokuda kwokusaruramisira nekunamata zvidhori, asiwo akafanotaura nzvimbo chaiyo yokuberekerwa kweMesiya.",
      },
    },
  },
  {
    id: "nahum",
    category: "prophet",
    order: 11,
    content: {
      en: {
        name: "Nahum",
        nickname_meaning: "Pre-Exilic",
        original_profession: "God's vengeance • Judgment on oppressors",
        key_attribute:
          "Pronounced the doom and ultimate destruction of Nineveh, the capital of the Assyrian Empire.",
      },
      sn: {
        name: "Nahumi",
        nickname_meaning: "Pamberi peUtapwa",
        original_profession: "Kutsiva kwaMwari • Kutongwa kwevamanikidzi",
        key_attribute:
          "Akataura kuparadzwa nokuguma kweNinevhe, guta guru reUmambo hweAsiriya.",
      },
    },
  },
  {
    id: "habakkuk",
    category: "prophet",
    order: 12,
    content: {
      en: {
        name: "Habakkuk",
        nickname_meaning: "Pre-Exilic",
        original_profession: "Theodicy • Faith in hardship",
        key_attribute:
          "Dialogued with God about the problem of evil and the use of Babylon to punish Judah, famously concluding 'the righteous shall live by his faith.'",
      },
      sn: {
        name: "Habhakuki",
        nickname_meaning: "Pamberi peUtapwa",
        original_profession:
          "Kururama kwaMwari pane zvakaipa • Kutenda munhamo",
        key_attribute:
          "Akakurukura naMwari nezvedambudziko rezvakaipa uye kushandiswa kweBhabhironi kuranga Judha, achizogumisa nemashoko okuti 'akarurama achararama nokutenda kwake.'",
      },
    },
  },
  {
    id: "zephaniah",
    category: "prophet",
    order: 13,
    content: {
      en: {
        name: "Zephaniah",
        nickname_meaning: "Pre-Exilic",
        original_profession: "The Day of the Lord • Universal judgment",
        key_attribute:
          "Warned of the imminent 'Day of the Lord' for Judah, paired with a message of hope and purification for a remnant.",
      },
      sn: {
        name: "Zefaniya",
        nickname_meaning: "Pamberi peUtapwa",
        original_profession: "Zuva raShe • Kutongwa kwenyika yose",
        key_attribute:
          "Akanyevera nezve'Zuva raShe' raiswedera kuJudha, pamwe neshoko retariro nokunatswa kwevakasara.",
      },
    },
  },
  {
    id: "haggai",
    category: "prophet",
    order: 14,
    content: {
      en: {
        name: "Haggai",
        nickname_meaning: "Post-Exilic",
        original_profession: "Temple reconstruction • Prioritizing God",
        key_attribute:
          "Encouraged the returned exiles to prioritize the rebuilding of the Temple in Jerusalem over their own homes.",
      },
      sn: {
        name: "Hagai",
        nickname_meaning: "Mushure meUtapwa",
        original_profession: "Kuvakwazve kwetemberi • Kuisa Mwari pekutanga",
        key_attribute:
          "Akakurudzira vatapwa vakadzoka kuti vaise kuvakazve Temberi muJerusarema pamberi pemisha yavo.",
      },
    },
  },
  {
    id: "zechariah",
    category: "prophet",
    order: 15,
    content: {
      en: {
        name: "Zechariah",
        nickname_meaning: "Post-Exilic",
        original_profession: "Messianic prophecies • Rebuilding Jerusalem",
        key_attribute:
          "Employed highly symbolic apocalyptic visions to encourage the post-exilic community and prophesied heavily on the coming of the Messiah.",
      },
      sn: {
        name: "Zekariya",
        nickname_meaning: "Mushure meUtapwa",
        original_profession: "Uporofita hweMesiya • Kuvakazve Jerusarema",
        key_attribute:
          "Akashandisa zviratidzo zvechiapokariputi zvakawanda zvemifananidzo kukurudzira nharaunda yapashure peutapwa uye akaporofita zvakawanda pamusoro pekuuya kweMesiya.",
      },
    },
  },
  {
    id: "malachi",
    category: "prophet",
    order: 16,
    content: {
      en: {
        name: "Malachi",
        nickname_meaning: "Post-Exilic",
        original_profession: "Spiritual apathy • Tithes and offerings",
        key_attribute:
          "Rebuked the priests and people for their half-hearted sacrifices and spiritual apathy, while foretelling the messenger who would prepare the way for the Lord.",
      },
      sn: {
        name: "Maraki",
        nickname_meaning: "Mushure meUtapwa",
        original_profession: "Usimbe hwomweya • Zvegumi nezvipiriso",
        key_attribute:
          "Akatsiura vapristi nevanhu nokuda kwezvibayiro zvavo zvisina mwoyo wose neusimbe hwomweya, achifanotaura nhume yaizogadzira nzira yaShe.",
      },
    },
  },
  {
    id: "sarah",
    category: "woman",
    order: 1,
    content: {
      en: {
        name: "Sarah",
        nickname_meaning: "Matriarchal & Faith",
        original_profession: "Genesis 17-21",
        key_attribute:
          "The wife of Abraham and mother of Isaac. She holds the distinction of being the only woman in the Bible whose age at death is recorded. Despite her initial doubt, she received the strength to conceive the founding lineage of Israel in her old age.",
      },
      sn: {
        name: "Sara",
        nickname_meaning: "Umai & Kutenda",
        original_profession: "Genesisi 17-21",
        key_attribute:
          "Mudzimai waAbrahamu naamai vaIsaka. Ndiye chete mukadzi muBhaibheri ane zera rake pakufa rakanyorwa. Kunyange akatanga achinyunyuta, akapiwa simba rekubereka dzinza rekutanga reIsraeri panguva yeukwegurwe hwake.",
      },
    },
  },
  {
    id: "miriam",
    category: "woman",
    order: 2,
    content: {
      en: {
        name: "Miriam",
        nickname_meaning: "Prophetic & Leadership",
        original_profession: "Exodus 2, 15; Numbers 12",
        key_attribute:
          "A prophetess and the sister of Moses and Aaron. She led the Israelite women in songs of victory after crossing the Red Sea and was instrumental in saving Moses' life by placing him in the Nile.",
      },
      sn: {
        name: "Miriamu",
        nickname_meaning: "Uporofita & Utungamiri",
        original_profession: "Eksodho 2, 15; Numeri 12",
        key_attribute:
          "Muporofitakadzi uye hanzvadzi yaMozisi naAroni. Akatungamirira vakadzi veIsraeri munziyo dzekukunda mushure mekuyambuka Gungwa Dzvuku uye akabatsira kuponesa upenyu hwaMozisi nekumuisa muRwizi rweNire.",
      },
    },
  },
  {
    id: "deborah",
    category: "woman",
    order: 4,
    content: {
      en: {
        name: "Deborah",
        nickname_meaning: "Political, Judicial & Military",
        original_profession: "Judges 4-5",
        key_attribute:
          "The only female judge mentioned in the Bible. She settled disputes for the Israelites, held court, and directed military strategy, leading Barak and the army to a decisive victory that brought forty years of peace.",
      },
      sn: {
        name: "Dhebhora",
        nickname_meaning: "Zvematongerwo, Utongi & Uto",
        original_profession: "Vatongi 4-5",
        key_attribute:
          "Ndiye chete mutongi wechikadzi anotaurwa muBhaibheri. Aigadzirisa gakava reveIsraeri, achitonga, uye achitungamira zano rehondo, achitungamirira Bharaki nehondo kukunda kwakauya nemakore makumi mana erunyararo.",
      },
    },
  },
  {
    id: "ruth",
    category: "woman",
    order: 6,
    content: {
      en: {
        name: "Ruth",
        nickname_meaning: "Loyalty & Lineage",
        original_profession: "Book of Ruth",
        key_attribute:
          "A Moabite woman known for her deep loyalty to her mother-in-law, Naomi. She became a central figure in the biblical lineage, ultimately becoming the great-grandmother of King David.",
      },
      sn: {
        name: "Rute",
        nickname_meaning: "Kutendeka & Dzinza",
        original_profession: "Bhuku raRute",
        key_attribute:
          "Mukadzi wekuMoabhu anozivikanwa nekutendeka kwake kukuru kuna vamwene vake, Naomi. Akava munhu wakakosha mudzinza reBhaibheri, akazova vambuya vasekuru vaMambo Dhavhidhi.",
      },
    },
  },
  {
    id: "esther",
    category: "woman",
    order: 10,
    content: {
      en: {
        name: "Esther",
        nickname_meaning: "Political Influence & Courage",
        original_profession: "Book of Esther",
        key_attribute:
          "A Jewish orphan who became the Queen of Persia. She courageously risked her own life to approach King Xerxes uninvited, ultimately exposing a plot to annihilate the Jewish people and saving her entire nation.",
      },
      sn: {
        name: "Esteri",
        nickname_meaning: "Simba Rezvematongerwo & Ushingi",
        original_profession: "Bhuku raEsteri",
        key_attribute:
          "Nherera yechiJudha akava Mambokadzi wePezhiya. Akaisa upenyu hwake panjodzi noushingi kuti asvike kuna Mambo Zekisesi asina kukokwa, achizoburitsa pachena rangano rekuparadza vanhu vechiJudha uye achiponesa rudzi rwake rwose.",
      },
    },
  },
  {
    id: "mary-mother-of-jesus",
    category: "woman",
    order: 11,
    content: {
      en: {
        name: "Mary (Mother of Jesus)",
        nickname_meaning: "Devotion & Obedience",
        original_profession: "Luke 1-2; John 19",
        key_attribute:
          "Chosen to bear the Son of God. She demonstrated immense courage and faith in accepting her role despite social stigma, and she faithfully stood by Jesus throughout his ministry and at the foot of the cross.",
      },
      sn: {
        name: "Maria (Amai vaJesu)",
        nickname_meaning: "Kuzvipira & Kuteerera",
        original_profession: "Ruka 1-2; Johani 19",
        key_attribute:
          "Akasarudzwa kubereka Mwanakomana waMwari. Akaratidza ushingi nekutenda kukuru pakugamuchira basa rake kunyange paive nekushorwa nevanhu, uye akamira naJesu nekutendeka muushumiri hwake hwose uye pasi pemuchinjikwa.",
      },
    },
  },
  {
    id: "mary-magdalene",
    category: "woman",
    order: 12,
    content: {
      en: {
        name: "Mary Magdalene",
        nickname_meaning: "Discipleship & Apostolic",
        original_profession: "Luke 8; John 20",
        key_attribute:
          "One of Jesus' closest followers. She financially supported his ministry, was present at his crucifixion, and was honored as the first person to see the resurrected Jesus, instructing her to share the news.",
      },
      sn: {
        name: "Maria Magadharini",
        nickname_meaning: "Udzidzi & Vuapostora",
        original_profession: "Ruka 8; Johani 20",
        key_attribute:
          "Mumwe wevateveri vaJesu vaive pedyo naye. Akatsigira ushumiri hwake nemari, aivepo pakurovererwa kwake, uye akakudzwa somunhu wekutanga kuona Jesu akamuka, achirairwa kuti aparidze nhau.",
      },
    },
  },
  {
    id: "priscilla",
    category: "woman",
    order: 14,
    content: {
      en: {
        name: "Priscilla",
        nickname_meaning: "Theological & Ministry",
        original_profession: "Acts 18; Romans 16",
        key_attribute:
          "A prominent early Christian leader and tentmaker. Alongside her husband Aquila, she traveled with the apostle Paul and utilized her deep biblical understanding to teach and correct church leaders.",
      },
      sn: {
        name: "Prisira",
        nickname_meaning: "Dzidziso yeUmwari & Ushumiri",
        original_profession: "Mabasa 18; VaRoma 16",
        key_attribute:
          "Mutungamiri wechiKristu wekutanga ane mukurumbira uye muiti wematende. Pamwe nemurume wake Akwira, akafamba nemuapostora Pauro uye akashandisa kunzwisisa kwake kwakadzika kweBhaibheri kudzidzisa nekururamisa vatungamiri vechechi.",
      },
    },
  },
  {
    id: "rahab",
    category: "woman",
    order: 3,
    content: {
      en: {
        name: "Rahab",
        nickname_meaning: "Faith & Courage",
        original_profession: "Joshua 2; 6",
        key_attribute:
          "Risked her life to hide Israelite spies in Jericho, trusting in the God of Israel over loyalty to her own city.",
      },
      sn: {
        name: "Rahabhi",
        nickname_meaning: "Kutenda & Ushingi",
        original_profession: "Joshua 2; 6",
        key_attribute:
          "Akaisa upenyu hwake panjodzi achiviga vasori vevaIsraeri muJeriko, achivimba naMwari waIsraeri panzvimbo pokutendeka kuguta rake.",
      },
    },
  },
  {
    id: "jael",
    category: "woman",
    order: 5,
    content: {
      en: {
        name: "Jael",
        nickname_meaning: "Valour & Deliverance",
        original_profession: "Judges 4-5",
        key_attribute:
          "Ended the life of Israel's enemy commander Sisera with her own hands after he sought refuge in her tent.",
      },
      sn: {
        name: "Jaeri",
        nickname_meaning: "Ushingi & Kununura",
        original_profession: "Vatongi 4-5",
        key_attribute:
          "Akapedzisa upenyu hwomukuru wehondo yomuvengi weIsraeri Sisera nemaoko ake pachake mushure mokunge atsvaka utiziro mutende rake.",
      },
    },
  },
  {
    id: "hannah",
    category: "woman",
    order: 7,
    content: {
      en: {
        name: "Hannah",
        nickname_meaning: "Prayer & Devotion",
        original_profession: "1 Samuel 1-2",
        key_attribute:
          "Poured out her heart in desperate prayer for a child, then kept her vow to dedicate that son entirely to God's service.",
      },
      sn: {
        name: "Hana",
        nickname_meaning: "Munyengetero & Kuzvipira",
        original_profession: "1 Samueri 1-2",
        key_attribute:
          "Akadurura mwoyo wake munyengetero unopindiwa nokuda kwomwana, ndokuzochengeta mhiko yake yokupira mwanakomana uyu zvachose kubasa raMwari.",
      },
    },
  },
  {
    id: "abigail",
    category: "woman",
    order: 8,
    content: {
      en: {
        name: "Abigail",
        nickname_meaning: "Wisdom & Diplomacy",
        original_profession: "1 Samuel 25",
        key_attribute:
          "Used quick thinking, humility, and generosity to prevent a massacre and turn away the future King David's anger.",
      },
      sn: {
        name: "Abhigairi",
        nickname_meaning: "Uchenjeri & Runyararo",
        original_profession: "1 Samueri 25",
        key_attribute:
          "Akashandisa mafungiro anokurumidza, kuzvininipisa, uye kupa nomwoyo wose kudzivirira kuuraiwa kwakawanda uye kudzora hasha dzaMambo Dhavhidhi wemberi.",
      },
    },
  },
  {
    id: "huldah",
    category: "woman",
    order: 9,
    content: {
      en: {
        name: "Huldah",
        nickname_meaning: "Prophetic Authority",
        original_profession: "2 Kings 22; 2 Chronicles 34",
        key_attribute:
          "Authenticated the newly rediscovered Book of the Law and delivered a decisive prophetic word during a pivotal religious reform.",
      },
      sn: {
        name: "Huridha",
        nickname_meaning: "Simba reUporofita",
        original_profession: "2 Madzimambo 22; 2 Makoronike 34",
        key_attribute:
          "Akasimbisa Bhuku roMurau rakangowanikwazve uye akapa shoko rouporofita rinokosha panguva yeshanduko huru dzechitendero.",
      },
    },
  },
  {
    id: "proverbs-31-woman",
    category: "woman",
    order: 13,
    content: {
      en: {
        name: "The Proverbs 31 Woman",
        nickname_meaning: "Wisdom Ideal",
        original_profession: "Proverbs 31",
        key_attribute:
          "Source of the phrase 'woman of valour' itself, portraying an idealized picture of wisdom, industry, generosity, and strength of character rather than a single historical individual.",
      },
      sn: {
        name: "Mukadzi weZvirevo 31",
        nickname_meaning: "Muenzaniso weUchenjeri",
        original_profession: "Zvirevo 31",
        key_attribute:
          "Ndiye chikonzero chemashoko okuti 'mukadzi ane ushingi,' achiratidza mufananidzo unokwana wounyanzvi, kushingaira, kupa nomwoyo wose, uye simba rehunhu panzvimbo pomunhu mumwe chete wenhoroondo.",
      },
    },
  },
];

export function getCategory(id: FigureCategory): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getFigures(category: FigureCategory): Figure[] {
  return FIGURES.filter((f) => f.category === category).sort(
    (a, b) => a.order - b.order,
  );
}

export function getFigure(id: string): Figure | undefined {
  return FIGURES.find((f) => f.id === id);
}
