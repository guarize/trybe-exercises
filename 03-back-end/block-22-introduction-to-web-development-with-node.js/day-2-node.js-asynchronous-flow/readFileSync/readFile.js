// const { readFile } = require('fs');

// const nomeDoArquivo = 'meu-arquivo.txt';

// readFile(nomeDoArquivo, 'utf8', (err, content) => {
//   if (err) {
//     console.error(
//       `Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`,
//     );
//     process.exit(1);
//   }

//   console.log(`Conteúdo do arquivo: ${content}`);
// });

const { readFile } = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

readFile(nomeDoArquivo, 'utf8')
  .then((content) => {
    console.log(`Conteúdo do arquivo: ${content}`);
  })
  .catch((err) => {
    console.error(
      `Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`,
    );
    process.exit(1);
  });
