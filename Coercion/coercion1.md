# 🧠 JavaScript Type Coercion & Abstract Operations

**Understanding the Chameleon-like Behavior of JS Operators**

---

## I. 🎬 Introduction: Operators That Adapt

*   JavaScript operators like `+` and `-` behave differently based on operand types.
*   This is due to **implicit type coercion**, which JavaScript performs automatically.

---

## II. ➕ The Plus Operator

### A. Behavior Based on Operand Types

1.  **Both operands are numbers**

    ```js
    12 + 13; // ➜ 25
    ```

2.  **At least one operand is a string**

    *   JavaScript performs **string concatenation**.

    ```js
    12 + "13";    // ➜ "1213"
    "1" + 1;      // ➜ "11"
    ```

---

## III. ➖ The Subtraction Surprise

*   Always tries to perform **arithmetic subtraction**.
*   Converts non-number operands to numbers using coercion.

```js
"1" - 1; // ➜ 0
```

*   `"1"` is coerced to `1` before subtraction.

---

## IV. 🔁 What Is Type Coercion?

### A. Definition

> Type coercion is JavaScript’s automatic conversion of one data type into another based on the operation’s context.

### B. Two Kinds of Type Conversion

| Type     | Who Initiates It?     | Example        | Result |
| -------- | --------------------- | -------------- | ------ |
| Explicit | Developer (manual)    | `Number("10")` | `10`   |
| Implicit | JS engine (automatic) | `"5" - 1`      | `4`    |

---

## V. ⚙ Abstract Operations — Under the Hood

*   Abstract operations are defined in the **ECMAScript specification**.
*   Not directly callable in code (e.g., `ToNumber("5")` ❌).
*   Examples: `ToNumber`, `ToString`, `ToPrimitive`.

### Why Study Them?

*   🧩 Explain JavaScript’s "weird" behaviors.
*   🔮 Help predict outcomes of operations.
*   📚 Deepen your understanding of the JavaScript type system.

---

## VI. 🧮 Abstract Operation: `ToNumber`

**Used whenever JS needs a numeric value for an operation.**

### A. When Is `ToNumber` Used?

*   Arithmetic operations (`+`, `-`, `*`, `/`)
*   Comparisons (`<`, `>`, `<=`, `>=`)
*   Unary operations (`+value`)

---

### B. Conversion Rules (Tabular Format)

| **Input Type**      | **Result**                                     | **Explanation**                                           |
| ------------------- | ---------------------------------------------- | --------------------------------------------------------- |
| `Number`            | No change                                      | Already a number.                                         |
| `Symbol` / `BigInt` | ❌ TypeError                                    | Cannot be converted to a number.                          |
| `undefined`         | `NaN`                                          | Not a number — coerced to `NaN`.                          |
| `null` / `false`    | `+0𝔽`                                         | Both coerce to **positive zero (floating point)**.        |
| `true`              | `1𝔽`                                          | Boolean `true` becomes `1` (floating point).              |
| `String`            | Parsed number or `NaN`                         | Uses internal `StringToNumber()` parsing:                 |
|                     |                                                | - Valid numeric string → parsed number                    |
|                     |                                                | - Invalid string (e.g., `"abc"`) → `NaN`                  |
|                     |                                                | - `""` or `" "` → `0`                                     |
| `Object`            | Use `ToPrimitive` first, then apply `ToNumber` | First reduce to a primitive, then convert that to number. |

---

## VII. 🧪 Examples of `ToNumber` in Action

```js
console.log(2 - 9);             // -7
console.log(2 - null);          // 2     (null → 0)
console.log(2 - undefined);     // NaN   (undefined → NaN)
console.log(10 - true);         // 9     (true → 1)
console.log(1 - "453");         // -452  ("453" → 453)
console.log(1 - "56tyughi");    // NaN   (invalid string)
```

---

## VIII. 🧬 Subtraction Internal Flow Breakdown

### Evaluating: `a - b`

1.  **Retrieve operands**

    ```js
    let lval = GetValue(a);
    let rval = GetValue(b);
    ```

2.  **Convert to numbers using `ToNumber`**

    ```js
    let lnum = ToNumber(lval);
    let rnum = ToNumber(rval);
    ```

3.  **Perform subtraction**

    ```js
    return lnum - rnum;
    ```

