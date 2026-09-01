/**
 * Tipografia do NutriApp.
 * Manrope: titulos, numeros, cards, botoes e destaques.
 * Inter: textos, descricoes, formularios e informacoes menores.
 */
export const fonts = {
  titleBold: 'Manrope_700Bold',
  titleSemiBold: 'Manrope_600SemiBold',
  titleMedium: 'Manrope_500Medium',
  body: 'Inter_400Regular',
  bodyMedium: 'Inter_500Medium',
  bodySemiBold: 'Inter_600SemiBold',
} as const;

/** Hierarquia sugerida na documentacao de identidade visual. */
export const typography = {
  title: { fontFamily: fonts.titleBold, fontSize: 28, lineHeight: 34 },
  section: { fontFamily: fonts.titleSemiBold, fontSize: 22, lineHeight: 28 },
  subtitle: { fontFamily: fonts.titleMedium, fontSize: 18, lineHeight: 24 },
  body: { fontFamily: fonts.body, fontSize: 16, lineHeight: 24 },
  caption: { fontFamily: fonts.body, fontSize: 13, lineHeight: 18 },
  button: { fontFamily: fonts.titleSemiBold, fontSize: 16, lineHeight: 20 },
} as const;
