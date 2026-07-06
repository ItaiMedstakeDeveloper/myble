import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Zim } from "@/constants/theme";
import { useLanguage } from "@/hooks/use-language";
import { addNote, deleteNote, getNote, updateNote } from "@/lib/notes";

export default function NoteEditScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { lang } = useLanguage();
  const router = useRouter();

  const noteId = id ? Number(id) : null;
  const isEditing = noteId != null;

  const [preacher, setPreacher] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [message, setMessage] = useState("");

  // Load the existing note when editing.
  useEffect(() => {
    if (noteId == null) return;
    const note = getNote(noteId);
    if (note) {
      setPreacher(note.preacher);
      setDate(note.date);
      setMessage(note.message);
    }
  }, [noteId]);

  const t = (sn: string, en: string) => (lang === "sn" ? sn : en);

  const handleSave = () => {
    if (!preacher.trim() || !message.trim()) {
      Alert.alert(
        t("Zvinodiwa", "Missing fields"),
        t(
          "Nyora zita remuparidzi neshoko.",
          "Please enter a preacher name and a message.",
        ),
      );
      return;
    }
    const input = { preacher, date, message };
    if (isEditing) {
      updateNote(noteId, input);
    } else {
      addNote(input);
    }
    router.back();
  };

  const handleDelete = () => {
    if (noteId == null) return;
    Alert.alert(
      t("Bvisa chinyorwa", "Delete note"),
      t("Une chokwadi here?", "Are you sure you want to delete this note?"),
      [
        { text: t("Kwete", "Cancel"), style: "cancel" },
        {
          text: t("Bvisa", "Delete"),
          style: "destructive",
          onPress: () => {
            deleteNote(noteId);
            router.back();
          },
        },
      ],
    );
  };

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          title: isEditing ? t("Gadzirisa", "Edit note") : t("Chinyorwa Chitsva", "New note"),
        }}
      />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.field}>
            <ThemedText style={styles.label}>
              {t("Zita reMuparidzi", "Preacher Name")}
            </ThemedText>
            <TextInput
              style={styles.input}
              value={preacher}
              onChangeText={setPreacher}
              placeholder={t("semuenzaniso, Mufundisi Moyo", "e.g. Pastor Moyo")}
              placeholderTextColor="#9A8A88"
            />
          </View>

          <View style={styles.field}>
            <ThemedText style={styles.label}>{t("Zuva", "Date")}</ThemedText>
            <TextInput
              style={styles.input}
              value={date}
              onChangeText={setDate}
              placeholder={t("semuenzaniso, 6 Chikunguru 2026", "e.g. 6 July 2026")}
              placeholderTextColor="#9A8A88"
            />
          </View>

          <View style={styles.field}>
            <ThemedText style={styles.label}>{t("Shoko", "Message")}</ThemedText>
            <TextInput
              style={[styles.input, styles.messageInput]}
              value={message}
              onChangeText={setMessage}
              placeholder={t("Nyora zvawakadzidza...", "Write what you learned...")}
              placeholderTextColor="#9A8A88"
              multiline
              textAlignVertical="top"
            />
          </View>

          <Pressable
            style={({ pressed }) => [styles.saveBtn, pressed && styles.pressed]}
            onPress={handleSave}
          >
            <ThemedText style={styles.saveBtnText}>
              {t("Chengeta", "Save")}
            </ThemedText>
          </Pressable>

          {isEditing && (
            <Pressable
              style={({ pressed }) => [styles.deleteBtn, pressed && styles.pressed]}
              onPress={handleDelete}
            >
              <IconSymbol name="trash" size={18} color={Zim.red} />
              <ThemedText style={styles.deleteBtnText}>
                {t("Bvisa", "Delete")}
              </ThemedText>
            </Pressable>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, gap: 18, paddingBottom: 60 },
  field: { gap: 8 },
  label: { fontSize: 15, fontWeight: "600", color: Zim.black },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Zim.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: Zim.black,
  },
  messageInput: { minHeight: 160 },
  saveBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: Zim.red,
    paddingVertical: 15,
    borderRadius: 14,
    marginTop: 4,
  },
  saveBtnText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  deleteBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 13,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Zim.red,
  },
  deleteBtnText: { color: Zim.red, fontSize: 16, fontWeight: "700" },
  pressed: { opacity: 0.85 },
});
