### **1. Arithmetic Operators**

Arithmetic operators are used to perform basic mathematical operations.



---

### **Operands**

- **Operands** are the values on which operators act.  
    For example:

    `10 + 3`
    
    - `10` and `3` are **operands**.
    - `+` is the **operator**.

---


---

### **2. Assignment Operators**

Assignment operators are used to assign or update the value of a variable.



---

### **Explanation of Assignment Example**

1. **Direct Assignment**
    
    `let a = 10; // Assigns the value 10 to 'a'`
    
2. **Compound Assignment**
    
    `a += 2; // Equivalent to a = a + 2 console.log(a); // Output: 12`
    
    Similarly:
    `a -= 2;  // Equivalent to a = a - 2 
    a *= 2;  // Equivalent to a = a * 2 
    a /= 3;  // Equivalent to a = a / 3 
    a %= 2;  // Equivalent to a = a % 2
     a **= 2; // Equivalent to a = a ** 2`
    

---

Relational or comparison operators

- <,>,<=,>= 
- it will take two operands...they will try to evalvae it and js will give you true or false based on comparison
ogical Operators in JavaScript

### **What are Logical Operators?**

Logical operators are used to perform logical operations on boolean values (`true` or `false`). They evaluate expressions and return a boolean value.
### **Types of Logical Operators**

1. **AND (`&&`)**
    
    - Requires **both operands** to be `true` for the result to be `true`.
    2. **OR (`||`)**
- Requires **at least one operand** to be `true` for the result to be `true`.
3. **NOT (`!`)**

- Inverts the value of the operand.
**Important Notes:**
- **Operands** passed to logical operators are usually boolean values (`true` or `false`).
- Logical operators short-circuit:
    - **AND (`&&`)**: Stops evaluation if the first operand is `false`.
    - **OR (`||`)**: Stops evaluation if the first operand is `true`.
1.  **AND (`&&`)**:
	AND evaluates as `true` only when **both conditions are true**.
- Think of it like a lock needing **two keys** to open: if you only have one key or none, the lock won’t open (result is `false`).
2. **OR (`||`)**:
	OR evaluates as `true` if **at least one condition is true**.
- Imagine two doors to a room: you only need one door open to enter (result is `true`).
3. **NOT (`!`)**:
	NOT simply flips the truth value.
- Imagine a light switch: flipping it changes `on` to `off` or `off` to `on`.
Short circuiting and Coercion Introduction with logical 
### **What is Short-Circuiting?**

Short-circuiting is a concept in logical operations where:

1. **AND (`&&`)**: If the first operand is falsy, it **immediately returns that value** without evaluating the second operand. If the first operand is truthy, it evaluates and returns the second operand.
2. **OR (`||`)**: If the first operand is truthy, it **immediately returns that value** without evaluating the second operand. If the first operand is falsy, it evaluates and returns the second operand.
This behavior optimizes evaluation and ensures unnecessary expressions aren’t executed.

---
### **Falsy Values in JavaScript**

In JavaScript, the following values are considered **falsy**:

1. `null`
2. `undefined`
3. `""` (empty string)
4. `+0` and `-0`
5. `NaN`
6. `false`

**Everything else is truthy.**

---
These special numbers in JavaScript help represent unusual or edge-case scenarios effectively:

- `-0`: Captures directional properties.
- `NaN`: Represents invalid numerical operations.
- `Infinity` and `-Infinity`: Handle values beyond finite numerical limits
---
### **How Does JavaScript Handle Conversion?**

JavaScript uses **type coercion**, automatically converting values into a boolean context (truthy or falsy) when necessary, such as in logical expressions.Bitwise operations are performed by comparing the binary representation of the operands **bit by bit**.

##### **1. Bitwise AND (`&`)**

- **Rule:** Both bits must be `1` to return `1`; otherwise, `0`.

**Example:**  
`5 & 7`
```sql
  Binary of 5:   101  
  Binary of 7:   111  
  -----------------
  Result:        101 (binary for 5)

```
Output: `5`

**Another Example:**  
`6 & 9`
```sql
  Binary of 6:   110  
  Binary of 9:  1001  
  ------------------
  Result:       0000 (binary for 0)

```

----
##### **2. Bitwise OR (`|`)**

- **Rule:** Returns `1` if **any** bit is `1`; otherwise, `0`.

**Example:**  
`5 | 7`
```sql
  Binary of 5:   101  
  Binary of 7:   111  
  -----------------
  Result:        111 (binary for 7)

```

---
##### **3. Bitwise XOR (`^`)**

- **Rule:** Returns `1` if the bits are **different**; returns `0` if the bits are **same**.

**Example:**  
`5 ^ 7`
```sql
  Binary of 5:   101  
  Binary of 7:   111  
  -----------------
  Result:        010 (binary for 2)

```
---
##### **4. Bitwise NOT (`~`)**

- **Rule:** Inverts the bits (1 becomes 0, and 0 becomes 1).
- In JavaScript, bitwise NOT flips all bits of the **32-bit signed integer representation**.

**Example:**  
`~5`
```sql
  Binary of 5:       00000000000000000000000000000101  
  Inverted Result:   11111111111111111111111111111010  

```
Output: `-6` (because of how negative numbers are stored in two's complement).

----
#### **Conclusion**

Bitwise operators are used for low-level programming tasks such as:

- Optimizing performance.
- Manipulating binary data directly.
- Applications in fields like cryptography, graphics, and hardware control