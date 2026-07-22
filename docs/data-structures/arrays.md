# Arrays

An **array** stores multiple elements in a single, ordered container. It is the most fundamental data structure and underpins many others.

In Python we use the built-in **list**, which behaves like a dynamic array:

```python
my_array = [7, 12, 9, 4, 11]
```

!!! note "List vs. array in Python"
    Technically `[...]` creates a Python `list`, not a fixed-size C-style array. For learning DSA the list works perfectly. When you need true numeric arrays (fixed type, less memory) reach for the `array` module or NumPy.

## Indexing

Every element has an **index** — its position. Python uses **zero-based** indexing, so the first element is at index `0`:

```python
my_array = [7, 12, 9, 4, 11]
print(my_array[0])   # 7  (first)
print(my_array[4])   # 11 (last)
print(my_array[-1])  # 11 (last, negative index)
```

## Common operations

```python
arr = [7, 12, 9, 4, 11]

arr.append(20)        # add to the end        -> O(1) amortised
arr.insert(1, 99)     # insert at index 1     -> O(n)
arr.pop()             # remove & return last  -> O(1)
arr.pop(0)            # remove from front     -> O(n)
value = arr[2]        # access by index       -> O(1)
arr[2] = 8            # update by index       -> O(1)
length = len(arr)     # size                  -> O(1)
```

## Complexity

| Operation | Time |
| --- | --- |
| Access by index | O(1) |
| Search (unsorted) | O(n) |
| Insert/delete at end | O(1) amortised |
| Insert/delete at start/middle | O(n) |

## Example algorithm: find the lowest value

Because arrays are indexed and contiguous, scanning them is simple and fast:

```python
my_array = [7, 12, 9, 4, 11]
min_val = my_array[0]
for value in my_array:
    if value < min_val:
        min_val = value
print("Lowest value:", min_val)   # 4
```

This visits each element once, so it runs in **O(n)** time. Arrays are the natural home for the [sorting](../algorithms/index.md#sorting) and [searching](../algorithms/searching/linear-search.md) algorithms in the next section.
