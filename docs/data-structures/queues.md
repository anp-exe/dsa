# Queues

A **queue** is a linear structure with **FIFO** order: **First In, First Out** — like a line at a coffee shop. The first person in line is served first.

## Operations

| Operation | Meaning |
| --- | --- |
| `enqueue(x)` | add `x` to the back |
| `dequeue()` | remove & return the front item |
| `peek()` | look at the front |
| `is_empty()` | is the queue empty? |
| `size()` | number of items |

## Use `collections.deque` (recommended)

A plain list makes `pop(0)` **O(n)** because everything shifts. `deque` gives **O(1)** at both ends:

```python
from collections import deque

queue = deque()
queue.append('A')      # enqueue
queue.append('B')
queue.append('C')
print(queue.popleft()) # 'A'  (front)  -> dequeue
print(queue[0])        # 'B'  (peek)
print(len(queue))      # 2
```

## A proper Queue class

```python
from collections import deque

class Queue:
    def __init__(self):
        self._items = deque()

    def enqueue(self, item):
        self._items.append(item)

    def dequeue(self):
        if self.is_empty():
            raise IndexError("dequeue from empty queue")
        return self._items.popleft()

    def peek(self):
        return self._items[0]

    def is_empty(self):
        return len(self._items) == 0

    def size(self):
        return len(self._items)
```

## Variants

- **Circular queue** — a fixed-size buffer that wraps around, reusing freed slots.
- **Deque** (double-ended) — add/remove at both ends.
- **Priority queue** — items come out by priority, not arrival order (see `heapq`, used in [Dijkstra's](../algorithms/graphs/dijkstra.md)).

## Where queues show up

- Task/job scheduling and buffers
- Breadth-First Search (see [Graph Traversal](../algorithms/graphs/traversal.md))
- Producer/consumer pipelines
