const source = require('../src/source');

// 5 - Using the same functions as in the previous exercise, repeat the implementation for the first function. After repeating the implementation, restore the original implementation and create the necessary tests to validate it.

it('uppercase spyOn', () => {
  const mockUppercase = jest
    .spyOn(source, 'uppercase')
    .mockImplementation((str) => str.toLowerCase());

  expect(mockUppercase('TEST')).toBe('test');
  expect(mockUppercase).toHaveBeenCalled();
  expect(mockUppercase).toHaveBeenCalledTimes(1);
  expect(mockUppercase).toHaveBeenCalledWith('TEST');

  source.uppercase.mockRestore();

  expect(source.uppercase('test')).toBe('TEST');
});
