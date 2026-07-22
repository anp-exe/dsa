# Radix Sort

**Radix Sort** sorts integers **digit by digit**, from the least significant digit (LSD) to the most significant, using a stable sort (like [Counting Sort](counting-sort.md)) for each digit. No direct comparisons between whole numbers.

## How it works

1. Sort by the ones digit (stably).
2. Sort by the tens digit (stably).
3. Continue up to the most significant digit.
4. Because each pass is stable, once all digits are processed the array is fully sorted.

## Implementation

```python
def counting_sort_by_digit(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    for x in arr:
        digit = (x // exp) % 10
        count[digit] += 1
    for i in range(1, 10):
        count[i] += count[i - 1]           # prefix sums -> stable
    for i in range(n - 1, -1, -1):
        digit = (arr[i] // exp) % 10
        output[count[digit] - 1] = arr[i]
        count[digit] -= 1
    return output

def radix_sort(arr):
    if not arr:
        return arr
    max_val = max(arr)
    exp = 1
    while max_val // exp > 0:
        arr = counting_sort_by_digit(arr, exp)
        exp *= 10
    return arr

print(radix_sort([170, 45, 75, 90, 802, 24, 2, 66]))
# [2, 24, 45, 66, 75, 90, 170, 802]
```

## Complexity

| Measure | Value |
| --- | --- |
| Time | O(n · k) |
| Space | O(n + b) |

`k` is the number of digits and `b` the base (10 here). For fixed-width integers `k` is constant, so radix sort runs in effectively **linear time**. It only works on data you can break into digit-like keys (integers, fixed-length strings). It is **stable**.
