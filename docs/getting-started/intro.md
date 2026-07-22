# Introduction to DSA

## What is a data structure?

A **data structure** is a way of storing and organising data so that it can be used efficiently. Different structures are good at different things: some make lookups fast, some make insertions fast, some keep data sorted automatically. Picking the right one is a core skill.

## What is an algorithm?

An **algorithm** is a finite, step-by-step procedure for solving a problem. Given some input, it produces the correct output in a finite number of steps. The same problem can usually be solved by many algorithms, and they can differ enormously in speed and memory use.

## Why learn DSA?

- **Performance.** The right structure/algorithm can turn hours into milliseconds as data grows.
- **Problem solving.** DSA teaches you to break messy problems into clean, solvable pieces.
- **Interviews & jobs.** Technical interviews lean heavily on this material.

## What you should already know

DSA is language-independent, but you need to be comfortable with the basics of **one** programming language. These notes use **Python 3** because it reads almost like pseudocode.

```python
my_list = [7, 12, 9, 4, 11]
print(my_list[0])   # 7  -> arrays are zero-indexed
```

## A tiny bit of history

The word *algorithm* comes from **al-Khwarizmi**, a Persian mathematician from around the year 800. The systematic study of data structures and algorithms took off with the arrival of computers in the 1940s, when people needed disciplined ways to manage and process data. Today it is a foundational part of computer science.

## Pseudocode

Before coding, it helps to write an algorithm in **pseudocode** — something between English and real code:

```text
set minVal to the first element
for each element in the list:
    if element < minVal:
        minVal = element
```

Once the logic is clear in pseudocode, translating it to Python (or any language) is easy.
