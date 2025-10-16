# Grokking Algorithms Chapter 1 Binary Search Exercises

---

## Exercise 1.1

### Problem Statement
Suppose you have a sorted list of 128 names, and you’re searching through it using binary search. What’s the maximum number of steps it would take?

### Constraints
- The list is sorted.
- Each search step halves the remaining search space.

### Examples
- Input: List size = 128
- Output: Maximum steps = ?

### Solution Steps
1. Binary search works by repeatedly dividing the list in half.
2. The maximum number of steps required is given by the formula:
   $$
   k = \lceil \log_2(n) \rceil
   $$
   where $n$ is the number of elements in the list.
3. For $n = 128$:
   $$
   \log_2(128) = 7
   $$
   Therefore, the maximum number of steps is:
   $$
   k = \lceil 7 \rceil = 7
   $$

### Final Answer
Maximum number of steps: 7

---

## Exercise 1.2

### Problem Statement
Suppose you double the size of the list. What’s the maximum number of steps now?

### Constraints
- The list is sorted.
- Each search step halves the remaining search space.

### Examples
- Input: List size = 2 * 128 = 256
- Output: Maximum steps = ?

### Solution Steps
1. Use the same formula:
   $$
   k = \lceil \log_2(n) \rceil
   $$
2. For $n = 256$:
   $$
   \log_2(256) = 8
   $$
   Therefore, the maximum number of steps is:
   $$
   k = \lceil 8 \rceil = 8
   $$

### Final Answer
Maximum number of steps: 8

---

## Exercise 1.3

### Problem Statement
You have a name, and you want to find the person’s phone number in the phone book.

### Solution Steps
- If the phone book is sorted by name, you can use binary search.
- Time complexity:
  $$
  O(\log_2 n)
  $$

### Final Answer
$O(\log_2 n)$

---

## Exercise 1.4

### Problem Statement
You have a phone number, and you want to find the person’s name in the phone book. (Hint: You’ll have to search through the whole book!)

### Solution Steps
- If the phone book is sorted by name, not by number, you must check every entry.
- Time complexity:
  $$
  O(n)
  $$

### Final Answer
$O(n)$

---

## Exercise 1.5

### Problem Statement
You want to read the numbers of every person in the phone book.

### Solution Steps
- You must check every entry.
- Time complexity:
  $$
  O(n)
  $$

### Final Answer
$O(n)$

---

## Exercise 1.6

### Problem Statement
You want to read the numbers of just the A’s.

### Solution Steps
- To find all entries starting with 'A', you may need to examine every entry in the phone book, since the distribution of names is not guaranteed to be uniform.
- While you might expect to check only about 1 out of every 26 entries (assuming an even distribution of first letters), Big O notation ignores constant factors and focuses on how the algorithm scales with input size.
- For example:
    1. If all entries start with 'A', you must check every entry: $O(n)$.
    2. If half the entries start with 'A', you still check $O(n)$ entries.
    3. If only a small fraction start with 'A', the number of checks is $O(n/26)$, but constants are dropped in Big O, so this is still $O(n)$.
- The key rule: In Big O notation, ignore constants added, subtracted, multiplied, or divided.

- **Time complexity:**
  $$
  O(n)
  $$

### Final Answer
$O(n)$

