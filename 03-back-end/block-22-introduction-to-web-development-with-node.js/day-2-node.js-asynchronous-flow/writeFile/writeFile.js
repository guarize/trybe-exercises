const { writeFile } = require('fs').promises;

const nomeDoArquivo = 'file4.txt';

const main = async () => {
  try {
    await writeFile(nomeDoArquivo, 'Meu Novo Texto 4', { flag: 'w' });
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo ${err.message}`);
  }
};

main();
