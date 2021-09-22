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
