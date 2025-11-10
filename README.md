# Grokking Algorithms - Solutions & Progress Tracker

![Grokking Algorithms](https://img.shields.io/badge/Book-Grokking%20Algorithms-orange) ![Progress](https://img.shields.io/badge/Progress-0%25-red) ![Language](https://img.shields.io/badge/Language-JavaScript-yellow)

## About This Repository

This repository contains my solutions and notes for [**"Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People"**](https://www.amazon.eg/-/en/Grokking-Algorithms-Illustrated-Programmers-Curious/dp/1617292230) by Aditya Bhargava. The book provides a friendly, illustrated introduction to algorithms and their practical applications.

## Progress Tracking

|Chapter|Topic|Status|Solutions|
|---|---|---|---|
|1|Introduction to Algorithms|⬜ Not Started|-|
|2|Selection Sort|⬜ Not Started|-|
|3|Recursion|⬜ Not Started|-|
|4|Quicksort|⬜ Not Started|-|
|5|Hash Tables|⬜ Not Started|-|
|6|Breadth-First Search|⬜ Not Started|-|
|7|Dijkstra's Algorithm|⬜ Not Started|-|
|8|Greedy Algorithms|⬜ Not Started|-|
|9|Dynamic Programming|⬜ Not Started|-|
|10|K-Nearest Neighbors|⬜ Not Started|-|
|11|Where to Go Next|⬜ Not Started|-|

**Legend:**

- ⬜ Not Started
- 🔄 In Progress
- ✅ Completed

## Repository Structure

```
.
├── Chapter-01-Introduction-to-Algorithms/
│   ├── binarySearch.js
│   └── README.md
├── Chapter-02-Selection-Sort/
│   ├── selectionSort.js
│   └── README.md
├── Chapter-03-Recursion/
│   ├── recursionExamples.js
│   ├── factorial.js
│   └── README.md
├── Chapter-04-Quicksort/
│   ├── quicksort.js
│   └── README.md
├── Chapter-05-Hash-Tables/
│   ├── hashTableExamples.js
│   └── README.md
├── Chapter-06-Breadth-First-Search/
│   ├── bfs.js
│   ├── graph.js
│   └── README.md
├── Chapter-07-Dijkstras-Algorithm/
│   ├── dijkstra.js
│   └── README.md
├── Chapter-08-Greedy-Algorithms/
│   ├── setCovering.js
│   └── README.md
├── Chapter-09-Dynamic-Programming/
│   ├── knapsack.js
│   ├── longestCommonSubstring.js
│   └── README.md
├── Chapter-10-KNN/
│   ├── knn.js
│   └── README.md
└── README.md
```

## Chapter Details

### Chapter 1: Introduction to Algorithms

**Topics Covered:**

- Binary Search
- Big O Notation
- Algorithm Speed

**Exercises:**

- [ ] 1.1 - Binary search variations
- [ ] 1.2 - Running time calculations
- [ ] 1.3 - Big O analysis

---

### Chapter 2: Selection Sort

**Topics Covered:**

- Arrays and Linked Lists
- Selection Sort
- Memory organization

**Exercises:**

- [ ] 2.1 - Array vs Linked List operations
- [ ] 2.2 - Selection sort implementation
- [ ] 2.3 - Time complexity analysis

---

### Chapter 3: Recursion

**Topics Covered:**

- Recursion fundamentals
- Base case and recursive case
- Call stack

**Exercises:**

- [ ] 3.1 - Recursive functions
- [ ] 3.2 - Call stack tracing
- [ ] 3.3 - Factorial and Fibonacci

---

### Chapter 4: Quicksort

**Topics Covered:**

- Divide and Conquer
- Quicksort algorithm
- Pivot selection

**Exercises:**

- [ ] 4.1 - Divide and conquer examples
- [ ] 4.2 - Quicksort implementation
- [ ] 4.3 - Array sum using D&C
- [ ] 4.4 - Counting elements recursively
- [ ] 4.5 - Finding maximum value

---

### Chapter 5: Hash Tables

**Topics Covered:**

- Hash functions
- Collisions
- Use cases

**Exercises:**

- [ ] 5.1 - Hash table operations
- [ ] 5.2 - Collision handling
- [ ] 5.3 - Practical applications
- [ ] 5.4 - Performance analysis

---

### Chapter 6: Breadth-First Search

**Topics Covered:**

- Graphs
- BFS algorithm
- Queues

**Exercises:**

- [ ] 6.1 - Graph representation
- [ ] 6.2 - BFS implementation
- [ ] 6.3 - Shortest path problems
- [ ] 6.4 - Graph traversal
- [ ] 6.5 - Topological sort

---

### Chapter 7: Dijkstra's Algorithm

**Topics Covered:**

- Weighted graphs
- Dijkstra's algorithm
- Negative weights

**Exercises:**

- [ ] 7.1 - Dijkstra implementation
- [ ] 7.2 - Weighted graph problems
- [ ] 7.3 - Algorithm tracing

---

### Chapter 8: Greedy Algorithms

**Topics Covered:**

- Greedy strategy
- Set-covering problem
- NP-complete problems

**Exercises:**

- [ ] 8.1 - Greedy algorithm design
- [ ] 8.2 - Set covering
- [ ] 8.3 - Scheduling problems
- [ ] 8.4 - Approximation algorithms

---

### Chapter 9: Dynamic Programming

**Topics Covered:**

- Dynamic programming fundamentals
- Knapsack problem
- Longest common substring

**Exercises:**

- [ ] 9.1 - Knapsack variations
- [ ] 9.2 - String matching
- [ ] 9.3 - Longest common subsequence

---

### Chapter 10: K-Nearest Neighbors

**Topics Covered:**

- Classification
- Feature extraction
- Regression
- Machine learning introduction

**Exercises:**

- [ ] 10.1 - KNN implementation
- [ ] 10.2 - Distance calculations
- [ ] 10.3 - Feature selection

---

### Chapter 11: Where to Go Next

**Topics Covered:**

- Trees (B-trees, Red-black trees, Heaps)
- Inverted indexes
- Fourier transform
- Parallel algorithms
- MapReduce
- Bloom filters
- SHA algorithms

---

## How to Use This Repository

1. **Clone the repository:**
    
    ```bash
    git clone https://github.com/yourusername/grokking-algorithms-solutions.git
    cd grokking-algorithms-solutions
    ```
    
2. **Navigate to specific chapters:**
    
    ```bash
    cd Chapter-01-Introduction-to-Algorithms
    ```
    
3. **Run solutions:**
    
    ```bash
    node binarySearch.js
    ```
    

## Running the Code

### Node.js

```bash
# Run individual files
node Chapter-01-Introduction-to-Algorithms/binarySearch.js

# Or use npm scripts (if package.json is configured)
npm run test
```

### Browser

Open the HTML file that includes the JavaScript file, or use the browser console to test functions.

## Resources

- **Book:** [Grokking Algorithms on Manning](https://www.manning.com/books/grokking-algorithms)
- **Official Code:** [GitHub - egonSchiele/grokking_algorithms](https://github.com/egonSchiele/grokking_algorithms)
- **Author:** Aditya Bhargava

## Notes

Each chapter folder contains:

- Implementation of algorithms discussed in the chapter
- Solutions to exercises
- Additional notes and explanations
- Time and space complexity analysis

## Technologies Used

- **JavaScript (ES6+)** - Primary implementation language
- **Node.js** - Runtime environment for executing JavaScript
- Optional: TypeScript for type-safe implementations

## Setup

```bash
# Initialize npm (optional)
npm init -y

# Install any dependencies (if needed)
npm install
```

## Contributing

Feel free to suggest improvements or alternative solutions! This is a learning repository, and all constructive feedback is welcome.

## License

This repository is for educational purposes. Please refer to the book's official resources for complete learning materials.

---
**Status:** 🚀 Just Started!
