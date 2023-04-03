import thenFs from 'then-fs';

const thenFsArr = [
    thenFs.readFile('../files/1.txt', 'utf8'),
    thenFs.readFile('../files/2.txt', 'utf8'),
    thenFs.readFile('../files/3.txt', 'utf8'),
];

Promise.all(thenFsArr)
    .then(([r1, r2, r3]) => {
        console.log(r1, r2, r3);
    })

Promise.any(thenFsArr)
    .then((r) => {
        console.log(r);
    })