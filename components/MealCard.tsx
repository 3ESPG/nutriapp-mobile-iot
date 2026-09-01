import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, radius, shadow, spacing, typography } from '@/constants';
import { MEAL_CATEGORY_LABELS, type Meal, type MealCategory } from '@/types';

const CATEGORY_ICON: Record<MealCategory, keyof typeof Ionicons.glyphMap> = {
  breakfast: 'sunny-outline',
  lunch: 'restaurant-outline',
  snack: 'cafe-outline',
  dinner: 'moon-outline',
};

type MealCardProps = {
  meal: Meal;
  onPress?: () => void;
};

/** Card de uma refeicao registrada no diario. */
export function MealCard({ meal, onPress }: MealCardProps) {
  return (
    <Pressable
      accessibilityRole={onPress ? 'button' : undefined}
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && onPress && styles.pressed]}
    >
      <View style={styles.iconWrapper}>
        <Ionicons name={CATEGORY_ICON[meal.category]} size={20} color={colors.primary} />
      </View>
      <View style={styles.content}>
        <Text style={styles.header}>
          {meal.time} — {MEAL_CATEGORY_LABELS[meal.category]}
        </Text>
        <Text style={styles.name}>{meal.name}</Text>
        {Boolean(meal.notes) && <Text style={styles.notes}>{meal.notes}</Text>}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.sm + 4,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadow.card,
  },
  pressed: { opacity: 0.9 },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  content: { flex: 1 },
  header: { fontFamily: fonts.titleSemiBold, fontSize: 14, color: colors.primary },
  name: { ...typography.body, color: colors.text, marginTop: 2 },
  notes: { ...typography.caption, color: colors.textMuted, marginTop: spacing.xs },
});
