const source = require('../src/source');

// 1 - Create a function that generates a random number between 0 and 100. You will also create the tests for this function. Using the mock, set the default return to 10. Test whether the function was called, what it returned, and how many times it was called.

describe('#source', () => {
  it('test number function`s return and times it`s been called', () => {
    source.number = jest.fn().mockReturnValue(10);

    source.number();
    expect(source.number).toHaveBeenCalled();
    expect(source.number()).toBe(10);
    expect(source.number).toHaveBeenCalledTimes(2);
  });
});

// 2 - With the same function as in the previous exercise, using mock, create a new implementation, which should receive two parameters and return the division of the first by the second. This implementation should occur only once. Make the necessary tests.

describe('#source newImplementation', () => {
  it('number receives 2 param', () => {
    source.number.mockReset();
    source.number.mockImplementationOnce((a, b) => a / b);

    expect(source.number(10, 5)).toBe(2);
    expect(source.number).toHaveBeenCalled();
    expect(source.number).toHaveBeenCalledTimes(1);
    expect(source.number).toHaveBeenCalledWith(10, 5);
  });

  // 3 - Still with the same function as in the first exercise, using the mock, create a new implementation that takes three parameters and returns its multiplication. After testing it, reset your implementation and create a new one that takes one parameter and returns its double. Make the necessary tests.

  it('number receives 3 param', () => {
    source.number.mockReset();
    source.number.mockImplementation((a, b, c) => a * b * c);

    expect(source.number(10, 5, 2)).toBe(100);
    expect(source.number).toHaveBeenCalled();
    expect(source.number).toHaveBeenCalledTimes(1);
    expect(source.number).toHaveBeenCalledWith(10, 5, 2);
  });

  it('number receives 1 param', () => {
    source.number.mockReset();
    source.number.mockImplementation((a) => a * 2);

    expect(source.number(10)).toBe(20);
    expect(source.number).toHaveBeenCalled();
    expect(source.number).toHaveBeenCalledTimes(1);
    expect(source.number).toHaveBeenCalledWith(10);
  });
});
