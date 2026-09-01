import { View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { colors } from '@/constants';

type LogoProps = {
  size?: number;
  /** `inverse` usa o traco claro, para aplicacao sobre o azul-petroleo. */
  variant?: 'default' | 'inverse';
};

/**
 * Simbolo do NutriApp: uma folha minimalista inscrita no contorno de um prato,
 * com um ponto que representa o registro da refeicao.
 * Concentra os tres pilares da marca: alimentacao, equilibrio e tecnologia.
 */
export function Logo({ size = 64, variant = 'default' }: LogoProps) {
  const stroke = variant === 'inverse' ? colors.textInverse : colors.primary;
  const leaf = variant === 'inverse' ? colors.textInverse : colors.primary;

  return (
    <View accessibilityRole="image" accessibilityLabel="Logo do NutriApp">
      <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        {/* Contorno do prato */}
        <Circle cx={32} cy={32} r={27} stroke={stroke} strokeWidth={4.5} opacity={0.9} />
        {/* Folha */}
        <Path
          d="M33 48C19 44 14 29 21 16C35 20 45 32 39 47Z"
          fill={leaf}
          opacity={variant === 'inverse' ? 0.95 : 1}
        />
        {/* Nervura da folha */}
        <Path
          d="M23 19C29 28 32 37 33 47"
          stroke={variant === 'inverse' ? colors.primary : colors.background}
          strokeWidth={2.4}
          strokeLinecap="round"
        />
        {/* Ponto de registro */}
        <Circle cx={43} cy={21} r={5} fill={colors.secondary} />
      </Svg>
    </View>
  );
}
