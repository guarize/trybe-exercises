const passingGrade = require('./passingGrade');
const { expect } = require('chai');

describe('Quando a média for menor que 7', () => {
  it('retorna "Fail"', () => {
    const response = passingGrade(4);
    expect(response).to.be.equals('Fail');
  });
});

describe('Quando a média for maior que 7', () => {
  it('retorna "Pass"', () => {
    const response = passingGrade(9);
    expect(response).to.be.equals('Pass');
  });
});

describe('Quando a média for igual a 7', () => {
  it('retorna "Pass"', () => {
    const response = passingGrade(7);
    expect(response).to.be.equals('Pass');
    expect(response).not.equals('Fail');
  });
});
