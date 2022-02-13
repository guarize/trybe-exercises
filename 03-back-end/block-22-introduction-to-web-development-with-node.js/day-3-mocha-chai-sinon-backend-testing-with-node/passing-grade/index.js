const passingGrade = require('./passingGrade');

console.log('Quando a média for menor que 7, retorna "Fail":');

const respostaCenario1 = passingGrade(4);
if (respostaCenario1 === 'Fail') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}

console.log('Quando a média for maior que 7, retorna "Pass":');

const respostaCenario2 = passingGrade(9);
if (respostaCenario2 === 'Pass') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}

console.log('Quando a média for igual a 7, retorna "Pass":');

const respostaCenario3 = passingGrade(7);
if (respostaCenario3 === 'Pass') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}
