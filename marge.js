function marge(
  intervals = [
    [1, 69],
    [26, 51],
  ]
) {
  const a = Math.min(...intervals[0])
  const b = Math.max(...intervals[0])
  const c = Math.min(...intervals[1])
  const d = Math.max(...intervals[1])
  if (c > b || d < a)
    return [
      [a, b],
      [c, d],
    ]
  return [a < c ? a : c, d < b ? b : d]
}

console.log(marge())
