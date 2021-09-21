const myFizzBuzz = require('./fizzBuzz');

describe('myFizzBuzz tests', () => {
  it('Tests if passing a number divisible by 3 and 5 returns as expected', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Tests if passing a number divisible by 3 returns as expected', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });

  it('Tests if passing a number divisible by 5 returns as expected', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  it('Tests if passing a number not divisible by 3 or 5 returns as expected', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it('Tests if not passing a number returns as expected', () => {
    expect(myFizzBuzz('string')).toBeFalsy();
  });
});
