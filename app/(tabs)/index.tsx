import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CategoryCard } from "@/components/category-card";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Brand } from "@/constants/theme";
import { CATEGORIES, HOME_SECTIONS } from "@/data/figures";
import { useLanguage } from "@/hooks/use-language";

export default function HomeScreen() {
  const { lang } = useLanguage();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView edges={["top"]} style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          {/* Brand header */}
          <View style={styles.header}>
            <View>
              <ThemedText type="title" style={styles.brand}>
                myble
              </ThemedText>
              <ThemedText style={styles.tagline}>
                {lang === "sn"
                  ? "By Itai Neil Chiriseri"
                  : "By Itai Neil Chiriseri"}
              </ThemedText>
            </View>
            <LanguageToggle />
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
  brand: { color: Brand.purple, fontSize: 34 },
  tagline: { opacity: 0.55, fontSize: 14 },
  section: { marginTop: 12, gap: 12 },
  sectionTitle: { fontSize: 20 },
  cards: { gap: 12 },
});
