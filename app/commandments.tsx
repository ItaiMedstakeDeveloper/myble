import { Stack } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Zim } from "@/constants/theme";
import {
  COMMANDMENTS,
  COMMANDMENTS_SUBTITLE,
  COMMANDMENTS_TITLE,
} from "@/data/commandments";
import { useLanguage } from "@/hooks/use-language";

export default function CommandmentsScreen() {
  const { lang } = useLanguage();
  const other = lang === "en" ? "sn" : "en";

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: COMMANDMENTS_TITLE[lang] }} />
      <FlatList
        data={COMMANDMENTS}
        keyExtractor={(c) => String(c.number)}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.header}>
            <ThemedText type="title" style={styles.title}>
              {COMMANDMENTS_TITLE[lang]}
            </ThemedText>
            <ThemedText style={styles.subtitle}>
              {COMMANDMENTS_SUBTITLE[lang]}
            </ThemedText>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.badge}>
              <ThemedText style={styles.badgeText}>{item.number}</ThemedText>
            </View>
            <View style={styles.textCol}>
              <ThemedText style={styles.primary}>
                {item.content[lang]}
              </ThemedText>
              <ThemedText style={styles.secondary}>
                {item.content[other]}
              </ThemedText>
            </View>
          </View>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 16, gap: 12 },
  header: { marginBottom: 8 },
  title: { fontSize: 28, color: Zim.red },
  subtitle: { opacity: 0.6, fontSize: 15, marginTop: 2 },
  row: {
    flexDirection: "row",
    gap: 14,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Zim.border,
    padding: 16,
  },
  badge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: Zim.red,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  textCol: { flex: 1, gap: 4 },
  primary: { fontSize: 16, lineHeight: 22, fontWeight: "600" },
  secondary: { fontSize: 14, lineHeight: 20, opacity: 0.55 },
});
