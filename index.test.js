const assert = require('assert')
const diff = require('.')

const testSet = [
  {
    a: [1, 2, 3, 4],
    b: [1, 2, 3],
    expected: [4]
  },
  {
    a: [1, 1, 2, 3, 4],
    b: [1, 2, 3],
    expected: [1, 4]
  },
  {
    a: [1, 2, 3, 4, 1],
    b: [1, 2, 3],
    expected: [4, 1]
  },
  {
    a: [1, 4, 5, 3, 2, 1],
    b: [6, 3, 1],
    expected: [4, 5, 2, 1]
  },
  {
    a: [6, 3, 1],
    b: [1, 4, 5, 3, 2, 1],
    expected: [6]
  }
]

for (let test of testSet) {
  assert.deepStrictEqual(diff(test.a, test.b), test.expected)
}

console.log('All tests pass')
