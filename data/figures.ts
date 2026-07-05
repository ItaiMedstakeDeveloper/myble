/**
 * "People in the Bible" content — disciples, prophets, women, etc.
 *
 * All categories share one shape, so every screen (dashboard cards, category
 * lists, detail pages) is generic. Add a new category by adding a CategoryMeta
 * entry + figures with that `category`; no new screens required.
 *
 * Shona (`sn`) category titles/blurbs are first-pass drafts — tweak to taste.
 */

export type Lang = 'en' | 'sn';

export type FigureCategory = 'disciple' | 'prophet' | 'woman';

export type FigureContent = {
  name: string;
  nickname_meaning: string;
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
};

export type HomeSection = {
  id: string;
  title: Record<Lang, string>;
  categories: FigureCategory[];
};

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'disciple',
    title: { en: 'Know Your Disciples', sn: 'Ziva Vadzidzi' },
    blurb: { en: 'The twelve who followed Jesus', sn: 'Gumi nevaviri vakatevera Jesu' },
    emoji: '🎣',
  },
  {
    id: 'prophet',
    title: { en: 'Know Your Prophets', sn: 'Ziva Vaporofita' },
    blurb: { en: "God's messengers to the nations", sn: 'Nhume dzaMwari kumarudzi' },
    emoji: '📜',
  },
  {
    id: 'woman',
    title: { en: 'Women of Valour', sn: 'Vakadzi Voushingi' },
    blurb: { en: 'Powerful women in the Bible', sn: 'Vakadzi vane simba muBhaibheri' },
    emoji: '👑',
  },
];

export const HOME_SECTIONS: HomeSection[] = [
  {
    id: 'people',
    title: { en: 'People in the Bible', sn: 'Vanhu VeMubhaibheri' },
    categories: ['disciple', 'prophet', 'woman'],
  },
];

