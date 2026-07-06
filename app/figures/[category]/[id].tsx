import { Image } from "expo-image";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Zim } from "@/constants/theme";
import {
  getDiscipleDetail,
  SOURCE_NOTE,
  type DiscipleDetail,
} from "@/data/disciples-detail";
import { getFigureIcon } from "@/data/figure-icons";
import { getCategory, getFigure } from "@/data/figures";
import { getProphetDetail, type ProphetDetail } from "@/data/prophets-detail";
import { getWomanDetail, type WomanDetail } from "@/data/women-detail";
import { useLanguage } from "@/hooks/use-language";

export default function FigureDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { lang } = useLanguage();

  const figure = getFigure(id);
  if (!figure) {
    return (
      <ThemedView style={styles.container}>
        <Stack.Screen options={{ title: "Not found" }} />
        <View style={styles.center}>
          <ThemedText>
            {lang === "sn" ? "Hazvina kuwanikwa" : "Not found"}
          </ThemedText>
        </View>
      </ThemedView>
    );
  }

  const c = figure.content[lang];
  const labels = getCategory(figure.category)?.fieldLabels;
  const detail = getDiscipleDetail(figure.id);
  const prophet = getProphetDetail(figure.id);
  const woman = getWomanDetail(figure.id);
  const icon = getFigureIcon(figure.id);

  // Badge: disciples show none; women show their title epithet; everyone else
  // (prophets, and any figure without rich detail) shows the theme/era.
  const badgeText = detail
    ? undefined
    : woman
      ? woman.title[lang]
      : c.nickname_meaning;

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: c.name }} />
      <ScrollView contentContainerStyle={styles.content}>
        {icon != null && (
          <Image
            source={icon}
            style={styles.art}
            contentFit="contain"
            transition={150}
          />
        )}

        <ThemedText type="title" style={styles.name}>
          {c.name}
        </ThemedText>
        {badgeText != null && (
          <View style={styles.badge}>
            <ThemedText style={styles.badgeText}>{badgeText}</ThemedText>
          </View>
        )}

        {detail ? (
          <DiscipleSections detail={detail} lang={lang} />
        ) : prophet ? (
          <ProphetSections
            prophet={prophet}
            lang={lang}
            keyThemesLabel={labels ? labels.original_profession[lang] : ""}
            keyThemes={c.original_profession}
            summary={c.key_attribute}
          />
        ) : woman ? (
          <WomanSections woman={woman} lang={lang} summary={c.key_attribute} />
        ) : (
          <>
            <Field
              label={
                labels
                  ? labels.original_profession[lang]
                  : c.original_profession
              }
              value={c.original_profession}
            />
            <Field
              label={labels ? labels.key_attribute[lang] : c.key_attribute}
              value={c.key_attribute}
            />
          </>
        )}
      </ScrollView>
    </ThemedView>
  );
}

const SECTION_LABELS = {
  alsoKnownAs: { en: "Also known as", sn: "Anozivikanwawo se" },
  occupation: { en: "Before following Jesus", sn: "Asati atevera Jesu" },
  calling: { en: "Calling", sn: "Kudanwa" },
  keyRole: { en: "Key role", sn: "Basa guru" },
  notableMoment: { en: "Notable moment", sn: "Chiitiko chinokosha" },
  traditionAfter: { en: "Afterward", sn: "Mushure" },
  reference: { en: "Scripture references", sn: "Marugwaro" },
  tradition: { en: "Tradition", sn: "Tsika" },
} as const;

function DiscipleSections({
  detail,
  lang,
}: {
  detail: DiscipleDetail;
  lang: "en" | "sn";
}) {
  return (
    <>
      {detail.alsoKnownAs !== "" && (
        <Field
          label={SECTION_LABELS.alsoKnownAs[lang]}
          value={detail.alsoKnownAs}
        />
      )}
      <Field
        label={SECTION_LABELS.occupation[lang]}
        value={detail.occupation[lang]}
      />
      <Field
        label={SECTION_LABELS.calling[lang]}
        value={detail.calling[lang]}
      />
      <Field
        label={SECTION_LABELS.keyRole[lang]}
        value={detail.keyRole[lang]}
      />
      <Field
        label={SECTION_LABELS.notableMoment[lang]}
        value={detail.notableMoment[lang]}
      />
      <Field
        label={SECTION_LABELS.traditionAfter[lang]}
        value={detail.traditionAfter[lang]}
        tag={
          detail.traditionSourced ? SECTION_LABELS.tradition[lang] : undefined
        }
      />
      <Field label={SECTION_LABELS.reference[lang]} value={detail.reference} />

      <ThemedText style={styles.note}>{SOURCE_NOTE[lang]}</ThemedText>
    </>
  );
}

const PROPHET_LABELS = {
  keyThemes: { en: "Key themes", sn: "Misoro mikuru" },
  summary: { en: "Summary", sn: "Pfupiso" },
  background: { en: "Background", sn: "Nhoroondo yake" },
  historicalContext: { en: "Historical context", sn: "Mamiriro enguva" },
  calling: { en: "Calling", sn: "Kudanwa" },
  notableMoments: { en: "Notable moments", sn: "Zviitiko zvinokosha" },
  bookOverview: { en: "The book", sn: "Bhuku" },
  legacy: { en: "Legacy", sn: "Nhaka" },
  reference: { en: "Scripture references", sn: "Marugwaro" },
  tradition: { en: "Tradition", sn: "Tsika" },
} as const;

