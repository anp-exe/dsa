# Cycle Detection

A **cycle** is a path that starts and ends at the same vertex. Detecting cycles matters for spotting deadlocks, validating dependency graphs (a build system with a cycle can never finish), and checking whether a graph is a tree.

The right technique depends on whether the graph is **undirected** or **directed**.

## Undirected graph — DFS

Walk with DFS. If you reach an already-visited vertex that **isn't** the neighbour you just came from, there's a cycle.

```python
def has_cycle_undirected(graph):
    visited = set()

    def dfs(vertex, parent):
        visited.add(vertex)
        for neighbour in graph[vertex]:
            if neighbour not in visited:
                if dfs(neighbour, vertex):
                    return True
            elif neighbour != parent:
                return True      # visited, and not where we came from
        return False

    for v in graph:
        if v not in visited:
            if dfs(v, None):
                return True
    return False

acyclic = {0: [1], 1: [0, 2], 2: [1]}
cyclic  = {0: [1, 2], 1: [0, 2], 2: [0, 1]}
print(has_cycle_undirected(acyclic))   # False
print(has_cycle_undirected(cyclic))    # True
```

## Directed graph — DFS with a recursion stack

In a digraph, track the vertices currently **on the recursion path**. If you reach one already on that path, you've found a **back edge** — a cycle.

```python
def has_cycle_directed(graph):
    WHITE, GRAY, BLACK = 0, 1, 2      # unvisited / in-progress / done
    color = {v: WHITE for v in graph}

    def dfs(v):
        color[v] = GRAY
        for neighbour in graph[v]:
            if color[neighbour] == GRAY:
                return True           # back edge -> cycle
            if color[neighbour] == WHITE and dfs(neighbour):
                return True
        color[v] = BLACK
        return False

    return any(color[v] == WHITE and dfs(v) for v in graph)

dag   = {0: [1], 1: [2], 2: []}
loopy = {0: [1], 1: [2], 2: [0]}
print(has_cycle_directed(dag))     # False
print(has_cycle_directed(loopy))   # True
```

## Union-Find (for undirected graphs)

A **Disjoint Set Union** structure detects cycles as you add edges: if two endpoints already share a root, adding the edge would close a cycle.

```python
def has_cycle_union_find(vertices, edges):
    parent = {v: v for v in vertices}

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]   # path compression
            x = parent[x]
        return x

    for u, v in edges:
        ru, rv = find(u), find(v)
        if ru == rv:
            return True
        parent[ru] = rv
    return False

print(has_cycle_union_find([0,1,2,3], [(0,1),(1,2),(2,0)]))  # True
```

All three run in about **O(V + E)** (Union-Find is near-linear with path compression). Union-Find also powers [Kruskal's algorithm](kruskal.md).
