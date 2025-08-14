         /// Examples of + operator
// let a = 12 +12
// let b = 123 + "hello"
// let c = 123 +"123"
// let d = 12 + true
// let e = 12 + false
// let f = 45 + undefined
// let g = 66 + null

// console.log(a,b,c,d,e,f,g)

        ///Examples of - operator
// let a = '12' -12
// let b = 123 -"hello"
// let c = 123 -"123"
// let d = 12 - true
// let e = 12 - false
// let f = 45 - undefined
// let g = 66 - null

// console.log(a,b,c,d,e,f,g)

           /// ------every obj has toString and valueOf
// let obj = {firstName : "waseem"}
// console.log(obj.toString())
// console.log(typeof obj.toString())

// console.log(obj.valueOf())
// console.log(typeof obj.valueOf())

             /// -----overiding tostring and valueof
// let obj = {
//     toString(){
//         return "overide"
//     }
// }

// // console.log(obj.toString())

// let obj2 = {
//     valueOf(){
//         return "overide2"
//     }
// }

// console.log(obj2.valueOf())

// let obj ={}
// let a = 10

// console.log(a - obj)
// let a = 10

// let obj2 = {
//     x:9,
//     x:10  ///why it consider this key value pair
// }

// console.log(a - obj2)
//  console.log(obj2.toString())
//   console.log(obj2.valueOf())
// let a = 10
// let obj2 = {
//  x: 7,
//  valueOf() {
//  return 99;
//  }
// }
// //  console.log(obj2.toString())
// //   console.log(obj2.valueOf())
// console.log(a - obj2)

// let obj3 = {
//  x: 8,
//  toString() {
//  return "88";
//  }
// };

// let result = 90 - obj3
// console.log(result)

// let obj4 = {
//  x: 8,
//  toString() {
//  return {};
//  }
// }
// console.log(90 - obj4);


// let obj = {
// };
// console.log(10 + obj); 

// let a = null
// let b = undefined

// console.log(!a)
// console.log(!b)
