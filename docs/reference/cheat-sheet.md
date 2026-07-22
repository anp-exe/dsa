# Cheat Sheet

A one-page recap. Use the search bar to jump to any full page.

## Sorting algorithms

| Algorithm | Best | Average | Worst | Space | Stable |
| --- | --- | --- | --- | --- | --- |
| [Bubble](../algorithms/sorting/bubble-sort.md) | O(n) | O(n²) | O(n²) | O(1) | Yes |
| [Selection](../algorithms/sorting/selection-sort.md) | O(n²) | O(n²) | O(n²) | O(1) | No |
| [Insertion](../algorithms/sorting/insertion-sort.md) | O(n) | O(n²) | O(n²) | O(1) | Yes |
| [Quick](../algorithms/sorting/quick-sort.md) | O(n log n) | O(n log n) | O(n²) | O(log n) | No |
| [Merge](../algorithms/sorting/merge-sort.md) | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| [Counting](../algorithms/sorting/counting-sort.md) | O(n+k) | O(n+k) | O(n+k) | O(k) | Yes |
| [Radix](../algorithms/sorting/radix-sort.md) | O(nk) | O(nk) | O(nk) | O(n+b) | Yes |

## Data structure operations (average)

| Structure | Access | Search | Insert | Delete |
| --- | --- | --- | --- | --- |
| [Array](../data-structures/arrays.md) | O(1) | O(n) | O(n) | O(n) |
| [Linked List](../data-structures/linked-lists.md) | O(n) | O(n) | O(1)* | O(1)* |
| [Stack](../data-structures/stacks.md) | O(n) | O(n) | O(1) | O(1) |
| [Queue](../data-structures/queues.md) | O(n) | O(n) | O(1) | O(1) |
| [Hash Table](../data-structures/hash-tables.md) | – | O(1) | O(1) | O(1) |
| [BST (balanced)](../data-structures/binary-search-trees.md) | O(log n) | O(log n) | O(log n) | O(log n) |
| [AVL Tree](../data-structures/avl-trees.md) | O(log n) | O(log n) | O(log n) | O(log n) |

\* at a known position / the head.

## Graph algorithms

| Algorithm | Purpose | Time |
| --- | --- | --- |
| [DFS / BFS](../algorithms/graphs/traversal.md) | traversal | O(V + E) |
| [Dijkstra](../algorithms/graphs/dijkstra.md) | shortest path (no negatives) | O((V+E) log V) |
| [Bellman-Ford](../algorithms/graphs/bellman-ford.md) | shortest path (+ negatives) | O(V·E) |
| [Prim](../algorithms/graphs/prim.md) / [Kruskal](../algorithms/graphs/kruskal.md) | minimum spanning tree | O(E log V) |
| [Edmonds-Karp](../algorithms/graphs/edmonds-karp.md) | maximum flow | O(V·E²) |

## Python quick reference

```python
# list as stack
stack = []; stack.append(x); stack.pop()

# deque as queue
from collections import deque
q = deque(); q.append(x); q.popleft()

# min-heap / priority queue
import heapq
h = []; heapq.heappush(h, x); heapq.heappop(h)

# built-in sort (Timsort, O(n log n), stable)
arr.sort(); sorted(arr, key=..., reverse=True)

# binary search helpers
import bisect
bisect.bisect_left(sorted_arr, x)
```
