import { useCallback, useMemo, useSyncExternalStore } from 'react';
import { recipesService } from '@/services';
import type { RecipeTag } from '@/types';

/** Catalogo de receitas com pesquisa, filtros e favoritos. */
export function useRecipes(query = '', tag?: RecipeTag) {
  const all = useSyncExternalStore(
    recipesService.subscribe,
    () => recipesService.listAll(),
    () => recipesService.listAll(),
  );

  const results = useMemo(() => recipesService.search(query, tag), [all, query, tag]);
  const favorites = useMemo(() => all.filter((recipe) => recipe.favorite), [all]);

  const toggleFavorite = useCallback((id: string) => recipesService.toggleFavorite(id), []);
  const getById = useCallback((id: string) => recipesService.getById(id), [all]);

  return { recipes: all, results, favorites, toggleFavorite, getById };
}
