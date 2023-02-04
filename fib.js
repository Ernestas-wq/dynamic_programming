/* Fib function */

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n <= 2) return 1
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}
console.log(fib(6)) // 8
console.log(fib(7)) // 13
console.log(fib(8)) // 21
console.log(fib(50)) // 12586269025

// tabulate

const fibTab = (n) => {
  const table = new Array(n + 1).fill(0)
  table[1] = 1

  for (let i = 0; i < n; ++i) {
    table[i + 1] += table[i]
    table[i + 2] += table[i]
  }
  return table[n]
}

console.log(fibTab(6)) // 8
console.log(fibTab(7)) // 13
console.log(fibTab(8)) // 21
console.log(fibTab(50)) // 12586269025