function ProphetSections({
  prophet,
  lang,
  keyThemesLabel,
  keyThemes,
  summary,
}: {
  prophet: ProphetDetail;
  lang: "en" | "sn";
  keyThemesLabel: string;
  keyThemes: string;
  summary: string;
}) {
  const traditionTag = PROPHET_LABELS.tradition[lang];
  return (
    <>
      <Field
        label={keyThemesLabel || PROPHET_LABELS.keyThemes[lang]}
        value={keyThemes}
      />
      <Field label={PROPHET_LABELS.summary[lang]} value={summary} />
      <Field
        label={PROPHET_LABELS.background[lang]}
        value={prophet.background[lang]}
      />
      <Field
        label={PROPHET_LABELS.historicalContext[lang]}
        value={prophet.historicalContext[lang]}
      />
      <Field
        label={PROPHET_LABELS.calling[lang]}
        value={prophet.calling[lang]}
        tag={prophet.callingTradition ? traditionTag : undefined}
      />
      <ListField
        label={PROPHET_LABELS.notableMoments[lang]}
        items={prophet.notableMoments[lang]}
      />
      <Field
        label={PROPHET_LABELS.bookOverview[lang]}
        value={prophet.bookOverview[lang]}
      />
      <Field
        label={PROPHET_LABELS.legacy[lang]}
        value={prophet.legacy[lang]}
        tag={prophet.legacyTradition ? traditionTag : undefined}
      />
      <Field label={PROPHET_LABELS.reference[lang]} value={prophet.reference} />

      <ThemedText style={styles.note}>{SOURCE_NOTE[lang]}</ThemedText>
    </>
  );
}

const WOMAN_LABELS = {
  summary: { en: "Summary", sn: "Pfupiso" },
  background: { en: "Background", sn: "Nhoroondo yake" },
  historicalContext: { en: "Historical context", sn: "Mamiriro enguva" },
  notableMoments: { en: "Notable moments", sn: "Zviitiko zvinokosha" },
  legacy: { en: "Legacy", sn: "Nhaka" },
  reference: { en: "Scripture references", sn: "Marugwaro" },
  tradition: { en: "Tradition", sn: "Tsika" },
} as const;

function WomanSections({
  woman,
  lang,
  summary,
}: {
  woman: WomanDetail;
  lang: "en" | "sn";
  summary: string;
}) {
  return (
    <>
      <Field label={WOMAN_LABELS.summary[lang]} value={summary} />
      <Field
        label={WOMAN_LABELS.background[lang]}
        value={woman.background[lang]}
      />
      <Field
        label={WOMAN_LABELS.historicalContext[lang]}
        value={woman.historicalContext[lang]}
      />
      <ListField
        label={WOMAN_LABELS.notableMoments[lang]}
        items={woman.notableMoments[lang]}
      />
      <Field
        label={WOMAN_LABELS.legacy[lang]}
        value={woman.legacy[lang]}
        tag={woman.legacyTradition ? WOMAN_LABELS.tradition[lang] : undefined}
      />
      <Field label={WOMAN_LABELS.reference[lang]} value={woman.reference} />

      <ThemedText style={styles.note}>{SOURCE_NOTE[lang]}</ThemedText>
    </>
  );
}

function ListField({ label, items }: { label: string; items: string[] }) {
  return (
    <View style={styles.field}>
      <ThemedText style={styles.fieldLabel}>{label.toUpperCase()}</ThemedText>
      {items.map((item, i) => (
        <View key={i} style={styles.listItem}>
          <ThemedText style={styles.bullet}>{"•"}</ThemedText>
          <ThemedText style={styles.listText}>{item}</ThemedText>
        </View>
      ))}
    </View>
  );
}

function Field({
  label,
  value,
  tag,
}: {
  label: string;
  value: string;
  tag?: string;
}) {
  return (
    <View style={styles.field}>
      <View style={styles.fieldLabelRow}>
        <ThemedText style={styles.fieldLabel}>{label.toUpperCase()}</ThemedText>
        {tag && (
          <View style={styles.tag}>
            <ThemedText style={styles.tagText}>{tag.toUpperCase()}</ThemedText>
          </View>
        )}
      </View>
      <ThemedText style={styles.fieldValue}>{value}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  content: { padding: 20, gap: 14 },
  art: { width: 160, height: 192, borderRadius: 16, alignSelf: "center" },
  name: { fontSize: 30 },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: Zim.redTint,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  badgeText: { color: Zim.red, fontSize: 14, fontWeight: "700" },
  field: { gap: 4, marginTop: 6 },
  fieldLabelRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  fieldLabel: {
    fontSize: 12,
    letterSpacing: 0.5,
    color: Zim.red,
    fontWeight: "700",
  },
  fieldValue: { fontSize: 16, lineHeight: 24 },
  listItem: { flexDirection: "row", gap: 8, marginTop: 4 },
  bullet: { fontSize: 16, lineHeight: 24, color: Zim.red },
  listText: { flex: 1, fontSize: 16, lineHeight: 24 },
  tag: {
    backgroundColor: Zim.redTint,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  tagText: {
    color: Zim.red,
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  note: {
    fontSize: 12,
    lineHeight: 18,
    opacity: 0.6,
    fontStyle: "italic",
    marginTop: 10,
  },
});
