const { readFileSync } = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}
