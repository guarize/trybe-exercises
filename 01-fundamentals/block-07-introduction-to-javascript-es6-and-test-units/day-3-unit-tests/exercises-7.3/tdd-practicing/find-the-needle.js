// 9. Write the function findTheNeedle to pass the tests already implemented.

const assert = require('assert');

const findTheNeedle = (arr, word) => {
  let result = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === word) {
      result = arr.indexOf(arr[i]);
    }
  }
  return result;
};

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
