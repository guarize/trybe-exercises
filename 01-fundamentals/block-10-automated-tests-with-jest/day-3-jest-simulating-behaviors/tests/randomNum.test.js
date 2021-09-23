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
