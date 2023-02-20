/* 
Write a function countConstruct(target, wordBank)

The function should return the number of ways the target can be constructed using the 
word bank 

*/

const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === "") return 1

  let count = 0

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const result = countConstruct(target.slice(word.length), wordBank, memo)
      memo[target] = result
      if (result) {
        count += result
      }
    }
  }
  memo[target] = count

  return count
}

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(
  countConstruct("enterpotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
)
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
)
console.log(
  countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
)

// Space O(n) time O(m*m*n)

const countConstructTabulated = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0)
  table[0] = 1

  for (let i = 0; i <= target.length; i++) {
    if (table[i]) {
      for (const word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] += table[i]
        }
      }
    }
  }

  return table[target.length]
}

console.log(
  countConstructTabulated("purple", ["purp", "p", "ur", "le", "purpl"])
)
console.log(
  countConstructTabulated("abcdef", ["ab", "abc", "cd", "def", "abcd"])
)
console.log(
  countConstructTabulated("enterpotentpot", [
    "a",
    "p",
    "ent",
    "enter",
    "ot",
    "o",
    "t",
  ])
)
console.log(
  countConstructTabulated("eeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
)
console.log(
  countConstructTabulated("abcdef", [
    "ab",
    "abc",
    "cd",
    "def",
    "abcd",
    "ef",
    "c",
  ])
)
