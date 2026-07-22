# Binary Search

**Binary Search** finds a value in a **sorted** array by repeatedly halving the search range. Each comparison throws away half the remaining elements, giving **O(log n)** time.

!!! warning "Precondition"
    Binary search only works on **sorted** data. If your data isn't sorted, either sort it first or use [Linear Search](linear-search.md).

## How it works

1. Look at the middle element.
2. If it equals the target, done.
3. If the target is smaller, discard the right half; if larger, discard the left half.
4. Repeat on the surviving half until found or the range is empty.

## Implementation (iterative)

```python
def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

print(binary_search([2, 3, 5, 7, 9, 11], 7))   # 3
print(binary_search([2, 3, 5, 7, 9, 11], 6))   # -1
```

## Recursive version

```python
def binary_search(arr, target, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    if low > high:
        return -1
    mid = (low + high) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search(arr, target, mid + 1, high)
    else:
        return binary_search(arr, target, low, mid - 1)
```

## Complexity

| Case | Time |
| --- | --- |
| Best | O(1) |
| Average / Worst | O(log n) |
| Space | O(1) iterative / O(log n) recursive |

For a million sorted elements, linear search may take a million steps; binary search takes about **20**. Python's built-in `bisect` module provides production-ready binary search helpers.
