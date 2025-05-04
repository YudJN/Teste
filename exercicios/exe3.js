let qtd = 0;
const slides = document.querySelectorAll('.slide');

function mostrarSlide(n) {
  slides.forEach(slide => slide.classList.remove('ativo'));
  slides[n].classList.add('ativo');
}

function mudarSlide(direcao) {
  qtd += direcao;
  if (qtd < 0) qtd = slides.length - 1;
  if (qtd >= slides.length) qtd = 0;
  mostrarSlide(qtd);
}


setInterval(() => mudarSlide(1), 3000);

mostrarSlide(qtd);
