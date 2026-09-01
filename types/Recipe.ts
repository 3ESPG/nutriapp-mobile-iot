export type RecipeDifficulty = 'easy' | 'medium';

/** Filtros simples previstos para o catalogo de receitas. */
export type RecipeTag =
  | 'quick'
  | 'vegetarian'
  | 'breakfast'
  | 'lunch'
  | 'dinner'
  | 'snack';

export interface NutritionInfo {
  /** Energia em kcal por porcao. */
  energy: number;
  /** Gramas por porcao. */
  protein: number;
  carbs: number;
  fat: number;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  /** Tempo estimado de preparo em minutos. */
  preparationTime: number;
  difficulty: RecipeDifficulty;
  servings: number;
  tags: RecipeTag[];
  ingredients: string[];
  steps: string[];
  /** Informacoes aproximadas, de carater informativo. */
  nutrition?: NutritionInfo;
  favorite: boolean;
}

export const RECIPE_TAG_LABELS: Record<RecipeTag, string> = {
  quick: 'Rapidas',
  vegetarian: 'Vegetarianas',
  breakfast: 'Cafe da manha',
  lunch: 'Almoco',
  dinner: 'Jantar',
  snack: 'Lanche',
};

export const RECIPE_DIFFICULTY_LABELS: Record<RecipeDifficulty, string> = {
  easy: 'Facil',
  medium: 'Medio',
};
