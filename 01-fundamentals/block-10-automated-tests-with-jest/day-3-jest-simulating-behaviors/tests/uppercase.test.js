const source = require('../src/source');

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