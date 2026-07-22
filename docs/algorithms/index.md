# Algorithms

An **algorithm** is a step-by-step recipe that takes input and produces the correct output in finite time. This section groups them by what they do.

## Sorting

Put elements in order. Great for learning how algorithm design and time complexity interact.

| Algorithm | Best | Average | Worst | Stable? | Notes |
| --- | --- | --- | --- | --- | --- |
| [Bubble Sort](sorting/bubble-sort.md) | O(n) | O(n²) | O(n²) | Yes | simplest; teaching tool |
| [Selection Sort](sorting/selection-sort.md) | O(n²) | O(n²) | O(n²) | No | fewest swaps |
| [Insertion Sort](sorting/insertion-sort.md) | O(n) | O(n²) | O(n²) | Yes | great on nearly-sorted data |
| [Quick Sort](sorting/quick-sort.md) | O(n log n) | O(n log n) | O(n²) | No | fast in practice, in-place |
| [Counting Sort](sorting/counting-sort.md) | O(n+k) | O(n+k) | O(n+k) | Yes | integers in a small range |
| [Radix Sort](sorting/radix-sort.md) | O(nk) | O(nk) | O(nk) | Yes | sorts by digit |
| [Merge Sort](sorting/merge-sort.md) | O(n log n) | O(n log n) | O(n log n) | Yes | reliable, needs extra space |
| [Pancake Sort 🥞](sorting/pancake-sort.md) | O(n) | O(n²) | O(n²) | No | sort by flipping prefixes |

## Searching

Find an element in a collection.

- [Linear Search](searching/linear-search.md) — O(n), works on anything.
- [Binary Search](searching/binary-search.md) — O(log n), needs sorted data.

## Graph Algorithms

- [Traversal — DFS & BFS](graphs/traversal.md)
- [Cycle Detection](graphs/cycle-detection.md)
- Shortest path: [Dijkstra's](graphs/dijkstra.md), [Bellman-Ford](graphs/bellman-ford.md)
- Minimum spanning tree: [Prim's](graphs/prim.md), [Kruskal's](graphs/kruskal.md)
- Maximum flow: [Ford-Fulkerson](graphs/ford-fulkerson.md), [Edmonds-Karp](graphs/edmonds-karp.md)

## Dynamic Programming

- [Memoization](dp/memoization.md) (top-down)
- [Tabulation](dp/tabulation.md) (bottom-up)
- [Dynamic Programming overview](dp/dynamic-programming.md)
- [0/1 Knapsack](dp/knapsack.md)

## More Algorithms

- [Euclidean Algorithm](other/euclidean.md) — greatest common divisor
- [Huffman Coding](other/huffman.md) — compression
- [Traveling Salesman](other/traveling-salesman.md) — a classic hard problem
- [Greedy Algorithms](other/greedy.md) — the greedy strategy
