function Father() {
    this.b = 13;
}

let father = new Father();
console.log(father.b);

function Son() {

}

// 原型和成员都继承
Son.prototype = new Father();
Son.prototype.constructor = Son;
console.log(new Son().b);


console.log('\n==================\n')
// 函数能存储静态变量
function f() {
    b = 13; // 方法（类）中的变量可以不需要 let
    console.log(b);
}
f.a = 12;
console.log(f); // [Function: f] { a: 12 }

console.log('\n==================\n')

class A {
    a = 12;
}

// 成员与原型都继承
class B extends A {

}

let b = new B();
console.log(b.a);

A.prototype.x = 123;
console.log(b.x);