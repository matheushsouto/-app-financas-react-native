import React from 'react';
import { Text } from 'react-native';

import { Button, Screen, ScreenHeader } from '../../components/ui';
import { colors, typography } from '../../constants';

/**
 * Tela: Nova receita (wireframe 6/7).
 * TODO (aula): valor, descrição, data de recebimento e categoria
 * (Trabalho · Extra · Venda · Outros).
 */
export default function NewIncomeScreen() {
  return (
    <Screen>
      <ScreenHeader title="Nova receita" />
      <Text style={styles}>TODO: formulário de receita.</Text>
      <Button title="Salvar receita" disabled />
    </Screen>
  );
}

const styles = { ...typography.body, color: colors.textMuted };
