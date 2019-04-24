module.exports = function difference (a, b) {
  const out = []
  const bcounts = new Map()
  for (let el of b) {
    bcounts.set(el, (bcounts.get(el) || 0) + 1)
  }
  for (let el of a) {
    const match = bcounts.get(el)
    if (match && match > 0) {
      bcounts.set(el, match - 1)
      continue
    }
    out.push(el)
  }
  return out
}
