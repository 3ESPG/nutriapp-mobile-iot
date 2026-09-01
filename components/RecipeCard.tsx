import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, radius, shadow, spacing, typography } from '@/constants';
import { RECIPE_DIFFICULTY_LABELS, type Recipe } from '@/types';
import { formatDuration } from '@/utils';

type RecipeCardProps = {
  recipe: Recipe;
  onPress?: () => void;
  onToggleFavorite?: () => void;
  /** `horizontal` e usado nos carrosseis da Home. */
  layout?: 'list' | 'horizontal';
};

/** Card de receita com foto, tempo, dificuldade e favorito. */
export function RecipeCard({
  recipe,
  onPress,
  onToggleFavorite,
  layout = 'list',
}: RecipeCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const horizontal = layout === 'horizontal';

  // O botao de favoritar fica fora do Pressable do card: botoes aninhados
  // geram markup invalido e prejudicam a leitura por tecnologias assistivas.
  return (
    <View style={[styles.card, horizontal && styles.cardHorizontal]}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Receita ${recipe.title}`}
        onPress={onPress}
        style={({ pressed }) => [pressed && styles.pressed]}
      >
        <View style={[styles.imageWrapper, horizontal && styles.imageWrapperHorizontal]}>
          {imageFailed ? (
            <View style={styles.imageFallback}>
              <Ionicons name="restaurant-outline" size={28} color={colors.primary} />
            </View>
          ) : (
            <Image
              source={{ uri: recipe.image }}
              style={styles.image}
              onError={() => setImageFailed(true)}
              accessibilityIgnoresInvertColors
            />
          )}
        </View>

        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={2}>
            {recipe.title}
          </Text>
          <Text style={styles.meta}>
            {formatDuration(recipe.preparationTime)} • {RECIPE_DIFFICULTY_LABELS[recipe.difficulty]}
          </Text>
        </View>
      </Pressable>

      {Boolean(onToggleFavorite) && (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={recipe.favorite ? 'Remover dos favoritos' : 'Favoritar receita'}
          onPress={onToggleFavorite}
          hitSlop={8}
          style={styles.favorite}
        >
          <Ionicons
            name={recipe.favorite ? 'heart' : 'heart-outline'}
            size={18}
            color={recipe.favorite ? colors.secondary : colors.text}
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    overflow: 'hidden',
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadow.card,
  },
  cardHorizontal: { width: 210, marginRight: spacing.md, marginBottom: 0 },
  pressed: { opacity: 0.92 },
  imageWrapper: { height: 150, backgroundColor: colors.primaryLight },
  imageWrapperHorizontal: { height: 120 },
  image: { width: '100%', height: '100%' },
  imageFallback: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  favorite: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    width: 32,
    height: 32,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: { padding: spacing.md },
  title: { fontFamily: fonts.titleSemiBold, fontSize: 16, lineHeight: 21, color: colors.text },
  meta: { ...typography.caption, color: colors.textMuted, marginTop: spacing.xs },
});
