## 🔹 What Is a Unary Operator?

A **unary** operator works on just **one operand**. Think of it like giving a single object a twist—no second object involved.

```js
let a = 10;
a++; // this is unary (incrementing one value)
```

Compare that to:

```js
a + b // binary (needs two values)
```

---

## 🧠 Postfix vs Prefix (`++` and `--`)

These are your **increment** and **decrement** operators. They bump a number up or down by 1. But where you place them makes a difference!

---

### 🔚 Postfix (`a++` or `a--`)

The operator comes **after** the variable, so JavaScript uses the current value **first**, and then updates it.

```js
let a = 10;
let y = a++;
console.log(a, y); // 11, 10
```

> It's like saying, "Use it now, update it later."

---

### 🔙 Prefix (`++a` or `--a`)

The operator comes **before** the variable, so the value gets updated **first**, then used.

```js
let a = 9;
let y = ++a;
console.log(a, y); // 10, 10
```

> "Update it first, then pass it along."

---

## ➕ Unary Plus and ➖ Unary Minus

These operators try to **convert values into numbers**. Super handy when you're dealing with strings that look like numbers.

### ✅ Unary Plus (`+x`)

```js
let x = "22";
let y = +x;
console.log(typeof y); // "number"
```

> It doesn’t change the original value—it just gives you a **number version** of it.

---

### ➖ Unary Minus (`-x`)

Same as `+x`, but the result is **negated**.

```js
let x = "22";
let y = -x;
console.log(x, y); // "22", -22
```

> Still does the conversion, but flips the sign.

### ⚠️ What If Conversion Fails?

```js
let x = "hello";
console.log(+x); // NaN
```

If JavaScript can’t convert it, you get **NaN**—Not a Number.

---

## 🔍 `typeof` — Another Unary Operator

Checks the **type** of a value:

```js
let x = 42;
console.log(typeof x); // "number"
```

`typeof` works on **just one operand**, so it fits the unary category too.

---

## ❓ Ternary Operator: The One-Liner Decision Maker

The **ternary** operator is the only one in JavaScript that takes **three expressions**:

```js
condition ? expr1 : expr2
```

Think of it like a **mini if-else** that fits on a single line.

### 🧪 Example:

```js
let y = (10 > 5) ? 10 : 7;
console.log(y); // 10
```

If the condition is `true`, it evaluates and returns `expr1`. If not, it returns `expr2`.

```js
let a = (true) ? (2 + 3) : (2 - 3); // 5
let b = (3 < 1) ? (2 - 3) : (++a);  // 6
```

---

## 🔄 Ternary vs If-Else

| Use Case           | Use                                           |
| ------------------ | --------------------------------------------- |
| **Simple logic?**  | Ternary (clean, one-liner)                    |
| **Complex logic?** | Stick with `if-else` (readable, maintainable) |

```js
// Ternary
let status = (isLoggedIn) ? "Welcome back!" : "Please log in.";

// If-Else
if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}
```

> 📌 **Rule of thumb:** Use ternary for quick checks. For anything more, go old-school.

---



