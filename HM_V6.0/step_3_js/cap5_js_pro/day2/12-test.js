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
    // 方法中这种成员的定义是无效的，既不是静态成员，也不是普通成员（this）
    // 作为方法中的变量，运行 f() 时报错
    // Class 中的成员可以不加 let，并且直接就是成员
    b = 13;
    console.log(b);
}
f()
// 静态成员
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