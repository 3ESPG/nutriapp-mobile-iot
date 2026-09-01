import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { EmptyState, MealCard, ScreenContainer } from '@/components';
import { colors, fonts, radius, spacing, typography } from '@/constants';
import { useMeals } from '@/hooks';
import { friendlyDate, lastSevenDays, formatShortDate, today, weekdayInitial } from '@/utils';

/** Diario alimentar — refeicoes registradas por data. */
export default function DiarioScreen() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(today());
  const { mealsOfDay } = useMeals(selectedDate);
  // Hoje aparece primeiro para que o dia atual esteja sempre visivel na faixa.
  const days = [...lastSevenDays()].reverse();

  return (
    <ScreenContainer flush>
      <View style={styles.header}>
        <Text style={styles.title}>Meu Diario</Text>
        <Text style={styles.subtitle}>{friendlyDate(selectedDate)}</Text>
      </View>

      <FlatList
        data={days}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.datesList}
        contentContainerStyle={styles.dates}
        renderItem={({ item }) => {
          const selected = item === selectedDate;
          return (
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ selected }}
              onPress={() => setSelectedDate(item)}
              style={[styles.dateChip, selected && styles.dateChipSelected]}
            >
              <Text style={[styles.dateWeekday, selected && styles.dateTextSelected]}>
                {weekdayInitial(item)}
              </Text>
              <Text style={[styles.dateNumber, selected && styles.dateTextSelected]}>
                {formatShortDate(item)}
              </Text>
            </Pressable>
          );
        }}
      />

      <FlatList
        data={mealsOfDay}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <MealCard meal={item} />}
        ListEmptyComponent={
          <EmptyState
            title="Nenhuma refeicao registrada"
            message="Registre o que voce comeu para acompanhar sua rotina alimentar."
            actionLabel="Registrar refeicao"
            onActionPress={() => router.push('/refeicao/adicionar')}
          />
        }
      />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Adicionar refeicao"
        onPress={() => router.push('/refeicao/adicionar')}
        style={({ pressed }) => [styles.fab, pressed && styles.fabPressed]}
      >
        <Ionicons name="add" size={28} color={colors.textInverse} />
      </Pressable>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: spacing.lg, paddingTop: spacing.md },
  title: { ...typography.title, color: colors.text },
  subtitle: { ...typography.body, color: colors.textMuted, marginTop: spacing.xs },
  datesList: { flexGrow: 0 },
  dates: { paddingHorizontal: spacing.lg, paddingVertical: spacing.md },
  dateChip: {
    width: 56,
    height: 60,
    justifyContent: 'center',
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  dateChipSelected: { backgroundColor: colors.primary, borderColor: colors.primary },
  dateWeekday: { fontFamily: fonts.titleSemiBold, fontSize: 14, color: colors.text },
  dateNumber: { ...typography.caption, color: colors.textMuted, marginTop: 2 },
  dateTextSelected: { color: colors.textInverse },
  list: { paddingHorizontal: spacing.lg, paddingBottom: 96 },
  fab: {
    position: 'absolute',
    right: spacing.lg,
    bottom: spacing.lg,
    width: 56,
    height: 56,
    borderRadius: radius.pill,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#22313A',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
  },
  fabPressed: { opacity: 0.9 },
});
