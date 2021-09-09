// 5 - Given an array of names, return the number of times the letter a appears in upper or lower case.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => names.join(' ').split('')
.reduce((acc, curr) => (curr === 'a' || curr === 'A') ? acc + 1 : acc, 0);

assert.deepStrictEqual(containsA(), 20);
