import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, radius, spacing, typography } from '@/constants';

type StatCardProps = {
  value: string | number;
  label: string;
  tone?: 'primary' | 'secondary' | 'success' | 'accent';
};

/** Indicador numerico usado no resumo semanal. */
export function StatCard({ value, label, tone = 'primary' }: StatCardProps) {
  return (
    <View style={[styles.card, styles[tone]]}>
      <Text style={[styles.value, styles[`${tone}Text`]]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginRight: spacing.sm,
    minHeight: 84,
    justifyContent: 'center',
  },
  value: { fontFamily: fonts.titleBold, fontSize: 24 },
  label: { ...typography.caption, color: colors.text, marginTop: 2 },

  primary: { backgroundColor: colors.primaryLight },
  primaryText: { color: colors.primary },
  secondary: { backgroundColor: colors.secondaryLight },
  secondaryText: { color: colors.secondary },
  success: { backgroundColor: colors.successLight },
  successText: { color: colors.success },
  accent: { backgroundColor: colors.accentLight },
  accentText: { color: '#B98D14' },
});
