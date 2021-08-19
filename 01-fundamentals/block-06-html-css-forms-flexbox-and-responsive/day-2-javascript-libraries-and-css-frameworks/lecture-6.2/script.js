const dropState = document.getElementById('state');
const submitBtn = document.getElementById('submit-btn');

const arraySiglaEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];
const arrayTextoEstado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

window.onload = addStates;

function addStates() {
  for (let i = 0; i < arrayTextoEstado.length; i += 1) {
    let newState = document.createElement('option');
    newState.id = arraySiglaEstado[i];
    newState.innerHTML = arrayTextoEstado[i];
    console.log(newState);
    dropState.appendChild(newState);
  }
}

submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
})