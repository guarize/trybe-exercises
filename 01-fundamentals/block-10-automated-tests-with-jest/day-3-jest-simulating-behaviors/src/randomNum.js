// 1 - Create a function that generates a random number between 0 and 100. You will also create the tests for this function. Using the mock, set the default return to 10. Test whether the function was called, what it returned, and how many times it was called.

const number = () => Math.floor(Math.random() * 101);

module.exports = number;
