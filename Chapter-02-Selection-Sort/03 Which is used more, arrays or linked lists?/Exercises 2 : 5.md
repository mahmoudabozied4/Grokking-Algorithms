# Grokking Algorithms Chapter 2 – Selection Sort Exercises

---

## Exercise 2.2

### Problem Statement
Suppose you’re building an app for restaurants to take customer orders.
Your app needs to store a list of orders.

Servers keep adding orders to the back of the list.

Chefs take orders off the front of the list and cook them.

This forms an order queue:
- Add orders to the back (enqueue)
- Remove orders from the front (dequeue)

You must decide whether to use an array or a linked list to implement this queue.
### Constraints
- Frequent insertions at the back
- Frequent deletions from the front
- No need for random access
- Order must be maintained (FIFO: First In, First Out)

### Solution Steps
| Operation           | Description                   | Frequency     |
| ------------------- | ----------------------------- | ------------- |
| Add new order       | Servers enqueue new orders    | Very frequent |
| Remove order        | Chefs dequeue finished orders | Very frequent |
| Access random order | Not needed                    | Rare / Never  |

1. Identify operations used in a queue:

- enqueue → add an element to the back
- dequeue → remove an element from the front

2. Consider performance with arrays:

- Inserting at the end: O(1) (amortized)
- Removing from the front: O(n) — all remaining elements must shift forward.
  → ❌ Inefficient for frequent dequeues

3. Consider performance with linked lists:

- Inserting at the end (if tail pointer maintained): O(1)
- Removing from the front: O(1)
  → ✅ Efficient for frequent enqueue/dequeue operations

4. Random access not needed:

   Since you’re not accessing arbitrary positions, the slower O(n) access of a linked list doesn’t matter.

### Final Answer
Use a Linked List

A linked list is the ideal choice for implementing a queue because:

Both enqueue (add to back) and dequeue (remove from front) operations take O(1) time.

An array would require O(n) time to remove from the front due to shifting elements.

| Operation                   | Array          | Linked List |
| --------------------------- | -------------- | ----------- |
| Enqueue (add to back)       | O(1) amortized | O(1)        |
| Dequeue (remove from front) | O(n)           | O(1)        |

---
## Exercise 2.3

### Problem Statement
Suppose Facebook keeps a **list of usernames**.  
When someone tries to log in, Facebook searches for their username in this list.  
If their name is found, they can log in.

Facebook uses **binary search** to find usernames.  
Binary search requires **random access** — meaning you must be able to jump directly to the **middle element** of the list quickly.

You need to decide whether this list of usernames should be implemented as an **array** or a **linked list**.
### Constraints
- Very **frequent searches** (lookups).

- Each search uses **binary search**, which requires random access.

- No frequent insertions or deletions (only occasional user additions).



### Solution Steps
|Operation|Description|Frequency|Importance|
|---|---|---|---|
|Search username|Binary search (random access)|Very frequent|Must be fast|
|Add new user|Insert at end|Occasional|Moderate|
|Remove user|Delete entry|Rare|Low|


1. **Understand what binary search needs:**

    - Binary search repeatedly looks at the **middle** element of the list.

    - This requires **direct access** to any index instantly.  
      → Example: “Give me the element at index 500,000” in constant time.

2. **Compare structures:**

   |Operation|Array|Linked List|
   |---|---|---|
   |Random access (get middle element)|**O(1)**|**O(n)**|
   |Insert / Delete|O(n)|O(1) (if pointer known)|
   |Sequential traversal|O(n)|O(n)|

3. **Analyze Facebook’s use case:**

    - Most operations are **searches**, not insertions.

    - Searches need **fast random access**, which arrays excel at.

    - Linked lists require sequential traversal to reach the middle, which is **too slow**.

4. **Therefore:**

    - Even though arrays are slower for insertions or deletions, they’re perfect for **frequent binary searches**.

### Final Answer
**Use an Array**
Binary search depends on **random access** — the ability to access any index in constant time.

- **Arrays** provide O(1) access.

- **Linked lists** only provide O(n) access (since you must traverse node by node).

---
## Exercise 2.4

### Problem Statement
People sign up for Facebook pretty often.
Suppose you decided to use an array to store the list of users.

You’re using binary search to look up usernames during login.
Now, what happens when new users sign up and need to be added to this array?

### Final Answer
| Operation             | Description                 | Frequency     |
| --------------------- | --------------------------- | ------------- |
| Search username       | Binary search (fast)        | Very frequent |
| Add new user          | Must insert in sorted order | Frequent      |
| Maintain sorted order | Required                    | Always        |

Arrays are inefficient for frequent inserts because inserting a new user requires shifting many elements to maintain sorted order.
Even though binary search makes lookups fast (O(log n)), inserts remain slow (O(n)).

--- 

## Exercise 2.5

### Problem Statement
Facebook could store usernames in a hybrid structure: an array of 26 slots, where each slot points to a linked list of names that start with that letter (A–Z).
Example: slot 1 → all “A” names, slot 2 → all “B” names, …, slot 26 → all “Z” names.

Compare this hybrid to a single sorted array and to a single linked list for searching and inserting. You don’t need Big-O, just “faster/slower” and why.

### Final Answer
| Operation  | Single **Array** (sorted, binary search)                                                  | Single **Linked List**                                        | **Array of Linked Lists** (hybrid)                                                                                                                                              |
| ---------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Search** | **Fastest** — binary search over entire array (direct random access).                     | **Slowest** — must traverse the whole list.                   | **In-between** — jump to 1 of 26 buckets quickly, then linearly scan that smaller list; typically much shorter than the full list, but still slower than array’s binary search. |
| **Insert** | **Slower** — must keep array sorted; requires shifting elements (and sometimes resizing). | **Fast** — insert/append without shifting (if pointer known). | **Fast** — jump to the bucket and append there; no global shifting. Similar to linked list behavior, often faster than array.                                                   |


$$
\text{Arrays} \;\leq\; \text{Searching} \;\leq\; \text{Linked List}
$$

$$
\text{Arrays} \;<\; \text{Inserting} \;=\; \text{Linked List}
$$

