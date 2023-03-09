let arrNum = [2, 6, 1, 77, 52, 25, 7];
for (let i = 0; i < arrNum.length; i++) {
    console.log(arrNum[i]);
}


let arr2 = ['red', 'green', 'blue', 'pink'];
let s = arr2.join('');
console.log(s)
console.log(arr2)

arr2[5] = 'x'
console.log(arr2);
arr2.push('xyz');
console.log(arr2);



let arr3 = ['red', 'green', 'blue', 'pink', 'purple'];
let arr3_new = []
for (let i = arr3.length - 1; i >= 0; i--) {
    arr3_new[arr3_new.length] = arr3[i];
}
console.log(arr3_new);


function f1(a, b) {
    console.log(a + b);
}

f1(1, 2);

let f2 = function (a, b) {
    console.log(a - b);
}

f2(5, 1);

// console.log(num);
console.log(num2)
var num2 = 123;

// f3() TypeError: f3 is not a function
var f3 = function () {
    console.log(333);
};

console.log('-------------')
console.log(f4); // [Function: f4]
var f4 = 1;
console.log(f4) // 1
function f4() {
    return false;
}

console.log('-------------')
var num = 10;
fun();
function fun() {
    console.log(num); // undefined
    var num = 20;
}

console.log('------------- 创建对象的3种方式');

let obj1 = {
    name: 'xiaomin',
    age: 18,
    hi: function () {
        console.log(this.name, this.age);
    },
}
let obj2 = new Object();
obj2.name = 'xx';
obj2.age = 11;
obj2.hi = function () {
    console.log(this.name, this.age);
}

function Obj(name, age, hi) {
    this.name = name;
    this.age = age;
    this.hi = hi;
}

// 箭头函数无法获取到name, age
var obj3 = new Obj('ss', 10, function () {
    console.log(this.name, this.age);
});

function hi() {
    for (let obj of arguments) {
        obj.hi();
    }
}

hi(obj1, obj2, obj3);

console.log('------------- for in 循环');
let arr = [1, 2, 3, 4, 5]
let map = {
    'a': 1,
    'b': 2,
    'c': 3
}
let obj = {
    a: 4,
    b: 5,
    c: 6
}
for (let numberx of arr) {
    process.stdout.write(numberx + ' ');
}
console.log();
for (let number in arr) {
    process.stdout.write(number + ' ');
}
console.log();

console.log('------------- set 去重');
let arr4 = ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'];
let arrSet = new Set(arr4);
console.log([...arrSet]);

console.log('------------- 查找 o 出现的次数和位置');
let target = 'abcoefoxyozzopp';
let indexes = [];
for (let i = 0; i < target.length; i++) {
    if (target.charAt(i) === 'o') {
        indexes.push(i);
    }
}
console.log('出现次数：' + indexes.length);
console.log('出现位置：' + indexes);


