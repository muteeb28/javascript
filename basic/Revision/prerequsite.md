# Logical AND (`&&`) Operator

## What does `&&` do?

The `&&` operator evaluates two expressions and returns the first falsy value it encounters. If all values are truthy, it returns the last value.

---

## Behavior

- **Falsy values in JavaScript**: `false`, `0`, `""` (empty string), `null`, `undefined`, and `NaN`.
- If the first operand is falsy, it is returned without evaluating the second operand.
- If the first operand is truthy, the second operand is evaluated and returned.

---

## Examples

```javascript
console.log(0 && 6); // Output: 0 (0 is falsy, so it's returned immediately)
console.log(1 && 6); // Output: 6 (both are truthy, so the second value is returned)
console.log(false && "hello"); // Output: false (first value is falsy)
console.log(true && "world"); // Output: "world" (first is truthy, so the second value is returned)
console.log("foo" && "bar"); // Output: "bar" (both are truthy, so the second value is returned)

# JavaScript Conditionals and Logical Operators

This document provides the logic for solving four common problems using conditionals and logical operators in JavaScript.

---

## Question 1: Check if the Number is Even or Odd

- **Logic**:  
  - If the remainder of the division of a number by 2 is 0, the number is even.  
  - Otherwise, the number is odd.

---

## Question 2: Find the Minimum Value Among Three Integers

- **Logic**:  
  - Compare each number to the others.  
  - The smallest number is the one that is less than both of the other numbers.

---

## Question 3: Check if Three Integers Can Form a Triangle

### Problem Statement:
Determine if three integers can represent the sides of a triangle.

### Logic:
- A triangle is valid if the sum of any two sides is greater than the third side.  
- Check this condition for all three combinations of sides.

---

## Question 4: Classify a Triangle Based on Side Lengths

### Classification:
1. **Equilateral**: All sides are equal.  
2. **Isosceles**: At least two sides are equal.  
3. **Scalene**: All three sides are different.

### Logic:
- If all three sides are equal, the triangle is equilateral.  
- If exactly two sides are equal, the triangle is isosceles.  
- If all sides are different, the triangle is scalene.

### Note:
- An equilateral triangle is also a special case of an isosceles triangle because it satisfies the condition of "at least two sides being equal."

---

## Summary

This document explains the logical reasoning behind solving common problems in JavaScript using conditionals and operators. It also clarifies the nuances of triangle classification.
