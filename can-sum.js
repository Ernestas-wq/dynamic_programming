/* 
Write a function canSum(targetSum, nums)

The function should return a boolean value indicating wheter it is possible 
to generate targetSum using members from the array

*/

const canSum = (targetSum, nums, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return true
  if (targetSum < 0) return null

  for (const num of nums) {
    const remainder = targetSum - num
    const remainderResult = canSum(remainder, nums, memo)
    if (remainderResult) {
      memo[targetSum] = true
      return true
    }
  }
  memo[targetSum] = false
  return false
}

console.log(canSum(7, [2, 3])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(8, [2, 3, 5])) // true
console.log(canSum(300, [7, 14])) // false

const canSumTabulated = (targetSum, nums) => {
  const table = Array(targetSum + 1).fill(false)
  table[0] = true

  for (let i = 0; i <= targetSum; i++) {
    for (let num of nums) {
      table[num + i] = true
    }
  }

  return table[targetSum]
}
console.log(canSumTabulated(7, [2, 3])) // true
console.log(canSumTabulated(7, [5, 3, 4, 7])) // true
console.log(canSumTabulated(7, [2, 4])) // false
console.log(canSumTabulated(8, [2, 3, 5])) // true
console.log(canSumTabulated(300, [7, 14])) // false
