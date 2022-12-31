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

console.log(canConstruct("abcdf", ["ab", "abc", "cd", "def", "abcd"]))
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
