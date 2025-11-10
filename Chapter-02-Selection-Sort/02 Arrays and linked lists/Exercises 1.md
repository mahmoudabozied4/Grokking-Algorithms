# Grokking Algorithms Chapter 2 – Selection Sort Exercises

---

## Exercise 2.1

### Problem Statement
Suppose you’re building an app to keep track of your finances.

Every day, you write down everything you spent money on (e.g., groceries, movies, memberships).
At the end of the month, you review your expenses and sum up how much you spent.

You have lots of inserts (adding daily expenses) and a few reads (reviewing at the end).
Should you use an array or a list?
### Constraints
- Frequent inserts (daily expense entries).
- Few reads (monthly Sum + Seq).
- No random access required.

### Solution Steps
| Operation            | Array                                      | List                       |
| -------------------- | ------------------------------------------ | -------------------------- |
| Insert at end        | O(1) (amortized, but may require resizing) | O(1)                       |
| Insert in middle     | O(n)                                       | O(1) (if you have pointer) |
| Random access        | O(1)                                       | O(n)                       |
| Sequential traversal | O(n)                                       | O(n)                       |

Since you have many inserts and only sequential reads, you don’t need fast random access.
Lists handle frequent insertions efficiently.
Arrays are better when you have a fixed number of elements or need fast indexing.
Use a list, as it allows fast insertion without worrying about resizing or reallocation.
### Final Answer
Use a list
Because you have many inserts and few reads,
a list provides better performance and flexibility for this use case.
