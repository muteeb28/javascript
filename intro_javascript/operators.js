//two types of operators 
// arithemetic and assignment operators
// arithemetic performs basic mathematical operations
/**
 * additiion +
 * subtraction - 
 * multiplication-
 * division/
 * modulus(remainder)%
 * exponentiation**
 */
// operands : are the values on which operators act {10 +3 => 10 and 3 are operands and + is operator}
// examples of plus and remainder operator
let a = 10;
let b = 20;
const sum = a+b;
const remainder = a % b;
console.log("the addition is: \n", sum);
console.log("the remainder will be:",remainder)
// assignment operator are used to assign or update value of a variable
/**
 *  = assign a value
 *  += add and asign 
 *  -= subtract and assign
 *  *= multiply and assign
 *  /= divivde and assign
 *  % = remainder and assign
 *  **= exponetiation and assign
 */
let val = 3;
let valu = val+=3;
console.log(valu);
console.log( a += 2 );
console.log( a **=2);


// relational or comparison operator
// < > <= >= 

let x = 10;
let y =20;
console.log("x>y", x >y);
//this will try to evaluvate it and give you true or false based on comparison


//logical operators
//and && or  || not !
/*
*  && , then both value require to be true , for result to be true
else it will immediately returns the value
Requires **at least one operand** to be `true` for the result to be `true`.
*/

/*
In javascript these values are considered falsy
1. Null   -> empty value , there is no roll on the holder
2. undefined -> the value was never assigned , no holder 
3. empty string " "
4. +0 and -0 -> 0 represent the standard value of zero , -0 indicates negative direction
5. NaN -> where the result cannot be a valid number , only which is not equal to itself
6. false
*/

/*
Coercion in javascript
* truly values stay as true
* falsy values are converted to false
*/
// short circuiting

// example for &&
 
console.log( true && false); // if first operand is true it evaluates and return second operand

console.log(false && true); // first operand is falsy it directly returns first operand
console.log(0 && -0 ) // both are falsy it will return first
console.log(0 && 6 )
console.log(10&&6) ; // both are true it evaluates and return second operand

//  || OR operator
console.log(10 || 6) // both are true so it will return first
console.log(0 || -0 ) // both are falsy it will return second

// not ! it will inverts the value of operand
console.log(!(3 > 4)); // Output: true
	console.log(!true);   // Output: false
   // Coercion in JavaScript
console.log(Boolean(0));       // Output: false
console.log(Boolean("hello")); // Output: true
console.log(Boolean(null));    // Output: false
console.log(Boolean([]));      // Output: true (Empty arrays are truthy)  

// `Infinity`: Represents values greater than the largest possible finite number.
//`-Infinity`: Represents values smaller than the smallest possible finite number.

//It is of type `number`, not a string.
//Operations involving `Infinity` behave logically:

console.log(10 < Infinity);  // true
console.log(-Infinity < 10); // true
console.log(Infinity / 2);   // Infinity
console.log(-Infinity + 1);  // -Infinity

//typeOf
console.log(typeof "1");
console.log(typeof 1);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);

/*typeof null return object . why? javascript legacy bug 
 null is not a object, it is a primitve value, which represent
intentional absence of object value*/
//Checks if an object is an instance of a specific class or constructor function.
// example
console.log(null instanceof Object);
//it will result false

/**  In short:
- `==` → _Type conversion happens, then comparison._
- `===` → _No type conversion; directly compares type and value._
**Best Practice:** Always prefer `===` unless you explicitly need type coercion. */
console.log(5 == "5"); // true (string "5" is converted to number 5)
console.log(null == undefined); // true (special coercion rule in JS)
console.log(5 === "5"); // false (number vs string)
console.log(null === undefined); // false (different types)
console.log(1== "sujit"); //false (1==NaN)