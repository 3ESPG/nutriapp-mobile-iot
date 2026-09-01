import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Input, Logo, ScreenContainer } from '@/components';
import { colors, fonts, spacing, typography } from '@/constants';
import { isValidEmail } from '@/utils';

type FormErrors = Partial<Record<'name' | 'email' | 'password' | 'confirmation', string>>;

/** Criacao de conta. A persistencia real esta prevista para o CP6. */
export default function CadastroScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit() {
    const nextErrors: FormErrors = {};
    if (name.trim().length < 3) nextErrors.name = 'Informe seu nome completo.';
    if (!isValidEmail(email)) nextErrors.email = 'Informe um e-mail valido.';
    if (password.length < 6) nextErrors.password = 'A senha deve ter ao menos 6 caracteres.';
    if (confirmation !== password) nextErrors.confirmation = 'As senhas nao coincidem.';
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      router.replace('/home');
    }
  }

  return (
    <ScreenContainer>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <View style={styles.header}>
            <Logo size={64} />
            <Text style={styles.title}>Criar minha conta</Text>
            <Text style={styles.subtitle}>
              Leva menos de um minuto para comecar a organizar sua rotina.
            </Text>
          </View>

          <Input
            label="Nome"
            placeholder="Como podemos te chamar?"
            value={name}
            onChangeText={setName}
            error={errors.name}
          />
          <Input
            label="E-mail"
            placeholder="seuemail@exemplo.com"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            error={errors.email}
          />
          <Input
            label="Senha"
            placeholder="Minimo de 6 caracteres"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            error={errors.password}
          />
          <Input
            label="Confirmar senha"
            placeholder="Repita a senha"
            secureTextEntry
            value={confirmation}
            onChangeText={setConfirmation}
            error={errors.confirmation}
          />

          <Button label="Criar minha conta" onPress={handleSubmit} style={styles.submit} />

          <View style={styles.footer}>
            <Text style={styles.footerText}>Ja possui uma conta? </Text>
            <Link href="/login" style={styles.link}>
              Entrar
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  content: { paddingTop: spacing.lg, paddingBottom: spacing.xl },
  header: { alignItems: 'center', marginBottom: spacing.lg },
  title: { ...typography.title, color: colors.text, marginTop: spacing.md },
  subtitle: {
    ...typography.body,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  submit: { marginTop: spacing.sm },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: spacing.lg },
  footerText: { ...typography.body, color: colors.textMuted },
  link: { fontFamily: fonts.titleSemiBold, fontSize: 16, color: colors.secondary },
});
