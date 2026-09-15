import React from 'react';
import { Text } from 'react-native';

import { Card, Screen, ScreenHeader } from '../../components/ui';
import { colors, typography } from '../../constants';

/**
 * Tela: Início / Dashboard (wireframe 2/7).
 * TODO (aula):
 *  - saudação + nome do usuário e sino de notificações
 *  - card verde com saldo do mês, receitas e contas
 *  - lista "Próximos vencimentos"
 *  - bloco "Dica do guia"
 */
export default function HomeScreen() {
  return (
    <Screen>
      <ScreenHeader title="Início" subtitle="Resumo do mês" />
      <Card>
        <Text style={styles}>TODO: card de saldo do mês.</Text>
      </Card>
      <Card>
        <Text style={styles}>TODO: próximos vencimentos.</Text>
      </Card>
    </Screen>
  );
}

const styles = { ...typography.body, color: colors.textMuted };
