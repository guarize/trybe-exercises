const source = require('../src/source');
jest.mock('../src/source');

// Within the same file, create three functions. The first one should take a string and return it in uppercase. The second should also take a string and return only the first letter. The third should take two strings and concatenate them. Mock up the file. Make a new implementation for the first function, but now it must return the string in lower case. For the second function, a new implementation should return the last letter of a string. The third should take three strings and concatenate them.

describe('testing string functions', () => {
  it('uppercase change implementation', () => {
    source.uppercase.mockImplementationOnce((str) => str.toLowerCase());

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
