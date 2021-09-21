const hydrate = (str) => {
  const strNumbers = str.match(/\d+/g);

  const sum = strNumbers.reduce((acc, curr) => acc + Number(curr), 0);

  if (sum === 1) return '1 copo de água';
  return `${sum} copos de água`;
};

module.exports = hydrate;
