const {
  Animals,
  findAnimalsByType,
  findAnimalsByName,
  getListAnimals,
  getAnimal,
  findAnimalsByAge,
} = require('../src/animals');

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch((error) =>
        expect(error.message).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    it('Retorna o objeto do animal', async () => {
      const result = await findAnimalsByAge(1);
      const expected = { name: 'Dorminhoco', age: 1, type: 'Dog' };
      return expect(result).toEqual(expected);
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    it('Retorna um erro', () => {
      expect.assertions(1);
      return expect(findAnimalsByAge(15)).rejects.toEqual(
        new Error('Nenhum animal com essa idade!')
      );
    });
  });
});
