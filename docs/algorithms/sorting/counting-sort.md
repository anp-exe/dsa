# Counting Sort

**Counting Sort** is a **non-comparison** sort. Instead of comparing elements, it **counts how many times each value appears**, then rebuilds the array in order. It is blazing fast when the values are integers within a small known range.

## How it works

1. Find the maximum value `k`.
2. Make a `count` array of size `k + 1`, all zeros.
3. Tally each value's occurrences.
4. Walk the counts in order, emitting each value that many times.

## Implementation

```python
def counting_sort(arr):
    if not arr:
        return arr
    k = max(arr)
    count = [0] * (k + 1)
    for x in arr:
        count[x] += 1

    result = []
    for value, c in enumerate(count):
        result.extend([value] * c)
    return result

print(counting_sort([4, 2, 2, 8, 3, 3, 1]))
# [1, 2, 2, 3, 3, 4, 8]
```

## Complexity

| Measure | Value |
| --- | --- |
| Time | O(n + k) |
| Space | O(k) |

Here `n` is the number of elements and `k` is the largest value. When `k` is not much bigger than `n`, this **beats O(n log n)** comparison sorts. But if `k` is huge (say values up to a billion), the count array becomes impractical. Counting sort is **stable** when implemented with prefix sums, and it's the engine inside [Radix Sort](radix-sort.md).
