# Hash Tables

A **hash table** stores data as **key → value** pairs and gives you **average O(1)** lookup, insert, and delete. It is the machinery behind Python's `dict` and `set`.

## The core idea

A **hash function** turns a key into an integer index into an underlying array (the "buckets"):

```python
def simple_hash(key, size=10):
    return sum(ord(c) for c in key) % size

print(simple_hash("Bob"))    # same key -> same index, every time
```

Good hash functions spread keys evenly and are fast to compute. Because we take the result modulo the table size, two different keys can land on the same bucket — a **collision**.

## Handling collisions

- **Chaining** — each bucket holds a small list of entries; collisions just append.
- **Open addressing** — on a collision, probe for the next free slot.

A tiny chaining hash set:

```python
class HashSet:
    def __init__(self, size=10):
        self.size = size
        self.buckets = [[] for _ in range(size)]

    def _index(self, key):
        return sum(ord(c) for c in key) % self.size

    def add(self, key):
        b = self.buckets[self._index(key)]
        if key not in b:
            b.append(key)

    def contains(self, key):
        return key in self.buckets[self._index(key)]

    def remove(self, key):
        b = self.buckets[self._index(key)]
        if key in b:
            b.remove(key)

hs = HashSet()
hs.add("Alice"); hs.add("Bob")
print(hs.contains("Alice"))  # True
print(hs.contains("Eve"))    # False
```

## Hash Set vs. Hash Map

- **Hash Set** stores **unique keys** only (membership). Python: `set`.
- **Hash Map** stores **key → value** pairs. Python: `dict`.

```python
# In real code, just use the built-ins:
s = {"Alice", "Bob"}              # set  (hash set)
m = {"Alice": 25, "Bob": 30}      # dict (hash map)
print("Alice" in s)               # True
print(m["Bob"])                    # 30
```

## Complexity

| Operation | Average | Worst case |
| --- | --- | --- |
| Insert | O(1) | O(n) |
| Lookup | O(1) | O(n) |
| Delete | O(1) | O(n) |

The worst case happens when many keys collide into one bucket. Good hash functions and resizing keep this rare.
