# Edmonds-Karp Algorithm (Maximum Flow)

**Edmonds-Karp** is a specific, well-behaved version of [Ford-Fulkerson](ford-fulkerson.md). The only change: it always picks the augmenting path with the **fewest edges**, found with **BFS** instead of DFS. That single choice gives a running time that no longer depends on the size of the capacities.

## Why BFS helps

By always augmenting along the **shortest** (fewest-edge) path, Edmonds-Karp guarantees a polynomial number of augmenting steps, regardless of how large the capacities are. Plain Ford-Fulkerson with DFS can, on adversarial inputs, take a number of steps proportional to the max flow value.

## Implementation

```python
from collections import deque

def edmonds_karp(capacity, source, sink):
    residual = {u: dict(v) for u, v in capacity.items()}
    for u in capacity:
        for v in capacity[u]:
            residual.setdefault(v, {}).setdefault(u, 0)

    def bfs_path():
        parent = {source: None}
        q = deque([source])
        while q:
            u = q.popleft()
            for v, cap in residual[u].items():
                if v not in parent and cap > 0:
                    parent[v] = u
                    if v == sink:
                        return parent
                    q.append(v)
        return None

    max_flow = 0
    while True:
        parent = bfs_path()
        if parent is None:
            break
        # find bottleneck capacity along the path
        v, bottleneck = sink, float('inf')
        while parent[v] is not None:
            u = parent[v]
            bottleneck = min(bottleneck, residual[u][v])
            v = u
        # push flow and update residuals
        v = sink
        while parent[v] is not None:
            u = parent[v]
            residual[u][v] -= bottleneck
            residual[v][u] += bottleneck
            v = u
        max_flow += bottleneck
    return max_flow

capacity = {
    's': {'a': 10, 'b': 5},
    'a': {'b': 15, 't': 10},
    'b': {'t': 10},
    't': {},
}
print(edmonds_karp(capacity, 's', 't'))   # 15
```

## Complexity

| Algorithm | Time |
| --- | --- |
| Ford-Fulkerson (DFS) | O(E · max_flow) |
| **Edmonds-Karp (BFS)** | **O(V · E²)** |

Edmonds-Karp's bound depends only on the graph size, not the capacity numbers, which makes it the safer default of the two.
