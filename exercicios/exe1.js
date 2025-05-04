const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const mensagens = document.querySelectorAll('.erro');

//pegar os dados primeiro pra fazer a validação

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  let valido = true;

  if (nome.value.trim() === '') {
    mensagens[0].innerText = 'O nome é obrigatório';
    nome.classList.add('invalido');
    valido = false;
  } else {
    mensagens[0].innerText = '';
    nome.classList.remove('invalido');
  }

  if (!email.value.includes('@') || !email.value.includes('.')) {
    mensagens[1].innerText = 'Digite um e-mail válido';
    email.classList.add('invalido');
    valido = false;
  } else {
    mensagens[1].innerText = '';
    email.classList.remove('invalido');
  }

  if (senha.value.length < 6) {
    mensagens[2].innerText = 'A senha deve ter pelo menos 6 caracteres';
    senha.classList.add('invalido');
    valido = false;
  } else {
    mensagens[2].innerText = '';
    senha.classList.remove('invalido');
  }

  if (valido) {
    window.alert('Cadastro realizado com sucesso!');
    formulario.reset();
  }
});