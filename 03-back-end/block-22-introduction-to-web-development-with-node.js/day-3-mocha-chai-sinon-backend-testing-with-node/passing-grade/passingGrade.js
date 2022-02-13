const passingGrade = (grade) => {
  if (grade < 7) return 'Fail';

  return 'Pass';
};

module.exports = passingGrade;
