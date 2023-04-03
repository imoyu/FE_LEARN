import fs from 'fs'

console.log(1111);

fs.readFile('../files/1.txt', 'utf8', (err1, r1) => {
    if (err1) {
        console.log('读取 file1 失败');
    }
    console.log(r1);
    fs.readFile('../files/2.txt', 'utf8', (err2, r2) => {
        if (err2) {
            console.log('读取 file2 失败');
        }
        console.log(r2);
        fs.readFile('../files/3.txt', 'utf8', (err3, r3) => {
            if (err3) {
                console.log('读取 file3 失败');
            }
            console.log(r3);
    });
    });
});

console.log(2222);