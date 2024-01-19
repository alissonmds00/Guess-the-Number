const limite = 100;
let numerosSorteados = [];
let numeroSecreto = RandomNumber();
let tentativas = 1;
const input = document.querySelector("input");
const novoJogo = document.querySelector("#reiniciar");

function element(element, conteudo) {
  let elemento = document.querySelector(element);
  elemento.innerText = conteudo;
  responsiveVoice.speak(conteudo, "Brazilian Portuguese Female", {
    ratio: 1.2,
  });
}

function exibirMensagemInicial() {
  let titulo = element("h1", "Advinhe o número sorteado");
  let paragrafo = element("p", `Escolha um número entre 1 e ${limite}`);
}
exibirMensagemInicial();

//Random

function RandomNumber() {
  let numeroGerado = Math.round(Math.random() * limite + 1);
  const qtdNumerosGerados = numerosSorteados.length;
  if (qtdNumerosGerados == limite) {
    numerosSorteados = [];
  }

  if (numerosSorteados.includes(numeroGerado)) {
    return RandomNumber();
  }
  numerosSorteados.push(numeroGerado);
  return numeroGerado;
}

function verificarChute() {
  const inputValor = input.value;
  const inputNumero = Number(inputValor);
  const tentativaPalavra = tentativas > 1 ? "tentativas" : "tentativa";
  if (inputNumero == numeroSecreto) {
    element("h1", "Você acertou!");
    element(
      "p",
      `O número sorteado foi ${numeroSecreto} e você o descobriu com ${tentativas} ${tentativaPalavra}!`
    );

    novoJogo.disabled = false;
  } else {
    element("h1", "Você errou :(");
    tentativas++;
    if (inputNumero > numeroSecreto) {
      element("p", `O número sorteado é menor que ${inputNumero}`);
    } else {
      element("p", `O número sorteado é maior que ${inputNumero}`);
    }
  }
  limpaCampo();
}

function limpaCampo() {
  input.value = "";
}

function reiniciar() {
  tentativas = 0;
  limpaCampo();
  numeroSecreto = RandomNumber();
  novoJogo.disabled = true;
  exibirMensagemInicial();
}

// Chute
// com operador ternário
/*function verificarChute() {
  const input = document.querySelector(".container__input").value;
  let novoTitulo =
    numeroSecreto == Number(input) ? `Você acertou!` : `Você errou. :(`;
  let mensagem =
    numeroSecreto == Number(input)
      ? `Você descobriu o número secreto! ${numeroSecreto}`
      : (numeroSecreto > input)
      ? `O número secreto é maior que ${input}`
      : `O número secreto é menor que ${input}`;
  titulo = element("h1", novoTitulo);
  paragrafo = element("p", mensagem);
}*/

/*function factorial() {
  const input = prompt('Informe o número que você deseja obter o valor fatorial')
  const numero = parseInt(input)
  let acumulador = numero
  for (let cont = numero-1; cont > 0; cont--) {
    acumulador *= cont
  }
  alert(`O fatorial de ${numero} é ${acumulador}`)
}

factorial()
*/
