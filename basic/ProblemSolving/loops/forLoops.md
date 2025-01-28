# JavaScript For Loop Examples  

This document highlights various scenarios where the `for` loop in JavaScript is used to efficiently handle repetitive tasks.  

---

## Examples of Using `for` Loops  

### **Question 1**: Print Numbers from 1 to 10  

**Logic**:  
1. Use a `for` loop to iterate through numbers from 1 to 10.  
2. Print the value of the loop variable `i` in each iteration.  

**Key Steps**:  
- Initialize the variable `i` to 1.  
- Run the loop while `i <= 10`.  
- Increment `i` by 1 in each iteration.  

---

### **Question 2**: Calculate the Sum of Natural Numbers from 1 to 10  

**Logic**:  
1. Use a `for` loop to iterate through numbers from 1 to 10.  
2. Maintain a variable `sum` initialized to 0.  
3. Add the value of the loop variable `j` to `sum` in each iteration.  
4. Print the total `sum` after the loop completes.  

**Key Steps**:  
- Start with `sum = 0` and iterate through `j = 1` to `10`.  
- Incrementally add each value of `j` to `sum`.  

---

### **Question 3**: Print All Even Numbers Greater Than 1 and Less Than 25  

**Method 1**: Using the Modulus Operator (`%`)  
1. Iterate through numbers from 1 to 24 using a `for` loop.  
2. Check if a number is even (`i % 2 === 0`).  
3. Print the number if the condition is satisfied.  

**Method 2**: Increment by 2  
1. Start the loop from `j = 2`, as it's the first even number greater than 1.  
2. Increment `j` by 2 in each iteration to skip odd numbers.  
3. Print the value of `j` during each iteration.  

---

## Why Use a `for` Loop?  

1. **Compact Syntax**: Combines initialization, condition, and increment/decrement in a single line.  
2. **Control**: Provides precise control over the iteration range and step size.  
3. **Efficiency**: Minimizes the chances of errors like infinite loops by centralizing loop conditions.  

---

## Summary  

The `for` loop is a fundamental construct in JavaScript, ideal for tasks involving a known number of iterations. These examples demonstrate how to:  
- Iterate through a range of numbers.  
- Perform cumulative operations like summing numbers.  
- Handle specific patterns, such as even or odd number sequences.  

By understanding and leveraging `for` loops, you can simplify repetitive tasks in your code and make it more efficient.  
