import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CategoryCard } from "@/components/category-card";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ZimFlag } from "@/components/zim-flag";
import { Zim } from "@/constants/theme";
import { CATEGORIES, HOME_SECTIONS } from "@/data/figures";
import { useLanguage } from "@/hooks/use-language";

export default function HomeScreen() {
  const { lang } = useLanguage();
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView edges={["top"]} style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          {/* Brand header */}
          <View style={styles.header}>
            <View>
              <View style={styles.brandRow}>
                <ThemedText type="title" style={styles.brand}>
                  zim scripture
                </ThemedText>
                <ZimFlag width={44} />
              </View>
              <ThemedText style={styles.tagline}>
                {lang === "sn"
                  ? "By Itai Neil Chiriseri"
                  : "By Itai Neil Chiriseri"}
              </ThemedText>
            </View>
            <View style={styles.langWrap}>
              <ThemedText style={styles.langHint}>
                {lang === "sn"
                  ? "Chinja pakati peChirungu neChiShona pano"
                  : "Switch between English and Shona here"}
              </ThemedText>
              <LanguageToggle />
            </View>
          </View>

          {/* Zimbabwe accent bar — red dominant */}
          <View style={styles.accent}>
            <View style={{ flex: 1, backgroundColor: Zim.green }} />
            <View style={{ flex: 1, backgroundColor: Zim.gold }} />
            <View style={{ flex: 6, backgroundColor: Zim.red }} />
            <View style={{ flex: 1, backgroundColor: Zim.black }} />
          </View>

          {/* Sections */}
          {HOME_SECTIONS.map((section) => (
            <View key={section.id} style={styles.section}>
              <ThemedText type="subtitle" style={styles.sectionTitle}>
                {section.title[lang]}
              </ThemedText>
              <View style={styles.cards}>
                {section.categories.map((catId) => {
                  const category = CATEGORIES.find((c) => c.id === catId);
                  if (!category) return null;
                  return <CategoryCard key={catId} category={category} />;
                })}
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Floating action button */}
        <Pressable
          style={({ pressed }) => [styles.fab, pressed && styles.fabPressed]}
          onPress={() => router.push("/about-jesus")}
        >
          <ThemedText style={styles.fabCross}>✝</ThemedText>
          <ThemedText style={styles.fabLabel}>About The Lord Jesus</ThemedText>
        </Pressable>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16, paddingBottom: 32, gap: 8 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  brandRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  brand: { color: Zim.red, fontSize: 34 },
  tagline: { opacity: 0.55, fontSize: 14, marginTop: 2 },
  accent: {
    flexDirection: "row",
    height: 6,
    borderRadius: 3,
    overflow: "hidden",
    marginBottom: 4,
  },
  langWrap: { alignItems: "flex-end", gap: 4, maxWidth: 140 },
  langHint: { fontSize: 11, opacity: 0.5, textAlign: "right" },
  section: { marginTop: 12, gap: 12 },
  sectionTitle: { fontSize: 20 },
  cards: { gap: 12 },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: Zim.red,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 999,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  fabPressed: { backgroundColor: Zim.redDark },
  fabCross: { color: "#fff", fontSize: 18, fontWeight: "700" },
  fabLabel: { color: "#fff", fontSize: 15, fontWeight: "700" },
});
