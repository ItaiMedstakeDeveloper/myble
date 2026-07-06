import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Zim } from "@/constants/theme";
import { getSong } from "@/data/songs";
import { useLanguage } from "@/hooks/use-language";

export default function SongDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { lang } = useLanguage();

  const song = getSong(id);

  if (!song) {
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

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: song.title }} />
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText type="title" style={styles.title}>
          {song.title}
        </ThemedText>
        
        <View style={styles.lyricsContainer}>
          <ThemedText style={styles.lyrics}>
            {song.lyrics}
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  content: { padding: 20, gap: 24, paddingBottom: 60 },
  title: { fontSize: 28, color: Zim.red, textAlign: "center" },
  lyricsContainer: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Zim.border,
  },
  lyrics: {
    fontSize: 18,
    lineHeight: 32,
    textAlign: "center",
  },
});
