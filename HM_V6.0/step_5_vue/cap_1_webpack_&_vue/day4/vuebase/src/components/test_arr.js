let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr);

// 改变原数组 =========
arr.push(8);
console.log('push:', arr);

arr.pop();
console.log('push:', arr);

// 头部取出
arr.shift();
console.log('shift:', arr);

// 头部加入
arr.unshift(11, 22);
console.log('unshift', arr);

// 删除，替换元素
const numbers = arr.splice(1, 2);
console.log('numbers', numbers);
console.log('splice', arr);

arr.sort((a, b) => a - b);
console.log('sort', arr);

arr.reverse();
console.log('reverse', arr);

// 生成新数组，不改变原数组 =========
console.log('unChange:', arr);
console.log(arr.filter((a) => a % 2 === 1));
console.log(arr.concat([99, 88]));
console.log(arr.slice(2, 4));
console.log('unChange:', arr);