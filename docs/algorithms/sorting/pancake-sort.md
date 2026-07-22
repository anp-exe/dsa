# Pancake Sort 🥞

<figure markdown>
  ![Cute pancake mascot](../../assets/pancake.svg){ width="200" }
  <figcaption>Bonus round! The sort that flips like breakfast.</figcaption>
</figure>

**Pancake Sort** is a fun sorting algorithm inspired by a stack of pancakes. Imagine you can only reorder the stack by sticking a spatula in somewhere and **flipping everything above it**. The only operation you get is "reverse the first `k` elements." The goal: sort the whole stack, biggest pancake on the bottom.

!!! note "Why it's here"
    W3Schools doesn't cover pancake sort, but it's a real algorithm (famously studied in a paper co-authored by Bill Gates!) and it's the perfect excuse for a mascot. Consider it a treat 💖

## How it works

1. Find the largest pancake in the unsorted top part of the stack.
2. Flip it to the very top (if it isn't already there).
3. Flip the whole unsorted part so that largest pancake drops to the bottom of the unsorted region — its correct spot.
4. Shrink the unsorted region by one and repeat.

## Implementation

```python
def flip(arr, k):
    """Reverse the first k elements (arr[0..k-1])."""
    arr[:k] = arr[:k][::-1]

def pancake_sort(arr):
    n = len(arr)
    for size in range(n, 1, -1):
        # index of the max value within the first `size` elements
        max_index = arr.index(max(arr[:size]))
        if max_index != size - 1:
            if max_index != 0:
                flip(arr, max_index + 1)   # bring max to the top
            flip(arr, size)                # flip it down into place
    return arr

print(pancake_sort([3, 6, 1, 10, 7, 2]))
# [1, 2, 3, 6, 7, 10]
```

## Complexity

| Measure | Value |
| --- | --- |
| Time | O(n²) |
| Flips | at most 2n − 3 |
| Space | O(1) (in-place) |

Pancake sort isn't used for real-world sorting (it's O(n²)), but the "minimum number of flips" version is a genuinely hard and beloved computer-science puzzle. Now go make yourself some actual pancakes. 🥞
