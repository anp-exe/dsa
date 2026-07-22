# Kruskal's Algorithm (Minimum Spanning Tree)

**Kruskal's algorithm** builds the [Minimum Spanning Tree](prim.md) from the **edges up**: sort every edge by weight, then add them cheapest-first, **skipping any edge that would form a cycle**.

## The idea (greedy + Union-Find)

1. Sort all edges by weight, ascending.
2. Walk through them. Add an edge only if its two endpoints are in **different** components (otherwise it makes a cycle).
3. Use a **Union-Find** (disjoint set) structure to test and merge components fast.
4. Stop once you've added `V − 1` edges.

## Implementation

```python
def kruskal(vertices, edges):
    # edges: list of (weight, u, v)
    parent = {v: v for v in vertices}
    rank = {v: 0 for v in vertices}

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    def union(a, b):
        ra, rb = find(a), find(b)
        if ra == rb:
            return False           # same set -> would cycle
        if rank[ra] < rank[rb]:
            ra, rb = rb, ra
        parent[rb] = ra
        if rank[ra] == rank[rb]:
            rank[ra] += 1
        return True

    mst, total = [], 0
    for weight, u, v in sorted(edges):
        if union(u, v):
            mst.append((u, v, weight))
            total += weight
    return mst, total

vertices = ['A', 'B', 'C', 'D']
edges = [(2,'A','B'), (3,'A','C'), (1,'B','C'), (4,'B','D'), (5,'C','D')]
mst, total = kruskal(vertices, edges)
print(total)   # 7
```

## Prim vs. Kruskal

| | Prim | Kruskal |
| --- | --- | --- |
| Grows by | vertex | edge |
| Helper | min-heap | Union-Find |
| Best for | dense graphs | sparse graphs |
| Time | O(E log V) | O(E log E) |

Both are greedy and both return an MST of the same total weight.
