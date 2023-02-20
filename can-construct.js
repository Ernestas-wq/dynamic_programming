/* 
Write a function canConstruct(target, wordBank)

The function should return a boolean value indicating wheter or not the target 
 can be constructed by concatenating elements of the word bank array

 Word bank may be reused

*/

const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === "") return true

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true
        return true
      }
    }
  }
  memo[target] = false
  return false
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
)
// Time complexit O(m*m*n) space O(m)
const canConstructTabulated = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false)
  table[0] = true

  for (let i = 0; i <= target.length; i++) {
    if (table[i]) {
      for (const word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true
        }
      }
    }
  }
  return table[target.length]
}

console.log(canConstructTabulated("abcdef", ["ab", "abc", "cd", "def", "abcd"])) // true
console.log(
  canConstructTabulated("eeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
)
