# AVL Trees

An **AVL tree** (named after inventors **A**delson-**V**elsky and **L**andis) is a **self-balancing** [binary search tree](binary-search-trees.md). It keeps itself short so operations stay **O(log n)** even in the worst case.

## The balance rule

Every node stores a **balance factor**:

```text
balance = height(left subtree) − height(right subtree)
```

The tree is allowed a balance factor of only **-1, 0, or +1** at every node. If an insert or delete pushes it outside that range, the tree **rotates** to restore balance.

## The four rotation cases

| Case | Shape | Fix |
| --- | --- | --- |
| **Left-Left (LL)** | heavy on left-left | one right rotation |
| **Right-Right (RR)** | heavy on right-right | one left rotation |
| **Left-Right (LR)** | heavy left, then right | left rotate child, then right rotate |
| **Right-Left (RL)** | heavy right, then left | right rotate child, then left rotate |

## Implementation

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
        self.height = 1

def height(n):
    return n.height if n else 0

def balance(n):
    return height(n.left) - height(n.right) if n else 0

def update_height(n):
    n.height = 1 + max(height(n.left), height(n.right))

def rotate_right(y):
    x = y.left
    t = x.right
    x.right = y
    y.left = t
    update_height(y); update_height(x)
    return x

def rotate_left(x):
    y = x.right
    t = y.left
    y.left = x
    x.right = t
    update_height(x); update_height(y)
    return y

def insert(node, data):
    if node is None:
        return Node(data)
    if data < node.data:
        node.left = insert(node.left, data)
    elif data > node.data:
        node.right = insert(node.right, data)
    else:
        return node

    update_height(node)
    b = balance(node)

    # LL
    if b > 1 and data < node.left.data:
        return rotate_right(node)
    # RR
    if b < -1 and data > node.right.data:
        return rotate_left(node)
    # LR
    if b > 1 and data > node.left.data:
        node.left = rotate_left(node.left)
        return rotate_right(node)
    # RL
    if b < -1 and data < node.right.data:
        node.right = rotate_right(node.right)
        return rotate_left(node)
    return node

root = None
for v in [10, 20, 30, 40, 50, 25]:   # would be a straight line in a plain BST
    root = insert(root, v)
print(root.data)   # 30  -> tree auto-balanced around the middle
```

Inserting the ascending sequence `10,20,30,40,50` into a plain BST creates a lopsided chain (O(n)). The AVL tree rotates as it goes, so the root ends up at `30` and height stays logarithmic.

## Complexity

| Operation | Time |
| --- | --- |
| Search / insert / delete | **O(log n)** guaranteed |

You pay a little extra bookkeeping (heights + rotations) in exchange for never degrading to O(n). That trade is why AVL trees and their cousins (red-black trees) power databases and language libraries.
