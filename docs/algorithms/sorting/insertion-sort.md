# Insertion Sort

**Insertion Sort** builds the sorted list one element at a time, exactly like sorting playing cards in your hand: pick the next card and slide it back into its correct position among the cards you already sorted.

## How it works

1. Start from the second element (the first is trivially "sorted").
2. Compare it leftwards and shift bigger elements one slot right.
3. Drop the element into the gap.
4. Repeat for every element.

## Implementation

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

print(insertion_sort([64, 34, 25, 12, 22, 11, 90, 5]))
# [5, 11, 12, 22, 25, 34, 64, 90]
```

## Complexity

| Case | Time |
| --- | --- |
| Best (already sorted) | O(n) |
| Average / Worst | O(n²) |
| Space | O(1) (in-place) |

Insertion sort is **stable**, in-place, and genuinely fast on **small or nearly-sorted** inputs — which is why real libraries switch to it for tiny sub-arrays inside bigger sorts.
