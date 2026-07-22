# Binary Trees

A **binary tree** is a tree where **each node has at most two children**, called **left** and **right**.

## Node definition

```python
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

# Build:
#         R
#        / \
#       A   B
#      / \  /
#     C  D E
root = TreeNode('R')
root.left = TreeNode('A')
root.right = TreeNode('B')
root.left.left = TreeNode('C')
root.left.right = TreeNode('D')
root.right.left = TreeNode('E')
```

## Traversals

Visiting every node in a defined order is called **traversal**. The three depth-first orders differ only in *when* you visit the current node relative to its subtrees.

### Pre-order (Root → Left → Right)

```python
def pre_order(node, out):
    if node:
        out.append(node.data)      # visit root first
        pre_order(node.left, out)
        pre_order(node.right, out)

res = []; pre_order(root, res)
print(res)   # ['R', 'A', 'C', 'D', 'B', 'E']
```

Use it to **copy** a tree or serialise it.

### In-order (Left → Root → Right)

```python
def in_order(node, out):
    if node:
        in_order(node.left, out)
        out.append(node.data)      # visit root in the middle
        in_order(node.right, out)

res = []; in_order(root, res)
print(res)   # ['C', 'A', 'D', 'R', 'E', 'B']
```

On a [BST](binary-search-trees.md), in-order traversal returns the values **in sorted order** — a very handy property.

### Post-order (Left → Right → Root)

```python
def post_order(node, out):
    if node:
        post_order(node.left, out)
        post_order(node.right, out)
        out.append(node.data)      # visit root last

res = []; post_order(root, res)
print(res)   # ['C', 'D', 'A', 'E', 'B', 'R']
```

Use it to **delete** a tree or evaluate an expression tree bottom-up.

## Array implementation

A binary tree can also live in a plain array, no pointers needed. For the node at index `i`:

- left child  → `2*i + 1`
- right child → `2*i + 2`
- parent      → `(i - 1) // 2`

```python
tree = ['R', 'A', 'B', 'C', 'D', 'E']   # level by level
i = 1                                    # 'A'
print(tree[2*i + 1])   # 'D'  (left child of A)
```

This compact layout is exactly how a **binary heap** is stored.
