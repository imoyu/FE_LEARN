import thenFs from 'then-fs'

console.log('A')
async function getAllFile() {
  console.log('B')
    /**
     * 这里会卡主，等待await后面的语句执行完
      */
  await someTimeCalculate();
  console.log('D');

}

getAllFile()
console.log('C')

function someTimeCalculate() {
  let sum = 0;
  for (let i = 0; i < 50000; i++) {
      for (let j = 0; j < 50000; j++) {
        sum += (i - j);
      }
  }
  console.log('===========', sum);
}

// A
// B
// =========== 0
// C
// D
