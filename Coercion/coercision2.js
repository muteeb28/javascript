//---------using logical not to demonestrate toBoolean
// let a = NaN
// let b = false
// let c = +0
// let d = -0
// let e = ""
// let f = undefined
// let g = null
// console.log(!a,!b,!c,!d,!e,!f,!g)

//----using if condition
// let y = undefined;

// if (y) {
//     console.log("it's truthy");
// } else {
//     console.log("it's falsy");
// }
// // Output: it's falsy
// console.log(null == 0)


// console.log(1 < 2 < 3) // (1<2) → true → true < 3 → 1 < 3 → true
// console.log(3 > 2 > 1) // (3>2) → true → true > 1 → 1 > 1 → false


// let a = isNaN(12)
// let b = isNaN("12")
// let c = isNaN("samlet")
// let d = isNaN(NaN)
// let e = isNaN(null)
// let f = isNaN(undefined)
// console.log(a,b,c,d,e,f)


// console.log(Number.isNaN("sanket"))
// console.log(Number.isNaN(NaN))

// let a = 12
// let b = typeof a 
// let c = typeof b
//  console.log(c)


// let a = NaN
// let b = typeof(a)
// console.log(b)

// if (typeof a == "number" && a !== a){
//       console.log(true)
// }
// let x = -0;
//  // false (because -0 is considered 0 in comparisons)

// console.log(x < 0)
// function getSign(num) {
//   if (Object.is(num, -0)) return "-0";
//   return Math.sign(num);
// }

// console.log(getSign(-1)); // "-0"
// console.log(getSign(2));  // 0


console.log("abc".toString())