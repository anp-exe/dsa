# Ford-Fulkerson Algorithm (Maximum Flow)

The **maximum flow** problem asks: given a network of pipes with capacities, how much can flow from a **source** `s` to a **sink** `t`? Applications include traffic, bandwidth, scheduling, and bipartite matching.

**Ford-Fulkerson** is the foundational method: repeatedly find a path from source to sink that still has spare capacity (an **augmenting path**), push as much flow as that path allows, and repeat until no such path remains.

## Key ideas

- **Residual capacity** — how much more can still be pushed along an edge.
- **Augmenting path** — an s→t path where every edge has residual capacity > 0.
- **Residual graph** — includes **reverse edges**, so flow can be "cancelled" and rerouted.

## Implementation (DFS to find augmenting paths)

```python
def ford_fulkerson(capacity, source, sink):
    # capacity: dict of dicts, capacity[u][v] = capacity of edge u->v
    n = capacity
    # residual graph starts as a copy of capacities
    residual = {u: dict(v) for u, v in capacity.items()}
    for u in capacity:
        for v in capacity[u]:
            residual.setdefault(v, {}).setdefault(u, 0)

    def dfs(u, sink, visited, min_cap):
        if u == sink:
            return min_cap
        visited.add(u)
        for v, cap in residual[u].items():
            if v not in visited and cap > 0:
                pushed = dfs(v, sink, visited, min(min_cap, cap))
                if pushed > 0:
                    residual[u][v] -= pushed
                    residual[v][u] += pushed
                    return pushed
        return 0

    max_flow = 0
    while True:
        pushed = dfs(source, sink, set(), float('inf'))
        if pushed == 0:
            break
        max_flow += pushed
    return max_flow

capacity = {
    's': {'a': 10, 'b': 5},
    'a': {'b': 15, 't': 10},
    'b': {'t': 10},
    't': {},
}
print(ford_fulkerson(capacity, 's', 't'))   # 15
```

## Complexity

With plain DFS the running time depends on the flow values: **O(E · max_flow)**. Choosing augmenting paths with **BFS** instead removes that dependence and gives a polynomial bound — that refinement is the [Edmonds-Karp algorithm](edmonds-karp.md).
