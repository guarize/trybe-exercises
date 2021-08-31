// 4. The function myFizzBuzz(num) takes a number num and returns 'fizzbuzz' if the number is divisible by 3 and 5, returns 'fizz' if only divisible by 3, returns 'buzz' if only divisible by 5, returns the number itself if it is not divisible by 3 or 5, and returns false if num is not a number.
// [x] Make a call with a number divisible by 3 and 5 and check if the return is as expected;
// [x] Make a call with a number divisible by 3 and check that the return is as expected;
// [x] Make a call with a number divisible by 5 and check that the return is as expected;
// [x] Make a call with a number that is not divisible by 3 or 5 and check that the return is as expected;
// [x] Make a call with a parameter that is not a number and check that the return is as expected;

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(6), 'fizz');
assert.strictEqual(myFizzBuzz(10), 'buzz');
assert.strictEqual(myFizzBuzz(4), 4);
assert.strictEqual(myFizzBuzz('5'), false);
