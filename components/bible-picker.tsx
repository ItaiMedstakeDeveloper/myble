import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, FlatList, Modal, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Brand, Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color';
import {
  getBooksByTestament,
  getChapterCount,
  getVerseCount,
  testamentOf,
  type Book,
  type Testament,
} from '@/lib/bible';

type Tab = 'books' | 'chapters' | 'verses';

export type PickerSelection = { bookId: number; chapter: number; verse: number };

type Props = {
  visible: boolean;
  onClose: () => void;
  book: Book;
  chapter: number;
  onSelect: (selection: PickerSelection) => void;
};

export function BiblePicker({ visible, onClose, book, chapter, onSelect }: Props) {
  const db = useSQLiteContext();
  const scheme = useColorScheme() ?? 'light';
  const tint = Colors[scheme].tint;
  const background = useThemeColor({}, 'background');
  const border = Brand.border;
  const chip = Brand.purpleTint;

  const [tab, setTab] = useState<Tab>('books');
  const [testament, setTestament] = useState<Testament>('old');
  const [draftBook, setDraftBook] = useState<Book>(book);
  const [draftChapter, setDraftChapter] = useState<number>(chapter);

  // Reset the picker to the reader's current location every time it opens.
  useEffect(() => {
    if (visible) {
      setDraftBook(book);
      setDraftChapter(chapter);
      setTestament(testamentOf(book.id));
      setTab('books');
    }
  }, [visible, book, chapter]);

  // Snap the sheet down from the top when it opens.
  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (visible) {
      anim.setValue(0);
      Animated.spring(anim, {
        toValue: 1,
        useNativeDriver: true,
        speed: 20,
        bounciness: 4,
      }).start();
    }
  }, [visible, anim]);
  const translateY = anim.interpolate({ inputRange: [0, 1], outputRange: [-700, 0] });

  const books = useMemo(
    () => (visible ? getBooksByTestament(db, testament) : []),
    [db, testament, visible]
  );
  const chapterCount = getChapterCount(db, draftBook.id);
  const verseCount = getVerseCount(db, draftBook.id, draftChapter);
  const chapters = useMemo(
    () => Array.from({ length: chapterCount }, (_, i) => i + 1),
    [chapterCount]
  );
  const verses = useMemo(() => Array.from({ length: verseCount }, (_, i) => i + 1), [verseCount]);

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.root}>
        <Animated.View
          style={[styles.sheet, { backgroundColor: background, transform: [{ translateY }] }]}>
          <SafeAreaView edges={['top']} style={styles.flex}>
            {/* Tab bar */}
            <View style={[styles.tabBar, { borderBottomColor: border }]}>
              {(['books', 'chapters', 'verses'] as Tab[]).map((t) => {
                const active = tab === t;
                return (
                  <Pressable key={t} style={styles.tab} onPress={() => setTab(t)}>
                    <ThemedText
                      style={[styles.tabLabel, active && { color: tint, fontWeight: '700' }]}>
                      {t === 'books' ? 'Books' : t === 'chapters' ? 'Chapters' : 'Verses'}
                    </ThemedText>
                    {active && <View style={[styles.tabUnderline, { backgroundColor: tint }]} />}
                  </Pressable>
                );
              })}
              <Pressable style={styles.close} onPress={onClose} hitSlop={10}>
                <IconSymbol name="xmark" size={22} color={Colors[scheme].icon} />
              </Pressable>
            </View>

            {/* Books */}
            {tab === 'books' && (
              <FlatList
                data={books}
                keyExtractor={(b) => String(b.id)}
                numColumns={2}
                contentContainerStyle={styles.listContent}
                ListHeaderComponent={
                  <Segmented
                    value={testament}
                    tint={tint}
                    chip={chip}
                    onChange={setTestament}
                  />
                }
                renderItem={({ item }) => (
                  <Cell
                    wide
                    active={item.id === draftBook.id}
                    tint={tint}
                    chip={chip}
                    label={item.name}
                    onPress={() => {
                      setDraftBook(item);
                      setDraftChapter(1);
                      setTab('chapters');
                    }}
                  />
                )}
              />
            )}

            {/* Chapters */}
            {tab === 'chapters' && (
              <FlatList
                data={chapters}
                keyExtractor={(c) => String(c)}
                numColumns={5}
                contentContainerStyle={styles.listContent}
                ListHeaderComponent={<Crumb label={draftBook.name} />}
                renderItem={({ item }) => (
                  <Cell
                    active={item === draftChapter}
                    tint={tint}
                    chip={chip}
                    label={String(item)}
                    onPress={() => {
                      setDraftChapter(item);
                      setTab('verses');
                    }}
                  />
                )}
              />
            )}

            {/* Verses */}
            {tab === 'verses' && (
              <FlatList
                data={verses}
                keyExtractor={(v) => String(v)}
                numColumns={5}
                contentContainerStyle={styles.listContent}
                ListHeaderComponent={<Crumb label={`${draftBook.name} ${draftChapter}`} />}
                renderItem={({ item }) => (
                  <Cell
                    tint={tint}
                    chip={chip}
                    label={String(item)}
                    onPress={() =>
                      onSelect({ bookId: draftBook.id, chapter: draftChapter, verse: item })
                    }
                  />
                )}
              />
            )}
          </SafeAreaView>
        </Animated.View>

        {/* Tap below the sheet to dismiss */}
        <Pressable style={styles.flex} onPress={onClose} />
      </View>
    </Modal>
  );
}

