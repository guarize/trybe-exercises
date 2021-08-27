// 1 - Create a function that takes a number and returns its factorial.

const factorial = (number) => {
  if (number === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= number; i += 1) {
      result *= i;
    }
    return result;
  }
};

// Bonus (optional): try doing the same exercise recursively.

const factorialRec = (number) =>
  number === 0 ? 1 : number * factorial(number - 1);

// 2 - Create a function that takes a sentence and returns the largest word.

const largestWord = (str) => {
  let strSplit = str.split(' ');
  let result = '';
  for (let i = 0; i < strSplit.length; i += 1) {
    if (strSplit[i].length > result.length) {
      result = strSplit[i];
    }
  }
  return result;
};

// Refactoring

const largestWord2 = (str) =>
  str
    .split(' ')
    .sort((a, b) => a.length - b.length)
    .pop();
