# Huffman Coding

**Huffman coding** is a **lossless compression** algorithm. It assigns **short binary codes to frequent symbols** and longer codes to rare ones, shrinking the total size. It's a building block of formats like ZIP, JPEG, and MP3.

## The idea (greedy)

1. Count how often each symbol appears.
2. Put every symbol in a min-heap keyed by frequency.
3. Repeatedly remove the **two least frequent** nodes and combine them under a new parent whose frequency is their sum; push it back.
4. When one node remains, it's the root of the **Huffman tree**.
5. Codes come from the path to each leaf: left = `0`, right = `1`.

No code is a prefix of another, so the compressed stream decodes unambiguously.

## Implementation

```python
import heapq
from collections import Counter

class Node:
    def __init__(self, freq, symbol=None, left=None, right=None):
        self.freq = freq
        self.symbol = symbol
        self.left = left
        self.right = right
    def __lt__(self, other):
        return self.freq < other.freq

def huffman_codes(text):
    freq = Counter(text)
    heap = [Node(f, s) for s, f in freq.items()]
    heapq.heapify(heap)

    while len(heap) > 1:
        a = heapq.heappop(heap)
        b = heapq.heappop(heap)
        heapq.heappush(heap, Node(a.freq + b.freq, None, a, b))

    root = heap[0]
    codes = {}
    def walk(node, code=""):
        if node.symbol is not None:
            codes[node.symbol] = code or "0"
            return
        walk(node.left, code + "0")
        walk(node.right, code + "1")
    walk(root)
    return codes

codes = huffman_codes("abracadabra")
for symbol in sorted(codes):
    print(symbol, codes[symbol])
# frequent 'a' gets the shortest code; rarer letters get longer ones
```

## Complexity

Building the tree with a heap is **O(n log n)** where `n` is the number of distinct symbols. Huffman coding is provably **optimal** among methods that assign a whole number of bits per symbol.
