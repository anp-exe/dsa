# Trees

A **tree** is a **non-linear**, hierarchical structure made of **nodes** connected by **edges**. It branches out from a single **root**, with no cycles.

```text
        (root)
        /    \
     (A)      (B)
     / \        \
   (C) (D)      (E)
```

## Vocabulary

| Term | Meaning |
| --- | --- |
| **Root** | the top node, with no parent |
| **Parent / Child** | a node directly above / below another |
| **Leaf** | a node with no children |
| **Edge** | a link between two nodes |
| **Height** | longest path from a node down to a leaf |
| **Depth** | distance from the root down to a node |
| **Subtree** | any node together with its descendants |

## Why trees?

Trees model hierarchy (file systems, org charts, the DOM) and, when kept **sorted** and **balanced**, give **O(log n)** search, insert, and delete. That balance of speed is why variants like the [Binary Search Tree](binary-search-trees.md) and [AVL Tree](avl-trees.md) are everywhere.

## Kinds of tree you'll meet here

- **[Binary Tree](binary-trees.md)** — every node has at most two children.
- **[Binary Search Tree](binary-search-trees.md)** — a binary tree whose ordering makes search fast.
- **[AVL Tree](avl-trees.md)** — a self-balancing BST that guarantees O(log n).

The next pages build these up with runnable code and traversals.
