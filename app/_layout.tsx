import { DefaultTheme, ThemeProvider, type Theme } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SQLiteProvider } from 'expo-sqlite';
import { Suspense } from 'react';
import { ActivityIndicator, View } from 'react-native';
import 'react-native-reanimated';

import { Brand, Colors } from '@/constants/theme';

export const unstable_settings = {
  anchor: '(tabs)',
};

// myble is always white + purple.
const MybleTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Brand.purple,
    background: Colors.light.background,
    card: Colors.light.background,
    text: Colors.light.text,
    border: Brand.border,
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={MybleTheme}>
      <Suspense
        fallback={
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.light.background,
            }}>
            <ActivityIndicator size="large" color={Brand.purple} />
          </View>
        }>
        <SQLiteProvider
          databaseName="AKJV.db"
          assetSource={{ assetId: require('@/assets/AKJV.db') }}
          useSuspense>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
          </Stack>
          <StatusBar style="dark" />
        </SQLiteProvider>
      </Suspense>
    </ThemeProvider>
  );
}
