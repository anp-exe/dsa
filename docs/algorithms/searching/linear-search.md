# Linear Search

**Linear Search** is the simplest way to find a value: check every element one by one until you find a match or run out of elements. It works on **any** list, sorted or not.

## Implementation

```python
def linear_search(arr, target):
    for i, value in enumerate(arr):
        if value == target:
            return i          # found -> return the index
    return -1                 # not found

print(linear_search([3, 7, 2, 9, 5], 9))   # 3
print(linear_search([3, 7, 2, 9, 5], 8))   # -1
```

## Complexity

| Case | Time |
| --- | --- |
| Best (first element) | O(1) |
| Average / Worst | O(n) |
| Space | O(1) |

Linear search is the right tool when the data is **unsorted**, **small**, or searched only occasionally. If the data is sorted and you search it often, [Binary Search](binary-search.md) is dramatically faster.
