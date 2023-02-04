/* Write a function gridTraveler(m, n) that will calculate all the possible 
ways to move through a 2D grid from top left to bottom right when you can only 
move bottom or right 

*/

const gridTraveler = (m, n, memo = {}) => {
  const key = `${m},${n}`
  if (key in memo) return memo[key]
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
  return memo[key]
}

// console.log(gridTraveler(1, 1)) // 6
// console.log(gridTraveler(2, 3)) // 3
// console.log(gridTraveler(3, 2)) // 3
// console.log(gridTraveler(3, 3)) // 6
// console.log(gridTraveler(18, 18)) // 2333606220

// Tabulate

const tabTraveler = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0))
  table[1][1] = 1

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const curr = table[i][j]
      if (j < n) {
        table[i][j + 1] += curr
      }
      if (i < m) {
        table[i + 1][j] += curr
      }
    }
  }
  return table[m][n]
}

// console.log(tabTraveler(1, 1)) // 6
// console.log(tabTraveler(2, 3)) // 3
console.log(tabTraveler(3, 2)) // 3
console.log(tabTraveler(3, 3)) // 6
console.log(tabTraveler(18, 18)) // 2333606220
