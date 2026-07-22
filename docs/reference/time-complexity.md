# Time Complexity & Big O

**Time complexity** describes how an algorithm's running time grows as the input size `n` grows. We express it with **Big O notation**, which captures the dominant term and ignores constants — because what matters at scale is the *shape* of the growth, not the exact machine.

## The common classes, fastest to slowest

| Big O | Name | Example |
| --- | --- | --- |
| O(1) | constant | array index, hash lookup (avg) |
| O(log n) | logarithmic | [binary search](../algorithms/searching/binary-search.md) |
| O(n) | linear | [linear search](../algorithms/searching/linear-search.md), one loop |
| O(n log n) | linearithmic | [merge sort](../algorithms/sorting/merge-sort.md), [quick sort](../algorithms/sorting/quick-sort.md) avg |
| O(n²) | quadratic | [bubble](../algorithms/sorting/bubble-sort.md)/[selection](../algorithms/sorting/selection-sort.md)/[insertion](../algorithms/sorting/insertion-sort.md) sort |
| O(2ⁿ) | exponential | naive recursive Fibonacci, subset brute force |
| O(n!) | factorial | brute-force [TSP](../algorithms/other/traveling-salesman.md) |

As `n` grows, the gap between these explodes. For `n = 1,000,000`: O(log n) ≈ 20 steps, O(n) = a million, O(n²) = a trillion.

## How to read the growth

```text
operations
  ^
  |                                      O(2^n)   O(n^2)
  |                                    /        /
  |                                  /        /
  |                                /       /
  |                              /      /        O(n log n)
  |                            /     /        /
  |                          /    /       /          O(n)
  |                        /   /      /         ____/
  |                      / /      / ____/______------  O(log n)
  |__________________/_/___/__/______________________  O(1)
  +-------------------------------------------------->  input size n
```

## Best, average, worst

An algorithm can behave differently depending on the input:

- **Best case** — the luckiest input (e.g. [bubble sort](../algorithms/sorting/bubble-sort.md) on already-sorted data is O(n)).
- **Average case** — typical/random input.
- **Worst case** — the input that stresses it most (e.g. [quick sort](../algorithms/sorting/quick-sort.md) with terrible pivots is O(n²)).

Big O usually refers to the **worst case** unless stated otherwise.

## Space complexity

The same idea applies to **memory**. [Merge sort](../algorithms/sorting/merge-sort.md) is O(n log n) time but needs O(n) extra space; [bubble sort](../algorithms/sorting/bubble-sort.md) is slower but sorts in O(1) extra space. Real choices trade time against space.

## Rules of thumb for reading code

- A single loop over `n` items → **O(n)**.
- A loop inside a loop → **O(n²)**.
- Halving the problem each step → **O(log n)**.
- Divide-and-conquer that splits and recombines linearly → **O(n log n)**.
