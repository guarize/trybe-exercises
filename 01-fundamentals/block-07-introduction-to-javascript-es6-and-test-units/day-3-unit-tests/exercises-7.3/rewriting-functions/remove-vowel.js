// 11. Use the parameter variable as a parameter to the function below, write tests to verify that it is returning as seen in the result variable, and if not, change the code so that it passes the tests.

const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let count = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      count++;
      results.push(count);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(removeVowels(parameter), result);
