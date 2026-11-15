DevQuiz

Descrição
O DevQuiz é um aplicativo de perguntas e respostas interativo desenvolvido em React Native, Expo e React Navigation. O utilizador introduz o seu nome, responde a questões técnicas de programação de forma cronometrada e visualiza o seu desempenho detalhado no placar final.

Aluno
Nome: João Felipi N. L. de Araújo
RGM: 43413714

Telas
Home.js: Ecrã inicial com campo de texto para introduzir o nome do jogador e botão para iniciar a atividade.
Quiz.js: Ecrã de perguntas que exibe o enunciado, um temporizador regressivo por questão e as alternativas de resposta.
Resultado.js: Ecrã final que apresenta o total de acertos, a pontuação obtida e um botão para recomeçar.

Fonte de dados
Dados locais estruturados em vetores internos no código perguntas e alternativas estáticas sobre desenvolvimento de software.

Onde estão os requisitos
Componentes: `components/Cabecalho.js`, `components/Botao.js`, `components/OpcaoQuiz.js`
Props com callback:Utilizados nos botões e opções de resposta para disparar ações de clique e transição de estado.
useState: Gerenciamento do nome do jogador, índice da pergunta ativa, pontuação acumulada e tempo restante do cronômetro.
useEffect: Gestão do temporizador regressivo de cada pergunta na tela de quiz, incluindo a função de limpeza *cleanup* com `clearInterval`.
Navegação com parâmetros:** Transição de telas com envio de dados (como o nome e a pontuação) utilizando o `@react-navigation/native` e `route.params`.

Vídeo de demonstração
https://drive.google.com/file/d/1wwArguk5qCOngDklYas0REYkHnxpcRNP/view?usp=sharing

Como executar
npx expo start