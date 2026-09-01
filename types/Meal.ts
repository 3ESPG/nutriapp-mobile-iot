/** Categorias de refeicao previstas no MVP. */
export type MealCategory = 'breakfast' | 'lunch' | 'snack' | 'dinner';

export interface Meal {
  id: string;
  /** Nome curto da refeicao, ex.: "Iogurte com granola". */
  name: string;
  category: MealCategory;
  /** Data no formato ISO (YYYY-MM-DD). */
  date: string;
  /** Horario no formato HH:mm. */
  time: string;
  /** Observacoes opcionais informadas pelo usuario. */
  notes?: string;
}

/** Dados aceitos ao registrar uma nova refeicao. */
export type NewMeal = Omit<Meal, 'id'>;

export const MEAL_CATEGORY_LABELS: Record<MealCategory, string> = {
  breakfast: 'Cafe da manha',
  lunch: 'Almoco',
  snack: 'Lanche',
  dinner: 'Jantar',
};

export const MEAL_CATEGORY_ORDER: MealCategory[] = [
  'breakfast',
  'lunch',
  'snack',
  'dinner',
];
