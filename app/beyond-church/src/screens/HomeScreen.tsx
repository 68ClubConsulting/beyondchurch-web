import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { FontSize, FontWeight, Spacing, Radius } from '../theme';
import { CONTENT } from '../data/content';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const { colors } = useTheme();

  const styles = makeStyles(colors);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Hero — Latest Sermon */}
      <View style={styles.heroCard}>
        {/* YouTube thumbnail as hero image */}
        {/* Replace View below with Image once we wire up the feed */}
        <View style={styles.heroThumb}>
          <Text style={styles.heroThumbLabel}>▶  Latest Message</Text>
        </View>
        <View style={styles.heroMeta}>
          <Text style={styles.heroSeries}>SERIES NAME</Text>
          <Text style={styles.heroTitle}>Sermon Title</Text>
          <Text style={styles.heroSpeaker}>Landon Parker · Nov 17, 2026</Text>
          <TouchableOpacity style={styles.watchBtn}>
            <Text style={styles.watchBtnText}>Watch Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickRow}>
        {[
          { label: 'Give', icon: '💛' },
          { label: 'Events', icon: '📅' },
          { label: 'Connect', icon: '✉️' },
          { label: 'Groups', icon: '👥' },
        ].map((item) => (
          <TouchableOpacity key={item.label} style={styles.quickBtn}>
            <Text style={styles.quickIcon}>{item.icon}</Text>
            <Text style={[styles.quickLabel, { color: colors.textSecondary }]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Upcoming Events — stub */}
      <Text style={styles.sectionHeader}>Upcoming</Text>
      {['Beyond Kids Check-In Sunday', 'Wednesday Night', 'Frontline Men'].map(
        (title, i) => (
          <TouchableOpacity key={i} style={styles.eventRow}>
            <View style={[styles.eventDate, { backgroundColor: colors.accent }]}>
              <Text style={[styles.eventDateNum, { color: colors.accentText }]}>
                {22 + i}
              </Text>
              <Text style={[styles.eventDateMon, { color: colors.accentText }]}>
                NOV
              </Text>
            </View>
            <View style={styles.eventInfo}>
              <Text style={[styles.eventTitle, { color: colors.text }]}>{title}</Text>
              <Text style={[styles.eventTime, { color: colors.textSecondary }]}>
                9:30 AM · Beyond Church
              </Text>
            </View>
          </TouchableOpacity>
        )
      )}

      {/* Today's Devotional — stub */}
      <Text style={styles.sectionHeader}>Today's Devotional</Text>
      <TouchableOpacity style={[styles.devotCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.devotDate, { color: colors.accent }]}>
          November 21
        </Text>
        <Text style={[styles.devotTitle, { color: colors.text }]}>
          A Place to Land
        </Text>
        <Text style={[styles.devotScripture, { color: colors.textSecondary }]}>
          Psalm 23:1-3 · NLT
        </Text>
        <Text style={[styles.devotTeaser, { color: colors.textMuted }]}>
          "The Lord is my shepherd; I have all that I need..."
        </Text>
        <Text style={[styles.devotCta, { color: colors.accent }]}>
          Read Today's Devotional →
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const makeStyles = (colors: ReturnType<typeof useTheme>['colors']) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    content: { paddingBottom: Spacing.xxl },

    heroCard: {
      backgroundColor: colors.surface,
      marginHorizontal: Spacing.md,
      marginTop: Spacing.md,
      borderRadius: Radius.lg,
      overflow: 'hidden',
    },
    heroThumb: {
      width: '100%',
      height: 200,
      backgroundColor: colors.charcoal ?? '#1a1a2e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroThumbLabel: {
      color: '#fff',
      fontSize: FontSize.lg,
      fontWeight: FontWeight.semibold,
    },
    heroMeta: { padding: Spacing.md },
    heroSeries: {
      fontSize: FontSize.xs,
      fontWeight: FontWeight.bold,
      color: colors.accent,
      letterSpacing: 2,
      marginBottom: 4,
    },
    heroTitle: {
      fontSize: FontSize.xl,
      fontWeight: FontWeight.black,
      color: colors.text,
      marginBottom: 4,
    },
    heroSpeaker: { fontSize: FontSize.sm, color: colors.textSecondary, marginBottom: Spacing.md },
    watchBtn: {
      backgroundColor: colors.accent,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: Radius.full,
      alignSelf: 'flex-start',
    },
    watchBtnText: { fontWeight: FontWeight.bold, color: colors.accentText, fontSize: FontSize.sm },

    quickRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingHorizontal: Spacing.md,
      paddingVertical: Spacing.lg,
    },
    quickBtn: { alignItems: 'center', gap: 4 },
    quickIcon: { fontSize: 28 },
    quickLabel: { fontSize: FontSize.sm, fontWeight: FontWeight.medium },

    sectionHeader: {
      fontSize: FontSize.lg,
      fontWeight: FontWeight.black,
      color: colors.text,
      marginHorizontal: Spacing.md,
      marginBottom: Spacing.sm,
      marginTop: Spacing.sm,
    },

    eventRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Spacing.md,
      paddingVertical: Spacing.sm,
      gap: Spacing.md,
    },
    eventDate: {
      width: 48,
      height: 56,
      borderRadius: Radius.sm,
      alignItems: 'center',
      justifyContent: 'center',
    },
    eventDateNum: { fontSize: FontSize.lg, fontWeight: FontWeight.black },
    eventDateMon: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 1 },
    eventInfo: { flex: 1 },
    eventTitle: { fontSize: FontSize.base, fontWeight: FontWeight.semibold },
    eventTime: { fontSize: FontSize.sm },

    devotCard: {
      marginHorizontal: Spacing.md,
      padding: Spacing.md,
      borderRadius: Radius.lg,
      borderWidth: 1,
      gap: 6,
    },
    devotDate: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 1 },
    devotTitle: { fontSize: FontSize.md, fontWeight: FontWeight.black },
    devotScripture: { fontSize: FontSize.sm },
    devotTeaser: { fontSize: FontSize.sm, fontStyle: 'italic' },
    devotCta: { fontSize: FontSize.sm, fontWeight: FontWeight.semibold, marginTop: 4 },
  });
