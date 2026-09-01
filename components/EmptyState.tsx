import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, typography } from '@/constants';
import { Button } from './Button';

type EmptyStateProps = {
  title: string;
  message: string;
  actionLabel?: string;
  onActionPress?: () => void;
};

/** Estado vazio reutilizado no diario, na busca e nos favoritos. */
export function EmptyState({ title, message, actionLabel, onActionPress }: EmptyStateProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>:)</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      {Boolean(actionLabel) && (
        <Button
          label={actionLabel as string}
          onPress={onActionPress}
          variant="outline"
          fullWidth={false}
          style={styles.action}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { alignItems: 'center', paddingVertical: spacing.xl, paddingHorizontal: spacing.lg },
  badge: {
    width: 56,
    height: 56,
    borderRadius: radius.pill,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  badgeText: { ...typography.subtitle, color: colors.primary },
  title: { ...typography.subtitle, color: colors.text, textAlign: 'center' },
  message: {
    ...typography.body,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  action: { marginTop: spacing.md },
});
