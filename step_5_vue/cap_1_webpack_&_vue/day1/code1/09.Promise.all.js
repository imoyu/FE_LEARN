import thenFs from 'then-fs'

const promiseArr = [
  thenFs.readFile('./files/3.txt', 'utf8'),
  thenFs.readFile('./files/2.txt', 'utf8'),
  thenFs.readFile('./files/1.txt', 'utf8'),
]

Promise.all(promiseArr)
    .then(([r1, r2, r3]) => {
      console.log(r1, r2, r3);
    })
    .catch((err) => {
      console.log(err);
    });

Promise.race(promiseArr).then(result => {
  console.log(result)
})