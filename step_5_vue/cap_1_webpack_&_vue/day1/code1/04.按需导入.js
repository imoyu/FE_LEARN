import info, { s1, s2 as str2, say } from './03.按需导出.js'

console.log(s1)
console.log(str2)
console.log(say)

console.log(info)
console.log(info.a);


// import s1, { s2 as str2, say } from './03.按需导出.js'
// 1. 第一个变量是默认变量，即使 s1 已存在
// 2. 第一个变量不存在时不导出默认变量