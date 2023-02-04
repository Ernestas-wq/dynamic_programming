# Intro into dynamic programming

Dynamic programming solves:

1. Can you do it? Yes/no -> Decision problem
2. How will you do it? -> Combinatoric problem
3. What is the best way to do it? -> Optimization problem

## Memoization recipe: 
1. Make it work (brute force recursive solution)
  1.1 Visualize the problem as a tree
  1.2 Implement the tree using recursion
  1.3 Test it 
2. Make it faster
  2.1 Add memo object
  2.2 Add a base case to return memo values 
  2.3 Store return values in the memo  

## Tabulation recipe: 

1. Visualize it as a table 
2. Size the table based on inputs 
3. Initialize the table with default values
4. Seed the trivial answer into the table (base case)
5. Iterate through the table 
6. Fill further positions with current position