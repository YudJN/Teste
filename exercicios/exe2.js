const tabuleiro = document.querySelector('#tabuleiro');
const mensagem = document.querySelector('#mensagem');
let jogadorAtual = 'X';
let jogoAtivo = true;
let celulas = new Array(9).fill('');

function inicializarTabuleiro() {
  tabuleiro.innerHTML = '';
  celulas.forEach((conteudo, posicao) => {
    const celula = document.createElement('div');
    celula.className = 'celula';
    celula.textContent = conteudo;
    celula.addEventListener('click', () => realizarJogada(posicao));
    tabuleiro.appendChild(celula);
  });
}

function realizarJogada(posicao) {
  if (!jogoAtivo || celulas[posicao] !== '') return;

  celulas[posicao] = jogadorAtual;
  inicializarTabuleiro();

  if (checarVencedor()) {
    mensagem.textContent = `Parabéns! Jogador ${jogadorAtual} venceu!`;
    jogoAtivo = false;
  } else if (celulas.every(celula => celula !== '')) {
    mensagem.textContent = 'O jogo terminou em empate!';
    jogoAtivo = false;
  } else {
    jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
    mensagem.textContent = `Agora é a vez do jogador ${jogadorAtual}`;
  }
}

function checarVencedor() {
  const combinacoesVitoria = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let combinacao of combinacoesVitoria) {
    const [a, b, c] = combinacao;
    if (celulas[a] && celulas[a] === celulas[b] && celulas[a] === celulas[c]) {
      return true;
    }
  }
  return false;
}

function resetarJogo() {
  celulas = new Array(9).fill('');
  jogadorAtual = 'X';
  jogoAtivo = true;
  mensagem.textContent = 'O jogo começou! Jogador X começa.';
  inicializarTabuleiro();
}

inicializarTabuleiro();
mensagem.textContent = 'O jogo começou! Jogador X começa.';