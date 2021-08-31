// 3. The function myRemoveWithoutCopy(arr, item) takes an array arr and returns the array itself without the item element if it exists in the array.
// [x] Check that the call myRemoveWithoutCopy([1, 2, 3, 4], 3) returns the expected array
// [] Check that the call myRemoveWithoutCopy([1, 2, 3, 4], 3) does not return the array [1, 2, 3, 4]
// [x] Make a call to the function myRemoveWithoutCopy and check if the array passed as parameter has changed
// [] Check that the call myRemoveWithoutCopy([1, 2, 3, 4], 5) returns the expected array

const assert = require("assert");

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

const testArray = [1, 2, 3, 4];
myRemoveWithoutCopy(testArray, 3);
assert.notDeepStrictEqual(testArray, [1, 2, 3, 4]);

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
