import React from 'react';
import { Text } from 'react-native';

import { Button, Screen, ScreenHeader } from '../../components/ui';
import { colors, typography } from '../../constants';

/**
 * Tela: Nova conta a pagar (wireframe 7/7).
 * TODO (aula): valor, descrição, vencimento, categoria
 * (Moradia · Serviços · Educação · Cartão · Outros) e switch "Repetir todo mês".
 */
export default function NewBillScreen() {
  return (
    <Screen>
      <ScreenHeader title="Nova conta a pagar" />
      <Text style={styles}>TODO: formulário de conta.</Text>
      <Button title="Salvar conta" disabled />
    </Screen>
  );
}

const styles = { ...typography.body, color: colors.textMuted };
