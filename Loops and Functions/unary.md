---

# ➕ Unary Operators in JavaScript – 

Unary operators work with just **one operand**—that’s what makes them "unary." They’re small, but mighty, and often show up in places where subtle behavior matters.

---

## 📌 What Are Unary Operators?

Operators that operate on **a single value**.

```js
let a = 10;
a++; // unary increment
```

Compare that with:

```js
a + b // binary operator (needs two values)
```

---

## ⏱️ Postfix vs Prefix Unary Operators

Both `++` and `--` are used to increment or decrement a value by 1. But **placement** matters!

### 🖚 Postfix: `a++` or `a--`

* The operation happens **after** the current value is used.
* Common when you're assigning or comparing values.

```js
let a = 10;
let y = a++;
console.log(a, y); // 11, 10
```

> First `y` gets the **old value** of `a`, then `a` is incremented.

If you just do:

```js
a++;
```

It simply increments `a`.

---

### 🔙 Prefix: `++a` or `--a`

* The operation happens **before** the value is used.

```js
let a = 9;
let y = ++a;
console.log(a, y); // 10, 10
```

> `a` is incremented **first**, then its new value is assigned to `y`.

---

## ➕ Unary Plus and ➖ Unary Minus

Used to **convert values** into numbers.

```js
let x = "22";
let y = +x; // unary plus
console.log(typeof y); // 'number'
```

* `+x` tries to **coerce** the value into a number.
* It does **not change** the original variable.

Same with unary minus:

```js
let x = "22";
let y = -x;
console.log(x, y); // "22", -22
```

> `-x` converts `x` into a number and negates it.

If conversion **fails**, you get `NaN`:

```js
let x = "hello";
console.log(+x); // NaN
```

---

## 🔪 typeof – Another Unary Operator

```js
let x = 42;
console.log(typeof x); // 'number'
```

This is also unary—it checks the **type** of a single operand.

---

Unary operators often fly under the radar, but understanding them helps you **reason about subtle bugs** and write cleaner expressions.

Next up: Ternary operators—a one-liner decision-maker! 🎯

---
