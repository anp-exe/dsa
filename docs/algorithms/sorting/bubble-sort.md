# Bubble Sort

**Bubble Sort** repeatedly steps through the list, compares each pair of neighbours, and **swaps them if they are in the wrong order**. After each full pass the largest remaining value has "bubbled up" to its correct place at the end.

## How it works

1. Compare the first two elements; swap if the left is bigger.
2. Move one step right and repeat, to the end of the unsorted part.
3. The biggest value is now last. Repeat over the shrinking unsorted region.
4. For `n` elements you need at most `n − 1` passes.

## Implementation

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

print(bubble_sort([64, 34, 25, 12, 22, 11, 90, 5]))
# [5, 11, 12, 22, 25, 34, 64, 90]
```

## Optimised version

If a full pass makes **no swaps**, the list is already sorted and we can stop early. This makes the best case **O(n)**:

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr
```

## Complexity

| Case | Time |
| --- | --- |
| Best (already sorted, optimised) | O(n) |
| Average / Worst | O(n²) |
| Space | O(1) (in-place) |

Bubble sort is **stable** and dead simple, which makes it a fantastic teaching tool — but its O(n²) growth means you'd never use it on large real data. For that, jump to [Quick Sort](quick-sort.md) or [Merge Sort](merge-sort.md).
