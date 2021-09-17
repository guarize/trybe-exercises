const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btn-cep');
const cepResult = document.querySelector('.cep-result')

const handleClick = (event) => {
  event.preventDefault();
  const cep = inputCep.value;
  searchCep(cep);
}

btnCep.addEventListener('click', handleClick);

const searchCep = (cep) => {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.text())
  .then(body => {
    cepResult.innerText = body;
  })
}
