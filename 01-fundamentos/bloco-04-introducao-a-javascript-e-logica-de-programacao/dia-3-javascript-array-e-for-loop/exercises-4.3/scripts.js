// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

// Mostra o quadrado de *'s no console.

function squareStars(num) {
  let squareSide = num;
  let str = '';

  for (let column = 1; column <= squareSide; column += 1) {
    for (let row = 1; row <= squareSide; row += 1) {
      str = str.concat('*')
    }
    str = str.concat('\n');
  }
  return str;
}

console.log(squareStars(5));

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

function descendingStars(num) {
  let hiegth = num;
  let str = '';

  for (let column = 1; column <= hiegth; column += 1) {
    for (let row = 1; row <= column; row += 1) {
      str = str.concat('*');
    }
    str = str.concat('\n')
  }
  return str;
}

console.log(descendingStars(5));

// 3, Agora inverta o lado do triângulo. Por exemplo:

function inverseDescendingStars(num) {
  let hiegth = num + 1;
  let str = '';

  for (let column = 1; column < hiegth; column += 1) {
    for (let row = 1; row < hiegth; row += 1) {
      if (column + row >= hiegth) {
        str = str.concat('*');
      } else {
        str = str.concat(' ');
      }
    }
    str = str.concat('\n')
  }
  return str;
}

console.log(inverseDescendingStars(5))

// Depois, faça uma pirâmide com n asteriscos de base: