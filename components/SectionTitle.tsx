import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, spacing, typography } from '@/constants';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onActionPress?: () => void;
};

/** Cabecalho de secao com acao opcional a direita. */
export function SectionTitle({ title, subtitle, actionLabel, onActionPress }: SectionTitleProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.texts}>
        <Text style={styles.title}>{title}</Text>
        {Boolean(subtitle) && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      {Boolean(actionLabel) && (
        <Pressable accessibilityRole="button" onPress={onActionPress} hitSlop={8}>
          <Text style={styles.action}>{actionLabel}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  texts: { flex: 1, paddingRight: spacing.sm },
  title: { ...typography.section, fontSize: 20, color: colors.text },
  subtitle: { ...typography.caption, color: colors.textMuted, marginTop: 2 },
  action: { fontFamily: fonts.titleSemiBold, fontSize: 14, color: colors.secondary },
});
