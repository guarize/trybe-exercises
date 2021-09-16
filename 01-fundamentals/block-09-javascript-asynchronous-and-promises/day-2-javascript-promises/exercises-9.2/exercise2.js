const promise = new Promise((resolve, reject) => {
  const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1)
  const result = arr.map((number) => number * number)
  .reduce((acc, curr) => acc + curr, 0);
  
  if (result < 8000) {
    resolve(`Promise was resolved, number: ${result}`)
  }
  reject(`Fails! Number: ${result}`)
})
.then(msg => console.log(msg))
.catch(error => console.log(error))

promise;
