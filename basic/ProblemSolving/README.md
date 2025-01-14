# JavaScript Concepts README

This README covers two fundamental concepts in JavaScript.

## 1. Check if a Number is Even or Odd

### What is an Even Number?
An even number is a number that is completely divisible by 2, i.e., the remainder is 0 when divided by 2.

### What is an Odd Number?
An odd number is a number that is not completely divisible by 2, i.e., the remainder is not 0 when divided by 2.

### How to Check if a Number is Divisible by 2?
Use the `%` operator (modulus) to calculate the remainder of the number when divided by 2. If the remainder is 0, the number is even; otherwise, it is odd.

---

## 2. Find the Minimum Value Among Three Integers

### Problem
Given three integers, determine the smallest value without using any internal functions, only using `if-else` statements.

### Logical Approach
1. **When is `x` the smallest?**
   - If `x < y` and `x < z`, then `x` is the smallest.

2. **When is `y` the smallest?**
   - If `y < x` and `y < z`, then `y` is the smallest.

3. **When is `z` the smallest?**
   - If neither `x` nor `y` is the smallest, then `z` is the smallest.

---

These concepts illustrate the fundamental usage of conditional statements and logical operators to solve real-world problems in JavaScript.
