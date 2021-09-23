const randomNum = require('../src/randomNum');

describe('#randomNum', () => {
  it('test number function`s return and times it`s been called', () => {
    randomNum.number = jest.fn().mockReturnValue(10);

    randomNum.number();
    expect(randomNum.number).toHaveBeenCalled();
    expect(randomNum.number()).toBe(10);
    expect(randomNum.number).toHaveBeenCalledTimes(2);
  });
});

describe('#randomNum newImplementation', () => {
  it('number receives 2 param', () => {
    randomNum.number.mockReset();
    randomNum.number.mockImplementationOnce((a, b) => a / b);

    expect(randomNum.number(10, 5)).toBe(2);
    expect(randomNum.number).toHaveBeenCalled();
    expect(randomNum.number).toHaveBeenCalledTimes(1);
    expect(randomNum.number).toHaveBeenCalledWith(10, 5);
  })
})