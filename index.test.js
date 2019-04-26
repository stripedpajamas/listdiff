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
  const want = test.expected
  const got = diff(test.a, test.b)
  const error = `\nwanted: ${want}\ngot ${got};\ninputs:\n\ta: ${test.a}\n\tb: ${test.b}`
  assert.deepStrictEqual(want, got, error)
}

// confirm that input arrays are not mutated
const handler = {
  set: () => { throw new Error('attempt to modify input array') }
}
const a = new Proxy([1, 2, 3], handler)
const b = new Proxy([3, 2, 1], handler)

diff(a, b)


console.log('All tests pass')
