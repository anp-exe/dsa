# Memoization (Top-Down DP)

**Memoization** is dynamic programming done **top-down**: write the natural recursive solution, then **cache** each result the first time it's computed so you never recompute it. "Memo" as in *memo to self: I already solved this*.

## The pattern

1. Check a cache for the answer to this input.
2. If present, return it immediately.
3. Otherwise compute it recursively, store it, and return it.

## Fibonacci with memoization

```python
def fib(n, memo=None):
    if memo is None:
        memo = {}
    if n <= 1:
        return n
    if n in memo:
        return memo[n]
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]

print(fib(30))   # 832040  (computed in O(n), each value once)
```

## Even simpler: `functools.lru_cache`

Python can memoize any pure function for you with a decorator:

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(50))   # 12586269025
```

## Memoization vs. Tabulation

| | Memoization (top-down) | [Tabulation](tabulation.md) (bottom-up) |
| --- | --- | --- |
| Direction | recurse from the top | build from the bottom |
| Computes | only needed subproblems | usually all subproblems |
| Risk | recursion depth limits | none |
| Feel | closest to the naive recursion | often more space-efficient |

Reach for memoization when the recursive formulation is obvious and you only touch a subset of subproblems.