4.  **Important:**

    *   If either `lnum` or `rnum` becomes `NaN`, the result will be `NaN`.

### Example Breakdown

```js
10 - null      ➜ 10  (null → 0)
10 - undefined ➜ NaN (undefined → NaN)
10 - true      ➜ 9   (true → 1)
10 - "5"       ➜ 5   ("5" → 5)
```

---

## IX. 🔍 How `ToNumber` Handles Strings

### ✅ Valid Strings → Numbers

```js
"6384"       ➜ 6384
"  123  "    ➜ 123
"-50"        ➜ -50
"0.5"        ➜ 0.5
""           ➜ 0    (Empty string)
"   "        ➜ 0    (Only whitespace)
```

### ❌ Invalid Strings → `NaN`

```js
"63bcd98"    ➜ NaN
"hello"      ➜ NaN
```

---

## X. 🧪 Edge Case Example: `1 - "0*a"`

*   `"0*a"` is an invalid numeric string.
*   `ToNumber("0*a")` ➜ `NaN`
*   `1 - NaN` ➜ `NaN`

```js
console.log(1 - "0*a"); // ➜ NaN
```

> ⚠️ Important: `NaN == NaN` is `false`

---

## XI. 🔄 Abstract Operation: `ToPrimitive`

### A. Purpose

*   `ToPrimitive(input [, preferredType])` tries to convert an object to a **primitive value**.
*   If multiple primitive types are possible, `preferredType` guides which one to choose (e.g., `"string"` or `"number"`).

### B. High-Level Steps

1.  **Assert input is an ECMAScript language value**

    *   It should be something like a number, string, object, etc.

2.  **If input is already a primitive**, return it immediately.

3.  **If input is an object**, determine a **`hint`**:

    *   If `preferredType` is **not provided** → `hint = "default"`
    *   If `preferredType` is `"string"` → `hint = "string"`
    *   If `preferredType` is `"number"` → `hint = "number"`

4.  **If hint is still `"default"`**, set `hint = "number"`

5.  **Call `OrdinaryToPrimitive(input, hint)`**, and return its result.

---

## XII. ⚙️ Abstract Operation: `OrdinaryToPrimitive`

### A. Purpose

*   Used internally by `ToPrimitive` to convert an object to a primitive based on a given hint.

### B. Step-by-Step Process

1.  **Assert**:

    *   Input `O` is an object.
    *   Hint is either `"string"` or `"number"`.

2.  **Set method order based on hint**:

    *   If hint is `"string"` → try methods in this order: `["toString", "valueOf"]`
    *   If hint is `"number"` → try methods in this order: `["valueOf", "toString"]`

3.  **For each method in the list**:

    *   Fetch the method from the object.
    *   If it's callable:

        *   Call it and store the result.
        *   If the result is a **primitive**, return it immediately.
        *   Otherwise, continue to the next method.

4.  **If no method returns a primitive**:

    *   It will go back to the loop, end it, and throw a `TypeError` exception.

5.  **Same logic applies if the hint is `"number"`**:

    *   But it tries `"valueOf"` first, then `"toString"`.

---

## XIII. 🧪 Demonstrating `toString()` and `valueOf()`

### A. Default `toString()` Behavior

*   Every object in JavaScript has a `toString()` method by default.

```js
let obj = {};
console.log(obj.toString()); // ➜ "[object Object]"
console.log(typeof obj.toString()); // ➜ "string"
```

*   Even though it looks like an object, the output is a string — `"object Object"`.

### B. Overriding `toString()`

```js
let obj = {
  toString() {
    return "let's learn coercion";
  }
};
console.log(obj.toString()); // ➜ "let's learn coercion"
```

---

### C. Default `valueOf()` Behavior

*   Like `toString()`, every object also has a `valueOf()` method.

```js
let obj = {};
console.log(obj.valueOf()); // ➜ returns the same object
```

### D. Overriding `valueOf()`

```js
let obj = {
  x: 10,
  valueOf() {
    return 10;
  }
};
console.log(obj.valueOf()); // ➜ 10
```

> `valueOf()` is especially useful when an object is used in numeric expressions.

---

## XIV. 🔍 Demonstrating `ToPrimitive` with `ToNumber`

```js
let obj = {};
console.log(10 - obj);
```

### What Happens Internally:

