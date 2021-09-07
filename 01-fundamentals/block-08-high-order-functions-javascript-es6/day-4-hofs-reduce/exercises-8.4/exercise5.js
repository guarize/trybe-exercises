// 5 - Given an array of names, return the number of times the letter a appears in upper or lower case.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.join(' ').split('').reduce((acc, curr) => {
    if (curr === 'a' || curr === 'A') return acc + 1;
    return acc;
  }, 0)
}

assert.deepStrictEqual(containsA(), 20);
