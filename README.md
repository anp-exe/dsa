# DSA Notes

My personal, ad-free Data Structures & Algorithms study site. Built with [MkDocs](https://www.mkdocs.org/) + [Material](https://squidfunk.github.io/mkdocs-material/). All explanations are original and every Python snippet is tested and runnable.

## Run locally

```bash
pip install -r requirements.txt
mkdocs serve
```

Then open http://127.0.0.1:8000.

## Build the static site

```bash
mkdocs build      # outputs to ./site
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and publishes it to **GitHub Pages**.

One-time setup: in your repo go to **Settings → Pages → Build and deployment → Source → GitHub Actions**, then enable Actions. After that every push to `main` redeploys automatically.

## Structure

```
docs/
├── index.md
├── getting-started/     intro + first algorithm
├── data-structures/     arrays, linked lists, stacks, queues,
│                        hash tables, trees, BST, AVL, graphs
├── algorithms/
│   ├── sorting/         bubble, selection, insertion, quick,
│   │                    counting, radix, merge, pancake 🥞
│   ├── searching/       linear, binary
│   ├── graphs/          DFS/BFS, cycles, Dijkstra, Bellman-Ford,
│   │                    Prim, Kruskal, Ford-Fulkerson, Edmonds-Karp
│   ├── dp/              memoization, tabulation, DP, knapsack
│   └── other/           Euclid, Huffman, TSP, greedy
└── reference/           time complexity, cheat sheet
```
