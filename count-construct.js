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

// console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
// console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
// console.log(
//   countConstruct("enterpotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
// )
// console.log(
//   countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//   ])
// )
console.log(
  countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
)
