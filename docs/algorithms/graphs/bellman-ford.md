# Bellman-Ford Algorithm

**Bellman-Ford** finds shortest paths from a single source, and unlike [Dijkstra's](dijkstra.md) it **handles negative edge weights**. It can also **detect negative cycles** (loops whose total weight is negative, which make "shortest path" meaningless).

## The idea

**Relax every edge, V − 1 times.** After `V − 1` full passes, all shortest paths are settled (any shortest path visits at most `V − 1` edges). One more pass that still improves a distance proves a negative cycle exists.

## Implementation

```python
def bellman_ford(vertices, edges, source):
    # edges: list of (u, v, weight)
    dist = {v: float('inf') for v in vertices}
    dist[source] = 0

    # relax all edges V-1 times
    for _ in range(len(vertices) - 1):
        for u, v, w in edges:
            if dist[u] != float('inf') and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w

    # one more pass detects a negative cycle
    for u, v, w in edges:
        if dist[u] != float('inf') and dist[u] + w < dist[v]:
            raise ValueError("Graph contains a negative-weight cycle")

    return dist

vertices = ['A', 'B', 'C', 'D']
edges = [('A','B',4), ('A','C',1), ('C','B',2), ('B','D',1), ('C','D',5)]
print(bellman_ford(vertices, edges, 'A'))
# {'A': 0, 'B': 3, 'C': 1, 'D': 4}
```

## Dijkstra vs. Bellman-Ford

| | Dijkstra | Bellman-Ford |
| --- | --- | --- |
| Negative weights | no | **yes** |
| Detects negative cycles | no | **yes** |
| Time | O((V+E) log V) | O(V · E) |

Bellman-Ford is slower, so prefer Dijkstra when all weights are non-negative and reach for Bellman-Ford only when negatives are possible.
