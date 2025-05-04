function mostrarMensagem() {
    alert("não é que vc sabe clicar no button");
  }

  const ctx = document.getElementById('graficoVendas').getContext('2d');
const grafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro'],
        datasets: [{
            label: 'Vendas em unidades',
            data: [15, 25, 8, 12, 20],
            backgroundColor: 'rgba(70, 0, 150, 0.5)',
            borderColor: 'rgb(36, 0, 102)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});