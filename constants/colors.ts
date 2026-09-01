/**
 * Paleta oficial do NutriApp — CP4.
 * As cores seguem a identidade visual definida na documentacao de marca.
 */
export const colors = {
  /** Azul Nutri — cor primaria, botoes, navegacao e identidade. */
  primary: '#1F6F78',
  primaryDark: '#175258',
  primaryLight: '#E4F0F1',

  /** Coral Vital — CTAs, destaques e elementos interativos. */
  secondary: '#FF8A65',
  secondaryLight: '#FFE7DE',

  /** Creme Natural — fundo principal. */
  background: '#FFF8F2',
  surface: '#FFFFFF',

  /** Grafite — textos principais. */
  text: '#22313A',
  textMuted: '#6B7B84',
  textInverse: '#FFFFFF',

  /** Verde Equilibrio — confirmacoes e estados positivos. */
  success: '#79B473',
  successLight: '#EAF4E9',

  /** Amarelo Energia — indicadores e pequenos destaques. */
  accent: '#F4C95D',
  accentLight: '#FDF3DC',

  border: '#EFE3D8',
  overlay: 'rgba(34, 49, 58, 0.45)',
  danger: '#D9534F',
} as const;

export type ColorName = keyof typeof colors;
