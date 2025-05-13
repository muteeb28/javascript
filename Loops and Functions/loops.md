# 🔁 JavaScript Loops –

## 🧠 Big Idea: Loops Are Programmers' Robots

Imagine you have a little robot assistant. You tell it, "Keep picking up cups from the table until it's clean." That’s a **loop**—a block of code that repeats itself until a condition tells it to stop.

Whether you're counting numbers, summing values, or printing messages, loops help you do it without breaking a sweat.

---

## 🌀 `while` Loop – The Minimalist Robot

The `while` loop is like a **robot that always checks before acting**. It asks, “Should I continue?” If the answer is yes (i.e., the condition is true), it executes the task. If not, it stops cold.

### 🔧 Syntax:

```js
while (condition) {
  // code to run repeatedly
}
```

---

### 💡 Example 1: Print Numbers from 1 to 10

Imagine counting from 1 to 10.

```js
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
```

🧠 **Takeaway**: Always make sure your loop condition eventually becomes `false`. Otherwise, your program gets stuck in an infinite loop loop loop...

---

### 💡 Example 2: Sum of 1 to 10

Let’s say you’re collecting donations and want to add up amounts from 1 to 10.

```js
let sum = 0;
let j = 1;

while (j <= 10) {
  sum += j;
  j++;
}

console.log("Total Sum:", sum);
```

🧠 **Pattern**: Use a **tracker variable** like `sum` to accumulate values inside your loop.

---

### 💡 Example 3: Countdown from 20 to 1

Let’s reverse it—print numbers backward!

```js
let k = 20;
while (k >= 1) {
  console.log(k);
  k--;
}
```

🧠 **Pro Tip**: Loops aren't just for going up. They can go down, too!

---

## 🧊 Edge Cases: When Loops Don’t Run

### 🔹 The condition is false from the beginning:

```js
let y = 10;

while (y < 5) {
  y++;
}

console.log(y); // 10
```

The condition `y < 5` is false, so the loop **never runs**.

---

## 🔁 `do...while` Loop – The "Try First, Ask Later" Robot

Now imagine a robot that **does the task first**, and only **then** asks, “Should I keep going?”

That’s a `do...while` loop. It’s **guaranteed** to run at least once—whether or not the condition is true.

### 🔧 Syntax:

```js
do {
  // run this at least once
} while (condition);
```

---

### 💡 Example: Even if False, It Still Runs Once

```js
let y = 10;

do {
  y++;
} while (y < 5);

console.log(y); // 11
```

Even though `y < 5` is false, the loop runs once before checking.

🧠 **Key Insight**: `do...while` is **exit-controlled** — it checks the condition *after* executing the loop.

In contrast, `while` and `for` loops are **entry-controlled** — they check the condition *before* running.

---

## 🏎️ The `for` Loop – The Swiss Army Knife

The `for` loop gives you everything in one compact package: setup, condition, and update.

### 🔧 Syntax:

```js
for (initialization; condition; increment) {
  // code to repeat
}
```

Best for situations where you know **how many times** the loop should run.

---

### 💡 Example 1: Print Numbers 1 to 10

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

### 💡 Example 2: Sum of 1 to 10

```js
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("Total Sum:", sum);
```

### 💡 Example 3: Print Even Numbers Less Than 25

#### 🧠 Method 1: Use Modulo Operator

```js
for (let i = 1; i < 25; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

#### ⚡ Method 2: Increment by 2 (Optimized)

```js
for (let j = 2; j < 25; j += 2) {
  console.log(j);
}
```

🧠 **Pro Tip**: If you already know you want even numbers, skip the odds and loop faster!

---

## 🔄 `while` vs. `do...while` vs. `for`

| Feature            | `while` Loop          | `do...while` Loop               | `for` Loop          |
| ------------------ | --------------------- | ------------------------------- | ------------------- |
| When to Use        | When count is unknown | When you must run at least once | When count is known |
| Entry/Exit Control | Entry-controlled      | Exit-controlled                 | Entry-controlled    |
| Flexibility        | High (more manual)    | Medium (less common)            | High (structured)   |
| Error Risk         | Easy to forget `++`   | Slightly safer                  | Less error-prone    |

---


