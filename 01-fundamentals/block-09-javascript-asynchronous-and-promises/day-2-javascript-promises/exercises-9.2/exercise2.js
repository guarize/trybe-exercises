const promise = new Promise((resolve, reject) => {
  const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);
  const result = arr.map((number) => number * number)
  .reduce((acc, curr) => acc + curr, 0);
  
  if (result < 8000) {
    resolve(result);
  }
  reject('É mais de oito mil! Essa promise deve estar quebrada!')
})
.then(sum => console.log([2, 3, 5, 10].map((number) => sum / number)))
.catch(error => console.log(error))

promise;
