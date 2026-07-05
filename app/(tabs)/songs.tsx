import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Zim } from "@/constants/theme";
import { useLanguage } from "@/hooks/use-language";

export default function SongsScreen() {
  const { lang } = useLanguage();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView edges={["top"]} style={styles.container}>
        <View style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            {lang === "sn" ? "Nziyo" : "Songs"}
          </ThemedText>
        </View>

        <View style={styles.center}>
          <View style={styles.bubble}>
            <IconSymbol name="music.note.list" size={44} color={Zim.red} />
          </View>
          <ThemedText style={styles.empty}>
            {lang === "sn" ? "Nziyo dziri kuuya" : "Songs coming soon"}
          </ThemedText>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 12 },
  title: { color: Zim.red, fontSize: 30 },
  center: { flex: 1, alignItems: "center", justifyContent: "center", gap: 16 },
  bubble: {
    width: 88,
    height: 88,
    borderRadius: 24,
    backgroundColor: Zim.redTint,
    alignItems: "center",
    justifyContent: "center",
  },
  empty: { fontSize: 16, opacity: 0.6 },
});
