/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

// myble brand palette — purple on white.
const purple = '#6D28D9';

export const Brand = {
  purple,
  purpleDark: '#5B21B6',
  purpleTint: '#F3EEFF', // light purple wash for highlights / chips
  border: '#ECE8F5',
};

// Zimbabwe flag palette — used on the dashboard / "People in the Bible" flow.
// Red is dominant, with green / gold / black as supporting accents.
export const Zim = {
  red: '#8B0000', // deep dark red (used across the UI)
  redDark: '#5C0000', // even darker, for pressed states
  green: '#00A651',
  gold: '#FDD116',
  black: '#141414',
  white: '#FFFFFF',
  redTint: '#FDEBEA', // light red wash for chips / pressed states
  border: '#F3D9D6',
  // Flag stripe order, top to bottom.
  stripes: ['#00A651', '#FDD116', '#DE2010', '#141414', '#DE2010', '#FDD116', '#00A651'],
};

// myble is always light + purple, regardless of the system color scheme.
const tintColorLight = purple;
const tintColorDark = purple;

export const Colors = {
  light: {
    text: '#1C1B22',
    background: '#FFFFFF',
    tint: tintColorLight,
    icon: '#6E6A7C',
    tabIconDefault: '#A9A4B8',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#1C1B22',
    background: '#FFFFFF',
    tint: tintColorDark,
    icon: '#6E6A7C',
    tabIconDefault: '#A9A4B8',
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