export const FIGURES: Figure[] = [
  {
    id: 'simon-peter',
    category: 'disciple',
    order: 1,
    content: {
      en: {
        name: 'Simon Peter',
        nickname_meaning: 'Cephas/Peter (The Rock)',
        original_profession: 'Fisherman',
        key_attribute:
          'Spokesman for the disciples, denied Jesus three times, later became a pillar of the early church.',
      },
      sn: {
        name: 'Simoni Petro',
        nickname_meaning: 'Kefasi/Petro (Dombo)',
        original_profession: 'Mubati wehove',
        key_attribute:
          'Aive mutauriri wevadzidzi, akaramba Jesu katatu, akazova mbiru yeChechi yekutanga.',
      },
    },
  },
  {
    id: 'andrew',
    category: 'disciple',
    order: 2,
    content: {
      en: {
        name: 'Andrew',
        nickname_meaning: 'The Brother of Simon Peter',
        original_profession: 'Fisherman',
        key_attribute:
          'Brought his brother Simon to meet Jesus, known for his initial work of evangelism.',
      },
      sn: {
        name: 'Andireya',
        nickname_meaning: 'Mukoma waSimoni Petro',
        original_profession: 'Mubati wehove',
        key_attribute:
          'Akaunza mukoma wake Simoni kuna Jesu, anozivikanwa nebasa rake rekutanga rekuparidza evhangeri.',
      },
    },
  },
  {
    id: 'james-zebedee',
    category: 'disciple',
    order: 3,
    content: {
      en: {
        name: 'James (Son of Zebedee)',
        nickname_meaning: 'Son of Thunder (Boanerges)',
        original_profession: 'Fisherman',
        key_attribute: "Part of Jesus's inner circle, first of the 12 to be martyred.",
      },
      sn: {
        name: 'Jakobho (Mwanakomana waZebhedheo)',
        nickname_meaning: 'Mwanakomana weKutinhira (Boanerigesi)',
        original_profession: 'Mubati wehove',
        key_attribute:
          'Aive mumwe wevadzidzi vaive pedyo zvikuru naJesu, uye ndiye akatanga kuurayiwa pakati pevaapostora gumi nevaviri.',
      },
    },
  },
  {
    id: 'john',
    category: 'disciple',
    order: 4,
    content: {
      en: {
        name: 'John',
        nickname_meaning: 'Son of Thunder (Boanerges)',
        original_profession: 'Fisherman',
        key_attribute:
          "The 'disciple whom Jesus loved,' wrote the Gospel of John and the book of Revelation.",
      },
      sn: {
        name: 'Johani',
        nickname_meaning: 'Mwanakomana weKutinhira (Boanerigesi)',
        original_profession: 'Mubati wehove',
        key_attribute:
          "Mudzidzi 'aidiwa naJesu,' akanyora Evhangeri yaJohani pamwe nebhuku raZvakazarurwa.",
      },
    },
  },
  {
    id: 'philip',
    category: 'disciple',
    order: 5,
    content: {
      en: {
        name: 'Philip',
        nickname_meaning: 'Lover of Horses',
        original_profession: 'Unspecified (from Bethsaida)',
        key_attribute:
          'Brought Nathanael to Jesus, known for his practical approach in seeking out the truth.',
      },
      sn: {
        name: 'Firipi',
        nickname_meaning: 'Anoda Mabhiza',
        original_profession: 'Hazvina kutsanangurwa (aibva kuBhetsaidha)',
        key_attribute:
          'Akaunza Natanieri kuna Jesu, aizivikanwa nekutsvaga chokwadi nenzira ine hungwaru uye inoshanda.',
      },
    },
  },
  {
    id: 'bartholomew',
    category: 'disciple',
    order: 6,
    content: {
      en: {
        name: 'Bartholomew',
        nickname_meaning: 'Son of Tolmai',
        original_profession: 'Unspecified',
        key_attribute:
          "Often identified as Nathanael, greeted by Jesus as an 'Israelite in whom there is no guile.'",
      },
      sn: {
        name: 'Bhatolomeo',
        nickname_meaning: 'Mwanakomana waTolimai',
        original_profession: 'Hazvina kutsanangurwa',
        key_attribute:
          "Anowanzofungidzirwa kuti ndiye Natanieri, uyo Jesu akati ndiye 'muIsraeri asina kunyengera.'",
      },
    },
  },
  {
    id: 'thomas',
    category: 'disciple',
    order: 7,
    content: {
      en: {
        name: 'Thomas',
        nickname_meaning: 'Didymus (The Twin)',
        original_profession: 'Unspecified',
        key_attribute:
          "Famously doubted the resurrection until touching Jesus's wounds, later proclaimed Him 'My Lord and my God.'",
      },
      sn: {
        name: 'Tomasi',
        nickname_meaning: 'Didhimo (Mapatya)',
        original_profession: 'Hazvina kutsanangurwa',
        key_attribute:
          "Akakurumbira nekusahadzika rumuko rwaJesu kusvikira abata maronda ake, akazoti, 'Ishe wangu naMwari wangu.'",
      },
    },
  },
  {
    id: 'matthew',
    category: 'disciple',
    order: 8,
    content: {
      en: {
        name: 'Matthew',
        nickname_meaning: 'Gift of the Lord',
        original_profession: 'Tax Collector',
        key_attribute: 'Also known as Levi, wrote the Gospel of Matthew.',
      },
      sn: {
        name: 'Mateu',
        nickname_meaning: 'Chipo chaShe',
        original_profession: 'Muteresi',
        key_attribute: 'Aizivikanwawo saRevhi, akanyora Evhangeri yaMateu.',
      },
    },
  },
  {
    id: 'james-alphaeus',
    category: 'disciple',
    order: 9,
    content: {
      en: {
        name: 'James (Son of Alphaeus)',
        nickname_meaning: 'James the Less',
        original_profession: 'Unspecified',
        key_attribute: 'Distinguished from James the brother of John.',
      },
      sn: {
        name: 'Jakobho (Mwanakomana waArifiyosi)',
        nickname_meaning: 'Jakobho Mudiki',
        original_profession: 'Hazvina kutsanangurwa',
        key_attribute: 'Anosiyaniswa naJakobho, mukoma waJohani.',
      },
    },
  },
  {
    id: 'thaddaeus',
    category: 'disciple',
    order: 10,
    content: {
      en: {
        name: 'Thaddaeus',
        nickname_meaning: 'Lebbaeus / Judas (Son of James)',
        original_profession: 'Unspecified',
        key_attribute:
          'Asked Jesus why He would reveal Himself only to the disciples and not the world.',
      },
      sn: {
        name: 'Tadheo',
        nickname_meaning: 'Rebheyosi / Judhasi (Mwanakomana waJakobho)',
        original_profession: 'Hazvina kutsanangurwa',
        key_attribute:
          'Akabvunza Jesu kuti sei aizozviratidza kuvadzidzi chete kwete kunyika yose.',
      },
    },
  },
  {
    id: 'simon-zealot',
    category: 'disciple',
    order: 11,
    content: {
      en: {
        name: 'Simon the Zealot',
        nickname_meaning: 'The Zealot',
        original_profession: 'Zealot (Political Rebel)',
        key_attribute:
          'Formerly part of a radical Jewish political group committed to overthrowing Roman rule.',
      },
      sn: {
        name: 'Simoni muZealoti',
        nickname_meaning: 'MuZealoti',
        original_profession: 'MuZealoti (Mupanduki wezvematongerwo enyika)',
        key_attribute: 'Aimbove nhengo yeboka rechiJudha raizvipira kupidigura hutongi hweRoma.',
      },
    },
  },
  {
    id: 'judas-iscariot',
    category: 'disciple',
    order: 12,
    content: {
      en: {
        name: 'Judas Iscariot',
        nickname_meaning: 'Man of Kerioth',
        original_profession: 'Treasurer',
        key_attribute: 'The disciple who betrayed Jesus, later replaced by Matthias.',
      },
      sn: {
        name: 'Judhasi Isikariyoti',
        nickname_meaning: 'Murume weKeriyoti',
        original_profession: 'Muchengeti wemari',
        key_attribute: 'Mudzidzi akatengesa Jesu, akazotsiviwa naMatiasi.',
      },
    },
  },
];

export function getCategory(id: FigureCategory): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getFigures(category: FigureCategory): Figure[] {
  return FIGURES.filter((f) => f.category === category).sort((a, b) => a.order - b.order);
}

export function getFigure(id: string): Figure | undefined {
  return FIGURES.find((f) => f.id === id);
}
