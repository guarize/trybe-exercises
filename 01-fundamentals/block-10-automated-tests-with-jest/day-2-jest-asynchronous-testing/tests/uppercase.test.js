// 1 - Write a test that checks the callback of an uppercase function, which turns the letters of a word into uppercase letters. Remember to beware of false-positives in asynchronous tests.

const uppercase = require('../src/uppercase');

describe('Transforms words to uppercase', () => {
  it('"word" to "WORD"', (done) => {
    uppercase('word', (result) => {
      try {
        expect(result).toBe('WORD');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
