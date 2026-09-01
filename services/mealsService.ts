import { meals as mockMeals } from '@/mocks';
import type { Meal, MealCategory, NewMeal, WeeklySummary } from '@/types';
import { lastSevenDays, today } from '@/utils/date';
import { createStore } from './store';

const store = createStore<Meal[]>([...mockMeals]);

function sortByTime(list: Meal[]): Meal[] {
  return [...list].sort((a, b) => a.time.localeCompare(b.time));
}

export const mealsService = {
  subscribe: store.subscribe,

  /**
   * Referencia estavel da lista atual.
   * Usada como `getSnapshot` do useSyncExternalStore: devolver um novo array
   * a cada chamada faria o React entrar em um ciclo infinito de renderizacao.
   */
  snapshot(): Meal[] {
    return store.get();
  },

  /** Todas as refeicoes, das mais recentes para as mais antigas. */
  listAll(): Meal[] {
    return [...store.get()].sort((a, b) =>
      a.date === b.date ? b.time.localeCompare(a.time) : b.date.localeCompare(a.date),
    );
  },

  /** Refeicoes de uma data especifica, em ordem cronologica. */
  listByDate(date: string): Meal[] {
    return sortByTime(store.get().filter((meal) => meal.date === date));
  },

  /** Datas com registro, das mais recentes para as mais antigas. */
  listDatesWithMeals(): string[] {
    return Array.from(new Set(store.get().map((meal) => meal.date))).sort((a, b) =>
      b.localeCompare(a),
    );
  },

  /** Categorias ja registradas em uma data — alimenta o card "Seu dia". */
  categoriesForDate(date: string): MealCategory[] {
    return Array.from(new Set(this.listByDate(date).map((meal) => meal.category)));
  },

  add(meal: NewMeal): Meal {
    const created: Meal = { ...meal, id: `m${Date.now()}` };
    store.set([...store.get(), created]);
    return created;
  },

  remove(id: string): void {
    store.set(store.get().filter((meal) => meal.id !== id));
  },

  /** Resumo dos ultimos sete dias, incluindo o dia atual. */
  weeklySummary(favoriteRecipes: number): WeeklySummary {
    const week = new Set(lastSevenDays());
    const inWeek = store.get().filter((meal) => week.has(meal.date));
    return {
      mealsLogged: inWeek.length,
      favoriteRecipes,
      daysWithDiary: new Set(inWeek.map((meal) => meal.date)).size,
    };
  },

  /** Quantidade de registros por dia nos ultimos sete dias. */
  weeklyDistribution(): { date: string; count: number }[] {
    const all = store.get();
    return lastSevenDays().map((date) => ({
      date,
      count: all.filter((meal) => meal.date === date).length,
    }));
  },

  todayDate(): string {
    return today();
  },
};
