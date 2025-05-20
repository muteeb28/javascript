//this is how we access whole array and intilize an array
let x = [] //empty array
let y = [1,2,3,false,"abc","def",true,NaN,undefined] //all datatypes
const z = ["ab","cd","def","gh"]
const arr = [1,2,3,4,5,6,7,8,9,10]
console.log(x)
console.log(y)
console.log(z)
console.log(arr)
//how to access indivially access all of them

//induvial elements of the array has got unique indexes starting from 0
// [1,2,3,4,5,6] index 0,1,2,3,4,5
// arr[4] -> 5
//indexing in string vs indexing in array
// string ex: str = "kinaaz" 012345
//arr = [0,-1,3,8,z] 
/*
acess data in string - str[2] -"n"
access data in array - arr[2] -3
arr[4] - 2
but when it comes to update data in strings str[0] ="b" is not possibele
you cannot update value present in the index of the string
where as you can do it in array
arr[2] =11 this is possible
updation is possible inside array but not strings that is why 
strings in js are immutable (they cannot change or mutate)
while as arrays are mutable

**/ 

let str = "stananimal"
str[0] ="b"
console.log(str)
let crr = [9,2,1,4,5,6]
crr [3]= 1121
console.log(crr)
//few more loops
//for of loop
/*incoventional for loop 


*/
/*
arr = [10,11,15,20]
for (const value of arr){
console.log(value)
}
inside this value parameter you will get access of the value you dont need to
get the access of the value through the index like arr[i]
*/ 
