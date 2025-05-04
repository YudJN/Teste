function mostrarTab(id) {
    document.querySelectorAll('.conteudo-tab').forEach(div => {
      div.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
  }