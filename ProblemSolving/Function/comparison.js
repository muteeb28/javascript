console.log("abc" == "abc");
let x = "abc" //string literal
let y = "abc"
console.log(x == y )
console.log("topic 2")
//
let z = String("abc") 
let a = new String ("abc") //string object
    console.log(z);
    console.log(a)
console.log("topic 3")
console.log(a ==z)
console.log(a ==x)
console.log(z ==x)
console.log("abc" == new String ("abc"))
//== with double equal answer are true
//lets use ===
console.log("topic 4")

console.log(a ===z)
console.log(a ===x)
console.log(z ===x)
console.log("abc" == new String ("abc"))
//=== checks the type, so if the type(x) is different from type(y),return false
