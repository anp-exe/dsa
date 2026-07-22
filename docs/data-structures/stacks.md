# Stacks

A **stack** is a linear structure with **LIFO** order: **Last In, First Out**. The last item you push is the first item you pop. Think of a stack of plates — you take from the top.

## Operations

| Operation | Meaning |
| --- | --- |
| `push(x)` | add `x` to the top |
| `pop()` | remove & return the top item |
| `peek()` | look at the top without removing |
| `is_empty()` | is the stack empty? |
| `size()` | number of items |

All of these are **O(1)**.

## The easy way: a Python list

A Python list already works as a stack using `append` and `pop`:

```python
stack = []
stack.append('A')   # push
stack.append('B')
stack.append('C')
print(stack.pop())  # 'C'  (top)
print(stack[-1])    # 'B'  (peek)
print(len(stack))   # 2
```

## A proper Stack class

```python
class Stack:
    def __init__(self):
        self._items = []

    def push(self, item):
        self._items.append(item)

    def pop(self):
        if self.is_empty():
            raise IndexError("pop from empty stack")
        return self._items.pop()

    def peek(self):
        return self._items[-1]

    def is_empty(self):
        return len(self._items) == 0

    def size(self):
        return len(self._items)

s = Stack()
s.push(1); s.push(2); s.push(3)
print(s.pop())   # 3
print(s.peek())  # 2
```

## Where stacks show up

- Undo/redo in editors
- The call stack for function calls and recursion
- Matching brackets / parsing expressions
- Depth-First Search (see [Graph Traversal](../algorithms/graphs/traversal.md))

!!! example "Balanced brackets"
    ```python
    def is_balanced(s):
        pairs = {')': '(', ']': '[', '}': '{'}
        stack = []
        for ch in s:
            if ch in '([{':
                stack.append(ch)
            elif ch in pairs:
                if not stack or stack.pop() != pairs[ch]:
                    return False
        return not stack

    print(is_balanced("(a[b]{c})"))  # True
    print(is_balanced("(]"))          # False
    ```
