import React from 'react';
import { Link } from 'expo-router';
import { Text } from 'react-native';

import { Card, EmptyState, Screen, ScreenHeader } from '../../components/ui';
import { colors, typography } from '../../constants';

/**
 * Tela: Contas a Pagar (wireframe 4/7).
 * TODO (aula):
 *  - filtros Todas / Pendentes / Pagas
 *  - cards "A pagar" e "Pago no mês"
 *  - lista com checkbox e status (Paga, Atrasada, Amanhã, Pendente)
 */
export default function BillsScreen() {
  return (
    <Screen>
      <ScreenHeader
        title="Contas a Pagar"
        action={
          <Link href="/bills/new" style={styles}>
            + Nova
          </Link>
        }
      />
      <Card>
        <Text style={styles}>TODO: resumo a pagar / pago no mês.</Text>
      </Card>
      <EmptyState message="Toque em + para registrar uma nova conta" />
    </Screen>
  );
}

const styles = { ...typography.subheading, color: colors.brand };
