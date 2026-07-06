import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Zim } from "@/constants/theme";
import { useLanguage } from "@/hooks/use-language";
import { getNotes, type Note } from "@/lib/notes";
import { formatNoteForShare, shareViaWhatsApp } from "@/lib/share";

export default function NotesScreen() {
  const { lang } = useLanguage();
  const router = useRouter();
  const [notes, setNotes] = useState<Note[]>([]);

  // Reload every time the screen comes into focus so new / edited / deleted
  // notes are always reflected.
  useFocusEffect(
    useCallback(() => {
      setNotes(getNotes());
    }, []),
  );

  const openEditor = (id?: number) =>
    router.push({
      pathname: "/notes/edit",
      params: id != null ? { id: String(id) } : {},
    });

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView edges={["top"]} style={styles.container}>
        <View style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            {lang === "sn" ? "Zvinyorwa" : "Notes"}
          </ThemedText>
          <Pressable
            style={({ pressed }) => [styles.addBtn, pressed && styles.pressed]}
            onPress={() => openEditor()}
            accessibilityRole="button"
            accessibilityLabel={lang === "sn" ? "Wedzera chinyorwa" : "Add note"}
          >
            <IconSymbol name="plus" size={20} color="#fff" />
            <ThemedText style={styles.addBtnText}>
              {lang === "sn" ? "Wedzera" : "Add"}
            </ThemedText>
          </Pressable>
        </View>

        <FlatList
          data={notes}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.empty}>
              <IconSymbol name="note.text" size={48} color={Zim.border} />
              <ThemedText style={styles.emptyText}>
                {lang === "sn"
                  ? "Hapana zvinyorwa. Dzvanya Wedzera kuti utange."
                  : "No notes yet. Tap Add to record one."}
              </ThemedText>
            </View>
          }
          renderItem={({ item }) => (
            <Pressable
              style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
              onPress={() => openEditor(item.id)}
            >
              <View style={styles.cardHeader}>
                <View style={styles.cardHeaderText}>
                  <ThemedText type="defaultSemiBold" style={styles.preacher}>
                    {item.preacher}
                  </ThemedText>
                  <ThemedText style={styles.date}>{item.date}</ThemedText>
                </View>
                <Pressable
                  style={({ pressed }) => [
                    styles.shareBtn,
                    pressed && styles.pressed,
                  ]}
                  onPress={() => shareViaWhatsApp(formatNoteForShare(item))}
                  hitSlop={8}
                  accessibilityRole="button"
                  accessibilityLabel={
                    lang === "sn" ? "Tumira neWhatsApp" : "Share via WhatsApp"
                  }
                >
                  <Ionicons name="logo-whatsapp" size={18} color="#fff" />
                  <ThemedText style={styles.shareBtnText}>
                    {lang === "sn" ? "Tumira" : "Share"}
                  </ThemedText>
                </Pressable>
              </View>
              <ThemedText style={styles.message} numberOfLines={3}>
                {item.message}
              </ThemedText>
            </Pressable>
          )}
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  title: { color: Zim.red, fontSize: 30 },
  addBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: Zim.red,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },
  addBtnText: { color: "#fff", fontSize: 15, fontWeight: "700" },
  listContent: { padding: 16, gap: 12, paddingBottom: 40, flexGrow: 1 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Zim.border,
    padding: 16,
    gap: 10,
  },
  cardPressed: { backgroundColor: Zim.redTint },
  cardHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },
  cardHeaderText: { flex: 1 },
  preacher: { fontSize: 17, color: Zim.black },
  date: { fontSize: 13, color: "#9A8A88", marginTop: 2 },
  message: { fontSize: 15, lineHeight: 22, color: Zim.black },
  shareBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#25D366",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 10,
  },
  shareBtnText: { color: "#fff", fontSize: 13, fontWeight: "700" },
  pressed: { opacity: 0.85 },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    gap: 12,
  },
  emptyText: {
    color: "#9A8A88",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
  },
});
