# A Simple Algorithm: Find the Lowest Value

Let's write a first real algorithm using an array (a Python list). Goal: **find the smallest value** in a list of numbers.

## The idea

1. Assume the first element is the smallest so far.
2. Walk through every element.
3. Whenever you see something smaller, remember it instead.
4. When you reach the end, the remembered value is the minimum.

## Implementation

```python
my_array = [7, 12, 9, 4, 11]

min_val = my_array[0]          # step 1
for value in my_array:         # step 2
    if value < min_val:        # step 3
        min_val = value

print("Lowest value:", min_val)   # step 4 -> 4
```

## Why this matters: time complexity

The loop looks at **every** element exactly once. With 5 elements it runs 5 times; with 1,000 elements it runs 1,000 times. The work grows **linearly** with the size of the input, written **O(n)**.

Almost every algorithm on this site comes with its time complexity, because knowing how an algorithm scales is as important as knowing that it is correct. See the [Time Complexity](../reference/time-complexity.md) page for the full story on Big O notation.

!!! note "Reusable version"
    Python has `min()` built in, but writing it yourself is the point — you now understand the pattern behind a linear scan.

    ```python
    def find_lowest(arr):
        low = arr[0]
        for v in arr:
            if v < low:
                low = v
        return low
    ```
