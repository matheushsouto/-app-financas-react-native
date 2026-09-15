import React from 'react';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Screen } from '../../components/ui';
import { colors, spacing, typography } from '../../constants';

/**
 * Tela: Login (wireframe 1/7).
 * TODO (aula): logo, campos de e-mail/senha, "Esqueci minha senha", botões.
 */
export default function SignInScreen() {
  return (
    <Screen>
      <View style={styles.content}>
        <Text style={styles.title}>Guia Financeiro</Text>
        <Text style={styles.subtitle}>Organize suas receitas e contas em um só lugar.</Text>

        <Link href="/home" style={styles.link}>
          Entrar (atalho temporário)
        </Link>
        <Link href="/sign-up" style={styles.link}>
          Criar conta
        </Link>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: spacing.md,
  },
  title: {
    ...typography.title,
    color: colors.text,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.body,
    color: colors.textMuted,
    textAlign: 'center',
  },
  link: {
    ...typography.subheading,
    color: colors.brand,
    textAlign: 'center',
    paddingVertical: spacing.sm,
  },
});
