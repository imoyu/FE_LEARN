const o1 = { x: 111 };
const o2 = { y: 222 };

// 通过 o2 读写 o1 的 x 元素
Object.defineProperty(o2, 'x', {
  get() {
    return o1.x;
  },
  set(v) {
    o1.x = v;
  }
})

console.log(o2.x);

o2.x = 333;
console.log(o1.x);