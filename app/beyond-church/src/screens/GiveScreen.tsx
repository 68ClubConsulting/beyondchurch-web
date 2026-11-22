import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { useTheme } from '../hooks/useTheme';
import { FontSize, FontWeight, Spacing, Radius } from '../theme';
import { CONTENT } from '../data/content';

// NOTE: react-native-webview must be installed via expo:
// npx expo install react-native-webview

// Overflow native integration plan:
// 1. Check Overflow API docs early next week
// 2. If API available: build native giving flow with stored payment methods
// 3. For v1: WebView to overflow giving page (clean, works for launch)

export default function GiveScreen() {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  // v1: WebView approach — simple, secure, Overflow handles all PCI compliance
  // The WebView opens the same giving page members already know
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <WebView
        source={{ uri: CONTENT.GIVING_URL }}
        style={{ flex: 1 }}
        startInLoadingState
        allowsInlineMediaPlayback
        // Dark/light handled by Overflow's own UI
      />
    </View>
  );
}

// GiveScreenNative — future implementation once Overflow API is confirmed
// Will show:
// - Fund selector (General, The Hill, Missions, etc.)
// - Amount input
// - Frequency (one-time / recurring)
// - Stored payment method (linked Overflow account)
// - Transaction history

const makeStyles = (colors: ReturnType<typeof useTheme>['colors']) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    content: { padding: Spacing.md, paddingBottom: Spacing.xxl },
    title: { fontSize: FontSize.xxl, fontWeight: FontWeight.black, color: colors.text },
  });
