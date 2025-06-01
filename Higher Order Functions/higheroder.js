// let arr = ["ab","cd","df"]

// console.log(arr)
// //it will pringt [ 'ab', 'cd', 'df' ] ,but internally its is like
// // [0: "ab", 1: "cd",2:"df"]
// console.log(typeof [], typeof {})

// /**
//  * higher order functions are those functions that take another function as
//  * argument or return a function
//  */

// function fun (){
//     //some logic
// }

// function gun(fun){
//     //some logic
//     gun(); //executing the function passed
// }
// /**
//  * there are built in higer order functions
//  * 1. Map
//  */
// function square(x){
//     return x * x
// }
// function cube (y){
//     return y*y*y
// }


// function isEven(z){
//     return z%2 === 0 ? `${z} is even` : `${z} is odd`
// } 

// const newArr = [1,2,3,6,45,5]

// //newArr.map(square)
// console.log(newArr.map(square))
// console.log(newArr.map(cube))
// console.log(newArr.map(isEven))


// function print (element, idx){
//     return `Element at index ${idx} is ${element}`
// }

// const inArr =[9,8,7,6,5]
// // console.log(print(1,2))
// const result = inArr.map(print)


// console.log(result)


function even(num){
    return num % 2 === 0 
} 


let arr = [ 1,2,3,4,5,6,7,7,89,8,9]


const result = arr.filter(even)

console.log(result)