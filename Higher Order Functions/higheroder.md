---

# 🎢 Higher Order Functions in JavaScript 

## 🗂️ Arrays Are Just Custom Objects

In JavaScript, an array is actually a special kind of object where:

* Each **index** (0, 1, 2, …) acts as a **key**.
* Each **element** is the **value** stored under that key.

```js
["abc", "def", "ghi"];
// Think of it as:
{ 0: "abc", 1: "def", 2: "ghi" }
```

```js
console.log(typeof [], typeof {}); // both log "object"
```

> **Why this matters:** HOFs live on arrays (since arrays are objects), so you can call `map`, `filter`, `reduce`, and more—because those methods are just properties on the array object.

---

## 🧩 What Is a Higher Order Function?

A **Higher Order Function** is a function that either:

1. **Takes a function as an argument** (a “callback”),
2. **Returns a function** (which can be used later).

> **Think of a HOF as a factory that needs a specialized tool (function) to build something.**

### 🔍 Example “Gun and Fun”

```js
function gun() {
  // some logic
}

function fun(gun) {
  // some logic before
  gun(); // calling the function passed in
}
```

* `fun` is a Higher Order Function because it **expects** another function (`gun`) as its argument and **executes** it.
* This is **not** the same as a nested function—`gun` is defined outside; it’s simply **passed in**.

> **Key idea:** HOFs “operate on” other functions.

---

## 🌟 Built-In Higher Order Functions on Arrays

JavaScript arrays come equipped with several HOFs. We’ll focus on three core ones: **`map`**, **`filter`**, and **`reduce`**. Each one “consumes” a function you supply and returns a new result in its own style.

---

### 1️⃣ `map()` – Transform Every Element

#### 📖 How It Works

* Takes a function (`f`) as an argument.
* Loops over each element of the array.
* Calls `f(element, index, array)` for every element.
* Collects each return value into a **brand-new array** (keeping the same length).

> Imagine a conveyor belt of raw vegetables. `map` is your slicer that transforms each vegetable into diced pieces and puts them into a new container.

#### 🔧 Example Functions

```js
function square(el) {
  return el * el; // returns the square of the element
}

function cube(x) {
  return x * x * x; // returns the cube of the element
}

function isEvenOrOdd(x) {
  if (x % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
```

#### 🔢 Using `map`

```js
const arr = [1, 2, 3, 4, 5, 6];

// Pass the function itself—no parentheses!
const result = arr.map(square);
console.log(result); // [1, 4, 9, 16, 25, 36]
```

> **Why no `()`?**
> Because we pass the **function reference**. `map` will invoke it for each element.

```js
const cubeResult = arr.map(cube);
console.log(cubeResult); // [1, 8, 27, 64, 125, 216]

const evenOdd = arr.map(isEvenOrOdd);
console.log(evenOdd); // ["odd", "even", "odd", "even", "odd", "even"]
```

> **Pro Tip:** `map` never mutates the original array. It always hands you a new one.

#### 📌 When to Use `map`

* Whenever you need to **apply an operation** to every element.
* When you want to **collect** the transformed results.

> **Real-world analogy:** If you have a list of prices and want to add tax to each, `map` does the heavy lifting:

```js
const prices = [100, 200, 150];
const withTax = prices.map(price => price * 1.1);
console.log(withTax); // [110, 220, 165]
```

---

#### 🔢 `map()` With Index

Sometimes you need **both** the element **and** its index:

```js
const newArr = [9, 8, 7, 6, 5];

function print(element, idx) {
  return `Element at index ${idx} is ${element}`;
}

const result2 = newArr.map(print);
console.log(result2);
// [
//   "Element at index 0 is 9",
//   "Element at index 1 is 8",
//   "Element at index 2 is 7",
//   "Element at index 3 is 6",
//   "Element at index 4 is 5"
// ]
```

* If your callback takes two parameters, `map` will fill them with the **element** and its **index**.
* A third argument (rarely needed) is the **entire array** itself.

---

#### 🎨 Custom `map` Implementation

If you ever want to **roll your own**, here’s a minimal version:

```js
function customMapper(arr, func) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // Call `func` with the element and index, push its return value
    result.push(func(arr[i], i));
  }
  return result; // Return the new transformed array
}

const newArr = [9, 8, 7, 6, 5];
const value = customMapper(newArr, print);
console.log(value);
// Same output as newArr.map(print)…
```

