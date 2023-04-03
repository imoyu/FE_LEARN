import thenFs from 'then-fs'

// 执行顺序不一定
thenFs.readFile('../files/1.txt', 'utf8')
    .then((r) => {
        console.log(r);
    });
thenFs.readFile('../files/2.txt', 'utf8')
    .then((r) => {
        console.log(r);
    });
thenFs.readFile('../files/3.txt', 'utf8')
    .then((r) => {
        console.log(r);
    });
