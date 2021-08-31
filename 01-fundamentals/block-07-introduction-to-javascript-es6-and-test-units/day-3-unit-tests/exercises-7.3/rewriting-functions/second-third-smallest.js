// 13. Use the parameter variable as a parameter to the function below, write tests to verify that it is returning as seen in the result variable, and if not, change the code so that it passes the tests.

const assert = require('assert');

const secondThirdSmallest = (array) => {
  let results = [];
  array.sort((x, y) => x - y);
  results = [array[1], array[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameter), result);
