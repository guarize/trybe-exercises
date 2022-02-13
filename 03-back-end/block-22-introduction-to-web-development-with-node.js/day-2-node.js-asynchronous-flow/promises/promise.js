// const divideNumbers = (num1, num2) => {
//   const promise = new Promise((resolve, reject) => {
//     if (num2 === 0) reject(new Error('You can`t divide by zero'));

//     resolve(num1 / num2);
//   });

//   return promise;
// };

// divideNumbers(2, 0)
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err.message));

const fs = require('fs');

function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err.message);
      resolve(content);
    });
  });
}

readFilePromise('file1.txt')
  .then((content) => {
    console.log(`Lido file1.txt com ${content.toString('utf8')}`);
    return readFilePromise('file2.txt');
  })
  .then((content) => {
    console.log(`Lido file2.txt com ${content.toString('utf8')}`);
    return readFilePromise('file3.txt');
  })
  .then((content) => {
    console.log(`Lido file3.txt com ${content.toString('utf8')}`);
  })
  .catch((err) => {
    console.log(`Erro ao ler arquivos: ${err.message}`);
  });
