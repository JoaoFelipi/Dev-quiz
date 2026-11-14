import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import OpcaoQuiz from '../components/OpcaoQuiz';
import Botao from '../components/Botao';

const perguntas = [
  {
    id: '1',
    enunciado: 'Qual hook é usado para gerenciar estado em componentes funcionais?',
    opcoes: ['useEffect', 'useState', 'useNavigation', 'useRef'],
    correta: 'useState',
  },
  {
    id: '2',
    enunciado: 'Como passamos dados de um componente pai para um componente filho?',
    opcoes: ['Via Props', 'Via CSS', 'Via JSON.parse', 'Via AsyncStorage'],
    correta: 'Via Props',
  },
  {
    id: '3',
    enunciado: 'Qual componente é mais indicado para listas longas no React Native?',
    opcoes: ['View', 'TextInput', 'FlatList', 'Alert'],
    correta: 'FlatList',
  },
  {
    id: '4',
    enunciado: 'Como acessamos os parâmetros enviados na navegação com React Navigation?',
    opcoes: ['props.data', 'route.params', 'navigation.get', 'state.params'],
    correta: 'route.params',
  },
];

export default function Quiz({ route, navigation }) {
  const { jogador } = route.params;

  const [indiceAtual, setIndiceAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const [tempoRestante, setTempoRestante] = useState(15);

  const perguntaAtual = perguntas[indiceAtual];

  // Temporizador usando useEffect com limpeza (cleanup) - Requisito 3.4
  useEffect(() => {
    setTempoRestante(15);

    const intervalo = setInterval(() => {
      setTempoRestante((prevTempo) => {
        if (prevTempo === 1) {
          avancarPergunta(null);
          return 15;
        }
        return prevTempo - 1;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, [indiceAtual]);

  const avancarPergunta = (respostaEscolhida) => {
    const acertou = respostaEscolhida === perguntaAtual.correta;
    const novaPontuacao = acertou ? pontuacao + 1 : pontuacao;

    if (indiceAtual + 1 < perguntas.length) {
      setPontuacao(novaPontuacao);
      setOpcaoSelecionada(null);
      setIndiceAtual(indiceAtual + 1);
    } else {
      navigation.replace('Resultado', {
        jogador,
        acertos: novaPontuacao,
        total: perguntas.length,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Cabecalho
        titulo={`Pergunta ${indiceAtual + 1} de ${perguntas.length}`}
        subtitulo={`Jogador: ${jogador} • Tempo: ${tempoRestante}s`}
      />

      <Text style={styles.enunciado}>{perguntaAtual.enunciado}</Text>

      <View style={styles.listaOpcoes}>
        {perguntaAtual.opcoes.map((opcao) => (
          <OpcaoQuiz
            key={opcao}
            texto={opcao}
            selecionada={opcaoSelecionada === opcao}
            aoPressionar={() => setOpcaoSelecionada(opcao)}
          />
        ))}
      </View>

      {opcaoSelecionada && (
        <Botao
          texto={indiceAtual + 1 === perguntas.length ? 'Finalizar Quiz' : 'Próxima Pergunta'}
          aoPressionar={() => avancarPergunta(opcaoSelecionada)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1F5F9', padding: 20 },
  enunciado: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 20,
    lineHeight: 26,
  },
  listaOpcoes: { marginBottom: 16 },
});