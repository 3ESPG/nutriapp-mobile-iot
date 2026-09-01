import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Logo } from '@/components';
import { colors, fonts, spacing, typography } from '@/constants';

/**
 * Splash Screen — apresenta a marca durante a inicializacao
 * e encaminha o usuario para o fluxo de acesso.
 */
export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => router.replace('/login'), 1800);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <View style={styles.container}>
      <Logo size={104} variant="inverse" />
      <Text style={styles.brand}>NutriApp</Text>
      <Text style={styles.slogan}>Organize. Descubra. Alimente-se melhor.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  brand: {
    fontFamily: fonts.titleBold,
    fontSize: 34,
    color: colors.textInverse,
    marginTop: spacing.lg,
  },
  slogan: {
    ...typography.body,
    color: colors.textInverse,
    opacity: 0.85,
    marginTop: spacing.sm,
    textAlign: 'center',
  },
});