function Segmented({
  value,
  tint,
  chip,
  onChange,
}: {
  value: Testament;
  tint: string;
  chip: string;
  onChange: (t: Testament) => void;
}) {
  return (
    <View style={[styles.segmented, { backgroundColor: chip }]}>
      {(['old', 'new'] as Testament[]).map((t) => {
        const active = value === t;
        return (
          <Pressable
            key={t}
            style={[styles.segment, active && { backgroundColor: tint }]}
            onPress={() => onChange(t)}>
            <ThemedText
              style={[styles.segmentLabel, active && { color: '#fff', fontWeight: '700' }]}>
              {t === 'old' ? 'Old' : 'New'}
            </ThemedText>
          </Pressable>
        );
      })}
    </View>
  );
}

function Crumb({ label }: { label: string }) {
  return (
    <ThemedText type="defaultSemiBold" style={styles.crumb}>
      {label}
    </ThemedText>
  );
}

function Cell({
  label,
  onPress,
  tint,
  chip,
  active,
  wide,
}: {
  label: string;
  onPress: () => void;
  tint: string;
  chip: string;
  active?: boolean;
  wide?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        wide ? styles.bookCell : styles.numCell,
        { backgroundColor: active ? tint : chip },
      ]}>
      <ThemedText
        numberOfLines={1}
        style={[wide ? styles.bookLabel : styles.numLabel, active && { color: '#fff' }]}>
        {label}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  root: { flex: 1, backgroundColor: '#0006' },
  sheet: {
    height: '90%',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    overflow: 'hidden',
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  tab: { paddingVertical: 12, paddingHorizontal: 12 },
  tabLabel: { fontSize: 16 },
  tabUnderline: {
    height: 3,
    borderRadius: 2,
    marginTop: 6,
    marginHorizontal: -4,
  },
  close: { marginLeft: 'auto', padding: 12 },
  listContent: { padding: 12, gap: 8 },
  segmented: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 3,
    marginBottom: 8,
  },
  segment: { flex: 1, paddingVertical: 8, alignItems: 'center', borderRadius: 8 },
  segmentLabel: { fontSize: 15 },
  crumb: { marginBottom: 4, opacity: 0.6, fontSize: 13, textTransform: 'uppercase' },
  bookCell: {
    flex: 1,
    margin: 4,
    minHeight: 52,
    borderRadius: 10,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  bookLabel: { fontSize: 15 },
  numCell: {
    flex: 1,
    margin: 4,
    aspectRatio: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numLabel: { fontSize: 16, fontWeight: '600' },
});
