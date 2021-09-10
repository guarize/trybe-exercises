// 5 - Write a swap function, which given an array of 3 elements, returns a new array with the first and third elements swapped. Detail: you need to do this function spending only 1 line:

const assert = require('assert');

const myList = [1, 2, 3];

// const swap = (arr) => arr.reverse();

const swap = ([a, b, c]) => [c, b, a];

const swappedList = swap(myList);

console.log(swappedList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);
