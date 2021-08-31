// 7. Write the function wordLengths to pass the tests already implemented.

const assert = require('assert');

const wordLengths = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(arr[i].length);
  }
  return result;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
