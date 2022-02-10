const readline = require('readline-sync');

const calculateImc = () => {
  const weigth = readline.questionInt('Qual o seu peso? (em kg)');
  const height = readline.questionInt('Qual a sua altura? (em cm)');

  const imc = (weigth / Math.pow(height / 100, 2)).toFixed(2);

  console.log(imc);
};

calculateImc();
