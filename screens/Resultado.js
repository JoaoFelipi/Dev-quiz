import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import Botao from '../components/Botao';

export default function Resultado({ route, navigation }) {
  const { jogador, acertos, total } = route.params;

  const percentual = Math.round((acertos / total) * 100);
  const mensagem =
    percentual >= 75
      ? 'Excelente desempenho!'
      : percentual >= 50
      ? 'Bom trabalho! Continue praticando.'
      : 'Que tal revisar o conteúdo e tentar de novo?';

  return (
    <View style={styles.container}>
      <Cabecalho titulo="Resultado Final" subtitulo={`Parabéns por concluir, ${jogador}!`} />

      <View style={styles.card}>
        <Text style={styles.pontuacao}>
          {acertos} / {total}
        </Text>
        <Text style={styles.percentual}>{percentual}% de aproveitamento</Text>
        <Text style={styles.mensagem}>{mensagem}</Text>
      </View>

      <Botao
        texto="Jogar Novamente"
        aoPressionar={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1F5F9', padding: 20, justifyContent: 'center' },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 24,
  },
  pontuacao: { fontSize: 42, fontWeight: 'bold', color: '#2563EB' },
  percentual: { fontSize: 18, fontWeight: '600', color: '#334155', marginTop: 8 },
  mensagem: { fontSize: 15, color: '#64748B', textAlign: 'center', marginTop: 12 },
});