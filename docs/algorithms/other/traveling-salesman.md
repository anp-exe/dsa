# The Traveling Salesman Problem

The **Traveling Salesman Problem (TSP)** asks: given a list of cities and the distances between them, what is the **shortest possible route** that visits every city exactly once and returns to the start?

TSP is famous for being **NP-hard** — no known algorithm solves it efficiently for large inputs, and finding one (or proving it impossible) is one of the great open problems in computer science.

## Brute force (exact, tiny inputs only)

Check every possible ordering of cities and keep the cheapest. With `n` cities there are `(n − 1)!` routes, so this is only usable for a handful of cities.

```python
from itertools import permutations

def tsp_brute_force(dist, start=0):
    cities = [c for c in range(len(dist)) if c != start]
    best_route, best_cost = None, float('inf')
    for perm in permutations(cities):
        route = [start] + list(perm) + [start]
        cost = sum(dist[route[i]][route[i + 1]] for i in range(len(route) - 1))
        if cost < best_cost:
            best_cost, best_route = cost, route
    return best_route, best_cost

dist = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0],
]
print(tsp_brute_force(dist))   # ([0, 1, 3, 2, 0], 80)
```

## Nearest-neighbour heuristic (fast, approximate)

For big inputs we give up on the *exact* optimum and use a [greedy](greedy.md) heuristic: from the current city, always hop to the nearest unvisited one. Fast, but not guaranteed optimal.

```python
def tsp_nearest_neighbour(dist, start=0):
    n = len(dist)
    visited = [start]
    unvisited = set(range(n)) - {start}
    while unvisited:
        last = visited[-1]
        nxt = min(unvisited, key=lambda c: dist[last][c])
        visited.append(nxt)
        unvisited.remove(nxt)
    visited.append(start)
    cost = sum(dist[visited[i]][visited[i + 1]] for i in range(len(visited) - 1))
    return visited, cost

print(tsp_nearest_neighbour(dist))   # a good, quick route
```

## Complexity

| Approach | Time | Optimal? |
| --- | --- | --- |
| Brute force | O(n!) | yes |
| Held-Karp (DP) | O(n² · 2ⁿ) | yes |
| Nearest neighbour | O(n²) | no (approximate) |

Real-world TSP solvers combine heuristics, DP, and clever bounds to handle thousands of cities well enough for practical use.
