import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { FontSize, FontWeight, Spacing, Radius } from '../theme';
import { CONTENT } from '../data/content';

const { width } = Dimensions.get('window');

// Stub sermon data — replace with YouTube Data API or PCO Publishing feed
const STUB_SERMONS = [
  { id: '1', youtubeId: 'rI-dujRBYE4', title: 'Current Series Message', series: 'Current Series', speaker: 'Landon Parker', date: 'Nov 17, 2026' },
  { id: '2', youtubeId: 'RKSgdYDr9zY', title: 'Previous Message', series: 'Current Series', speaker: 'Pastor Nate', date: 'Nov 10, 2026' },
  { id: '3', youtubeId: 'RKSgdYDr9zY', title: 'Beyond Youth Message', series: 'Beyond Youth', speaker: 'Pastor Evan', date: 'Nov 10, 2026' },
];

export default function WatchScreen() {
  const { colors } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Main Service', 'Beyond Youth', 'Special'];
  const styles = makeStyles(colors);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Featured / Latest */}
      <View style={styles.featured}>
        <View style={styles.featuredThumb}>
          <Text style={styles.featuredPlay}>▶</Text>
          <View style={styles.featuredBadge}>
            <Text style={styles.featuredBadgeText}>LATEST</Text>
          </View>
        </View>
        <View style={styles.featuredMeta}>
          <Text style={[styles.featuredSeries, { color: colors.accent }]}>CURRENT SERIES</Text>
          <Text style={[styles.featuredTitle, { color: colors.text }]}>
            {STUB_SERMONS[0].title}
          </Text>
          <Text style={[styles.featuredSub, { color: colors.textSecondary }]}>
            {STUB_SERMONS[0].speaker} · {STUB_SERMONS[0].date}
          </Text>
        </View>
      </View>

      {/* Filter Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filters}
      >
        {filters.map((f) => (
          <TouchableOpacity
            key={f}
            onPress={() => setActiveFilter(f)}
            style={[
              styles.filterChip,
              {
                backgroundColor: f === activeFilter ? colors.accent : colors.surface,
                borderColor: f === activeFilter ? colors.accent : colors.border,
              },
            ]}
          >
            <Text
              style={[
                styles.filterText,
                { color: f === activeFilter ? colors.accentText : colors.textSecondary },
              ]}
            >
              {f}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Sermon List */}
      {STUB_SERMONS.map((sermon) => (
        <TouchableOpacity
          key={sermon.id}
          style={[styles.sermonRow, { borderBottomColor: colors.border }]}
        >
          <View style={styles.sermonThumb}>
            <Text style={styles.sermonPlay}>▶</Text>
          </View>
          <View style={styles.sermonMeta}>
            <Text style={[styles.sermonSeries, { color: colors.accent }]}>
              {sermon.series.toUpperCase()}
            </Text>
            <Text style={[styles.sermonTitle, { color: colors.text }]}>{sermon.title}</Text>
            <Text style={[styles.sermonSub, { color: colors.textSecondary }]}>
              {sermon.speaker} · {sermon.date}
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      <Text style={[styles.moreNote, { color: colors.textMuted }]}>
        Full archive loads from YouTube — connected when API key is configured.
      </Text>
    </ScrollView>
  );
}

const makeStyles = (colors: ReturnType<typeof useTheme>['colors']) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    content: { paddingBottom: Spacing.xxl },

    featured: {
      backgroundColor: colors.surface,
      marginHorizontal: Spacing.md,
      marginTop: Spacing.md,
      borderRadius: Radius.lg,
      overflow: 'hidden',
    },
    featuredThumb: {
      height: 200,
      backgroundColor: '#0d0d1a',
      alignItems: 'center',
      justifyContent: 'center',
    },
    featuredPlay: { fontSize: 48, color: '#fff' },
    featuredBadge: {
      position: 'absolute',
      top: 12,
      left: 12,
      backgroundColor: colors.accent,
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: Radius.sm,
    },
    featuredBadgeText: {
      fontSize: FontSize.xs,
      fontWeight: FontWeight.bold,
      color: colors.accentText,
      letterSpacing: 1,
    },
    featuredMeta: { padding: Spacing.md },
    featuredSeries: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 2, marginBottom: 4 },
    featuredTitle: { fontSize: FontSize.lg, fontWeight: FontWeight.black, marginBottom: 4 },
    featuredSub: { fontSize: FontSize.sm },

    filters: {
      paddingHorizontal: Spacing.md,
      paddingVertical: Spacing.md,
      gap: 8,
      flexDirection: 'row',
    },
    filterChip: {
      paddingHorizontal: 14,
      paddingVertical: 7,
      borderRadius: Radius.full,
      borderWidth: 1,
    },
    filterText: { fontSize: FontSize.sm, fontWeight: FontWeight.medium },

    sermonRow: {
      flexDirection: 'row',
      paddingHorizontal: Spacing.md,
      paddingVertical: Spacing.sm,
      gap: Spacing.md,
      borderBottomWidth: StyleSheet.hairlineWidth,
      alignItems: 'center',
    },
    sermonThumb: {
      width: 80,
      height: 56,
      backgroundColor: '#1a1a2e',
      borderRadius: Radius.sm,
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    sermonPlay: { fontSize: 20, color: '#fff' },
    sermonMeta: { flex: 1 },
    sermonSeries: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 1 },
    sermonTitle: { fontSize: FontSize.base, fontWeight: FontWeight.semibold },
    sermonSub: { fontSize: FontSize.xs },

    moreNote: {
      textAlign: 'center',
      fontSize: FontSize.xs,
      padding: Spacing.lg,
    },
  });
