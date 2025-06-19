# 🧠 JavaScript Type Coercion & Abstract Operations 

---

## 🔸 Operator Behavior: Same Operation, Different Outcome?

Let’s warm up:

```js
12 + 13
```

Both operands are numbers, so `+` behaves like a **math operator**, and you get:

```js
25
```

But now try:

```js
12 + "13"
```

In **Java** or **C++**, this results in:

```js
"1213" // string concatenation
```

And in **JavaScript**? The same:

```js
"1" + 1 ➜ "11"
```

The `+` operator **concatenates** if **either operand is a string**.

But now try:

```js
"1" - 1 ➜ 0
```

Wait—what? JS didn’t throw an error. It silently subtracted. This is where **coercion** comes in.

---

## 🔸 What is Coercion?

> **Coercion** is JavaScript’s way of automatically converting values from one type to another, based on the context.

There are **two kinds** of type conversion:

| Type                | Who Does It? | Example        |
| ------------------- | ------------ | -------------- |
| Explicit            | You          | `Number("10")` |
| Implicit (Coercion) | JavaScript   | `"5" - 1 ➜ 4`  |

✅ Coercion is just a fancy word for **implicit type conversion**.

---

## 🔸 Abstract Operations (Intro)

Behind the scenes, JavaScript doesn’t *guess*. It follows a precise spec, defined by **ECMAScript**. This spec uses **abstract operations** like `ToNumber`, `ToPrimitive`, etc., to describe what the engine should do.

> These are NOT functions you can call in code, but they **describe internal behavior**.

Now let’s explore the first abstract operation you'll see constantly...

---

## 🔍 `ToNumber` — The First Coercion Step

When an operation needs numeric values, JavaScript uses `ToNumber()` internally.

### Example Table (from ECMAScript spec):

| Argument Type | Result                                   |
| ------------- | ---------------------------------------- |
| `undefined`   | `NaN`                                    |
| `null`        | `+0`                                     |
| `true`        | `1`                                      |
| `false`       | `+0`                                     |
| `number`      | same number                              |
| `string`      | Parsed number or `NaN`                   |
| `symbol`      | ❌ Throws `TypeError`                     |
| `object`      | ❓ Needs `ToPrimitive` first (Hold this!) |

---

### 🔁 Real Examples

```js
console.log(2 - 9);              // ➜ -7
console.log(2 - null);           // 2 - 0 ➜ 2
console.log(2 - undefined);      // 2 - NaN ➜ NaN
console.log(10 - true);          // 10 - 1 ➜ 9
console.log(1 - "453");          // 1 - 453 ➜ -452
console.log(1 - "56tyughi98");   // 1 - NaN ➜ NaN
```

---

## 🧮 Why Learn These Rules?

Think of these like grammar rules in English.
Just like "A comes before B" and "Sentences end with periods," JavaScript has its own grammar for how operations behave.
These abstract operations define **what JavaScript must do under the hood.**

---

## 🔬 Subtraction Operator — Step-by-Step Internal Logic

JavaScript performs the following steps when it sees:

```js
a - b
```

1. **Get operands**:

   ```js
   let lval = GetValue(a)
   let rval = GetValue(b)
   ```

2. **Convert both to numbers**:

   ```js
   let lnum = ToNumber(lval)
   let rnum = ToNumber(rval)
   ```

3. **Perform math**:

   ```js
   return lnum - rnum
   ```

This is why **even if operands are not numbers**, subtraction always ends up trying to forcefully convert them.
10 - null
// lval = 10, rval = null
// lnum = 10, rnum = 0 ➜ 10 - 0 = 10

10 - undefined
// lval = 10, rval = undefined
// lnum = 10, rnum = NaN ➜ 10 - NaN = NaN

10 - true
// lval = 10, rval = true
// lnum = 10, rnum = 1 ➜ 10 - 1 = 9

10 - "5"
// lval = 10, rval = "5"
// lnum = 10, rnum = 5 ➜ 10 - 5 = 5

---

### 📊 Recap with Examples:

```js
10 - null       ➜ 10 - 0 ➜ 10
10 - undefined  ➜ 10 - NaN ➜ NaN
10 - true       ➜ 10 - 1 ➜ 9
10 - "5"        ➜ 10 - 5 ➜ 5
```

---
### 🧠 String-to-Number Grammar:

JS converts strings digit by digit:

```js
"6384" ➜ 6×10³ + 3×10² + 8×10¹ + 4×10⁰ = 6384
```

If any invalid character shows up, it bails out:

```js
"63bcd98" ➜ NaN
```

---

## 💣 Edge Cases

```js
console.log(1 - "0*a") // ➜ NaN
```

Why? `"0*a"` looks like a number but isn't valid. It's not multiplication—it’s just a bad string. So:

* `"0*a"` ➜ NaN
* `1 - NaN` ➜ NaN

## 🛑 Let's Hold Objects & Symbols for Now

You might wonder:

```js
1 - Symbol("a")        // ❌ Error
1 - { valueOf() {} }   // 🤔 Sometimes works
```

But to truly understand **how objects behave during number coercion**, we need to first understand `ToPrimitive`.

So let’s pause the object/symbol discussion and dig into...

---

## 🧩 `ToPrimitive(input, preferredType)` — The Hidden Translator

When JavaScript encounters an object in a place where it expects a primitive (like in subtraction), it first converts the object to a primitive using this abstract operation.

> This is **required before** `ToNumber()` can be called on an object.

---

### 📦 How `ToPrimitive` Works

#### Step-by-step:

1. If the input is already a **primitive**, return it.
2. If not, determine the **hint**:

   * If preferredType not provided → `"default"`
   * If `"string"` → use `"string"`
   * If `"number"` → use `"number"`
3. If hint is `"default"` → treat it as `"number"`
4. Then call `OrdinaryToPrimitive(input, hint)`

---

## 🛠 OrdinaryToPrimitive(input, hint)

Based on the hint, JS tries these methods:

| Hint       | Method Priority           |
| ---------- | ------------------------- |
| `"string"` | `["toString", "valueOf"]` |
| `"number"` | `["valueOf", "toString"]` |

JS does the following:

1. Loop over methods based on hint.
2. For each method:

   * Check if callable
   * Call it: `result = obj[method]()`
   * If `result` is primitive, return it.
3. If neither returns a primitive → throw `TypeError`

---

### 🔁 Example:

```js
const obj = {
  toString() {
    return "42";
  }
};

console.log(1 + obj); // ➜ 1 + "42" ➜ "142"
```

---

## 🔙 Back to Symbol & Object

Now you can fully appreciate:

```js
1 - Symbol("x")
// Symbol ➜ can't be converted to number ➜ TypeError
```

```js
1 - {}
// {} ➜ ToPrimitive ➜ "[object Object]" ➜ ToNumber ➜ NaN
```

```js
1 - { valueOf() { return 5 } }
// ➜ ToPrimitive → valueOf() → 5
// ➜ ToNumber(5) → 5
// ➜ 1 - 5 ➜ -4
```

---

## ✅ Final Recap

* `+` operator may **concatenate** if a string is involved.
* `-` operator **always coerces both operands to numbers**.
* JavaScript uses internal **abstract operations**:

  * `ToNumber`
  * `ToPrimitive`
  * `OrdinaryToPrimitive`
* These operations **explain weird behaviors** with strings, booleans, `null`, `undefined`, and objects.

---

