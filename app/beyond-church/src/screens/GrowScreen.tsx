import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { FontSize, FontWeight, Spacing, Radius } from '../theme';

type Tab = 'devotional' | 'plan';

// Stub data — replace with fetched JSON from GitHub content/ files
const STUB_DEVOTIONAL = {
  date: 'November 21, 2026',
  title: 'A Place to Land',
  scripture: 'Psalm 23:1-3',
  version: 'NLT',
  scriptureText:
    '"The Lord is my shepherd; I have all that I need. He lets me rest in green meadows; he leads me beside peaceful streams. He renews my strength. He guides me along right paths, bringing honor to his name."',
  body: "David didn't write this psalm from a palace. He wrote it from memory — the memory of what it felt like to be small, exposed, and dependent on something bigger than himself. The image of a shepherd wasn't a metaphor for comfort alone. It was a metaphor for trust earned over time.\n\nWhat does it look like for you to trust that there's enough — enough grace, enough direction, enough strength — for today?",
  author: 'Landon Parker',
};

const STUB_PLAN_WEEKS = [
  {
    title: 'Week 47 · Nov 18–24',
    data: [
      { day: 'Mon Nov 18', passages: ['Matthew 5:1-12', 'Psalm 1'], done: true },
      { day: 'Tue Nov 19', passages: ['Matthew 5:13-20', 'Proverbs 3:1-10'], done: true },
      { day: 'Wed Nov 20', passages: ['Matthew 5:21-48', 'Psalm 23'], done: true },
      { day: 'Thu Nov 21', passages: ['Matthew 6:1-18', 'Isaiah 40:28-31'], done: false },
      { day: 'Fri Nov 22', passages: ['Matthew 6:19-34', 'Psalm 46'], done: false },
      { day: 'Sat Nov 23', passages: ['Matthew 7:1-14'], done: false },
      { day: 'Sun Nov 24', passages: ['Matthew 7:15-29', 'Psalm 100'], done: false },
    ],
  },
];

export default function GrowScreen() {
  const { colors } = useTheme();
  const [tab, setTab] = useState<Tab>('devotional');
  const styles = makeStyles(colors);

  return (
    <View style={styles.container}>
      {/* Tab Switcher */}
      <View style={[styles.tabRow, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        {(['devotional', 'plan'] as Tab[]).map((t) => (
          <TouchableOpacity
            key={t}
            style={[styles.tab, t === tab && { borderBottomColor: colors.accent }]}
            onPress={() => setTab(t)}
          >
            <Text
              style={[
                styles.tabText,
                { color: t === tab ? colors.accent : colors.textSecondary },
              ]}
            >
              {t === 'devotional' ? 'Daily Devotional' : 'Bible Plan'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {tab === 'devotional' ? (
        <ScrollView contentContainerStyle={styles.devContent}>
          <Text style={[styles.devDate, { color: colors.accent }]}>{STUB_DEVOTIONAL.date}</Text>
          <Text style={[styles.devTitle, { color: colors.text }]}>{STUB_DEVOTIONAL.title}</Text>
          <Text style={[styles.devRef, { color: colors.textSecondary }]}>
            {STUB_DEVOTIONAL.scripture} · {STUB_DEVOTIONAL.version}
          </Text>
          <View style={[styles.scriptureBlock, { backgroundColor: colors.surface, borderLeftColor: colors.accent }]}>
            <Text style={[styles.scriptureText, { color: colors.text }]}>
              {STUB_DEVOTIONAL.scriptureText}
            </Text>
          </View>
          <Text style={[styles.devBody, { color: colors.text }]}>{STUB_DEVOTIONAL.body}</Text>
          {STUB_DEVOTIONAL.author && (
            <Text style={[styles.devAuthor, { color: colors.textMuted }]}>
              — {STUB_DEVOTIONAL.author}
            </Text>
          )}
          <TouchableOpacity style={[styles.prayerBtn, { backgroundColor: colors.accent }]}>
            <Text style={[styles.prayerBtnText, { color: colors.accentText }]}>
              Mark as Read
            </Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <SectionList
          sections={STUB_PLAN_WEEKS}
          keyExtractor={(item, i) => `${item.day}-${i}`}
          renderSectionHeader={({ section }) => (
            <View style={[styles.weekHeader, { backgroundColor: colors.background }]}>
              <Text style={[styles.weekHeaderText, { color: colors.textSecondary }]}>
                {section.title}
              </Text>
            </View>
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.dayRow,
                { borderBottomColor: colors.border, backgroundColor: colors.surface },
              ]}
            >
              <View style={[styles.checkCircle, {
                borderColor: item.done ? colors.accent : colors.border,
                backgroundColor: item.done ? colors.accent : 'transparent',
              }]}>
                {item.done && <Text style={{ color: colors.accentText, fontSize: 10 }}>✓</Text>}
              </View>
              <View style={styles.dayInfo}>
                <Text style={[styles.dayLabel, { color: item.done ? colors.textMuted : colors.text }]}>
                  {item.day}
                </Text>
                <Text style={[styles.dayPassages, { color: colors.textSecondary }]}>
                  {item.passages.join(' · ')}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom: Spacing.xxl }}
        />
      )}
    </View>
  );
}

const makeStyles = (colors: ReturnType<typeof useTheme>['colors']) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },

    tabRow: {
      flexDirection: 'row',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    tab: {
      flex: 1,
      paddingVertical: Spacing.md,
      alignItems: 'center',
      borderBottomWidth: 2,
      borderBottomColor: 'transparent',
    },
    tabText: { fontSize: FontSize.base, fontWeight: FontWeight.semibold },

    devContent: { padding: Spacing.md, paddingBottom: Spacing.xxl },
    devDate: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 2, marginBottom: 6 },
    devTitle: { fontSize: FontSize.xl, fontWeight: FontWeight.black, marginBottom: 4 },
    devRef: { fontSize: FontSize.sm, marginBottom: Spacing.md },
    scriptureBlock: {
      borderLeftWidth: 4,
      paddingLeft: Spacing.md,
      paddingVertical: Spacing.sm,
      marginBottom: Spacing.md,
      borderRadius: Radius.sm,
    },
    scriptureText: { fontSize: FontSize.base, fontStyle: 'italic', lineHeight: FontSize.base * 1.6 },
    devBody: { fontSize: FontSize.base, lineHeight: FontSize.base * 1.7, marginBottom: Spacing.lg },
    devAuthor: { fontSize: FontSize.sm, marginBottom: Spacing.lg },
    prayerBtn: {
      paddingVertical: 14,
      borderRadius: Radius.full,
      alignItems: 'center',
    },
    prayerBtnText: { fontWeight: FontWeight.bold, fontSize: FontSize.base },

    weekHeader: { paddingHorizontal: Spacing.md, paddingVertical: 8 },
    weekHeaderText: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 1 },
    dayRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Spacing.md,
      paddingVertical: Spacing.sm,
      borderBottomWidth: StyleSheet.hairlineWidth,
      gap: Spacing.md,
    },
    checkCircle: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    dayInfo: { flex: 1 },
    dayLabel: { fontSize: FontSize.base, fontWeight: FontWeight.semibold },
    dayPassages: { fontSize: FontSize.sm },
  });
