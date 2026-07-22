# What Does O(n) Even Mean?

You'll see things like **O(n)**, **O(1)**, **O(log n)**, and **O(n²)** all over this site. It looks like scary math, but the idea is simple. This page explains it in plain language. When you want the fuller technical version with graphs, head to the [Time Complexity reference](../reference/time-complexity.md).

## The one-sentence version

**Big O tells you how much slower an algorithm gets as the input gets bigger.**

That's it. It answers: *"if I give this thing 10× more data, does it take 10× longer? 100× longer? barely any longer?"*

## Why we don't just use seconds

"This takes 3 seconds" is useless, because it depends on your laptop, the weather, what else is running. Instead we count **how the number of steps grows with the input size**, which we call **n**.

- `n` = how many items you're working with (list length, number of users, etc.)
- Big O = the *shape* of the growth, ignoring exact numbers.

So we say an algorithm is O(*something involving n*), and that `something` is what matters.

## The common ones, from dream to nightmare

Think of `n` as "number of people in a line you have to deal with."

| Notation | Nickname | What it feels like | Everyday version |
| --- | --- | --- | --- |
| **O(1)** | constant | instant, no matter what | grabbing the first person in line |
| **O(log n)** | logarithmic | barely grows | guessing a number 1–100 by always halving |
| **O(n)** | linear | fair and steady | shaking hands with everyone once |
| **O(n log n)** | "the good sort speed" | a bit more than linear | the fast sorting algorithms |
| **O(n²)** | quadratic | gets bad fast | everyone shakes hands with everyone |
| **O(2ⁿ)** | exponential | falls off a cliff | trying every on/off combination |

## Let's make it concrete

### O(1) — constant time

Takes the **same** number of steps no matter how big the list is.

```python
def first_item(items):
    return items[0]     # one step, always
```

Whether the list has 5 items or 5 million, grabbing index `0` is instant. That's **O(1)**.

### O(n) — linear time

The work grows **in step** with the input. Double the data, double the work.

```python
def contains(items, target):
    for item in items:      # touches each item once
        if item == target:
            return True
    return False
```

10 items → up to 10 checks. 1,000 items → up to 1,000 checks. That's **O(n)**.

### O(n²) — quadratic time

A **loop inside a loop**. For each item, you go through all the items again.

```python
def has_duplicate(items):
    for i in items:            # n times
        for j in items:        # n times each -> n × n
            ...
```

100 items → 10,000 steps. 1,000 items → a million. This is why nested loops over big data get slow. The simple sorts ([bubble](../algorithms/sorting/bubble-sort.md), [selection](../algorithms/sorting/selection-sort.md), [insertion](../algorithms/sorting/insertion-sort.md)) are O(n²).

### O(log n) — logarithmic time

Every step **throws away half** the remaining work, so it stays fast even on huge inputs.

```python
# binary search on a SORTED list: check the middle, discard half, repeat
```

A million sorted items? About **20** steps, not a million. That's the magic of [binary search](../algorithms/searching/binary-search.md).

## How to eyeball it in your own code

A few rules of thumb that cover most cases:

- One loop over the data → **O(n)**
- A loop inside a loop → **O(n²)**
- Halving the problem each step → **O(log n)**
- No loop, just a lookup or a bit of arithmetic → **O(1)**

## Why you only keep the biggest term

Big O ignores constants and smaller terms because at large `n` they stop mattering. If something does `2n + 100` steps, we just call it **O(n)** — when `n` is a million, the `× 2` and the `+ 100` are noise compared to the shape of the growth. We care about the *trend*, not the fine print.

## The takeaway

You don't need to calculate anything to use this. Just build the instinct:

> **Fewer nested loops and more "halving" = faster as data grows.**

That's the whole reason we study data structures and algorithms: picking ones with better Big O so your programs stay fast when the data gets big. Ready for the visual version? See [Time Complexity](../reference/time-complexity.md).
