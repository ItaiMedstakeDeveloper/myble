import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Brand } from '@/constants/theme';
import { getFigures, type CategoryMeta } from '@/data/figures';
import { useLanguage } from '@/hooks/use-language';

export function CategoryCard({ category }: { category: CategoryMeta }) {
  const router = useRouter();
  const { lang } = useLanguage();
  const count = getFigures(category.id).length;
  const comingSoon = count === 0;

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={() => router.push({ pathname: '/figures/[category]', params: { category: category.id } })}>
      <View style={styles.emojiBubble}>
        <ThemedText style={styles.emoji}>{category.emoji}</ThemedText>
      </View>
      <View style={styles.body}>
        <ThemedText type="defaultSemiBold" style={styles.title} numberOfLines={2}>
          {category.title[lang]}
        </ThemedText>
        <ThemedText style={styles.blurb} numberOfLines={2}>
          {category.blurb[lang]}
        </ThemedText>
        <ThemedText style={styles.meta}>
          {comingSoon
            ? lang === 'sn'
              ? 'Zvichauya'
              : 'Coming soon'
            : `${count} ${lang === 'sn' ? 'zvinhu' : 'entries'}`}
        </ThemedText>
      </View>
      <IconSymbol name="chevron.right" size={22} color={Brand.purple} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Brand.border,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  pressed: { backgroundColor: Brand.purpleTint },
  emojiBubble: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: Brand.purpleTint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: { fontSize: 26 },
  body: { flex: 1, gap: 2 },
  title: { fontSize: 17 },
  blurb: { fontSize: 13, opacity: 0.6 },
  meta: { fontSize: 12, color: Brand.purple, fontWeight: '600', marginTop: 2 },
});
