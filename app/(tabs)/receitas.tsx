import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { Chip, EmptyState, RecipeCard, ScreenContainer } from '@/components';
import { colors, radius, spacing, typography } from '@/constants';
import { useRecipes } from '@/hooks';
import { RECIPE_TAG_LABELS, type RecipeTag } from '@/types';

const FILTERS: { key: RecipeTag | 'all'; label: string }[] = [
  { key: 'all', label: 'Todos' },
  { key: 'quick', label: RECIPE_TAG_LABELS.quick },
  { key: 'vegetarian', label: RECIPE_TAG_LABELS.vegetarian },
  { key: 'breakfast', label: RECIPE_TAG_LABELS.breakfast },
  { key: 'lunch', label: RECIPE_TAG_LABELS.lunch },
  { key: 'dinner', label: RECIPE_TAG_LABELS.dinner },
  { key: 'snack', label: RECIPE_TAG_LABELS.snack },
];

/** Catalogo de receitas com pesquisa e filtros simples. */
export default function ReceitasScreen() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<RecipeTag | 'all'>('all');
  const { results, toggleFavorite } = useRecipes(query, filter === 'all' ? undefined : filter);

  return (
    <ScreenContainer flush>
      <View style={styles.header}>
        <Text style={styles.title}>Receitas</Text>

        <View style={styles.search}>
          <Ionicons name="search-outline" size={18} color={colors.textMuted} />
          <TextInput
            placeholder="Buscar receita ou ingrediente..."
            placeholderTextColor={colors.textMuted}
            value={query}
            onChangeText={setQuery}
            style={styles.searchInput}
            returnKeyType="search"
          />
        </View>
      </View>

      <FlatList
        data={FILTERS}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filters}
        renderItem={({ item }) => (
          <Chip
            label={item.label}
            selected={filter === item.key}
            onPress={() => setFilter(item.key)}
          />
        )}
      />

      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            onPress={() => router.push(`/receita/${item.id}`)}
            onToggleFavorite={() => toggleFavorite(item.id)}
          />
        )}
        ListEmptyComponent={
          <EmptyState
            title="Nenhuma receita encontrada"
            message="Tente outro termo de busca ou remova os filtros aplicados."
            actionLabel="Limpar filtros"
            onActionPress={() => {
              setQuery('');
              setFilter('all');
            }}
          />
        }
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: spacing.lg, paddingTop: spacing.md },
  title: { ...typography.title, color: colors.text, marginBottom: spacing.md },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1.5,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    height: 48,
  },
  searchInput: { ...typography.body, flex: 1, marginLeft: spacing.sm, color: colors.text },
  filters: { paddingHorizontal: spacing.lg, paddingVertical: spacing.md },
  list: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xl },
});
