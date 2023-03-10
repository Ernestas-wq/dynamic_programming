/* Write a function howSum(targetSum, numbers), that takes in a targetSum and an array of numbers as arguments. 

this function should return an array containing any combination of elements that add up to exactly the targetSum. 
If there is no combination that adds up to the targetSum then return null 

if there are multiple combos possible can return 1 of them
*/

const howSum = (targetSum, nums, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  for (let num of nums) {
    const remainder = targetSum - num
    const remainderResult = howSum(remainder, nums, memo)
    if (remainderResult) {
      memo[targetSum] = [...remainderResult, num]
      return memo[targetSum]
    }
  }
  memo[targetSum] = null
  return null
}

console.log(howSum(7, [7, 5, 3, 4, 7])) // [3,4] || [7]
console.log(howSum(8, [2, 3, 5])) // [2,2,2,2] [3,5]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(0, [1, 2, 3])) // -> []
console.log(howSum(300, [7, 7])) // null

// [1,2,3,4]
//[4,3,2,1] ->
const howSumTabulated = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null)
  table[0] = []

  for (let i = 0; i <= targetSum; i++) {
    if (table[i]) {
      for (const num of numbers) {
        table[i + num] = [...table[i], num]
      }
    }
  }

  return table[targetSum]
}

console.log(howSumTabulated(7, [7, 5, 3, 4, 7])) // [3,4] || [7]
console.log(howSumTabulated(8, [2, 3, 5])) // [2,2,2,2] [3,5]
console.log(howSumTabulated(7, [2, 4])) // null
console.log(howSumTabulated(0, [1, 2, 3])) // -> []
console.log(howSumTabulated(300, [7, 7])) // null
