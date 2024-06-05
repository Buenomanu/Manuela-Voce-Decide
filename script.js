const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Qual é a cor dos olhos",
    alternativas: [
      "Azuis",
      "Verdes"
    ]
  },

  {
    enunciado: "Quem é o melhor amigo vilão, Jason ou Fred Krugger?",
    alternativas: [
      "Jason",
      "Fred Krugger"
    ]
  },

  {
    enunciado: "Pergunta 3",
    alternativas: [
      "Resposta 1 ",
      "Resposta 2"
    ]
  },

  {
    enunciado: "Pergunta 4",
    alternativas: [
      "Resposta 1 ",
      "Resposta 2"
    ]
  },

  {
    enunciado: "Pergunta 5",
    alternativas: [
      "Resposta 1 ",
      "Resposta 2"
    ]
  }
];

let atual = 1;
let perguntaAtual;



function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
  const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
    
}
}
function mostraPergunta() {
  perguntaAtual = perguntas[atual;
    caixaPerguntas.textContent = perguntaAtual]
}

mostraPergunta();