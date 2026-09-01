import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, EmptyState, ScreenContainer } from '@/components';
import { colors, fonts, radius, spacing, typography } from '@/constants';
import { useRecipes } from '@/hooks';
import { RECIPE_DIFFICULTY_LABELS } from '@/types';
import { formatDuration, formatServings } from '@/utils';

/** Detalhes da receita: ingredientes, modo de preparo e informacoes adicionais. */
export default function ReceitaDetalheScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { getById, toggleFavorite } = useRecipes();
  const [imageFailed, setImageFailed] = useState(false);

  const recipe = getById(String(id));

  if (!recipe) {
    return (
      <ScreenContainer>
        <EmptyState
          title="Receita nao encontrada"
          message="Talvez ela tenha sido removida do catalogo."
          actionLabel="Voltar"
          onActionPress={() => router.back()}
        />
      </ScreenContainer>
    );
  }

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.hero}>
          {imageFailed ? (
            <View style={styles.heroFallback}>
              <Ionicons name="restaurant-outline" size={40} color={colors.primary} />
            </View>
          ) : (
            <Image
              source={{ uri: recipe.image }}
              style={styles.heroImage}
              onError={() => setImageFailed(true)}
              accessibilityIgnoresInvertColors
            />
          )}

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Voltar"
            onPress={() => router.back()}
            style={[styles.circleButton, styles.back]}
          >
            <Ionicons name="arrow-back" size={20} color={colors.text} />
          </Pressable>
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>{recipe.title}</Text>
          <Text style={styles.description}>{recipe.description}</Text>

          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Ionicons name="time-outline" size={16} color={colors.primary} />
              <Text style={styles.metaText}>{formatDuration(recipe.preparationTime)}</Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="speedometer-outline" size={16} color={colors.primary} />
              <Text style={styles.metaText}>{RECIPE_DIFFICULTY_LABELS[recipe.difficulty]}</Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="people-outline" size={16} color={colors.primary} />
              <Text style={styles.metaText}>{formatServings(recipe.servings)}</Text>
            </View>
          </View>

          <Button
            label={recipe.favorite ? 'Remover dos favoritos' : 'Favoritar'}
            variant={recipe.favorite ? 'outline' : 'secondary'}
            onPress={() => toggleFavorite(recipe.id)}
          />

          <Text style={styles.sectionTitle}>Ingredientes</Text>
          {recipe.ingredients.map((ingredient) => (
            <View key={ingredient} style={styles.listItem}>
              <View style={styles.bullet} />
              <Text style={styles.listText}>{ingredient}</Text>
            </View>
          ))}

          <Text style={styles.sectionTitle}>Modo de preparo</Text>
          {recipe.steps.map((step, index) => (
            <View key={step} style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.listText}>{step}</Text>
            </View>
          ))}

          {Boolean(recipe.nutrition) && (
            <>
              <Text style={styles.sectionTitle}>Informacoes adicionais</Text>
              <View style={styles.nutrition}>
                <NutritionItem label="Energia" value={`${recipe.nutrition?.energy} kcal`} />
                <NutritionItem label="Proteinas" value={`${recipe.nutrition?.protein} g`} />
                <NutritionItem label="Carboidratos" value={`${recipe.nutrition?.carbs} g`} />
                <NutritionItem label="Gorduras" value={`${recipe.nutrition?.fat} g`} />
              </View>
              <Text style={styles.disclaimer}>
                Informacoes aproximadas e de carater informativo. Nao substituem orientacao
                profissional.
              </Text>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

function NutritionItem({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.nutritionItem}>
      <Text style={styles.nutritionValue}>{value}</Text>
      <Text style={styles.nutritionLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  scroll: { paddingBottom: spacing.xl },
  hero: { height: 260, backgroundColor: colors.primaryLight },
  heroImage: { width: '100%', height: '100%' },
  heroFallback: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  circleButton: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: { top: spacing.xl + spacing.sm, left: spacing.lg },
  body: {
    backgroundColor: colors.background,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    marginTop: -spacing.lg,
    padding: spacing.lg,
  },
  title: { ...typography.title, color: colors.text },
  description: { ...typography.body, color: colors.textMuted, marginTop: spacing.sm },
  metaRow: { flexDirection: 'row', marginVertical: spacing.lg },
  metaItem: { flexDirection: 'row', alignItems: 'center', marginRight: spacing.lg },
  metaText: { ...typography.caption, color: colors.text, marginLeft: spacing.xs },
  sectionTitle: {
    ...typography.section,
    fontSize: 20,
    color: colors.text,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },
  listItem: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: spacing.sm },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.secondary,
    marginTop: 9,
    marginRight: spacing.sm + 2,
  },
  listText: { ...typography.body, color: colors.text, flex: 1 },
  stepItem: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: spacing.md },
  stepNumber: {
    width: 26,
    height: 26,
    borderRadius: radius.pill,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm + 2,
  },
  stepNumberText: { fontFamily: fonts.titleSemiBold, fontSize: 13, color: colors.primary },
  nutrition: { flexDirection: 'row', justifyContent: 'space-between' },
  nutritionItem: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.md,
    marginRight: spacing.sm,
    alignItems: 'center',
  },
  nutritionValue: { fontFamily: fonts.titleBold, fontSize: 15, color: colors.text },
  nutritionLabel: { ...typography.caption, color: colors.textMuted, marginTop: 2 },
  disclaimer: { ...typography.caption, color: colors.textMuted, marginTop: spacing.md },
});
