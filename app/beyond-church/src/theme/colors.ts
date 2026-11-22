// Beyond Church — Design Tokens
// Keep in sync with website CSS variables in pages/homepage.html

export const BrandColors = {
  // Core brand
  charcoal: '#1a1a2e',
  gold: '#c9a84c',
  goldLight: '#e8c96a',
  white: '#ffffff',
  offWhite: '#f8f6f1',

  // UI neutrals
  gray100: '#f5f5f5',
  gray200: '#e9e9e9',
  gray400: '#a0a0a0',
  gray600: '#666666',
  gray800: '#333333',
  black: '#000000',

  // Semantic
  error: '#d94f4f',
  success: '#4caf76',
};

export const LightTheme = {
  background: BrandColors.offWhite,
  surface: BrandColors.white,
  surfaceElevated: BrandColors.white,
  text: BrandColors.charcoal,
  textSecondary: BrandColors.gray600,
  textMuted: BrandColors.gray400,
  accent: BrandColors.gold,
  accentText: BrandColors.charcoal,
  border: BrandColors.gray200,
  tabBar: BrandColors.white,
  tabBarActive: BrandColors.charcoal,
  tabBarInactive: BrandColors.gray400,
  card: BrandColors.white,
  cardBorder: BrandColors.gray200,
};

export const DarkTheme = {
  background: '#0d0d1a',
  surface: '#16162a',
  surfaceElevated: '#1f1f38',
  text: BrandColors.offWhite,
  textSecondary: '#c0bfc8',
  textMuted: '#888899',
  accent: BrandColors.gold,
  accentText: BrandColors.charcoal,
  border: '#2a2a44',
  tabBar: '#16162a',
  tabBarActive: BrandColors.gold,
  tabBarInactive: '#888899',
  card: '#1f1f38',
  cardBorder: '#2a2a44',
};

export type ThemeColors = typeof LightTheme;
