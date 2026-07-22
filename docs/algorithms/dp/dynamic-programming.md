# Dynamic Programming

**Dynamic Programming (DP)** solves a complex problem by breaking it into **overlapping subproblems**, solving each subproblem **once**, and reusing the answer. It turns exponential brute-force solutions into polynomial ones.

## When does DP apply?

A problem is a DP candidate when it has both:

1. **Optimal substructure** — the best solution is built from best solutions of subproblems.
2. **Overlapping subproblems** — the same subproblems recur many times.

The classic illustration is Fibonacci. Naive recursion recomputes the same values exponentially often:

```python
def fib_slow(n):
    if n <= 1:
        return n
    return fib_slow(n - 1) + fib_slow(n - 2)   # recomputes everything
```

`fib_slow(30)` makes over a million calls. DP fixes this by remembering results.

## Two flavours of DP

- **[Memoization](memoization.md)** — *top-down*: recurse as normal, but cache each result so it's computed once.
- **[Tabulation](tabulation.md)** — *bottom-up*: fill a table from the smallest subproblems up to the answer.

```python
# Same problem, both ways:
def fib_memo(n, cache={0: 0, 1: 1}):
    if n not in cache:
        cache[n] = fib_memo(n - 1) + fib_memo(n - 2)
    return cache[n]

def fib_tab(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]

print(fib_memo(30), fib_tab(30))   # 832040 832040
```

Both run in **O(n)** time instead of O(2ⁿ). Classic DP problems include the [0/1 Knapsack](knapsack.md), longest common subsequence, edit distance, and coin change.
