# Graph Traversal: DFS & BFS

**Traversal** means visiting every vertex of a [graph](../../data-structures/graphs.md) in a systematic order. The two fundamental strategies are **Depth-First Search** and **Breadth-First Search**.

We'll use an adjacency list throughout:

```python
graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0, 3],
    3: [1, 2, 4],
    4: [3],
}
```

## Depth-First Search (DFS)

DFS goes **as deep as possible** down one branch before backtracking. It's naturally recursive (or uses an explicit [stack](../../data-structures/stacks.md)).

```python
def dfs(graph, start, visited=None, order=None):
    if visited is None:
        visited, order = set(), []
    visited.add(start)
    order.append(start)
    for neighbour in graph[start]:
        if neighbour not in visited:
            dfs(graph, neighbour, visited, order)
    return order

print(dfs(graph, 0))   # [0, 1, 3, 2, 4]
```

Use DFS for: cycle detection, topological sort, connected components, maze/backtracking problems.

## Breadth-First Search (BFS)

BFS visits vertices **level by level**, nearest first, using a [queue](../../data-structures/queues.md).

```python
from collections import deque

def bfs(graph, start):
    visited = {start}
    queue = deque([start])
    order = []
    while queue:
        vertex = queue.popleft()
        order.append(vertex)
        for neighbour in graph[vertex]:
            if neighbour not in visited:
                visited.add(neighbour)
                queue.append(neighbour)
    return order

print(bfs(graph, 0))   # [0, 1, 2, 3, 4]
```

Use BFS for: **shortest path in an unweighted graph** (fewest edges), level-order problems, finding the nearest something.

## DFS vs. BFS

| | DFS | BFS |
| --- | --- | --- |
| Data structure | stack / recursion | queue |
| Explores | deep first | wide first |
| Shortest path (unweighted) | no guarantee | yes |
| Memory | O(depth) | O(width) |

Both run in **O(V + E)** — every vertex and edge is examined once.
