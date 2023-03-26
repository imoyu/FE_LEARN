let index = 1;
function dividingLine(title) {
    console.log(`========= ${index ++}. ${title}`);
}

dividingLine('let 块级作用域');
if (true) {
    let b = 20;
    console.log(b)
    {
        let c = 30;
    }
    // console.log(c);
}
// console.log(b)

dividingLine('使用let关键字声明的变量具有暂时性死区特性');
var num = 10
{
    // console.log(num);
    let num;
}

dividingLine('let 与 var 题目');
// https://blog.csdn.net/caipital/article/details/108199616
let arr = [];
for (let i = 0; i < 3; i++) { // let 与 var
    arr[i] = function () {
        console.log(i);
    }
}
arr[0]();
arr[1]();
arr[2]();

dividingLine('数组解构');
let arr4 = ['a', 'f', 'k'];
let [a, b, c, d, e] = arr4
console.log(a);
console.log(b);
console.log(c);
console.log(d); // undefined
console.log(e);

dividingLine('对象解构');
let person = {name: 'lisi', age: 30, sex: '男'};
let {name, age: myAge, errKey} = person;
console.log(name)
// console.log(age)  // 未定义变量
console.log(myAge)
console.log(errKey) // undefined

dividingLine('箭头函数');
{
    let a = function () {
        console.log('aaa');
    }
    a();
    let b = () => {
        console.log('bbb');
    }
    b();

    function f() {
        console.log(this);
        return () => {
            console.log(this);
        }
    }

    // f()();
    const obj = {name: 'zhangsan'};
    const resFn = f.call(obj);
    resFn();
}

dividingLine('箭头函数this');
{
    let age = 100;
    let obj1 = {
        age: 20,
        say: () => {
            console.log(this.age);
        }
    }
    obj1.say();
    let obj2 = {
        age: 20,
        say: function () {
            console.log(this.age); // 20, this 就是 obj2
            function f1() {
                console.log(this); // 全局 context，浏览器中是 window
            }
        }

    }
    obj2.say();
    /*
    * 总结：
    * 对象中的普通方法，this 就是这个对象，方法中的方法，this 是作用域，无作用域时是 window（浏览器中非严格模式下）
    * 对象中的箭头函数，this  是作用域，无作用域时是 window（浏览器中非严格模式下）
    * */
}

dividingLine('剩余参数与扩展运算符');
{
    let arr = [1, 2, 3, 4];
    let [a, ...b] = arr;
    console.log(b);
    console.log(b instanceof Array);

    console.log(...arr);
    console.log(...b);
}

dividingLine('Array.from');
{
    let obj = {
        "0": "张三",
        "1": "李四",
        "2": "王五",
        "length": 3
    }
    let arr = Array.from(obj);
    console.log(arr);
//     1、该类数组对象必须具有length属性，用于指定数组的长度。如果没有length属性，那么转换后的数组是一个空数组。
//     2、该类数组对象的属性名必须为数值型或字符串型的数字
}

dividingLine('find, findIndex, includes 方法');
{
    let ary = [{
        id: 1,
        name: '张三'
    }, {
        id: 2,
        name: '李四'
    }];
    let target = ary.find(item => item.id === 1);
    console.log(target);

    console.log(ary.find(value => value.id === 3)); // undefined

    console.log(ary.findIndex(value => value.id === 2)); // 1
    console.log(ary.findIndex(value => value.id === 3)); // -1

    let arr = [2, 4, 6, 9, 12];
    console.log(arr.findIndex(value => value === 9)); // 3
    console.log(arr.findIndex(value => value === 19)); // -1

    console.log(arr.includes(12));
    console.log(arr.includes(13));
}

dividingLine('模板字符串');
{
    let result = {
        name: 'lucy',
        age: 12,
    }
    let html = `
        <div>
            <span>${result.name}</span>
            <span>${result.age}</span>
        </div>
    `;
    console.log(html);

    const fn = () => {
        return '我是fn函数'
    }

    html = `我是模板字符串 ${fn()}`;
    console.log(html)
}

dividingLine('startWith, endWith, repeat');
{
    let s = 'qweqwevsdfds';
    console.log(s.startsWith('qw'));
    console.log(s.endsWith('fds'));
    console.log('asd'.repeat(3));
}

dividingLine('Set');
{
    let set = new Set();
    set = new Set([1, 2, 3]);
    set.add(4).add(5);
    console.log(set);
    console.log(...set);

    set.delete(2);
    console.log(...set);

    console.log(set.has(1));
    console.log(set.has(2));

    set.forEach((value, index) => {
        console.log(value, index);
    })

    set.clear();
    console.log(set.size);
}


