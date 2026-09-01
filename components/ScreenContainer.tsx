import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';
import { colors, spacing } from '@/constants';

type ScreenContainerProps = {
  children: ReactNode;
  /** Remove o padding horizontal padrao quando a tela usa listas de borda a borda. */
  flush?: boolean;
  edges?: Edge[];
  background?: string;
};

/** Base visual de todas as telas: fundo creme e area segura. */
export function ScreenContainer({
  children,
  flush = false,
  edges = ['top'],
  background = colors.background,
}: ScreenContainerProps) {
  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: background }]} edges={edges}>
      <View style={[styles.content, !flush && styles.padded]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: { flex: 1 },
  padded: { paddingHorizontal: spacing.lg },
});
