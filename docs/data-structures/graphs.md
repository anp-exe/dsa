# Graphs

A **graph** models **relationships**: a set of **vertices** (nodes) connected by **edges** (links). Unlike a tree, a graph can have cycles, disconnected parts, and any wiring you like. Social networks, maps, the web, and dependency systems are all graphs.

## Kinds of graph

- **Undirected** — edges go both ways (friendship).
- **Directed (digraph)** — edges have a direction (one-way street, "follows").
- **Weighted** — edges carry a cost/distance.
- **Unweighted** — every edge counts the same.

## Two standard representations

### Adjacency list (best for sparse graphs)

Each vertex maps to its neighbours. Compact and the most common choice:

```python
graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0, 3],
    3: [1, 2, 4],
    4: [3],
}
```

### Adjacency matrix (best for dense graphs)

A `V x V` grid where `matrix[i][j] = 1` means "edge from i to j":

```python
#      0  1  2  3  4
matrix = [
    [0, 1, 1, 0, 0],  # 0
    [1, 0, 0, 1, 0],  # 1
    [1, 0, 0, 1, 0],  # 2
    [0, 1, 1, 0, 1],  # 3
    [0, 0, 0, 1, 0],  # 4
]
```

| | Adjacency list | Adjacency matrix |
| --- | --- | --- |
| Space | O(V + E) | O(V²) |
| Check edge (u,v) | O(degree) | O(1) |
| Best for | sparse graphs | dense graphs |

## A reusable weighted-graph class

```python
class Graph:
    def __init__(self, directed=False):
        self.directed = directed
        self.adj = {}

    def add_vertex(self, v):
        self.adj.setdefault(v, [])

    def add_edge(self, u, v, weight=1):
        self.add_vertex(u); self.add_vertex(v)
        self.adj[u].append((v, weight))
        if not self.directed:
            self.adj[v].append((u, weight))

g = Graph()
g.add_edge('A', 'B', 4)
g.add_edge('A', 'C', 1)
g.add_edge('C', 'B', 2)
print(g.adj['A'])   # [('B', 4), ('C', 1)]
```

## What you can do with graphs

- **[Traversal](../algorithms/graphs/traversal.md)** — visit every vertex (DFS, BFS).
- **[Cycle detection](../algorithms/graphs/cycle-detection.md)** — is there a loop?
- **[Shortest paths](../algorithms/graphs/dijkstra.md)** — Dijkstra, Bellman-Ford.
- **[Minimum spanning tree](../algorithms/graphs/prim.md)** — Prim, Kruskal.
- **[Maximum flow](../algorithms/graphs/ford-fulkerson.md)** — Ford-Fulkerson, Edmonds-Karp.
