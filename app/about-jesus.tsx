import { Image } from "expo-image";
import { Stack, useRouter } from "expo-router";
import { FlatList, Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Zim } from "@/constants/theme";
import {
  ABOUT_JESUS_INTRO,
  ABOUT_JESUS_NOTE,
  JESUS_PAGES,
} from "@/data/about-jesus";
import { useLanguage } from "@/hooks/use-language";
const CROSS = require("@/assets/jesus/cross.svg");

export default function AboutJesusScreen() {
  const { lang } = useLanguage();
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          title: lang === "sn" ? "NezvaJesu Kristu" : "About Jesus Christ",
        }}
      />
      <FlatList
        data={JESUS_PAGES}
        keyExtractor={(p) => p.id}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View style={styles.header}>
            <Image
              source={CROSS}
              style={styles.hero}
              contentFit="contain"
              transition={150}
            />
            <ThemedText type="title" style={styles.title}>
              {lang === "sn" ? "NezvaJesu Kristu" : "About Jesus Christ"}
            </ThemedText>
            <ThemedText style={styles.intro}>
              {ABOUT_JESUS_INTRO[lang]}
            </ThemedText>
            <ThemedView style={styles.noteBox}>
              <ThemedText style={styles.noteText}>
                {ABOUT_JESUS_NOTE[lang]}
              </ThemedText>
            </ThemedView>
          </View>
        }
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.card, pressed && styles.pressed]}
            onPress={() =>
              router.push({
                pathname: "/about-jesus/[id]",
                params: { id: item.id },
              })
            }
          >
            <View style={styles.numberBadge}>
              <ThemedText style={styles.numberText}>{item.order}</ThemedText>
            </View>
            <View style={styles.cardBody}>
              <ThemedText
                type="defaultSemiBold"
                style={styles.cardTitle}
                numberOfLines={2}
              >
                {item.title[lang]}
              </ThemedText>
              <ThemedText style={styles.cardSubtitle} numberOfLines={1}>
                {item.subtitle[lang]}
              </ThemedText>
            </View>
          </Pressable>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16, gap: 10, paddingBottom: 32 },
  header: { alignItems: "center", gap: 10, marginBottom: 8 },
  hero: { width: 150, height: 180, borderRadius: 16 },
  title: { fontSize: 28, textAlign: "center" },
  intro: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    opacity: 0.7,
    paddingHorizontal: 4,
  },
  noteBox: {
    backgroundColor: Zim.redTint,
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "rgba(189, 44, 44, 0.3)",
  },
  noteText: {
    fontSize: 13,
    lineHeight: 18,
    opacity: 0.8,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Zim.border,
    padding: 16,
  },
  pressed: { backgroundColor: Zim.redTint },
  numberBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Zim.redTint,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: { color: Zim.red, fontSize: 16, fontWeight: "700" },
  cardBody: { flex: 1, gap: 2 },
  cardTitle: { fontSize: 17 },
  cardSubtitle: { fontSize: 13, opacity: 0.6 },
});
