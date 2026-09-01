import { useCallback, useMemo, useSyncExternalStore } from 'react';
import { mealsService } from '@/services';
import type { Meal, NewMeal } from '@/types';

/**
 * Expoe o diario alimentar para as telas.
 * Enquanto os dados vem de mocks em memoria, o hook ja isola as telas
 * da origem real dos dados prevista para o CP6.
 */
export function useMeals(date?: string) {
  // `snapshot` devolve sempre a mesma referencia enquanto nada muda;
  // ordenacoes e filtros ficam em useMemo para nao recriar arrays a cada render.
  const source = useSyncExternalStore(
    mealsService.subscribe,
    mealsService.snapshot,
    mealsService.snapshot,
  );

  const meals = useMemo(
    () =>
      [...source].sort((a, b) =>
        a.date === b.date ? b.time.localeCompare(a.time) : b.date.localeCompare(a.date),
      ),
    [source],
  );

  const mealsOfDay = useMemo(
    () =>
      date
        ? source.filter((meal) => meal.date === date).sort((a, b) => a.time.localeCompare(b.time))
        : [],
    [source, date],
  );

  const categoriesOfDay = useMemo(
    () => Array.from(new Set(mealsOfDay.map((meal) => meal.category))),
    [mealsOfDay],
  );

  const datesWithMeals = useMemo(
    () => Array.from(new Set(source.map((meal) => meal.date))).sort((a, b) => b.localeCompare(a)),
    [source],
  );

  const weeklyDistribution = useMemo(() => mealsService.weeklyDistribution(), [source]);

  const addMeal = useCallback((meal: NewMeal): Meal => mealsService.add(meal), []);
  const removeMeal = useCallback((id: string) => mealsService.remove(id), []);

  return {
    meals,
    mealsOfDay,
    categoriesOfDay,
    datesWithMeals,
    weeklyDistribution,
    addMeal,
    removeMeal,
  };
}
