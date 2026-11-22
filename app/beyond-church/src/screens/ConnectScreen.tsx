import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { FontSize, FontWeight, Spacing, Radius } from '../theme';
import { CONTENT } from '../data/content';

type ConnectItem = {
  title: string;
  subtitle: string;
  icon: string;
  action: () => void;
};

export default function ConnectScreen() {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  const items: ConnectItem[] = [
    {
      title: "I'm New",
      subtitle: 'First time here? Let us know!',
      icon: '👋',
      action: () => Linking.openURL(CONTENT.CONNECT_FORM_URL),
    },
    {
      title: 'Connect Card',
      subtitle: 'Share your info or a prayer request',
      icon: '✉️',
      action: () => Linking.openURL(CONTENT.CONNECT_FORM_URL),
    },
    {
      title: 'Starting Point',
      subtitle: 'Learn more about Beyond Church',
      icon: '🗺️',
      action: () => Linking.openURL(`${CONTENT.WEBSITE_URL}/starting-point`),
    },
    {
      title: 'Groups',
      subtitle: 'Find a small group and get connected',
      icon: '👥',
      action: () => Linking.openURL(`${CONTENT.WEBSITE_URL}/groups`),
    },
    {
      title: 'Volunteer',
      subtitle: 'Serve on a team at Beyond Church',
      icon: '🙌',
      action: () => Linking.openURL(`${CONTENT.WEBSITE_URL}/serve`),
    },
    {
      title: 'Prayer Request',
      subtitle: 'Submit a prayer request to our team',
      icon: '🙏',
      action: () => Linking.openURL(`${CONTENT.CONNECT_FORM_URL}#prayer`),
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Connect</Text>
        <Text style={[styles.headerSub, { color: colors.textSecondary }]}>
          We'd love to hear from you.
        </Text>
      </View>

      {/* Connect Grid */}
      <View style={styles.grid}>
        {items.map((item) => (
          <TouchableOpacity
            key={item.title}
            onPress={item.action}
            style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}
          >
            <Text style={styles.cardIcon}>{item.icon}</Text>
            <Text style={[styles.cardTitle, { color: colors.text }]}>{item.title}</Text>
            <Text style={[styles.cardSub, { color: colors.textSecondary }]}>{item.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Church Info */}
      <View style={[styles.infoCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.infoTitle, { color: colors.text }]}>Beyond Church</Text>
        <Text style={[styles.infoLine, { color: colors.textSecondary }]}>Alma, Arkansas</Text>
        <Text style={[styles.infoLine, { color: colors.textSecondary }]}>Sundays · 9:30 AM & 11:00 AM</Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:info@beyondchurch.org')}>
          <Text style={[styles.infoLink, { color: colors.accent }]}>info@beyondchurch.org</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://maps.apple.com/?q=Beyond+Church+Alma+AR')}>
          <Text style={[styles.infoLink, { color: colors.accent }]}>Get Directions →</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const makeStyles = (colors: ReturnType<typeof useTheme>['colors']) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    content: { paddingBottom: Spacing.xxl },

    header: {
      paddingHorizontal: Spacing.md,
      paddingTop: Spacing.lg,
      paddingBottom: Spacing.sm,
    },
    headerTitle: { fontSize: FontSize.xxl, fontWeight: FontWeight.black },
    headerSub: { fontSize: FontSize.base },

    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: Spacing.md,
      gap: Spacing.sm,
    },
    card: {
      width: '47%',
      padding: Spacing.md,
      borderRadius: Radius.lg,
      borderWidth: 1,
      gap: 4,
    },
    cardIcon: { fontSize: 28, marginBottom: 4 },
    cardTitle: { fontSize: FontSize.base, fontWeight: FontWeight.bold },
    cardSub: { fontSize: FontSize.xs },

    infoCard: {
      margin: Spacing.md,
      marginTop: Spacing.lg,
      padding: Spacing.md,
      borderRadius: Radius.lg,
      borderWidth: 1,
      gap: 6,
    },
    infoTitle: { fontSize: FontSize.md, fontWeight: FontWeight.black },
    infoLine: { fontSize: FontSize.sm },
    infoLink: { fontSize: FontSize.sm, fontWeight: FontWeight.semibold },
  });
