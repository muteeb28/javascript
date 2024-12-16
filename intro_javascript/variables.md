### **Basics of JavaScript**

- **Multi-paradigm Language**: JavaScript supports functional, procedural, and object-oriented programming.
- **Data Storage**: Every application needs an area to store its data. Variables help achieve this.
- **Program vs Process**: A program in its running state is called a process.

### **Keywords in JavaScript**

Keywords are reserved words in programming languages used for specific purposes. You **cannot reassign or change their meaning**.

Examples in JavaScript:

- `let`, `const`, `return`, `if`, `else`

> **Interactive Tip**: Try using `let` or `const` in your browser console.  
> Example: `let x = 10; console.log(x);`

### **What Are Variables?**

- Variables are **memory containers** that store data and have a unique name.
- They allow developers to reuse and manipulate stored data during a program's execution.

**In Simple Terms**:

> A variable is like a bucket with a label (its name) that holds something inside (its value).


### **Naming Rules for Variables**

1. Can include **small letters, capital letters, digits, underscores (_), and dollar signs ($)**.  
    Example: `score1`, `_user`, `$value`.
    
2. **Cannot start with a digit** but can include digits elsewhere.  
    Example: `let 1score = 50;` ❌  
    `let score1 = 50;` ✅
    
3. No **spaces** or special characters allowed in names.  
    Example: `let user-name = "John";` ❌  
    `let userName = "John";` ✅
    
4. Variable names must be **meaningful**.  
    Example: Use `let userAge = 25;` instead of `let x = 25;`.
    
5. Cannot use **reserved keywords** as variable names.  
    Example: `let const = 10;` ❌

### **What is `console.log`?**

The `console.log` function is an **in-built JavaScript function** that takes input and displays it in the console. It acts like a black box—takes input and gives output.

#### Example:
`console.log(10, "hello");  // Output: 10 hello`

> **Pro Tip**: Open your browser's Developer Tools (usually F12), navigate to the Console tab, and type the above example.

For detailed specifications, visit:  
[ECMAScript Language Specification - ECMA-262 Edition 5.1](https://262.ecma-international.org/5.1/)

### **Primitive Data Types**

1. **Number**  
    Examples: `10`, `-3`, `2.6`  
    Example Code:
    `let num = 10;`
    
2. **String**  
    Represent text data enclosed in quotes:
    
    - Double quotes: `"Hello"`
    - Single quotes: `'Hi'`
    - Backticks: `` `Template String` ``
    
    Example Code:
    `let greeting = "Hello, world!";`
    
3. **Boolean**  
    Represents `true` or `false`. Useful in conditional logic.  
    Example Code:
    
    `let isActive = true;`
    
4. **Undefined**  
    A variable that has been declared but not assigned a value.  
    Example Code:
    
    `let x;  console.log(x); // undefined`

    > Undefined indicates something that has not yet been defined but could be defined later.  
    > Example:
    `var x = 1, name = "Vishal", condition = true, status = undefined;`