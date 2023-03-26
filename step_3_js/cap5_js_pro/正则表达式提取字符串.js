let reg = /[a-z]{2,3}/g
let str = 'das123sdas123cpl31232';
let arr = str.match(reg);
for (let arrElement of arr) {
    console.log(arrElement);
    // das sda cpl
}


let s2 = 'qqaa2222aa22aa';
let reg2 = /(aa22)|(22aa)/
console.log(s2.match(reg2));
// [
//     'aa22',
//     'aa22',
//     undefined,
//     index: 2,
//     input: 'qqaa2222aa22aa',
//     groups: undefined
// ]


let reg3 = /(aa22)|(22aa)/g
console.log(s2.match(reg3));
// [ 'aa22', '22aa', '22aa' ]


let reg4 = /(aax22)|(22xaa)/g
console.log(s2.match(reg4));
// null