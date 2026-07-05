import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Zim } from '@/constants/theme';
import { useLanguage } from '@/hooks/use-language';
import type { Lang } from '@/data/figures';

const LABELS: Record<Lang, string> = { en: 'EN', sn: 'SN' };
const COLORS: Record<Lang, string> = { en: Zim.red, sn: Zim.green };

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <View style={styles.wrap}>
      {(['en', 'sn'] as Lang[]).map((l) => {
        const active = lang === l;
        const color = COLORS[l];
        return (
          <Pressable
            key={l}
            onPress={() => setLang(l)}
            style={[styles.pill, active && { backgroundColor: color }]}>
            <ThemedText style={[styles.label, { color: active ? '#fff' : color }]}>
              {LABELS[l]}
            </ThemedText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    backgroundColor: '#F1F0F0',
    borderRadius: 999,
    padding: 3,
  },
  pill: { paddingHorizontal: 12, paddingVertical: 5, borderRadius: 999 },
  label: { fontSize: 13, fontWeight: '700' },
});
