# Dijkstra's Algorithm

**Dijkstra's algorithm** finds the **shortest path** from a source vertex to every other vertex in a **weighted graph with non-negative edge weights**. It's the classic algorithm behind GPS routing and network path-finding.

!!! warning "No negative weights"
    Dijkstra assumes all edge weights are **≥ 0**. If you have negative edges, use [Bellman-Ford](bellman-ford.md) instead.

## The idea (greedy)

Keep a tentative distance to every vertex (0 for the source, ∞ for the rest). Repeatedly pick the **closest unfinalised vertex**, finalise it, and **relax** its edges — i.e. see if going through it gives a shorter route to its neighbours. A **min-heap** (priority queue) makes picking the closest vertex efficient.

## Implementation

```python
import heapq

def dijkstra(graph, source):
    # graph: {vertex: [(neighbour, weight), ...]}
    dist = {v: float('inf') for v in graph}
    dist[source] = 0
    pq = [(0, source)]                     # (distance, vertex)

    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]:
            continue                       # stale entry, skip
        for v, weight in graph[u]:
            new_dist = dist[u] + weight
            if new_dist < dist[v]:
                dist[v] = new_dist
                heapq.heappush(pq, (new_dist, v))
    return dist

graph = {
    'A': [('B', 4), ('C', 1)],
    'B': [('D', 1)],
    'C': [('B', 2), ('D', 5)],
    'D': [],
}
print(dijkstra(graph, 'A'))
# {'A': 0, 'B': 3, 'C': 1, 'D': 4}
```

Notice the shortest way from `A` to `B` is `A → C → B` (cost 3), not the direct edge `A → B` (cost 4). Dijkstra finds that automatically.

## Reconstructing the actual path

Track each vertex's predecessor:

```python
import heapq

def dijkstra_path(graph, source, target):
    dist = {v: float('inf') for v in graph}
    prev = {v: None for v in graph}
    dist[source] = 0
    pq = [(0, source)]
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]:
            continue
        for v, w in graph[u]:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                prev[v] = u
                heapq.heappush(pq, (dist[v], v))
    # walk predecessors backwards
    path, node = [], target
    while node is not None:
        path.append(node)
        node = prev[node]
    return dist[target], path[::-1]

print(dijkstra_path(graph, 'A', 'D'))   # (4, ['A', 'C', 'B', 'D'])
```

## Complexity

| Implementation | Time |
| --- | --- |
| Binary heap (above) | O((V + E) log V) |
| Simple array | O(V²) |

Space is O(V). For graphs with negative weights, see [Bellman-Ford](bellman-ford.md).
