// 1 - Test whether encode and decode are functions;
// 2 - For the encode function test whether the vowels a, e, i, o, u are converted to 1, 2, 3, 4, and 5, respectively;
// 3 - For the decode function test whether the numbers 1, 2, 3, 4, and 5 are converted into the vowels a, e, i, o, u respectively;
// 4 - Test that the remaining letters/numbers are not converted for each case;
// 5 - Test that the string that is returned by the functions has the same number of characters as the string passed as parameter.

const { encoding, decoding } = require('./encodeDecode');

describe('Encode and Decode', () => {
  it('Tests if both are functions', () => {
    expect(typeof encoding).toBe('function');
    expect(typeof decoding).toBe('function');
  });

  it('Encoding "a, e, i, o, u"', () => {
    expect(encoding('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });

  it('Decoding "1, 2, 3, 4, 5"', () => {
    expect(decoding('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });

  it('Test different letters', () => {
    expect(encoding('Pedro')).toBe('P2dr4');
  });

  it('Test string length', () => {
    expect(encoding('Test').length).toBe(4);
  });
});
