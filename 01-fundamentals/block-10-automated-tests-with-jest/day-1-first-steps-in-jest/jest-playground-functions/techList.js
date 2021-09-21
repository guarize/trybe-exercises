const techList = (arr, name) => {
  if (arr.length === 0) return 'Vazio!';
  return arr.sort().map((tech) => ({ tech, name }))
};

module.exports = techList;
