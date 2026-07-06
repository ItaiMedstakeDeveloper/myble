import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { FlatList, Pressable, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Zim } from "@/constants/theme";
import { SONGS } from "@/data/songs";
import { useLanguage } from "@/hooks/use-language";
import { formatSongForShare, shareViaWhatsApp } from "@/lib/share";

export default function SongsScreen() {
  const { lang } = useLanguage();
  const router = useRouter();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SONGS;
    return SONGS.filter(
      (s) =>
        s.title.toLowerCase().includes(q) || s.lyrics.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView edges={["top"]} style={styles.container}>
        <View style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            {lang === "sn" ? "Nziyo" : "Songs"}
          </ThemedText>
        </View>

        <View style={styles.searchWrap}>
          <IconSymbol name="magnifyingglass" size={18} color={Zim.red} />
          <TextInput
            style={styles.searchInput}
            value={query}
            onChangeText={setQuery}
            placeholder={lang === "sn" ? "Tsvaka nziyo..." : "Search songs..."}
            placeholderTextColor="#9A8A88"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
            clearButtonMode="while-editing"
          />
          {query.length > 0 && (
            <Pressable
              onPress={() => setQuery("")}
              hitSlop={8}
              accessibilityLabel="Clear search"
            >
              <IconSymbol name="xmark" size={18} color={Zim.red} />
            </Pressable>
          )}
        </View>

        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={
            <View style={styles.empty}>
              <ThemedText style={styles.emptyText}>
                {lang === "sn" ? "Hapana nziyo dzakawanikwa" : "No songs found"}
              </ThemedText>
            </View>
          }
          renderItem={({ item, index }) => (
            <Pressable
              style={({ pressed }) => [styles.card, pressed && styles.pressed]}
              onPress={() =>
                router.push({
                  pathname: "/songs/[id]",
                  params: { id: item.id },
                })
              }
            >
              <View style={styles.numberBadge}>
                <ThemedText style={styles.numberText}>{index + 1}</ThemedText>
              </View>
              <View style={styles.cardBody}>
                <ThemedText
                  type="defaultSemiBold"
                  style={styles.cardTitle}
                  numberOfLines={2}
                >
                  {item.title}
                </ThemedText>
              </View>
              <Pressable
                style={({ pressed }) => [
                  styles.shareBtn,
                  pressed && styles.sharePressed,
                ]}
                onPress={() => shareViaWhatsApp(formatSongForShare(item))}
                hitSlop={8}
                accessibilityRole="button"
                accessibilityLabel={
                  lang === "sn" ? "Tumira neWhatsApp" : "Share via WhatsApp"
                }
              >
                <Ionicons name="logo-whatsapp" size={22} color="#25D366" />
              </Pressable>
              <IconSymbol name="chevron.right" size={20} color={Zim.red} />
            </Pressable>
          )}
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 12 },
  title: { color: Zim.red, fontSize: 30 },
  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 16,
    marginBottom: 4,
    paddingHorizontal: 14,
    height: 44,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Zim.border,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: Zim.black,
    paddingVertical: 0,
  },
  listContent: { padding: 16, gap: 10, paddingBottom: 40 },
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
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Zim.redTint,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: { color: Zim.red, fontSize: 14, fontWeight: "700" },
  cardBody: { flex: 1 },
  cardTitle: { fontSize: 17 },
  shareBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E9F9EF",
  },
  sharePressed: { opacity: 0.6 },
  empty: { padding: 32, alignItems: "center" },
  emptyText: { color: "#9A8A88", fontSize: 15 },
});
