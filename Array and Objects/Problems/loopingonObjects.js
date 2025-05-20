let x ={
    name: "john",
    company: "Microsoft",
    salary: 40000,
    age :24,
    city: "bengaluru",
    team : "azure storage",
    designation: "software engineer"

}
//i want to get access of all of the keys 
//function that you can execute
let keysOfX = Object.keys(x) ///it will return an array of the keys of x
console.log(keysOfX)
///how to values of x
let valuesOfX = Object.values(x) //it will return an array of values of x
console.log(valuesOfX)
//what if you want to get access of both 

let entriesOfX = Object.entries(x) //it will return an array of arrays of 
//  the keys values
console.log(entriesOfX)
