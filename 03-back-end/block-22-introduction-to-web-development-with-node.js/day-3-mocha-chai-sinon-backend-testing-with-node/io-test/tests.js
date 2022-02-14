const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const readTextFile = require('./index');

const FILE_CONTENT = 'Text file example.';

describe('readFile', () => {
  describe('Quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(FILE_CONTENT);
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      it('é uma string', () => {
        const response = readTextFile('text.txt');

        expect(response).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        const response = readTextFile('text.txt');

        expect(response).equal(FILE_CONTENT);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    before(() => {
      sinon
        .stub(fs, 'readFileSync')
        .throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      it('é igual a null', () => {
        const response = readTextFile('not-found.txt');
        expect(response).equal(null);
      });
    });
  });
});
