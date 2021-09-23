const number = () => Math.floor(Math.random() * 101);

const uppercase = (str) => str.toUpperCase();

const firstLetter = (str) => str.charAt(0);

const concat = (first, second) => first.concat(second);

module.exports = { number, uppercase, firstLetter, concat };
