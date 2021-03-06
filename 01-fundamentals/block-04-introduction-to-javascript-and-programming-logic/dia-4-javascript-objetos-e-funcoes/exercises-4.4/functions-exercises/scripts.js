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
  }
  return false;
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

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let nameArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function largestName(arr) {
  let names = arr;
  let largest;

  for (let i = 0; i < (names.length - 1); i += 1) {
    if (names[i].length > names[i + 1].length) {
      largest = names[i];
    }
  }
  return largest;
}

console.log(largestName(nameArray))

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let repeatArray = [2, 3, 2, 5, 8, 2, 3, 3, 3];

function repeatsTheMost(arr) {
  let array = arr.sort();
  let repeatedNumber;
  let repetitions = 0;
  let maxRepetition = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === array[i + 1]) {
      repetitions += 1;
    } else {
      repetitions = 0;
    }
    if (repetitions > maxRepetition) {
      repeatedNumber = array[i];
      maxRepetition = repetitions;
    }
  }
  return repeatedNumber;
}

console.log(repeatsTheMost(repeatArray))

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function sumAll(num) {
  let limit = num;
  let sum = 0;

  for (let i = 1; i <= limit; i += 1) {
    sum += i;
  }
  return sum;
}

console.log(sumAll(100))

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word.

function checkWordEnd(word, ending) {
  let full = word;
  let end = ending;
  let testWord = "";

  for (let i = (word.length - end.length); i <= (word.length - 1); i += 1) {
    testWord = testWord.concat(word[i]);
  }
  if (testWord === end) {
    return true;
  }
  return false

}

console.log(checkWordEnd('joaofernando', 'rnando'))