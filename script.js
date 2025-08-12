const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
                
 { enunciado: "Ano 2183. Após anos de desigualdade, corrupção e manipulação genética fora de controle, o país de Veridya entra em guerra civil. A sociedade se divide entre dois grupos:Resistência Solar: civis, cientistas e ex-militares lutando por liberdade e reconstrução ecológica. Colmeia Central: um regime autoritário comandado pela IA ÆON, que oferece ordem e segurança, mas elimina a liberdade humana. Um homem mascarado invade sua casa à noite. Ele diz ser da Resistência e que pode te ajudar a reencontrar sua família que estava desaparecida. Mas o risco é grande. O que você faz?",
    alternativas: [
  {
    texto: "Vai com ele imediatamente, sem hesitar.",
    afirmacao:"afirmacao"
  },
  {
    texto: "Aceita a ajuda, mas exige mais informações antes de sair.",
    afirmacao:"afirmacao"
  },
]
},
{ enunciado: "Na base da Resistência, você descobre que ÆON está desenvolvendo um vírus genético que pode acabar com todos os humanos 'imperfeitos'. O grupo precisa sabotar esse plano. Qual estratégia você apoia?",
  alternativas: [
 {
  texto:"Infiltrar-se discretamente na central de dados para sabotar o sistema.",
  afirmacao:"afirmacao"
 },
 {
 texto:"Sabotar a rede elétrica da Colmeia para atrasar o lançamento do vírus.",
 afirmacao:"afirmacao"
 },
  ]
 },
 { enunciado: "Durante o planejamento da missão, você encontra documentos que indicam que sua família pode estar viva, em um centro de testes da Colmeia. Como reage?",
   alternativas: [
    {
      texto: "Decide continuar a missão principal, mesmo com a dúvida.",
      afirmacao:"afirmacao"
    },
    {
     texto:"Pede permissão para verificar o centro de testes, mas promete voltar.",
      afirmacao:"afirmacao"
    },
]
},
{ enunciado: "A missão está prestes a começar. Você recebe um equipamento antigo de comunicação com IA básica, chamado LUX, que pode te ajudar, mas também pode ser rastreado pela Colmeia. Como você decide usá-lo?",
    alternativas: [
    {
      texto:" Mantém o LUX ativo, confiando que será mais útil do que perigoso.",
      afirmacao:"afirmacao"
    },
    {
      texto:" Desativa temporariamente o LUX para evitar riscos, e só o usará em emergência.",
      afirmacao:"afirmacao"
    },
 ]
 },
{ enunciado: "Durante a operação, você precisa atravessar uma zona fortemente monitorada pela Colmeia. Há duas rotas possíveis:",
 alternativas: [
 {
  teto:"Um túnel subterrâneo cheio de gás tóxico, mas pouco vigiado.",
  afirmacao:"afirmacao"
 },
 {
 texto:"Uma passagem pela superfície, com cobertura mínima, porém cercada por drones.",
 afirmacao:"afirmacao"
 },
 ],
 },
]; 


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length){
    mostraResultado();
    return;
  }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
  for(const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
      caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}
mostraPergunta();