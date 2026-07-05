/**
 * The Ten Commandments (Exodus 20) in English and Shona.
 *
 * Shona follows the Union Shona Bible (Bhaibheri) phrasing — refine to your
 * preferred translation if needed.
 */

import type { Lang } from "@/data/figures";

export type Commandment = {
  number: number;
  content: Record<Lang, string>;
};

export const COMMANDMENTS_TITLE: Record<Lang, string> = {
  en: "The Ten Commandments",
  sn: "Mirairo Gumi",
};

export const COMMANDMENTS_SUBTITLE: Record<Lang, string> = {
  en: "Exodus 20",
  sn: "Eksodho 20",
};

export const COMMANDMENTS: Commandment[] = [
  {
    number: 1,
    content: {
      en: "You shall have no other gods before Me.",
      sn: "Usava navamwe vamwari kunze kwangu.",
    },
  },
  {
    number: 2,
    content: {
      en: "You shall not make for yourself any graven image.",
      sn: "Usazviitira mufananidzo wakavezwa.",
    },
  },
  {
    number: 3,
    content: {
      en: "You shall not take the name of the LORD your God in vain.",
      sn: "Usareva zita raJehovha Mwari wako pasina.",
    },
  },
  {
    number: 4,
    content: {
      en: "Remember the Sabbath day, to keep it holy.",
      sn: "Rangarira zuva reSabata, kuti urichengete rive dzvene.",
    },
  },
  {
    number: 5,
    content: {
      en: "Honour your father and your mother.",
      sn: "Kudza baba vako namai vako.",
    },
  },
  {
    number: 6,
    content: {
      en: "You shall not kill.",
      sn: "Usauraya.",
    },
  },
  {
    number: 7,
    content: {
      en: "You shall not commit adultery.",
      sn: "Usaita upombwe.",
    },
  },
  {
    number: 8,
    content: {
      en: "You shall not steal.",
      sn: "Usaba.",
    },
  },
  {
    number: 9,
    content: {
      en: "You shall not bear false witness against your neighbour.",
      sn: "Usapupurira wokwako nhema.",
    },
  },
  {
    number: 10,
    content: {
      en: "You shall not covet.",
      sn: "Usachiva zvinhu zvowokwako.",
    },
  },
];
