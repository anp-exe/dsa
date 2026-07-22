# Linked Lists

A **linked list** is a linear structure where each element (a **node**) holds its data plus a **reference to the next node**. Unlike an array, the nodes are not stored contiguously in memory — they are chained together by pointers.

```text
[data|next] -> [data|next] -> [data|next] -> None
   head                                       tail
```

## Array vs. linked list

| | Array | Linked list |
| --- | --- | --- |
| Memory | Contiguous block | Scattered nodes + pointers |
| Access by index | O(1) | O(n) |
| Insert/delete at known node | O(n) | O(1) |
| Extra memory | None | One pointer per node |

Use a linked list when you insert and delete a lot (especially at the ends) and rarely need random access.

## Types of linked list

- **Singly linked** — each node points to the next only.
- **Doubly linked** — each node points to both next *and* previous.
- **Circular** — the last node points back to the head instead of `None`.

## A node and a singly linked list

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Build 7 -> 12 -> 9 -> None by hand
head = Node(7)
head.next = Node(12)
head.next.next = Node(9)
```

## Traversal

Walk from the head, following `next` until you hit `None`:

```python
def print_list(head):
    current = head
    while current:
        print(current.data, end=" -> ")
        current = current.next
    print("None")

print_list(head)   # 7 -> 12 -> 9 -> None
```

## Insert at the front (O(1))

```python
def push_front(head, data):
    node = Node(data)
    node.next = head
    return node          # new head

head = push_front(head, 3)   # 3 -> 7 -> 12 -> 9
```

## Delete a value

```python
def delete_value(head, target):
    # deleting the head
    if head and head.data == target:
        return head.next
    current = head
    while current and current.next:
        if current.next.data == target:
            current.next = current.next.next
            break
        current = current.next
    return head

head = delete_value(head, 12)   # 3 -> 7 -> 9
```

## Complexity

| Operation | Time |
| --- | --- |
| Access / search | O(n) |
| Insert/delete at head | O(1) |
| Insert/delete at tail (singly, no tail pointer) | O(n) |

Linked lists are the building block for pointer-based [stacks](stacks.md) and [queues](queues.md).
