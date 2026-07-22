# Selection Sort

**Selection Sort** divides the list into a sorted part (front) and an unsorted part (back). Each pass it **finds the minimum** of the unsorted part and swaps it into the next sorted slot.

## How it works

1. Find the smallest value in the whole list; swap it to index 0.
2. Find the smallest in the rest; swap it to index 1.
3. Continue until the unsorted part is empty.

## Implementation

```python
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr

print(selection_sort([64, 34, 25, 5, 22, 11, 90, 12]))
# [5, 11, 12, 22, 25, 34, 64, 90]
```

## Complexity

| Case | Time |
| --- | --- |
| Best / Average / Worst | O(n²) |
| Space | O(1) (in-place) |

The comparisons are always O(n²) regardless of input, but selection sort makes at most **n − 1 swaps** — the fewest of the simple sorts. That matters when writing to memory is expensive. It is **not stable** in its basic form.
