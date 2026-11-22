import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { FontSize, FontWeight, Spacing, Radius } from '../theme';

export default function SettingsScreen() {
  const { colors, mode, isDark, setMode } = useTheme();
  const styles = makeStyles(colors);

  const themeOptions: { label: string; value: 'light' | 'dark' | 'system' }[] = [
    { label: '☀️  Light', value: 'light' },
    { label: '🌙  Dark', value: 'dark' },
    { label: '⚙️  System Default', value: 'system' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={[styles.sectionLabel, { color: colors.textMuted }]}>APPEARANCE</Text>
      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.cardTitle, { color: colors.text }]}>App Theme</Text>
        <Text style={[styles.cardSub, { color: colors.textSecondary }]}>
          Choose how Beyond Church looks on your device.
        </Text>
        <View style={styles.themeRow}>
          {themeOptions.map((opt) => (
            <TouchableOpacity
              key={opt.value}
              onPress={() => setMode(opt.value)}
              style={[
                styles.themeBtn,
                {
                  backgroundColor: mode === opt.value ? colors.accent : colors.background,
                  borderColor: mode === opt.value ? colors.accent : colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.themeBtnText,
                  { color: mode === opt.value ? colors.accentText : colors.text },
                ]}
              >
                {opt.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Text style={[styles.sectionLabel, { color: colors.textMuted }]}>NOTIFICATIONS</Text>
      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        {[
          { label: 'New sermons', sub: 'Get notified when a new message is posted' },
          { label: 'Events', sub: 'Upcoming events and announcements' },
          { label: 'Devotionals', sub: 'Daily reminder to read your devotional' },
        ].map((item, i) => (
          <View
            key={i}
            style={[
              styles.notifRow,
              i > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.border },
            ]}
          >
            <View style={{ flex: 1 }}>
              <Text style={[styles.notifLabel, { color: colors.text }]}>{item.label}</Text>
              <Text style={[styles.notifSub, { color: colors.textSecondary }]}>{item.sub}</Text>
            </View>
            <Switch
              value={false}
              trackColor={{ true: colors.accent, false: colors.border }}
              thumbColor={colors.surface}
            />
          </View>
        ))}
      </View>

      <Text style={[styles.sectionLabel, { color: colors.textMuted }]}>ABOUT</Text>
      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        {[
          { label: 'Beyond Church Website', value: 'beyondchurch.org' },
          { label: 'App Version', value: '1.0.0 (build 1)' },
        ].map((item, i) => (
          <View
            key={i}
            style={[
              styles.infoRow,
              i > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.border },
            ]}
          >
            <Text style={[styles.infoLabel, { color: colors.text }]}>{item.label}</Text>
            <Text style={[styles.infoValue, { color: colors.textSecondary }]}>{item.value}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const makeStyles = (colors: ReturnType<typeof useTheme>['colors']) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    content: { padding: Spacing.md, paddingBottom: Spacing.xxl },

    sectionLabel: {
      fontSize: FontSize.xs,
      fontWeight: FontWeight.bold,
      letterSpacing: 1.5,
      marginBottom: 8,
      marginTop: Spacing.md,
    },
    card: {
      borderRadius: Radius.lg,
      borderWidth: 1,
      overflow: 'hidden',
      padding: Spacing.md,
      gap: Spacing.md,
    },
    cardTitle: { fontSize: FontSize.base, fontWeight: FontWeight.bold },
    cardSub: { fontSize: FontSize.sm },

    themeRow: { flexDirection: 'column', gap: 8 },
    themeBtn: {
      paddingVertical: 10,
      paddingHorizontal: 14,
      borderRadius: Radius.md,
      borderWidth: 1,
      alignItems: 'center',
    },
    themeBtnText: { fontSize: FontSize.base, fontWeight: FontWeight.medium },

    notifRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: Spacing.sm,
      gap: Spacing.md,
    },
    notifLabel: { fontSize: FontSize.base, fontWeight: FontWeight.medium },
    notifSub: { fontSize: FontSize.xs },

    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: Spacing.sm,
    },
    infoLabel: { fontSize: FontSize.base },
    infoValue: { fontSize: FontSize.sm },
  });
