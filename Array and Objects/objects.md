---

# 🗝️ Objects in JavaScript — Your Personal Data Lockers

In JavaScript, **objects** are *key → value* stores.
Think of them as labelled lockers: the **key** is the locker number, the **value** is whatever you put inside.

```js
const dev = { name: "Khalid", age: 24 };
```

Each locker (key) must be **unique**; the stuff inside (values) can be anything: numbers, strings, booleans, arrays, even other objects.

---

## ✨ Creating Objects

### 1. Literal syntax (most common)

```js
const student = {
  name: "Hazik",   // key: value
  age: 16
};
```

> ✅ **Rule‑of‑thumb:** keys come first, then a colon, then their value, and pairs are comma‑separated.

### 2. Empty, then fill

```js
const empty = {};
empty.city = "Bengaluru";
empty["salary"] = 40_000;   // same as empty.salary
```

---

## 🔍 Reading & Updating

| Style       | Read                       | Update                |
| ----------- | -------------------------- | --------------------- |
| **Dot**     | `student.name` → `"Hazik"` | `student.age = 17`    |
| **Bracket** | `student["name"]`          | `student["age"] = 17` |

Bracket form lets you use variables or expressions:

```js
const key = "team";
student[key] = "Azure Storage";
```

---

## 🛠️ Mutability Super‑power

Objects are **mutable** — you can add, change, or delete lockers at will:

```js
student.designation = "Software Engineer"; // add
delete student.age;                        // remove
```

*(Arrays are mutable too; strings are **not**!)*

---

## 🤔 Why key → value, not value → key?

Multiple keys may share the same value:

```js
const z = { age: 16, marks: 16 };
```

If you asked “which key holds `16`?” JavaScript would shrug — there are two.
Keys must be unique; values don’t have to be.

*(You’ll learn the deep reason when you meet **hash tables**.)*

---

## 🧮 Real‑world Example: Character Frequency Map

```js
const str = "javascript";
const freq = {};

for (const ch of str) {
  // 🔑 use bracket form – `freq[ch]`, not `freq.ch`
  freq[ch] ? freq[ch]++ : (freq[ch] = 1);
}

console.log(freq);
// { j:1, a:2, v:1, s:1, c:1, r:1, i:1, p:1, t:1 }
```

---

## 🗂️ Object Utility Methods

| Method                | Returns                                         | Use‑case       |
| --------------------- | ----------------------------------------------- | -------------- |
| `Object.keys(obj)`    | `["name", "company", …]`                        | Iterate keys   |
| `Object.values(obj)`  | `["John", "Microsoft", …]`                      | Iterate values |
| `Object.entries(obj)` | `[["name","John"], ["company","Microsoft"], …]` | Both at once   |

```js
for (const [k, v] of Object.entries(dev)) {
  console.log(k, v);
}
```

---

## 🔁 Looping Shortcuts

### `for…in` — keys only

```js
for (const key in dev) {
  console.log(key, dev[key]);
}
```

### `for…of` on `Object.entries` — keys *and* values

```js
for (const [key, value] of Object.entries(dev)) {
  console.log(`${key} → ${value}`);
}
```

---

## 🏗️ Adding Properties Safely

```js
dev.marks = 100;         // adds if missing, overwrites if present
dev["company"] = "Meta"; // same idea
```

---

## ⚡ Quick‑Reference

```js
// Create
const person = { name: "John", age: 34 };

// Read
person.name         // "John"
person["age"]       // 34

// Update
person.age = 35;

// Add
person.city = "Bengaluru";

// Delete
delete person.name;

// Introspect
Object.keys(person);    // ["age","city"]
Object.values(person);  // [35,"Bengaluru"]
```

---

### 💡 Takeaways

1. **Objects = labelled lockers.** Keys are labels; values are the contents.
2. Use **dot** for fixed keys, **brackets** when the key is dynamic.
3. Objects are **mutable** — you can add, change, or delete properties any time.
4. `Object.keys / values / entries` turn objects into arrays for easy looping.

---