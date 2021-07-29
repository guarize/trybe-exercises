// Bubble Sort

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Ordene o array numbers em ordem crescente e imprima seus valores;

function bubbleAscending(arr) {

  for (let i = 1; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] < arr[j]) {
        let position = arr[i];
        arr[i] = arr[j];
        arr[j] = position;
      }
    }
  }
  return arr;
};

// console.log(bubbleAscending(numbers));

// 2. Ordene o array numbers em ordem decrescente e imprima seus valores;

function bubbleDescending(arr) {

  for (let i = 1; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] > arr[j]) {
        let position = arr[i];
        arr[i] = arr[j];
        arr[j] = position;
      }
    }
  }
  return arr;
};

// console.log(bubbleDescending(numbers));

// 3. Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte.

function multiplyArray(arr) {
  let newArr = [];

  for (let i = 1; i < arr.length; i += 1) {
    newArr.push(arr[i] * arr[i - 1]);
  }
  console.log(newArr);
}

multiplyArray(numbers);