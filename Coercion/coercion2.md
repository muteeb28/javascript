## **ToBoolean**

In JavaScript, for boolean conversion, it uses the **ToBoolean** abstract operation.

**Rules:**

1. **undefined** → return `false`
2. **null** → return `false`
3. **Boolean** → return the argument itself (`true` or `false`)
4. **Number** →

   * If argument is `+0`, `-0`, or `NaN` → return `false`
   * Otherwise → return `true`
5. **String** →

   * If string is empty (length = 0) → return `false`
   * Otherwise → return `true`
6. **Symbol** → return `true`
7. **Object** → return `true`

**Bottom line:**
Falsy values: `undefined`, `null`, `NaN`, `+0`, `-0`, `false`, `""` (empty string)
Everything else → truthy values

---

## **Explore Different Versions of ECMAScript Docs**

* [ES10 (2019)](https://262.ecma-international.org/10.0/index.html)
* [Latest (2022+)](https://tc39.es/ecma262/2022/)

---

## **Demonstrating ToBoolean with Logical NOT (`!`)**

The logical NOT (`!`) operator:

1. Applies **ToBoolean** to the expression to get a boolean value
2. Then **inverts** it:

   * If boolean is `true` → returns `false`
   * If boolean is `false` → returns `true`

```js
let x = 10;
console.log(!10); // false  → 10 is truthy → true → invert → false

let y = undefined;
console.log(!y); // true  → undefined is falsy → false → invert → true
```

---

## **ToBoolean Inside `if` / `else`**

Apart from using `!`, conditionals (`if`, `while`, `for`) **implicitly** convert the condition to boolean.

Example:

```js
let y = undefined;

if (y) {
    console.log("it's truthy");
} else {
    console.log("it's falsy");
}
// Output: it's falsy
```

---
Here’s your content cleaned up and kept exactly in your style, without me adding extra explanations:

---

## **Abstract Equality vs Strict Equality**

Both abstract and strict equality **check types** — but the rules for how they compare are different.

---

### **Abstract Equality (`==`)**

If `Type(x)` is the same as `Type(y)`,
→ Return the result of performing **Strict Equality Comparison** (`x === y`).

If `x` is `null` and `y` is `undefined`, return `true`.

```js
console.log(null == undefined); // true
```

If `x` is `undefined` and `y` is `null`, return `true`.

If `Type(x)` is **Number** and `Type(y)` is **String**,
→ Convert string to number using `ToNumber`, then compare.

```js
console.log(12 == "12"); // true
```

If `Type(x)` is **Boolean**, convert `x` to number, compare, return result.

```js
console.log(false == "0"); // true
```

If `Type(y)` is **Boolean**, convert `y` to number, compare, return result.

If `Type(x)` is **String**, **Number**, or **Symbol** and `Type(y)` is **Object** → Convert `y` to `ToPrimitive` and compare again.

If `Type(y)` is **String**, **Number**, or **Symbol** and `Type(x)` is **Object** → Convert `x` to `ToPrimitive` and compare again.

If none of the above rules match → Return `false`.

```js
console.log(null == false); // false
```

---

### **Strict Equality (`===`)**

The comparison `x === y` returns `true` or `false`:

1. If `Type(x)` is different from `Type(y)`, return `false`.

2. If `Type(x)` is **Number**:

   * If `x` is `NaN`, return `false`.

     ```js
     console.log(NaN === NaN); // false
     ```
   * If `y` is `NaN`, return `false`.
   * If `x` is the same Number value as `y`, return `true`.
   * If `x` is `+0` and `y` is `-0`, return `true`.

     ```js
     console.log(0 === -0); // true
     ```
   * Else, return `false`.

3. Otherwise, return **SameValueNonNumber(x, y)**.

---

#### **SameValueNonNumber(x, y)**

(Where neither `x` nor `y` are Numbers)

* **Assert:** `Type(x)` is not Number.
* **Assert:** `Type(x)` is the same as `Type(y)`.

Rules:

* If **Undefined**, return `true`.
* If **Null**, return `true`.
* If **String**: same length & same sequence of code units → `true`. Else → `false`.

  ```js
  console.log("abc" === "abc"); // true
  ```
* If **Boolean**: both `true` or both `false` → `true`. Else → `false`.
* If **Symbol**: both same Symbol value → `true`. Else → `false`.
* If both are the same **Object value** (same memory reference) → `true`. Else → `false`.

Examples:

```js
let obj1 = { x: 10 };
let obj2 = { x: 10 };
let obj3 = { y: 10 };

console.log(obj1 === obj2); // false
console.log(obj1 === obj3); // false
console.log(obj1 === obj1); // true
console.log({ x: 10 } === { x: 10 }); // false
```

---
Got it ✅
Here’s your content preserved exactly in your defined style, just cleaned up for consistent formatting and readability — no extra “my” explanations added:

---

## **ToString (argument)**

The abstract operation **ToString** converts `argument` to a value of type **String** according to **Table 11**:

| Argument Type | Result                                                                                                                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Undefined** | Return `"undefined"`.                                                                                                                 |
| **Null**      | Return `"null"`.                                                                                                                      |
| **Boolean**   | If argument is `true`, return `"true"`. <br> If argument is `false`, return `"false"`.                                                |
| **Number**    | Return `NumberToString(argument)`.                                                                                                    |
| **String**    | Return `argument`.                                                                                                                    |
| **Symbol**    | Throw a **TypeError** exception.                                                                                                      |
| **Object**    | Apply the following steps: <br> 1. Let `primValue` be `? ToPrimitive(argument, hint String)`. <br> 2. Return `? ToString(primValue)`. |

---

## **Coercion Special Cases**

### **Corner Case – 1**

```js
console.log("" + 0)        // 0 -> "0"
console.log("" + (-0))     // -0 -> "0"
console.log("" + [])       // [] -> ""
console.log("" + {})       // [object Object]
console.log("" + [1,2,3])  // "1,2,3"
console.log("" + [1,2,null,4]) // "1,2,,4"
```

---

### **Corner Case – 2**

```js
// ToNumber
console.log(0 - "010")   // decimal number
console.log(0 - "o10")   // NaN
console.log(0 - 010)     // octal number (in non-strict mode)
console.log(0 - "0xb")   // hexadecimal number
console.log(0 - 0xb)     // hex literal

// [] is equal to 0
console.log(1 - [])      // 1
console.log([] - 1)      // -1
console.log([""] - 1)    // -1
console.log(["0"] - 1)   // -1
```

---

## Why Use Abstract Equality (`==`)

1. In most languages, you don’t have `===`.
   → Code becomes more readable for someone coming from other languages.
2. You don’t know the type well → `==` gives flexibility.

Example:

```js
let x = 10
typeof(x)                 // "number"
typeof(typeof(x)) == "string"
typeof(typeof(x)) === "string"
typeof(x) == "number"
```

If you want strict typing, use a strongly typed language instead of JS.

---

## Coercion with Template String

```js
let obj = {x:10, y:20}
console.log(`My roll number is ${obj}`) 
// obj goes through ToPrimitive
```

---

## Coercion Special Case with Comparison

```js
console.log(1 < 2 < 3) // (1<2) → true → true < 3 → 1 < 3 → true
console.log(3 > 2 > 1) // (3>2) → true → true > 1 → 1 > 1 → false
```

---

## Explicit Type Conversion

Coercion can also be **explicit**:

```js
console.log(Boolean(""))   // false
console.log(String(123))   // "123"
```
---

## **1. NaN (Not-a-Number)**

### **Purpose**

* `NaN` represents an **invalid numeric result**.
* Appears **explicitly** (you set it yourself) or **implicitly** (when JS tries to coerce something to a number but fails).

---

### **Examples**

```js
console.log(Number("123"));   // 123
console.log(Number("abcd"));  // NaN  (invalid conversion)
console.log(Number("0xa"));   // 10   (hexadecimal string to number)
```

---

### **Checking for NaN**

#### **`isNaN()`**

* First coerces the input to number, **then** checks if result is NaN.

```js
isNaN(NaN);       // true
isNaN("sanket");  // true (because "sanket" → NaN after coercion)
```

**Problem:** It can give *true* for non-number values that just fail conversion.

---

#### **`Number.isNaN()`**

* **No coercion** — only returns true if the value is actually the NaN value.

```js
Number.isNaN("SANKET"); // false  ("SANKET" is string, not NaN)
Number.isNaN(NaN);      // true
```

✅ **Better utility** for NaN checks.

---

#### **Manual NaN check**

If you can’t use built-in functions:

```js
if (typeof x === "number" && x !== x) {
  console.log(true); // Only NaN is not equal to itself
}
```

---

## **2. Negative Zero (-0)**

### **Why it exists**

* Represents **direction** in certain calculations (e.g., in physics or math libraries).
* `-0` and `0` are **strictly equal** in JS:

```js
-0 === 0; // true
```

---

### **How to detect -0**

#### **Using `Object.is()`**

```js
Object.is(-0, -0); // true
Object.is(0, -0);  // false
Object.is(0, 0);   // true
```

#### **Using `Math.sign()`**

```js
Math.sign(-3); // -1
Math.sign(2);  // 1
Math.sign(-0); // -0
Math.sign(0);  // 0
```

💡 `Math.sign(-0)` returns **`-0`** so you can differentiate it.

---

#### **Why `x < 0` fails**

```js
let x = -0;
x < 0; // false (because -0 is considered 0 in comparisons)
```

To handle this, check with `Object.is(x, -0)`.

---

### **Custom function for sign**

```js
function getSign(num) {
  if (Object.is(num, -0)) return "-0";
  return Math.sign(num);
}

console.log(getSign(-0)); // "-0"
console.log(getSign(0));  // 0
```

---

## **3. Boxing in JavaScript**

### **What is boxing?**

* Primitive types (`string`, `number`, `boolean`, `symbol`, `bigint`) are **atomic**, not objects.
* When you try to use methods on them, JS **wraps** them in a temporary object so you can call methods like `.toString()`.

---

### **Examples**

```js
1.toString();        // ❌ SyntaxError (parser thinks . is decimal point)
(1).toString();      // "1" (boxed into Number object temporarily)
"abc".toString();    // "abc" (boxed into String object)
undefined.toString(); // ❌ TypeError (undefined has no object wrapper)
```

---

### **Why `(1).toString()` works**

1. `1` is a primitive number.
2. JS **boxes** it into a `Number` object: `new Number(1)`.
3. Calls `toString()` on that temporary object.
4. Discards the object afterward.

---

### **Another example**

```js
Number(1).toString(); // "1" (explicitly created Number object)
```

---

