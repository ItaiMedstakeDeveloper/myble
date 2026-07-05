import { Stack } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useLanguage } from "@/hooks/use-language";

export default function AboutJesusScreen() {
  const { lang } = useLanguage();

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: "About The Lord Jesus" }} />
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText type="title" style={styles.title}>
          About The Lord Jesus
        </ThemedText>
        <ThemedText style={styles.placeholder}>
          {lang === "sn" ? "Zvichawedzerwa pano." : "Content coming soon."}
        </ThemedText>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, gap: 12 },
  title: { fontSize: 30 },
  placeholder: { opacity: 0.6, fontSize: 16 },
});
