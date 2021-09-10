// 6 - Suppose you are dealing with cars, and the way the problem has been handed to you, each car is modeled as an array. However, this modeling is low-level. Create a function toObject that, given a list, returns an object representing the car:

const assert = require('assert');

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([name, brand, year]) => ({
  name,
  brand,
  year,
});

console.log(toObject(palio));

assert.deepStrictEqual(toObject(palio), {
  name: 'Palio',
  brand: 'Fiat',
  year: 2019,
});
assert.deepStrictEqual(toObject(shelbyCobra), {
  name: 'Shelby Cobra',
  brand: 'Ford',
  year: 1963,
});
assert.deepStrictEqual(toObject(chiron), {
  name: 'Chiron',
  brand: 'Bugatti',
  year: 2016,
});
