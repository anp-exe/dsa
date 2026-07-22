# Merge Sort

**Merge Sort** is a **divide-and-conquer** algorithm: split the array in half, sort each half recursively, then **merge** the two sorted halves back together. Its running time is a rock-solid **O(n log n)** in every case.

## How it works

1. If the array has 0 or 1 elements, it's already sorted.
2. Split it into two halves.
3. Recursively merge-sort each half.
4. Merge the two sorted halves into one sorted array.

## Implementation

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

print(merge_sort([64, 34, 25, 12, 22, 11, 90, 5]))
# [5, 11, 12, 22, 25, 34, 64, 90]
```

## Complexity

| Case | Time |
| --- | --- |
| Best / Average / Worst | O(n log n) |
| Space | O(n) extra |

Merge sort is **stable** and its performance never degrades, which makes it the go-to when you need **guaranteed** O(n log n) or a stable sort. The cost is the O(n) extra memory for merging (unlike in-place [Quick Sort](quick-sort.md)). It's also the natural choice for sorting linked lists and huge external datasets.
