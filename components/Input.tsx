import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, type TextInputProps } from 'react-native';
import { colors, radius, spacing, typography } from '@/constants';

type InputProps = TextInputProps & {
  label: string;
  error?: string;
  helper?: string;
};

/** Campo de formulario com rotulo, estado de foco e mensagem de erro. */
export function Input({ label, error, helper, style, ...rest }: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor={colors.textMuted}
        {...rest}
        onFocus={(event) => {
          setFocused(true);
          rest.onFocus?.(event);
        }}
        onBlur={(event) => {
          setFocused(false);
          rest.onBlur?.(event);
        }}
        style={[
          styles.input,
          rest.multiline && styles.multiline,
          focused && styles.focused,
          Boolean(error) && styles.errored,
          style,
        ]}
      />
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
      {!error && Boolean(helper) && <Text style={styles.helper}>{helper}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: spacing.md },
  label: {
    ...typography.caption,
    fontSize: 14,
    color: colors.text,
    marginBottom: spacing.xs + 2,
  },
  input: {
    ...typography.body,
    color: colors.text,
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    height: 52,
  },
  multiline: { height: 96, paddingTop: spacing.sm + 4, textAlignVertical: 'top' },
  focused: { borderColor: colors.primary },
  errored: { borderColor: colors.danger },
  error: { ...typography.caption, color: colors.danger, marginTop: spacing.xs },
  helper: { ...typography.caption, color: colors.textMuted, marginTop: spacing.xs },
});
