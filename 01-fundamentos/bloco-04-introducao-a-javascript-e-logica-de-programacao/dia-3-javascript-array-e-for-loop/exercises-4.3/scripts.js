// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

// Mostra o quadrado de *'s no HTML

function squareStars(num) {
  let squareSide = num;

  for (let j = 1; j <= squareSide; j += 1) {
    for (let i = 1; i <= squareSide; i += 1) {
      document.write("*");
    }
    document.write('<br>')
  }
}

console.log(squareStars(5))

// Mostra o quadrado de *'s pelo console.

function _squareStars(num) {
  let squareSide = num;
let str = '';

  for (let j = 1; j <= squareSide; j += 1) {
    for (let i = 1; i <= squareSide; i += 1) {
      str = str.concat('*')
    }
    str = str.concat('\n');
  }
  return str;
}

console.log(_squareStars(5))