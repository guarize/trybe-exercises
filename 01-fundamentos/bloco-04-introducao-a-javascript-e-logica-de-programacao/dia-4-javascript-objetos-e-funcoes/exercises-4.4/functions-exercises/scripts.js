// Parte II - Funções
// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function checkPalindrome(str) {
  let word = str;
  let reverseStr = "";

  for (let i = (word.length - 1); i >= 0; i -= 1) {
    reverseStr = reverseStr.concat(word[i]);
  }
  if (word === reverseStr) {
    return true;
  } return false;
}


console.log(checkPalindrome('arara'))

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let testArray = [2, 3, 6, 7, 10, 1];

function maxIndex(arr) {
  let numbers = arr;
  let highestNum = Math.max(...numbers);

  return numbers.indexOf(highestNum);
}

console.log(maxIndex(testArray))

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let testArray2 = [2, 4, 6, 7, 10, 0, -3];

function minIndex(arr) {
  let numbers = arr;
  let smallNum = Math.min(...numbers);

  return numbers.indexOf(smallNum);
}

console.log(minIndex(testArray2))

