const myRemove = require('./myRemove');

describe('myRemove tests', () => {
  it('Tests if myRemove([1, 2, 3, 4], 3) return expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Test if myRemove([1, 2, 3, 4], 3) does not return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Tests if myRemove([1, 2, 3, 4], 5) return expected array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