1.  JavaScript needs a number → triggers `ToPrimitive(obj, "number")`.
2.  Tries `valueOf()` → returns an object (❌ not a primitive).
3.  Tries `toString()` → returns `"[object Object]"` (✅ a primitive string).
4.  That string is passed to `ToNumber()` → `ToNumber("[object Object]")` results in `NaN`.

### Final Outcome:

```js
10 - obj ➜ 10 - NaN ➜ NaN
```

---

## XV. 🧪 Exploring More Real-World Cases

### A. Object with Duplicate Keys (not a coercion-specific issue, but worth noting)

```js
let obj1 = {x: 9, x: 8};
console.log(100 - obj1); // ➜ NaN (same reasoning as above)
```

> ⚠️ The second `x: 8` overrides the first — object becomes `{x: 8}`.

### B. Object with Custom `valueOf()`

```js
let obj2 = {
  x: 7,
  valueOf() {
    return 99;
  }
};
console.log(100 - obj2); // ➜ 1
```

> `valueOf()` returns a primitive (99), so subtraction is `100 - 99`

### C. Object with Custom `toString()` Returning a Number-like String

```js
let obj3 = {
  x: 8,
  toString() {
    return "88";
  }
};
console.log(90 - obj3); // ➜ 2 (90 - 88)
```

> `valueOf()` not defined → `toString()` returns `"88"` → `ToNumber("88")` → 88

### D. Object with `toString()` Returning a Non-Primitive (Invalid)

```js
let obj4 = {
  x: 8,
  toString() {
    return {};
  }
};
console.log(90 - obj4); // ❌ Throws TypeError
```

> 🔥 Since both `valueOf()` and `toString()` return objects (non-primitives), JavaScript throws a `TypeError` — it cannot proceed with `ToPrimitive`.

---

### XVI. 🔀 Coercion in the `+` (Addition) Operator

*   Unlike `-`, which **always uses `ToNumber`**, the `+` operator is **context-sensitive**.
*   There is **no explicit hint**, but:

    *   If **either operand is a string** after `ToPrimitive` conversion → do **string concatenation**.
    *   Else → apply `ToNumber` and perform **numeric addition**.

#### 🧬 How it works step by step:

1.  Apply `ToPrimitive` to both operands with **no hint**.

    *   So it defaults to the **"number"** hint.
    *   Order: `["valueOf", "toString"]`
2.  If **either** resulting primitive is a string → **coerce both to strings** and **concatenate**.
3.  Else → **coerce both to numbers** and **add**.

#### 🧪 Example:

```js
let obj = {
  toString() {
    return "42";
  }
};

console.log(10 + obj); // → "1042"
```

*   `10` stays as-is.
*   `obj` is converted via `ToPrimitive` → `"42"` (a string)
*   One operand is a string → both are converted to strings → `"10" + "42"` → `"1042"`

---

### XVII. ➕ Unary Plus Operator

*   **Unary `+`** always converts its operand to a number.
*   It’s like a shortcut to `Number()`.

#### ✅ Examples:

```js
+"10"   // → 10 (string to number)
+true   // → 1
+null   // → 0
+{}     // → NaN
```

---

### XVIII. ❓ Equality Operators & Type Checking

> 🧨 Myth: "`==` doesn't check types, but `===` does."

🧠 **Truth:**

*   Both `==` and `===` check the types **in their first step**.
*   The **difference** is:

    *   `===` (strict equality) returns **false immediately** if types differ.
    *   `==` (abstract equality) will then **apply coercion** rules if types are not the same.

---

### XIX. 🧪 Addition Operator + Object — Real Examples

#### 🧾 Case 1:

```js
let obj = {};
console.log("18" + obj);
```

**Step-by-step:**

1.  `"18"` stays a string after `ToPrimitive`.
2.  `obj` → `ToPrimitive` (no hint → assume "number")

    *   `valueOf()` → returns `obj` (non-primitive)
    *   `toString()` → returns `"[object Object]"`
3.  Final result → `"18" + "[object Object]"` → `"18[object Object]"`

#### 🧾 Case 2:

```js
console.log(18 + obj);
```

1.  `18` → primitive number (no coercion needed)
2.  `obj` → again converted to `"[object Object]"` (string)
3.  One operand is a string → do string concatenation

    *   `"18" + "[object Object]"` → `"18[object Object]"`

> ✅ Same result — in both cases you get `"18[object Object]"`.
