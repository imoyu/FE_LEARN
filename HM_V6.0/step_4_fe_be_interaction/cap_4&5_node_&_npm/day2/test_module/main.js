let m1 = require('./m1');
const {common} = require('./m1');
const abc = require('./m2');
const xx = require('./xx.json');

console.log(common);

console.log();
console.log(abc);
abc();

// 加载 json 文件
console.log(xx);