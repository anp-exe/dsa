# Binary Search Trees (BST)

A **Binary Search Tree** is a binary tree with one extra rule that makes it powerful:

!!! abstract "The BST property"
    For every node, **all values in its left subtree are smaller**, and **all values in its right subtree are larger**.

That single invariant lets you search, insert, and delete in **O(log n)** time on a balanced tree — because at each step you throw away half the remaining nodes.

## Node + insert

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def insert(node, data):
    if node is None:
        return Node(data)
    if data < node.data:
        node.left = insert(node.left, data)
    elif data > node.data:
        node.right = insert(node.right, data)
    return node   # duplicates ignored

root = None
for v in [13, 7, 15, 3, 8, 14, 19, 18]:
    root = insert(root, v)
```

## In-order traversal returns sorted data

```python
def in_order(node, out):
    if node:
        in_order(node.left, out)
        out.append(node.data)
        in_order(node.right, out)

res = []; in_order(root, res)
print(res)   # [3, 7, 8, 13, 14, 15, 18, 19]
```

## Search

Compare and go left or right — never both:

```python
def search(node, target):
    if node is None or node.data == target:
        return node
    if target < node.data:
        return search(node.left, target)
    return search(node.right, target)

print(search(root, 14).data)   # 14
print(search(root, 100))        # None
```

## Find the minimum

The smallest value is the leftmost node:

```python
def find_min(node):
    while node.left:
        node = node.left
    return node.data

print(find_min(root))   # 3
```

## Delete a node

Three cases: a leaf, one child, or two children. For two children, replace the node with its **in-order successor** (smallest value in the right subtree):

```python
def delete(node, target):
    if node is None:
        return None
    if target < node.data:
        node.left = delete(node.left, target)
    elif target > node.data:
        node.right = delete(node.right, target)
    else:
        if node.left is None:
            return node.right
        if node.right is None:
            return node.left
        succ = node.right
        while succ.left:
            succ = succ.left
        node.data = succ.data
        node.right = delete(node.right, succ.data)
    return node

root = delete(root, 13)   # remove the old root safely
```

## Complexity

| Operation | Balanced | Worst (degenerate) |
| --- | --- | --- |
| Search / insert / delete | O(log n) | O(n) |

The worst case is a tree that has degenerated into a linked list (e.g. inserting already-sorted data). To guarantee balance, use an [AVL Tree](avl-trees.md).
