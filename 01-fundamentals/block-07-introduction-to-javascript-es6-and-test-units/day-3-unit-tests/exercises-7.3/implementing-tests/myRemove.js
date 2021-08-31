// 2. The function myRemove(arr, item) takes an array arr and returns a copy of that array without the 'item' element if it exists in the array.
// [x] Check that the call myRemove([1, 2, 3, 4], 3) returns the expected array.
// [x] Check that the call myRemove([1, 2, 3, 4], 3) does not return the array [1, 2, 3, 4].
// [x] Check that the array passed as parameter has not changed.
// [] Check that the call myRemove([1, 2, 3, 4], 5) returns the expected array

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

const testArray = [1, 2, 3, 4, 5];
myRemove(testArray, 2);
assert.deepStrictEqual(testArray, [1, 2, 3, 4, 5]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
