import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, RecipeCard, ScreenContainer, SectionTitle } from '@/components';
import { colors, fonts, radius, shadow, spacing, typography } from '@/constants';
import { useMeals, useRecipes } from '@/hooks';
import { currentUser } from '@/mocks';
import { MEAL_CATEGORY_LABELS, MEAL_CATEGORY_ORDER } from '@/types';
import { firstName, formatDuration, friendlyDate, today } from '@/utils';

/** Home — painel principal com o resumo do dia e atalhos. */
export default function HomeScreen() {
  const router = useRouter();
  const date = today();
  const { categoriesOfDay } = useMeals(date);
  const { recipes, toggleFavorite } = useRecipes();

  const suggestion = recipes.find((recipe) =>
    currentUser.preferences.quickMealsOnly ? recipe.preparationTime <= 25 : true,
  ) ?? recipes[0];

  const exploreList = recipes.filter((recipe) => recipe.id !== suggestion?.id).slice(0, 6);

  return (
    <ScreenContainer flush>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.padded}>
          <Text style={styles.greeting}>Ola, {firstName(currentUser.name)}!</Text>
          <Text style={styles.question}>Como esta sua alimentacao hoje?</Text>

          <View style={styles.dayCard}>
            <View style={styles.dayHeader}>
              <Text style={styles.dayTitle}>Seu dia</Text>
              <Text style={styles.dayDate}>{friendlyDate(date)}</Text>
            </View>

            {MEAL_CATEGORY_ORDER.map((category) => {
              const done = categoriesOfDay.includes(category);
              return (
                <View key={category} style={styles.dayRow}>
                  <Text style={styles.dayLabel}>{MEAL_CATEGORY_LABELS[category]}</Text>
                  {done ? (
                    <View style={styles.doneBadge}>
                      <Ionicons name="checkmark" size={14} color={colors.success} />
                      <Text style={styles.doneText}>registrado</Text>
                    </View>
                  ) : (
                    <Text style={styles.pending}>—</Text>
                  )}
                </View>
              );
            })}

            <Button
              label="+ Registrar refeicao"
              variant="secondary"
              onPress={() => router.push('/refeicao/adicionar')}
              style={styles.dayCta}
            />
          </View>
        </View>

        {Boolean(suggestion) && (
          <View style={styles.padded}>
            <SectionTitle
              title="Sugestao para voce"
              subtitle="Baseada nas suas preferencias basicas"
            />
            <Pressable
              accessibilityRole="button"
              onPress={() => router.push(`/receita/${suggestion.id}`)}
              style={styles.suggestionCard}
            >
              <View style={styles.suggestionTexts}>
                <Text style={styles.suggestionTitle}>{suggestion.title}</Text>
                <Text style={styles.suggestionMeta}>
                  {formatDuration(suggestion.preparationTime)} • Facil
                </Text>
                <Text style={styles.suggestionLink}>Ver receita</Text>
              </View>
              <View style={styles.suggestionIcon}>
                <Ionicons name="sparkles-outline" size={24} color={colors.primary} />
              </View>
            </Pressable>
          </View>
        )}

        <View style={styles.paddedTitle}>
          <SectionTitle
            title="Continue explorando"
            actionLabel="Ver todas"
            onActionPress={() => router.push('/receitas')}
          />
        </View>
        <FlatList
          data={exploreList}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carousel}
          renderItem={({ item }) => (
            <RecipeCard
              recipe={item}
              layout="horizontal"
              onPress={() => router.push(`/receita/${item.id}`)}
              onToggleFavorite={() => toggleFavorite(item.id)}
            />
          )}
        />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: { paddingTop: spacing.md, paddingBottom: spacing.xl },
  padded: { paddingHorizontal: spacing.lg, marginBottom: spacing.lg },
  paddedTitle: { paddingHorizontal: spacing.lg },
  greeting: { ...typography.title, color: colors.text },
  question: { ...typography.body, color: colors.textMuted, marginTop: spacing.xs },

  dayCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginTop: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadow.card,
  },
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  dayTitle: { ...typography.section, fontSize: 20, color: colors.text },
  dayDate: { ...typography.caption, color: colors.textMuted },
  dayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
  },
  dayLabel: { ...typography.body, color: colors.text },
  doneBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.successLight,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radius.pill,
  },
  doneText: { ...typography.caption, color: colors.success, marginLeft: 4 },
  pending: { ...typography.body, color: colors.textMuted },
  dayCta: { marginTop: spacing.md },

  suggestionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
    borderRadius: radius.xl,
    padding: spacing.lg,
  },
  suggestionTexts: { flex: 1 },
  suggestionTitle: { fontFamily: fonts.titleBold, fontSize: 18, color: colors.text },
  suggestionMeta: { ...typography.caption, color: colors.textMuted, marginTop: 2 },
  suggestionLink: { fontFamily: fonts.titleSemiBold, fontSize: 14, color: colors.primary, marginTop: spacing.sm },
  suggestionIcon: {
    width: 48,
    height: 48,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carousel: { paddingHorizontal: spacing.lg, paddingBottom: spacing.sm },
});
