import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Brand } from '@/constants/theme';
import { getFigure } from '@/data/figures';
import { useLanguage } from '@/hooks/use-language';

export default function FigureDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { lang } = useLanguage();

  const figure = getFigure(id);
  if (!figure) {
    return (
      <ThemedView style={styles.container}>
        <Stack.Screen options={{ title: 'Not found' }} />
        <View style={styles.center}>
          <ThemedText>{lang === 'sn' ? 'Hazvina kuwanikwa' : 'Not found'}</ThemedText>
        </View>
      </ThemedView>
    );
  }

  const c = figure.content[lang];

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: c.name }} />
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText type="title" style={styles.name}>
          {c.name}
        </ThemedText>
        <View style={styles.badge}>
          <ThemedText style={styles.badgeText}>{c.nickname_meaning}</ThemedText>
        </View>

        <Field label={lang === 'sn' ? 'Basa' : 'Profession'} value={c.original_profession} />
        <Field
          label={lang === 'sn' ? 'Zvaanozivikanwa nazvo' : 'Known for'}
          value={c.key_attribute}
        />
      </ScrollView>
    </ThemedView>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.field}>
      <ThemedText style={styles.fieldLabel}>{label.toUpperCase()}</ThemedText>
      <ThemedText style={styles.fieldValue}>{value}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  content: { padding: 20, gap: 14 },
  name: { fontSize: 30 },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: Brand.purpleTint,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  badgeText: { color: Brand.purple, fontSize: 14, fontWeight: '700' },
  field: { gap: 4, marginTop: 6 },
  fieldLabel: { fontSize: 12, letterSpacing: 0.5, color: Brand.purple, fontWeight: '700' },
  fieldValue: { fontSize: 16, lineHeight: 24 },
});
