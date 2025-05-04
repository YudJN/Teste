function adicionarTarefa() {
    const texto = document.getElementById('novaTarefa').value;
    if (texto.trim() === '') return;
    const li = document.createElement('li');
    li.textContent = texto;
    li.draggable = true;
  
    li.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', e.target.innerText);
      e.target.classList.add('dragging');
    });
  
    li.addEventListener('dragend', e => {
      e.target.classList.remove('dragging');
    });
  
    li.addEventListener('dragover', e => e.preventDefault());
    li.addEventListener('drop', e => {
      e.preventDefault();
      const dragging = document.querySelector('.dragging');
      if (dragging && dragging !== li) {
        const textoTmp = li.textContent;
        li.textContent = dragging.textContent;
        dragging.textContent = textoTmp;
      }
    });
  
    document.getElementById('lista').appendChild(li);
    document.getElementById('novaTarefa').value = '';
  }
  