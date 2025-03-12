```markdown
# JavaScript For Loop Examples

This guide provides a walkthrough of various examples using the `for` loop in JavaScript. We'll cover the syntax, basic usage, and some common problems that can be solved using `for` loops.

## Syntax of `for` Loop

The `for` loop in JavaScript is used to execute a block of code multiple times. The syntax is as follows:

```javascript
for (initialization; condition; increment) {
    // code to be executed
}
```

- **initialization**: This is executed once before the loop starts. It is typically used to initialize a counter variable.
- **condition**: This is evaluated before each iteration of the loop. If the condition is true, the loop continues; otherwise, it stops.
- **increment**: This is executed after each iteration of the loop. It is typically used to update the counter variable.

## Examples

### Question 1: Print Numbers 1-10 Using a `for` Loop

**Problem**: Write a program to print numbers from 1 to 10 using a `for` loop.

**Approach**:
1. Initialize a counter variable `i` to 1.
2. Loop while `i` is less than or equal to 10.
3. Increment `i` by 1 after each iteration.
4. Print the value of `i` in each iteration.

### Question 2: Sum of Natural Numbers from 1-10 Using a `for` Loop

**Problem**: Write a program to calculate the sum of natural numbers from 1 to 10 using a `for` loop.

**Approach**:
1. Initialize a variable `sum` to 0.
2. Loop through numbers from 1 to 10.
3. Add each number to `sum`.
4. Print the final sum.

### Question 3: Print All Even Numbers Greater Than 1 and Less Than 25

**Problem**: Write a program to print all even numbers greater than 1 and less than 25 using a `for` loop.

**Method 1: Using the Modulus Operator (%)**:
1. Iterate through numbers from 1 to 24 using a `for` loop.
2. Check if a number is even (`i % 2 === 0`).
3. Print the number if the condition is satisfied.

**Method 2: Increment by 2**:
1. Start the loop from `j = 2`, as it's the first even number greater than 1.
2. Increment `j` by 2 in each iteration to skip odd numbers.
3. Print the value of `j` during each iteration.

## Time and Space Complexity Analysis

- **Time Complexity**: O(n), where n is the number of iterations.
- **Space Complexity**: O(1), as we are using a constant amount of extra space.

## Edge Cases

- **Empty Range**: If the range is empty (e.g., starting value greater than ending value), the loop will not execute.
- **Single Element**: If the range contains only one element, the loop will execute once.

## Optimizations

- **Increment Optimization**: In Method 2 for printing even numbers, we optimize the loop by incrementing by 2, reducing the number of iterations by half.
```
