const number = () => Math.floor(Math.random() * 101);

const uppercase = (str) => str.toUpperCase();

const firstLetter = (str) => str.charAt(0);

const concat = (a, b) => a.concat(b);

module.exports = { number, uppercase, firstLetter, concat };
