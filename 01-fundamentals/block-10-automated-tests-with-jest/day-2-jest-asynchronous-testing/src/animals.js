const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  });

const getListAnimals = (type) => findAnimalsByType(type).then((list) => list);

// 6.1 - Add a function to search by animal name;
const findAnimalsByName = (name) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalObj = Animals.find((animal) => animal.name === name);
      if (animalObj) {
        return resolve(animalObj);
      }

      return reject('Nenhum animal com esse nome!');
    }, 100);
  });

const getAnimal = (name) => findAnimalsByName(name).then((animal) => animal);

module.exports = {
  Animals,
  findAnimalsByType,
  findAnimalsByName,
  getListAnimals,
  getAnimal,
};
