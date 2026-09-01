import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, ScreenContainer, SectionTitle, StatCard } from '@/components';
import { colors, fonts, radius, shadow, spacing, typography } from '@/constants';
import { useMeals, useRecipes } from '@/hooks';
import { currentUser } from '@/mocks';
import { mealsService } from '@/services';
import { pluralize } from '@/utils';

const PREFERENCES: { icon: keyof typeof Ionicons.glyphMap; label: string }[] = [
  { icon: 'leaf-outline', label: 'Preferencias alimentares' },
  { icon: 'heart-outline', label: 'Receitas favoritas' },
  { icon: 'settings-outline', label: 'Configuracoes' },
  { icon: 'notifications-outline', label: 'Notificacoes' },
];

/** Perfil e progresso — resumo semanal e preferencias. */
export default function PerfilScreen() {
  const router = useRouter();
  const { favorites } = useRecipes();
  const { weeklyDistribution } = useMeals();
  const summary = mealsService.weeklySummary(favorites.length);
  const maxCount = Math.max(1, ...weeklyDistribution.map((day) => day.count));

  const notImplemented = (label: string) =>
    Alert.alert(label, 'Funcionalidade prevista para as proximas etapas do projeto.');

  return (
    <ScreenContainer flush>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.padded}>
          <Text style={styles.title}>Meu Perfil</Text>

          <View style={styles.identity}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {currentUser.name
                  .split(' ')
                  .map((part) => part.charAt(0))
                  .slice(0, 2)
                  .join('')}
              </Text>
            </View>
            <View style={styles.identityTexts}>
              <Text style={styles.name}>{currentUser.name}</Text>
              <Text style={styles.email}>{currentUser.email}</Text>
            </View>
          </View>
        </View>

        <View style={styles.padded}>
          <SectionTitle title="Minha semana" subtitle="Ultimos sete dias" />
          <View style={styles.stats}>
            <StatCard value={summary.mealsLogged} label="refeicoes registradas" tone="primary" />
            <StatCard value={summary.favoriteRecipes} label="receitas favoritadas" tone="secondary" />
            <StatCard value={summary.daysWithDiary} label="dias com diario" tone="success" />
          </View>

          <View style={styles.chartCard}>
            <Text style={styles.chartTitle}>
              Distribuicao dos registros — {pluralize(summary.mealsLogged, 'registro', 'registros')}
            </Text>
            <View style={styles.chart}>
              {weeklyDistribution.map((day) => (
                <View key={day.date} style={styles.chartColumn}>
                  <View style={styles.barTrack}>
                    <View
                      style={[
                        styles.barFill,
                        { height: `${Math.round((day.count / maxCount) * 100)}%` },
                      ]}
                    />
                  </View>
                  <Text style={styles.barValue}>{day.count}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.padded}>
          <SectionTitle title="Preferencias" />
          <View style={styles.menu}>
            {PREFERENCES.map((item, index) => (
              <Pressable
                key={item.label}
                accessibilityRole="button"
                onPress={() =>
                  item.label === 'Receitas favoritas'
                    ? router.push('/receitas')
                    : notImplemented(item.label)
                }
                style={[styles.menuRow, index < PREFERENCES.length - 1 && styles.menuDivider]}
              >
                <Ionicons name={item.icon} size={20} color={colors.primary} />
                <Text style={styles.menuLabel}>{item.label}</Text>
                <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
              </Pressable>
            ))}
          </View>

          <Button
            label="Editar perfil"
            variant="outline"
            onPress={() => notImplemented('Editar perfil')}
            style={styles.edit}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: { paddingTop: spacing.md, paddingBottom: spacing.xl },
  padded: { paddingHorizontal: spacing.lg, marginBottom: spacing.lg },
  title: { ...typography.title, color: colors.text },
  identity: { flexDirection: 'row', alignItems: 'center', marginTop: spacing.lg },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { fontFamily: fonts.titleBold, fontSize: 22, color: colors.textInverse },
  identityTexts: { marginLeft: spacing.md, flex: 1 },
  name: { ...typography.section, fontSize: 20, color: colors.text },
  email: { ...typography.caption, color: colors.textMuted, marginTop: 2 },

  stats: { flexDirection: 'row' },
  chartCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginTop: spacing.md,
    ...shadow.card,
  },
  chartTitle: { ...typography.caption, color: colors.textMuted, marginBottom: spacing.sm },
  chart: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  chartColumn: { flex: 1, alignItems: 'center' },
  barTrack: {
    width: 18,
    height: 72,
    borderRadius: radius.sm,
    backgroundColor: colors.background,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  barFill: { width: '100%', backgroundColor: colors.primary, borderRadius: radius.sm },
  barValue: { ...typography.caption, color: colors.textMuted, marginTop: spacing.xs },

  menu: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  menuRow: { flexDirection: 'row', alignItems: 'center', padding: spacing.md },
  menuDivider: { borderBottomWidth: 1, borderBottomColor: colors.background },
  menuLabel: { ...typography.body, color: colors.text, flex: 1, marginLeft: spacing.md },
  edit: { marginTop: spacing.md },
});
