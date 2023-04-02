const custom = require('./08.模块作用域')

console.log(custom)

module.exports.xxx = 'avc'
exports = {
    aaa: 123,
    bbb: 312,
}
console.log(module);