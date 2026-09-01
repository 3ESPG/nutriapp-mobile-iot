import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Input, Logo, ScreenContainer } from '@/components';
import { colors, fonts, spacing, typography } from '@/constants';
import { isValidEmail } from '@/utils';

/**
 * Tela de acesso.
 * A autenticacao real esta prevista para o CP6; nesta etapa a validacao
 * e apenas local e o fluxo segue para a area principal do aplicativo.
 */
export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  function handleSubmit() {
    const nextErrors: typeof errors = {};
    if (!isValidEmail(email)) nextErrors.email = 'Informe um e-mail valido.';
    if (password.length < 6) nextErrors.password = 'A senha deve ter ao menos 6 caracteres.';
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
            <Logo size={72} />
            <Text style={styles.title}>Bem-vindo de volta</Text>
            <Text style={styles.subtitle}>
              Entre para acompanhar seu diario e descobrir novas receitas.
            </Text>
          </View>

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
            placeholder="Sua senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            error={errors.password}
          />

          <Text
            style={styles.forgot}
            onPress={() =>
              Alert.alert(
                'Recuperacao de senha',
                'Fluxo previsto para as proximas etapas do projeto.',
              )
            }
          >
            Esqueci minha senha
          </Text>

          <Button label="Entrar" onPress={handleSubmit} style={styles.submit} />

          <View style={styles.footer}>
            <Text style={styles.footerText}>Ainda nao tem conta? </Text>
            <Link href="/cadastro" style={styles.link}>
              Criar uma conta
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  content: { paddingTop: spacing.xl, paddingBottom: spacing.xl },
  header: { alignItems: 'center', marginBottom: spacing.xl },
  title: { ...typography.title, color: colors.text, marginTop: spacing.md },
  subtitle: {
    ...typography.body,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  forgot: {
    fontFamily: fonts.bodyMedium,
    fontSize: 14,
    color: colors.primary,
    alignSelf: 'flex-end',
    marginBottom: spacing.lg,
  },
  submit: { marginTop: spacing.sm },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: spacing.lg },
  footerText: { ...typography.body, color: colors.textMuted },
  link: { fontFamily: fonts.titleSemiBold, fontSize: 16, color: colors.secondary },
});
