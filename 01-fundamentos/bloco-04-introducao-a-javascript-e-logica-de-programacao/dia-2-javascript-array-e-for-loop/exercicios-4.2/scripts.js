let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersTest = [2, 4, 6, 12, 16, 28];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

function printValues(arr) {

  for (let number of numbers) {
    console.log(number);
  }
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

function sumValues(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  console.log(sum)
}

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

function arithAverage(arr) {
  let sum = 0;
  let average;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i]
  }
  average = (sum / arr.length)
  console.log(average)
}

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

function arithAverage(arr) {
  let sum = 0;
  let average;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i]
  }
  average = (sum / arr.length)
  console.log(average)
  if (average > 20) {
    console.log("valor maior que 20");
  } else {
    console.log("valor menor ou igual a 20");
  }
}

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

function greaterNumber(arr) {
  let higher = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > higher) {
      higher = arr[i];
    }
  }
  console.log(higher);
}

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

function oddNumber(arr) {
  let odds = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 != 0) {
      odds += 1;
      console.log(arr[i]);
    }
  }
  if (odds == 0) {
    console.log("nenhum valor ímpar encontrado");
  }
}

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

function smallestNumber(arr) {
  let small = arr[1];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < small) {
      small = arr[i];
    }
  }
  console.log(small);
}

// 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

function arrayPusher(num) {
  let arr = [];

  for (let i = 1; i < num; i += 1) {
    arr.push(i);
  }
  console.log(arr);
}

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

function divideArray(num) { 
  let arr = [];

  for (let i = 1; i < num; i += 1) {
    arr.push(i);
  }

  for (let number of arr) {
    console.log((arr[number -1] / 2))
  }
}