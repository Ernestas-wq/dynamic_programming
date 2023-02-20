/* 
Write a function bestSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments 

The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum 

If there is a tie between shortest combos return any of them 

*/

const bestSum = (targetSum, nums, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null
  let shortestCombo = null

  for (let num of nums) {
    const remainder = targetSum - num
    const remainderResult = bestSum(remainder, nums, memo)
    if (remainderResult) {
      const combo = [...remainderResult, num]
      if (!shortestCombo || combo.length < shortestCombo.length) {
        shortestCombo = combo
      }
    }
  }
  memo[targetSum] = shortestCombo
  return shortestCombo
}

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [5, 3, 4, 8])) // [3,5]
console.log(bestSum(8, [1, 4, 5])) // [4,4]
console.log(bestSum(100, [1, 2, 5, 25])) // [(25, 25, 25, 25)]

const bestSumTabulated = (targetSum, nums) => {
  const table = Array(targetSum + 1).fill(null)
  table[0] = []

  for (let i = 0; i <= targetSum; i++) {
    if (table[i]) {
      for (const num of nums) {
        const combo = [...table[i], num]
        if (!table[i + num] || table[i + num].length > combo.length) {
          table[i + num] = combo
        }
      }
    }
  }
}

console.log(bestSumTabulated(7, [5, 3, 4, 7])) // [7]
console.log(bestSumTabulated(8, [5, 3, 4, 8])) // [3,5]
console.log(bestSumTabulated(8, [1, 4, 5])) // [4,4]
console.log(bestSumTabulated(100, [1, 2, 5, 25])) // [(25, 25, 25, 25)]
