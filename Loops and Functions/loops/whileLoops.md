```markdown
# JavaScript While Loop Examples

This guide provides a walkthrough of various examples using the `while` loop in JavaScript. We'll cover the syntax, basic usage, and some common problems that can be solved using `while` loops.

## Syntax of `while` Loop

The `while` loop in JavaScript is used to execute a block of code as long as a specified condition is true. The syntax is as follows:

```javascript
while (condition) {
    // code to be executed
}
```

- **condition**: This is evaluated before each iteration of the loop. If the condition is true, the loop continues; otherwise, it stops.

## Examples

### Question 1: Print Numbers 1-10 Using a `while` Loop

**Problem**: Write a program to print numbers from 1 to 10 using a `while` loop.

**Approach**:
1. Initialize a counter variable `i` to 1.
2. Use a `while` loop to continue as long as `i` is less than or equal to 10.
3. Print the value of `i` in each iteration.
4. Increment `i` by 1 after each iteration.

**Hint**:
- Start with `i = 1`.
- Use `while (i <= 10)` to control the loop.
- Inside the loop, print `i` and then increment `i` by 1.

### Question 2: Sum of Natural Numbers from 1-10 Using a `while` Loop

**Problem**: Write a program to calculate the sum of natural numbers from 1 to 10 using a `while` loop.

**Approach**:
1. Initialize a variable `sum` to 0.
2. Initialize a counter variable `j` to 1.
3. Use a `while` loop to continue as long as `j` is less than or equal to 10.
4. Add the value of `j` to `sum` in each iteration.
5. Increment `j` by 1 after each iteration.
6. Print the final sum after the loop completes.

**Hint**:
- Start with `sum = 0` and `j = 1`.
- Use `while (j <= 10)` to control the loop.
- Inside the loop, add `j` to `sum` and then increment `j` by 1.
- Print `sum` after the loop ends.

### Question 3: Print Numbers from 20 to 1 in Decreasing Order Using a `while` Loop

**Problem**: Write a program to print numbers from 20 to 1 in decreasing order using a `while` loop.

**Approach**:
1. Initialize a counter variable `k` to 20.
2. Use a `while` loop to continue as long as `k` is greater than or equal to 1.
3. Print the value of `k` in each iteration.
4. Decrement `k` by 1 after each iteration.

**Hint**:
- Start with `k = 20`.
- Use `while (k >= 1)` to control the loop.
- Inside the loop, print `k` and then decrement `k` by 1.

## Time and Space Complexity Analysis

- **Time Complexity**: O(n), where n is the number of iterations.
- **Space Complexity**: O(1), as we are using a constant amount of extra space.

## Edge Cases

- **Empty Range**: If the range is empty (e.g., starting value greater than ending value), the loop will not execute.
- **Single Element**: If the range contains only one element, the loop will execute once.

```

