import React from 'react';
import { Link } from 'expo-router';
import { Text } from 'react-native';

import { Card, EmptyState, Screen, ScreenHeader } from '../../components/ui';
import { colors, typography } from '../../constants';

/**
 * Tela: Receitas (wireframe 3/7).
 * TODO (aula):
 *  - seletor de mês (< Setembro 2026 >)
 *  - card "Total recebido no mês"
 *  - lista de lançamentos
 */
export default function IncomesScreen() {
  return (
    <Screen>
      <ScreenHeader
        title="Receitas"
        action={
          <Link href="/incomes/new" style={styles}>
            + Nova
          </Link>
        }
      />
      <Card>
        <Text style={styles}>TODO: total recebido no mês.</Text>
      </Card>
      <EmptyState message="Toque em + para registrar uma nova receita" />
    </Screen>
  );
}

const styles = { ...typography.subheading, color: colors.brand };
