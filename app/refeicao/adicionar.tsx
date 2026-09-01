import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Chip, Input, ScreenContainer } from '@/components';
import { colors, spacing, typography } from '@/constants';
import { useMeals } from '@/hooks';
import { MEAL_CATEGORY_LABELS, MEAL_CATEGORY_ORDER, type MealCategory } from '@/types';
import { currentTime, normalizeTime, today } from '@/utils';

type FormErrors = Partial<Record<'name' | 'time', string>>;

/** Registro rapido de uma refeicao no diario. */
export default function AdicionarRefeicaoScreen() {
  const router = useRouter();
  const { addMeal } = useMeals();

  const [category, setCategory] = useState<MealCategory>('lunch');
  const [name, setName] = useState('');
  const [time, setTime] = useState(currentTime());
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSave() {
    const normalizedTime = normalizeTime(time);
    const nextErrors: FormErrors = {};
    if (name.trim().length < 2) nextErrors.name = 'Descreva o que voce comeu.';
    if (!normalizedTime) nextErrors.time = 'Informe um horario valido, como 12:30.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    addMeal({
      name: name.trim(),
      category,
      date: today(),
      time: normalizedTime as string,
      notes: notes.trim() || undefined,
    });

    Alert.alert('Refeicao registrada!', 'Seu diario foi atualizado.', [
      { text: 'Ver diario', onPress: () => router.back() },
    ]);
  }

  return (
    <ScreenContainer edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.header}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Fechar"
            onPress={() => router.back()}
            hitSlop={8}
          >
            <Ionicons name="close" size={26} color={colors.text} />
          </Pressable>
          <Text style={styles.title}>Adicionar refeicao</Text>
          <View style={styles.headerSpacer} />
        </View>

        <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
          <Text style={styles.label}>Qual refeicao?</Text>
          <View style={styles.categories}>
            {MEAL_CATEGORY_ORDER.map((item) => (
              <Chip
                key={item}
                label={MEAL_CATEGORY_LABELS[item]}
                selected={category === item}
                onPress={() => setCategory(item)}
              />
            ))}
          </View>

          <Input
            label="O que voce comeu?"
            placeholder="Ex.: Arroz, feijao, frango e salada"
            value={name}
            onChangeText={setName}
            error={errors.name}
          />
          <Input
            label="Horario"
            placeholder="12:30"
            keyboardType="numbers-and-punctuation"
            value={time}
            onChangeText={setTime}
            error={errors.time}
          />
          <Input
            label="Observacoes (opcional)"
            placeholder="Algo que queira lembrar depois"
            value={notes}
            onChangeText={setNotes}
            multiline
          />

          <Button label="Salvar refeicao" onPress={handleSave} style={styles.save} />
          <Button label="Cancelar" variant="ghost" onPress={() => router.back()} />
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
  },
  title: { ...typography.section, fontSize: 20, color: colors.text },
  headerSpacer: { width: 26 },
  label: { ...typography.body, color: colors.text, marginBottom: spacing.sm },
  categories: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginBottom: spacing.lg },
  save: { marginTop: spacing.sm },
});
