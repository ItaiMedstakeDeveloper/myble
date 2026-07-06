import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Zim } from "@/constants/theme";
import { getJesusPage, ABOUT_JESUS_NOTE } from "@/data/about-jesus";
import { useLanguage } from "@/hooks/use-language";

export default function JesusDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { lang } = useLanguage();

  const page = getJesusPage(id);
  if (!page) {
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

  const LABELS = {
    titles: { en: "Key Titles", sn: "Mazita Anokosha" },
    keyEvents: { en: "Key Events", sn: "Zviitiko Zvikuru" },
    significance: { en: "Significance", sn: "Kukosha" },
    reference: { en: "Scripture references", sn: "Marugwaro" },
  };

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: page.title[lang] }} />
      <ScrollView contentContainerStyle={styles.content}>
        
        <ThemedText type="title" style={styles.title}>
          {page.title[lang]}
        </ThemedText>
        <View style={styles.badge}>
          <ThemedText style={styles.badgeText}>{page.subtitle[lang]}</ThemedText>
        </View>

        <ThemedText style={styles.summary}>{page.summary[lang]}</ThemedText>

        {page.titles && (
          <View style={styles.field}>
            <ThemedText style={styles.fieldLabel}>{LABELS.titles[lang].toUpperCase()}</ThemedText>
            {page.titles[lang].map((t, i) => (
              <View key={i} style={styles.titleItem}>
                <ThemedText style={styles.titleName}>{t.name}</ThemedText>
                <ThemedText style={styles.titleMeaning}>{t.meaning}</ThemedText>
              </View>
            ))}
          </View>
        )}

        {page.keyEvents && (
          <View style={styles.field}>
            <ThemedText style={styles.fieldLabel}>{LABELS.keyEvents[lang].toUpperCase()}</ThemedText>
            {page.keyEvents[lang].map((item, i) => (
              <View key={i} style={styles.listItem}>
                <ThemedText style={styles.bullet}>{"•"}</ThemedText>
                <ThemedText style={styles.listText}>{item}</ThemedText>
              </View>
            ))}
          </View>
        )}

        <View style={styles.field}>
          <ThemedText style={styles.fieldLabel}>{LABELS.significance[lang].toUpperCase()}</ThemedText>
          <ThemedText style={styles.fieldValue}>{page.significance[lang]}</ThemedText>
        </View>

        <View style={styles.field}>
          <ThemedText style={styles.fieldLabel}>{LABELS.reference[lang].toUpperCase()}</ThemedText>
          <ThemedText style={styles.fieldValue}>{page.reference}</ThemedText>
        </View>

        {page.closingNote && (
          <View style={[styles.field, styles.closingNoteContainer]}>
             <ThemedText style={styles.closingNote}>{page.closingNote[lang]}</ThemedText>
          </View>
        )}

        <ThemedText style={styles.note}>{ABOUT_JESUS_NOTE[lang]}</ThemedText>

      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  content: { padding: 20, gap: 16, paddingBottom: 40 },
  title: { fontSize: 30 },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: Zim.redTint,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginTop: -8,
  },
  badgeText: { color: Zim.red, fontSize: 14, fontWeight: "700" },
  summary: { fontSize: 17, lineHeight: 24, fontStyle: "italic", opacity: 0.9 },
  field: { gap: 6, marginTop: 8 },
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
  titleItem: {
    backgroundColor: "rgba(0,0,0,0.03)",
    padding: 10,
    borderRadius: 8,
    marginTop: 4,
  },
  titleName: { fontSize: 16, fontWeight: "600", color: Zim.red },
  titleMeaning: { fontSize: 15, marginTop: 2, opacity: 0.8 },
  closingNoteContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: Zim.redTint,
    borderRadius: 12,
  },
  closingNote: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    fontWeight: "600",
    color: Zim.red,
  },
  note: {
    fontSize: 12,
    lineHeight: 18,
    opacity: 0.6,
    fontStyle: "italic",
    marginTop: 10,
  },
});
