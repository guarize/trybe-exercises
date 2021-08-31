// Write the removeMiddle function to pass the tests already implemented.

const assert = require('assert');

const removeMiddle = (arr) => {
  const middleIndex = Math.floor(arr.length / 2);
  arr = arr.splice(middleIndex, 1);
  return arr;
};

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
