# Greedy Algorithms

A **greedy algorithm** builds a solution step by step, always taking the choice that looks **best right now** — the local optimum — hoping it leads to a global optimum. Greedy methods are simple and fast, but they only give the correct answer when the problem has the right structure.

## When greedy works

A greedy algorithm is provably correct when the problem has the **greedy-choice property** (a locally optimal choice is part of some global optimum) and **optimal substructure**. Several algorithms on this site are greedy:

- [Dijkstra's](../graphs/dijkstra.md) — always expand the closest vertex.
- [Prim's](../graphs/prim.md) and [Kruskal's](../graphs/kruskal.md) — always add the cheapest safe edge.
- [Huffman coding](huffman.md) — always merge the two least frequent nodes.

## Example: coin change (greedy)

Give change with the fewest coins by always using the largest coin that fits:

```python
def greedy_coins(amount, coins):
    coins = sorted(coins, reverse=True)
    result = []
    for coin in coins:
        while amount >= coin:
            amount -= coin
            result.append(coin)
    return result

print(greedy_coins(87, [1, 5, 10, 25]))   # [25, 25, 25, 10, 1, 1]
```

!!! warning "Greedy can be wrong"
    For standard coin systems greedy is optimal, but not for all. With coins `[1, 3, 4]` and amount `6`, greedy gives `4 + 1 + 1` (3 coins) while the optimum is `3 + 3` (2 coins). When greedy fails, use [dynamic programming](../dp/dynamic-programming.md).

## Example: activity selection

Pick the maximum number of non-overlapping activities by always choosing the one that **finishes earliest**:

```python
def activity_selection(activities):
    # activities: list of (start, finish)
    activities.sort(key=lambda a: a[1])      # by finish time
    chosen = []
    last_end = float('-inf')
    for start, finish in activities:
        if start >= last_end:
            chosen.append((start, finish))
            last_end = finish
    return chosen

print(activity_selection([(1, 3), (2, 5), (4, 7), (1, 8), (5, 9)]))
# [(1, 3), (4, 7)] -> earliest-finish choices that don't overlap
```

## Greedy vs. DP

| | Greedy | Dynamic Programming |
| --- | --- | --- |
| Choices | commit immediately | explore & combine subproblems |
| Speed | usually faster | usually slower |
| Correctness | only with greedy-choice property | broader |

Greedy is the first thing to try; if you can't prove it's correct, fall back to DP.
