// Redo exercises 1 to 5 of the Unit Tests in JavaScript content, this time using Jest 

const sum = require('./sum');

describe('sum function', () => {
  it('Tests if 4 + 5 equals 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Tests if 0 + 0 equals 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Tests if function trows', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  it('Tests if error message is "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError(new Error('parameters must be numbers'));
  });
});
