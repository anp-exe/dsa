# The 0/1 Knapsack Problem

A thief has a knapsack that holds at most `W` weight. Each item has a **weight** and a **value**, and can be taken **once or not at all** (that's the "0/1"). Which items maximise the total value without exceeding `W`?

This is the textbook example of two-dimensional [dynamic programming](dynamic-programming.md).

## Brute force (exponential)

Try every subset of items — O(2ⁿ). Fine for tiny inputs, hopeless otherwise. DP does far better.

## Tabulation solution — O(n · W)

Build a table `dp[i][c]` = the best value using the first `i` items with capacity `c`. For each item you choose the better of **skipping it** or **taking it**:

```python
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for c in range(capacity + 1):
            # option 1: skip item i
            dp[i][c] = dp[i - 1][c]
            # option 2: take item i (if it fits)
            if weights[i - 1] <= c:
                take = dp[i - 1][c - weights[i - 1]] + values[i - 1]
                dp[i][c] = max(dp[i][c], take)

    return dp[n][capacity]

weights = [1, 2, 3]
values  = [6, 10, 12]
print(knapsack(weights, values, 5))   # 22  (items with weight 2 and 3)
```

## Recovering which items were chosen

Walk the table backwards from `dp[n][W]`:

```python
def knapsack_items(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for c in range(capacity + 1):
            dp[i][c] = dp[i - 1][c]
            if weights[i - 1] <= c:
                dp[i][c] = max(dp[i][c],
                               dp[i - 1][c - weights[i - 1]] + values[i - 1])

    chosen, c = [], capacity
    for i in range(n, 0, -1):
        if dp[i][c] != dp[i - 1][c]:      # item i was taken
            chosen.append(i - 1)
            c -= weights[i - 1]
    return dp[n][capacity], sorted(chosen)

print(knapsack_items([1, 2, 3], [6, 10, 12], 5))   # (22, [1, 2])
```

## Complexity

| Approach | Time | Space |
| --- | --- | --- |
| Brute force | O(2ⁿ) | O(n) |
| DP tabulation | O(n · W) | O(n · W) |

Note O(n · W) is *pseudo-polynomial*: it depends on the numeric capacity `W`, not just the count of items. It can be space-optimised to a single 1-D row of length `W + 1`.
