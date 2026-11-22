import { useColorScheme } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LightTheme, DarkTheme, ThemeColors } from '../theme';

type ThemeMode = 'light' | 'dark' | 'system';

const THEME_KEY = '@beyond_church_theme';

export function useTheme(): {
  colors: ThemeColors;
  mode: ThemeMode;
  isDark: boolean;
  setMode: (mode: ThemeMode) => void;
} {
  const systemScheme = useColorScheme();
  const [mode, setModeState] = useState<ThemeMode>('system');

  useEffect(() => {
    AsyncStorage.getItem(THEME_KEY)
      .then((saved) => {
        if (saved === 'light' || saved === 'dark' || saved === 'system') {
          setModeState(saved);
        }
      })
      .catch(() => {/* ignore — default to system */});
  }, []);

  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
    AsyncStorage.setItem(THEME_KEY, newMode).catch(() => {});
  }, []);

  const resolvedScheme =
    mode === 'system' ? (systemScheme ?? 'light') : mode;

  const isDark = resolvedScheme === 'dark';
  const colors = isDark ? DarkTheme : LightTheme;

  return { colors, mode, isDark, setMode };
}
