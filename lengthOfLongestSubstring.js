function lengthOfLongestSubstring(s) {
  const seen = new Set()
  let l = 0
  let max = 0
  for (let i = 0; i < s.length; i++)
    if (!seen.has(s[i])) {
      seen.add(s[i])
      l++
    } else {
      max = l > max ? l : max
      l = 1
      seen.delete(s[i])
    }
  return l > max ? l : max
}

console.log(lengthOfLongestSubstring("abcdef"))
console.log(lengthOfLongestSubstring("dvdf"))
