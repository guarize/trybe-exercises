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
});
