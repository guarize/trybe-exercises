const source = require('../src/source');
jest.mock('../src/source');

describe('testing string functions', () => {
  it('uppercase change implementation', () => {
    source.uppercase.mockImplementation((str) => str.toLowerCase());

    expect(source.uppercase('TEST')).toBe('test');
    expect(source.uppercase).toHaveBeenCalled();
    expect(source.uppercase).toHaveBeenCalledTimes(1);
    expect(source.uppercase).toHaveBeenCalledWith('TEST');
  });

  it('firstLetter change implementation', () => {
    source.firstLetter.mockImplementation((str) => str.slice(-1));

    expect(source.firstLetter('string')).toBe('g');
    expect(source.firstLetter).toHaveBeenCalled();
    expect(source.firstLetter).toHaveBeenCalledTimes(1);
    expect(source.firstLetter).toHaveBeenCalledWith('string');
  });

  it('concat change implementation', () => {
    source.concat.mockImplementation((a, b, c) => a.concat(b, c));

    expect(source.concat('one', 'two', 'three')).toBe('onetwothree');
    expect(source.concat).toHaveBeenCalled();
    expect(source.concat).toHaveBeenCalledTimes(1);
    expect(source.concat).toHaveBeenCalledWith('one', 'two', 'three');
  });
});
