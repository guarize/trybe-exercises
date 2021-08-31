// 1 - The function sum(a, b) returns the sum of parameter a and b
// [x] Test whether the return of sum(4, 5) is 9
// [x] Test whether the return of sum(0, 0) is 0
// [x] Test if the sum function throws an error when the parameters are 4 and "5" (string 5)
// [x] Test if the error message is "parameters must be numbers" when calling sum(4, "5")

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4, 5), 9, '4 + 5 = 9');
assert.strictEqual(sum(0, 0), 0, '0 + 0 = 0');
assert.throws(() => {
  sum(4, '5')
});
assert.throws(() => {
  sum(4, '5')
}, /^Error: parameters must be numbers$/)