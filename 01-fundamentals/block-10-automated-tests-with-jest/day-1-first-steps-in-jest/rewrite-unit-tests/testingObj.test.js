const { obj1, obj2, obj3 } = require('./testingObj');

describe('Testing objects', () => {
  it('Tests if obj1 is equal to obj2', () => {
    expect(obj1).toEqual(obj2);
  });

  it('Tests if obj1 is different from obj3', () => {
    expect(obj1).not.toEqual(obj3);
  });

  it('Tests if obj2 is different from obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });
});
