# JavaScript Loops

Loops are fundamental constructs in programming that allow us to efficiently handle repetitive tasks without writing redundant code. 

---

## Introduction to Loops

### Observations:
- Loops allow us to perform repetitive actions, such as printing numbers or calculating sums, by following these steps:
  1. **Initialize a variable**: Define a starting point.
  2. **Condition Check**: Ensure the loop runs until a specific condition becomes false.
  3. **Execution**: Perform the desired operation during each iteration.
  4. **Update**: Adjust the loop variable to move closer to meeting the stopping condition.

---

## Examples of Using `while` Loops

### **Question 1**: Print the Numbers from 1 to 10

**Logic**:  
- Start with `i = 1`.
- Print the current value of `i`.
- Increment `i` by 1 after each iteration.
- Stop when `i` exceeds 10.

---

### **Question 2**: Calculate the Sum of All Numbers from 1 to 10

**Logic**:
- Initialize `i = 1` and `ans = 0`.
- Add the current value of `i` to `ans`.
- Increment `i` to move to the next value.
- Stop when `i` exceeds 10.

**Key Element of Repetition**: Add the current value of `i` to the cumulative sum (`ans`) and move to the next number.

---

### **Question 3**: Print the Numbers from 20 to 1 in Decreasing Order

**Logic**:
- Start with `i = 20`.
- Print the current value of `i`.
- Decrement `i` by 1 after each iteration.
- Stop when `i` is less than 1.

**Why Use `i` Instead of `20` Directly?**
- A loop variable (`i`) allows us to dynamically track and update the current number during each iteration.  
- Using a fixed number (like `20`) would prevent iteration since it cannot be modified or decremented.

---

## Key Concepts: Why Use Loops?

1. **Automation**: Eliminate the need for repetitive, manual coding.
2. **Flexibility**: Easily adjust parameters like starting and ending points or conditions.
3. **Reusability**: Write a single loop construct for tasks with similar repetition patterns.

---

## Difference Between `while` and `if`

- **`if` Statement**:  
  - Checks the condition **once**, regardless of whether it's true or false.  
  - Used for single-time decisions or actions.  

- **`while` Loop**:  
  - Continuously checks the condition **until it becomes false**.  
  - Used for repetitive tasks controlled by a condition.  

---

## Summary

Loops, particularly the `while` loop, are essential tools for automating repetitive tasks. By understanding their structure and logic:
- You can efficiently perform operations like printing numbers, calculating sums, or decrementing values.
- The distinction between constructs like `while` and `if` becomes clear, enhancing your ability to write concise and effective code.

Loops are a powerful building block in programming, enabling tasks that involve repetition to be solved systematically.
