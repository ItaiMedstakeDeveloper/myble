import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BiblePicker, type PickerSelection } from '@/components/bible-picker';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { getBooks, getChapter, type Verse } from '@/lib/bible';

export default function BibleScreen() {
  const db = useSQLiteContext();
  const scheme = useColorScheme() ?? 'light';
  const books = useMemo(() => getBooks(db), [db]);

  // Open on Genesis 1:1.
  const [bookId, setBookId] = useState(1);
  const [chapter, setChapter] = useState(1);
  const [highlight, setHighlight] = useState(1);
  const [pickerVisible, setPickerVisible] = useState(false);

  const book = books.find((b) => b.id === bookId) ?? books[0];
  const verses: Verse[] = useMemo(() => getChapter(db, bookId, chapter), [db, bookId, chapter]);

  const listRef = useRef<FlatList<Verse>>(null);

  // Scroll to the highlighted verse whenever the location changes.
  useEffect(() => {
    if (highlight <= 1 || verses.length === 0) return;
    const index = Math.min(highlight - 1, verses.length - 1);
    const id = setTimeout(() => {
      listRef.current?.scrollToIndex({ index, animated: true, viewPosition: 0 });
    }, 50);
    return () => clearTimeout(id);
  }, [highlight, verses]);

  function handleSelect({ bookId: b, chapter: c, verse: v }: PickerSelection) {
    setBookId(b);
    setChapter(c);
    setHighlight(v);
    setPickerVisible(false);
  }

  const highlightBg = '#EEEEEE';

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => setPickerVisible(true)} hitSlop={10} style={styles.menuBtn}>
            <IconSymbol name="line.3.horizontal" size={26} color={Colors[scheme].text} />
          </Pressable>
          <ThemedText type="subtitle" numberOfLines={1}>
            {book?.name} {chapter}
          </ThemedText>
        </View>

        <FlatList
          ref={listRef}
          data={verses}
          keyExtractor={(v) => String(v.id)}
          contentContainerStyle={styles.listContent}
          onScrollToIndexFailed={({ index }) => {
            setTimeout(() => {
              listRef.current?.scrollToIndex({ index, animated: true });
            }, 100);
          }}
          renderItem={({ item }) => (
            <View
              style={[styles.verseRow, item.verse === highlight && { backgroundColor: highlightBg }]}>
              <ThemedText style={styles.verse}>
                <ThemedText type="defaultSemiBold" style={styles.verseNum}>
                  {item.verse}{' '}
                </ThemedText>
                {item.text.trim()}
              </ThemedText>
            </View>
          )}
        />
      </SafeAreaView>

      {book && (
        <BiblePicker
          visible={pickerVisible}
          onClose={() => setPickerVisible(false)}
          book={book}
          chapter={chapter}
          onSelect={handleSelect}
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  menuBtn: { padding: 2 },
  listContent: { paddingHorizontal: 16, paddingBottom: 32 },
  verseRow: { borderRadius: 6, paddingHorizontal: 4, paddingVertical: 2, marginBottom: 8 },
  verse: { lineHeight: 26, fontSize: 17 },
  verseNum: { opacity: 0.5, fontSize: 13 },
});
