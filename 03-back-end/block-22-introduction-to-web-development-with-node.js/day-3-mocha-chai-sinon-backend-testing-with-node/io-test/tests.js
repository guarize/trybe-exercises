const { expect } = require('chai');

const readTextFile = require('./index');

const FILE_CONTENT = 'Text file example.';

describe('readFile', () => {
  describe('Quando o arquivo existe', () => {
    describe('a resposta', () => {
      const response = readTextFile('text.txt');

      it('é uma string', () => {
        expect(response).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        expect(response).equal(FILE_CONTENT);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    describe('a resposta', () => {
      it('é igual a null', () => {
        const response = readTextFile('not-found.txt');
        expect(response).equal(null);
      });
    });
  });
});
