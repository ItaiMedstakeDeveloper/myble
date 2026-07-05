import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Zim } from '@/constants/theme';
import type { Figure } from '@/data/figures';
import { useLanguage } from '@/hooks/use-language';

export function FigureCard({ figure }: { figure: Figure }) {
  const router = useRouter();
  const { lang } = useLanguage();
  const c = figure.content[lang];

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={() =>
        router.push({
          pathname: '/figures/[category]/[id]',
          params: { category: figure.category, id: figure.id },
        })
      }>
      <View style={styles.headerRow}>
        <ThemedText type="defaultSemiBold" style={styles.name} numberOfLines={1}>
          {c.name}
        </ThemedText>
        <View style={styles.badge}>
          <ThemedText style={styles.badgeText} numberOfLines={1}>
            {c.nickname_meaning}
          </ThemedText>
        </View>
      </View>
      <ThemedText style={styles.profession}>{c.original_profession}</ThemedText>
      <ThemedText style={styles.attribute} numberOfLines={2}>
        {c.key_attribute}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Zim.border,
    padding: 16,
    gap: 6,
  },
  pressed: { backgroundColor: Zim.redTint },
  headerRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  name: { fontSize: 18, flexShrink: 1 },
  badge: {
    backgroundColor: Zim.redTint,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 3,
    flexShrink: 1,
  },
  badgeText: { color: Zim.red, fontSize: 11, fontWeight: '700' },
  profession: { fontSize: 13, opacity: 0.6 },
  attribute: { fontSize: 14, lineHeight: 20, marginTop: 2 },
});
