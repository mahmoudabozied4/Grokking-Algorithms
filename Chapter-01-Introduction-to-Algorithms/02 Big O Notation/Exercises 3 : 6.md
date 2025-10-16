# Grokking Algorithms Chapter 1 Big O Notation Exercises

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
- You may need to check every entry to find all A’s.
- Time complexity:
  $$
  O(n)
  $$

### Final Answer
$O(n)$
