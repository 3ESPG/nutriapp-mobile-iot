export interface DietaryPreferences {
  vegetarian: boolean;
  lactoseFree: boolean;
  glutenFree: boolean;
  quickMealsOnly: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  preferences: DietaryPreferences;
}

/** Resumo semanal simples exibido na Home e no Perfil. */
export interface WeeklySummary {
  mealsLogged: number;
  favoriteRecipes: number;
  daysWithDiary: number;
}
