import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import Botao from '../components/Botao';

export default function Home({ navigation }) {
  const [nomeJogador, setNomeJogador] = useState('');

  const iniciarQuiz = () => {
    if (nomeJogador.trim() === '') {
      Alert.alert('Atenção', 'Por favor, digite seu nome para começar.');
      return;
    }
    navigation.navigate('Quiz', { jogador: nomeJogador.trim() });
  };

  return (
    <View style={styles.container}>
      <Cabecalho 
        titulo="DevQuiz" 
        subtitulo="Teste seus conhecimentos em React Native" 
      />

      <View style={styles.card}>
        <Text style={styles.label}>Como podemos te chamar?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome..."
          value={nomeJogador}
          onChangeText={setNomeJogador}
        />

        <Text style={styles.instrucoes}>
          • 4 perguntas de múltipla escolha{'\n'}
          • Você terá 15 segundos por pergunta{'\n'}
          • Boa sorte!
        </Text>

        <Botao texto="Iniciar Quiz" aoPressionar={iniciarQuiz} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1F5F9', padding: 20, justifyContent: 'center' },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  label: { fontSize: 16, fontWeight: '600', color: '#334155', marginBottom: 8 },
  input: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    color: '#0F172A',
  },
  instrucoes: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 22,
    marginBottom: 20,
  },
});