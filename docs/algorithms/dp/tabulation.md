# Tabulation (Bottom-Up DP)

**Tabulation** is dynamic programming done **bottom-up**: instead of recursing, you fill a **table** starting from the smallest subproblems and working up to the answer you want. No recursion, no cache dictionary — just a loop over a table.

## The pattern

1. Define a table (array) indexed by subproblem.
2. Fill in the base cases.
3. Iterate, computing each entry from already-filled entries.
4. The final entry is your answer.

## Fibonacci with tabulation

```python
def fib(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]

print(fib(30))   # 832040
```

## Space optimisation

Often you only need the last few entries, so you can drop the whole table:

```python
def fib(n):
    prev, curr = 0, 1
    for _ in range(n):
        prev, curr = curr, prev + curr
    return prev

print(fib(30))   # 832040  -> O(1) space
```

## Tabulation vs. Memoization

- **Tabulation** avoids recursion (no stack-overflow risk) and is often more memory-efficient after optimisation.
- **[Memoization](memoization.md)** only computes the subproblems you actually need and mirrors the naive recursion more closely.

Both are valid DP; pick whichever makes the specific problem clearer. See the [0/1 Knapsack](knapsack.md) for a two-dimensional tabulation example.
