# Data Structures

A **data structure** organises data so operations on it (insert, delete, search, update) are efficient. This section covers the classics, from the humble array up to graphs.

## The line-up

| Structure | Great at | Weak at |
| --- | --- | --- |
| [Array](arrays.md) | Index access `O(1)`, cache-friendly | Insert/delete in the middle `O(n)` |
| [Linked List](linked-lists.md) | Insert/delete at a known node `O(1)` | Random access `O(n)` |
| [Stack](stacks.md) | LIFO push/pop `O(1)` | Searching |
| [Queue](queues.md) | FIFO enqueue/dequeue `O(1)` | Searching |
| [Hash Table](hash-tables.md) | Average lookup/insert `O(1)` | Ordering, worst-case `O(n)` |
| [Tree](trees.md) / [BST](binary-search-trees.md) | Sorted data, search `O(log n)` | Can degrade if unbalanced |
| [AVL Tree](avl-trees.md) | Guaranteed `O(log n)` (self-balancing) | More complex to implement |
| [Graph](graphs.md) | Modelling networks & relationships | Many algorithms are costly |

## Two mental buckets

- **Linear** structures lay data out in a line: arrays, linked lists, stacks, queues.
- **Non-linear** structures branch: trees (hierarchies) and graphs (arbitrary networks).
