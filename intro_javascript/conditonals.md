# Conditionals in JavaScript

Conditionals in JavaScript allow the program to make decisions and alter the control flow depending on different scenarios. They are fundamental for creating dynamic and responsive applications.

## Types of Conditionals
There are three primary types of conditionals in JavaScript:

1. **if**
2. **else**
3. **else if**

---

### 1. if Statement
The `if` statement executes a block of code only if the specified condition evaluates to `true`.

**Syntax:**
```javascript
if (condition) {
    // Code to execute if condition is true
}
```

---

### 2. else Statement
The `else` statement executes a block of code if the condition in the preceding `if` statement evaluates to `false`.

**Syntax:**
```javascript
if (condition) {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}
```

---

### 3. else if Statement
The `else if` statement allows for multiple conditions to be tested in sequence. It executes the first block of code with a `true` condition.

**Syntax:**
```javascript
if (condition1) {
    // Code to execute if condition1 is true
} else if (condition2) {
    // Code to execute if condition1 is false and condition2 is true
} else {
    // Code to execute if all conditions are false
}
```

---

### **Else-if and Nested Conditions**
- Sometimes, there are **multiple conditions** to check, and each leads to a **different outcome**.
- The **`else-if` statement** is used when there are multiple conditions to evaluate in a sequence.
- A **nested condition** arises when there is another conditional statement inside an existing one.

---

### **Example Use Case**
On a streaming platform like Hotstar, users can have different levels of subscription:

1. **Premium:** Access to all content.
2. **VIP:** Access to VIP content but limited features compared to Premium.
3. **Free:** Limited content, with ads.

---

## Key Points
- Conditional statements are essential for controlling the logical flow of a program.
- Use `if` for simple decisions.
- Use `else if` for multiple conditions.
- `else` statment should not have conditon.
