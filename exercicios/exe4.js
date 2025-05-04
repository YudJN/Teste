function adicionarComentario() {
    const texto = document.getElementById('comentario').value;
    if (texto.trim() === '') return;
  
    const div = document.createElement('div');
    div.className = 'comentario';
    div.innerText = texto;
  
    document.getElementById('comentarios').appendChild(div);
    document.getElementById('comentario').value = '';
  }