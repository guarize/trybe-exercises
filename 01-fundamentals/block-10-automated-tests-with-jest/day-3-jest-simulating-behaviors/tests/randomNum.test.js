const randomNum = require('../src/randomNum');

// 1 - Create a function that generates a random number between 0 and 100. You will also create the tests for this function. Using the mock, set the default return to 10. Test whether the function was called, what it returned, and how many times it was called.

describe('#randomNum', () => {
  it('test number function`s return and times it`s been called', () => {
    randomNum.number = jest.fn().mockReturnValue(10);

    randomNum.number();
    expect(randomNum.number).toHaveBeenCalled();
    expect(randomNum.number()).toBe(10);
    expect(randomNum.number).toHaveBeenCalledTimes(2);
  });
});

// 2 - With the same function as in the previous exercise, using mock, create a new implementation, which should receive two parameters and return the division of the first by the second. This implementation should occur only once. Make the necessary tests.

describe('#randomNum newImplementation', () => {
  it('number receives 2 param', () => {
    randomNum.number.mockReset();
    randomNum.number.mockImplementationOnce((a, b) => a / b);

    expect(randomNum.number(10, 5)).toBe(2);
    expect(randomNum.number).toHaveBeenCalled();
    expect(randomNum.number).toHaveBeenCalledTimes(1);
    expect(randomNum.number).toHaveBeenCalledWith(10, 5);
  });

  it('number receives 3 param', () => {
    randomNum.number.mockReset();
    randomNum.number.mockImplementation((a, b, c) => a * b * c);

    expect(randomNum.number(10, 5, 2)).toBe(100);
    expect(randomNum.number).toHaveBeenCalled();
    expect(randomNum.number).toHaveBeenCalledTimes(1);
    expect(randomNum.number).toHaveBeenCalledWith(10, 5, 2);
  });

  it('number receives 1 param', () => {
    randomNum.number.mockReset();
    randomNum.number.mockImplementation((a) => a * 2);

    expect(randomNum.number(10)).toBe(20);
    expect(randomNum.number).toHaveBeenCalled();
    expect(randomNum.number).toHaveBeenCalledTimes(1);
    expect(randomNum.number).toHaveBeenCalledWith(10);
  });
});
