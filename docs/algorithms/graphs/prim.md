# Prim's Algorithm (Minimum Spanning Tree)

A **spanning tree** connects all vertices of a graph with no cycles. The **Minimum Spanning Tree (MST)** is the spanning tree with the **smallest total edge weight** — think laying cable to connect every house for the least total wire.

**Prim's algorithm** grows the MST outward from a starting vertex, always adding the **cheapest edge that reaches a new vertex**.

## The idea (greedy)

1. Start from any vertex; put its edges in a min-heap.
2. Repeatedly pull the cheapest edge that leads to an **unvisited** vertex.
3. Add that vertex and edge to the tree; push its new edges.
4. Stop when every vertex is included.

## Implementation

```python
import heapq

def prim(graph, start):
    # graph: {vertex: [(neighbour, weight), ...]}  (undirected)
    visited = {start}
    edges = [(w, start, to) for to, w in graph[start]]
    heapq.heapify(edges)
    mst = []
    total = 0

    while edges and len(visited) < len(graph):
        weight, frm, to = heapq.heappop(edges)
        if to in visited:
            continue
        visited.add(to)
        mst.append((frm, to, weight))
        total += weight
        for nxt, w in graph[to]:
            if nxt not in visited:
                heapq.heappush(edges, (w, to, nxt))
    return mst, total

graph = {
    'A': [('B', 2), ('C', 3)],
    'B': [('A', 2), ('C', 1), ('D', 4)],
    'C': [('A', 3), ('B', 1), ('D', 5)],
    'D': [('B', 4), ('C', 5)],
}
mst, total = prim(graph, 'A')
print(total)   # 7   (edges: A-B 2, B-C 1, B-D 4)
```

## Complexity

| Implementation | Time |
| --- | --- |
| Binary heap | O(E log V) |

Prim's shines on **dense** graphs. For **sparse** graphs, [Kruskal's algorithm](kruskal.md) is often the more natural choice.
