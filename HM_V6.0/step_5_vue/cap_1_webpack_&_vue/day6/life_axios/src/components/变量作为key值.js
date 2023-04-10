const obj = {
  aaa: 'fasjkd',
}

const o2 = {
  bbb: 123,
  // 变量的值作为 key 值
  [obj.aaa]: 'djhajksh',
}

console.log(o2); // { bbb: 123, fasjkd: 'djhajksh' }