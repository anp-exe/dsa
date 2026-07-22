# Quick Sort

**Quick Sort** is a **divide-and-conquer** algorithm. It picks a **pivot**, **partitions** the array so smaller values go left and larger values go right, then recursively sorts each side.

## How it works

1. Choose a pivot (here, the last element).
2. Partition: rearrange so everything ≤ pivot is left of it, everything greater is right.
3. The pivot is now in its final position.
4. Recursively quick-sort the left and right partitions.

## Implementation (in-place, Lomuto partition)

```python
def quick_sort(arr, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    if low < high:
        p = partition(arr, low, high)
        quick_sort(arr, low, p - 1)
        quick_sort(arr, p + 1, high)
    return arr

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

print(quick_sort([64, 34, 25, 12, 22, 11, 90, 5]))
# [5, 11, 12, 22, 25, 34, 64, 90]
```

## A short, readable variant

Clear but uses extra memory:

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left  = [x for x in arr if x < pivot]
    mid   = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + mid + quick_sort(right)
```

## Complexity

| Case | Time |
| --- | --- |
| Best / Average | O(n log n) |
| Worst (bad pivots) | O(n²) |
| Space | O(log n) recursion |

Quick sort is usually the **fastest general-purpose sort in practice** and sorts in place. The O(n²) worst case (e.g. already-sorted input with a naive pivot) is avoided by choosing a good pivot such as a random element or the median-of-three. It is **not stable**.