> **Key takeaway:** Under the hood, `map` is just looping, invoking your function, and pushing results into a fresh array.

---

### 2️⃣ `filter()` – Pick Only What Passes a Test

#### 📖 How It Works

* Takes a function (`f`) as an argument—**this function must return a boolean** (`true` / `false`).
* Loops over each element of the array.
* Invokes `f(element, index, array)`.
* If the result is **truthy**, that element is **included** in the new array. If **falsy**, it’s skipped.

> Imagine a coffee barista tasting each cup and only letting the good ones through.

#### 🔧 Example Function

```js
function oddOrEven(x) {
  return x % 2 === 0; // returns true (keep) if even, false (skip) if odd
}
```

#### 🔢 Using `filter`

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evens = arr.filter(oddOrEven);
console.log(evens); // [2, 4, 6, 8]
```

> **Why must the callback return a boolean?**
> Because `filter` needs a clear “yes/no” decision on each element.

---

#### 📌 When to Use `filter`

* When you need to **select** only certain elements from an array.
* If you’re building a list of items that satisfy a given condition (e.g., all products under \$50).

---

### 3️⃣ `reduce()` – Combine Everything into One

#### 📖 How It Works

* Takes a function (`f`) as its **reducer**, plus an optional initial value.
* Loops over each element in the array, carrying along an **accumulator**.
* On each step, calls `f(accumulator, currentValue, index, array)`.
* The return of `f` becomes the **new accumulator**.
* After processing all elements, `reduce` returns the final accumulated value.

> Picture an assembly line where each station adds to a running total.

#### 🔧 Example Function

```js
function sum(prevResult, currValue) {
  return prevResult + currValue; 
}
```

#### 🔢 Using `reduce`

```js
const arr = [1, 2, 3, 4, 5, 6];
const result = arr.reduce(sum);
console.log(result); // 21 (1+2+3+4+5+6)
```

> **Behind the scenes:**
>
> 1. Start with `prevResult = arr[0]` (or an initial value if provided).
> 2. On each element, call `sum(prevResult, currValue)`.
> 3. The return becomes the new `prevResult`.
> 4. Continue until the end, then return the final `prevResult`.

```js
// Summing prices in a shopping cart
function addPrices(prevResult, currValue) {
  // prevResult and currValue are objects with {price, name}
  console.log(prevResult, currValue);
  let newPrice = prevResult.price + currValue.price;
  return { price: newPrice };
}

const cart = [
  { price: 100000, name: "iPhone" },
  { price:    500, name: "Backcover" },
  { price:    300, name: "Tempered Glass" }
];

const totalPrice = cart.reduce(addPrices);
console.log(totalPrice.price); // 100000 + 500 + 300 = 100800
```

> **Why do we return an object?**
> Because we start with `prevResult` as an object, and each step needs to maintain that shape. We only care about `.price` in the end.

---

### 📌 When to Use `reduce`

* When you need to **accumulate** or **compress** an array down into a **single value** (number, object, string, etc.).
* Perfect for calculating totals, building objects, or concatenating strings.

---

## 🔄 Putting It All Together

| Method   | Role                                            | Callback Return Value          | Output                   |
| -------- | ----------------------------------------------- | ------------------------------ | ------------------------ |
| `map`    | Transform each element into something else      | Any (`number`, `string`, etc.) | New array of same length |
| `filter` | Pick only elements that pass a **boolean test** | `true` / `false`               | New (shorter) array      |
| `reduce` | Accumulate all elements into one final result   | Accumulated value              | Single value/object      |

---

## 🚀 Final Takeaways

1. **Arrays are just objects** with numeric keys. That’s why HOFs “live” on them.
2. **Higher Order Functions** take or return functions—think of them as cooking with recipes.
3. **`map`** transforms every element; use it when you need a new array of equal length with each element “mapped” in some way.
4. **`filter`** picks elements that pass a boolean test; use it when you only want a subset of the original array.
5. **`reduce`** compresses the entire array into one final value; use it for sums, product totals, or building a complex result.
6. **Custom implementations** (like `customMapper`) reveal how these methods work under the hood—loops and function calls.


