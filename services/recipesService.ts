import { recipes as mockRecipes } from '@/mocks';
import type { Recipe, RecipeTag } from '@/types';
import { createStore } from './store';

const store = createStore<Recipe[]>([...mockRecipes]);

function normalize(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export const recipesService = {
  subscribe: store.subscribe,

  listAll(): Recipe[] {
    return store.get();
  },

  getById(id: string): Recipe | undefined {
    return store.get().find((recipe) => recipe.id === id);
  },

  /** Pesquisa por titulo, descricao ou ingrediente, combinada com o filtro ativo. */
  search(query: string, tag?: RecipeTag): Recipe[] {
    const term = normalize(query);
    return store.get().filter((recipe) => {
      const matchesTag = !tag || recipe.tags.includes(tag);
      if (!matchesTag) return false;
      if (!term) return true;
      const haystack = normalize(
        [recipe.title, recipe.description, ...recipe.ingredients].join(' '),
      );
      return haystack.includes(term);
    });
  },

  listFavorites(): Recipe[] {
    return store.get().filter((recipe) => recipe.favorite);
  },

  toggleFavorite(id: string): void {
    store.set(
      store.get().map((recipe) =>
        recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe,
      ),
    );
  },

  /**
   * Sugestao exibida na Home.
   * No MVP a escolha considera as preferencias basicas; a personalizacao
   * a partir do historico esta prevista como evolucao futura.
   */
  suggestion(preferVegetarian = false, preferQuick = false): Recipe {
    const list = store.get();
    const match = list.find(
      (recipe) =>
        (!preferVegetarian || recipe.tags.includes('vegetarian')) &&
        (!preferQuick || recipe.preparationTime <= 25),
    );
    return match ?? list[0];
  },
};
