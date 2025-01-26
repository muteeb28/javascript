/** Pimitive vs non primitive
 * primitve :(immutable or atomic) they exists independently 
 * e.g string, number, boolean, undefined, null, symbol,bigInt
 * non primitive : compostion of other types
 * e.g objects, Array, function,date
 */ 
// object = key value pair , key must be unique
//simple object
// example employee
const employee ={
    firstName: "Vishal",
    company : "PhonePe",
    role: "Frontend developer"

};
// ex:product details
const product ={
    id : "mobile",
    brand: "iphone",
    price: 120000,
    inStock: true,
    color: "rose gold",
    description: "refurbished"
};
//nested objects
// example: post

const user = {
    firstName: "vinod",
    age:30,
    postCreated:{
        date: "12 august 2021",
        time : 12,
        text: "i bought a bike "
    },
    isActive: true,
    gender: "Male"
}

// null: if i want set something as empty 
// undefined: value that was never assigned
let company = null;
let employeeSalary = undefined

console.log("Your company name is ", company)
console.log("Your current salary is ", employeeSalary)


// escape sequence\

let newLine = "this should give a  new line \nbefore this"
let tab = "this should give space equal to tab \tbefore this"
let backlash = 'product\\new product\\current product'

console.log(newLine)
console.log(tab)
console.log(backlash)
































