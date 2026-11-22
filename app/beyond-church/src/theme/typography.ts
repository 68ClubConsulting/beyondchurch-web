// Beyond Church — Typography Tokens

export const FontFamily = {
  // System fonts — swap for custom fonts once loaded via expo-font
  heading: 'System',
  body: 'System',
  mono: 'Courier',
};

export const FontSize = {
  xs: 11,
  sm: 13,
  base: 16,
  md: 18,
  lg: 22,
  xl: 28,
  xxl: 36,
  hero: 48,
};

export const FontWeight = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
  black: '900' as const,
};

export const LineHeight = {
  tight: 1.1,
  snug: 1.3,
  normal: 1.5,
  relaxed: 1.7,
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  section: 64,
};

export const Radius = {
  sm: 6,
  md: 12,
  lg: 20,
  full: 999,
};
