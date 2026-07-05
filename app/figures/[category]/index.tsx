import { Stack, useLocalSearchParams } from 'expo-router';
import { FlatList, StyleSheet, View } from 'react-native';

import { FigureCard } from '@/components/figure-card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { getCategory, getFigures, type FigureCategory } from '@/data/figures';
import { useLanguage } from '@/hooks/use-language';

export default function CategoryListScreen() {
  const { category } = useLocalSearchParams<{ category: FigureCategory }>();
  const { lang } = useLanguage();

  const meta = getCategory(category);
  const figures = getFigures(category);

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: meta ? meta.title[lang] : 'Figures' }} />
      {figures.length === 0 ? (
        <View style={styles.empty}>
          <ThemedText style={styles.emptyEmoji}>{meta?.emoji ?? '📖'}</ThemedText>
          <ThemedText type="subtitle" style={styles.emptyTitle}>
            {lang === 'sn' ? 'Zvichauya' : 'Coming soon'}
          </ThemedText>
          <ThemedText style={styles.emptyText}>
            {lang === 'sn'
              ? 'Zvinhu zvechikamu ichi zvichawedzerwa.'
              : 'Entries for this section are on the way.'}
          </ThemedText>
        </View>
      ) : (
        <FlatList
          data={figures}
          keyExtractor={(f) => f.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => <FigureCard figure={item} />}
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 16, gap: 12 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32, gap: 8 },
  emptyEmoji: { fontSize: 48 },
  emptyTitle: { marginTop: 8 },
  emptyText: { textAlign: 'center', opacity: 0.6 },
});
