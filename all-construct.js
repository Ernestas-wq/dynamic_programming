/* 
Write a function allConstruct(target, wordBank)

The function should return a 2D array of all the possible ways to construct the target 

Word bank may be reused

*/

const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === "") return [[]]
  let result = []

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      const suffixWays = allConstruct(suffix, wordBank, memo)
      const targetWays = suffixWays.map((way) => [word, ...way])
      memo[target] = targetWays
      result = [...result, ...targetWays]
    }
  }
  memo[target] = result
  return result
}

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
)

console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
)
console.log(
  allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
  ])
)
// time complexity O(n^m) space O(n^m)
const allConstructTabulated = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => [])

  table[0] = [[]]

  for (let i = 0; i <= target.length; i++) {
    for (const word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const combos = table[i].map((combo) => [...combo, word])
        table[i + word.length].push(...combos)
      }
    }
  }
  return table[target.length]
}

console.log(allConstructTabulated("purple", ["purp", "p", "ur", "le", "purpl"]))
console.log(
  allConstructTabulated("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
)

console.log(
  allConstructTabulated("skateboard", [
    "bo",
    "rd",
    "ate",
    "t",
    "ska",
    "sk",
    "boar",
  ])
)
