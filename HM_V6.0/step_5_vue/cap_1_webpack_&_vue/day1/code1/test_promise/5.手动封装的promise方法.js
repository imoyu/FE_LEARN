import fs from 'fs';

function getFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

getFile('../files/2.txt')
    .then((r1) => {
        console.log(r1);
    }, (err) => {
        console.log(err);
    })


function timeOut(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(seconds + '秒后执行');
            resolve();
        }, seconds * 1000);
    });
}
timeOut(1)
    .then(() => {
        return timeOut(3);
    })
    .then(() => {
        return timeOut(5);
    })
