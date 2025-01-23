/*
⟿ control flow : if, else, else if 
 ◉ if -> for simple decision
 ◉ else if -> for multiple conditions
 ◉ else -> statement should not have any other condition
*/ 
                                        
/**
 * 0 is a falsy value below example we see using logical AND operator
 */
console.log(0 && 6); // Output: 0 (0 is falsy, so it's returned immediately)
console.log(1 && 6); // Output: 6 (both are truthy, so the second value is returned)
console.log(false && "hello"); // Output: false (first value is falsy)
console.log(true && "world"); // Output: "world" (first is truthy, so the second value is returned)
console.log("foo" && "bar"); // Output: "bar" (both are truthy, so the second value is returned)

console.log("<br>")
/*
⟿ Example:1 different level of subscrption on hotstar
        1. Premium: Access to all content.
        2. VIP: Access to VIP content but limited features compared to Premium.
        3. Free: Limited content, with ads.
*/ 
let subscrption = "vip";
if (subscrption==="premium"){
    console.log("Access all the content")
}else if (subscrption==="vip"){
    console.log("Access to vip content but limited features compared to premium")
} else{
    console.log("limited content, with  ads")
}
// another solution using boolean
console.log("<br>")
let userIsPremium = true;
let userIsVip = false;
if (userIsPremium){
    console.log("Access all the content");
}else if (userIsVip){
    console.log("Access to vip content but limited features compared to premium");
}else{
    console.log("limited content, with  ads");
}

/*
⟿ Example:2 User can have both prime and discovery subscription or can have either
        1. Premium
        2. Discovery
*/ 
console.log("<br>")
let isUserPrime = true;
let isUserDiscovery = false;

if (isUserDiscovery && isUserPrime){
    console.log("Enjoy both benefits")
}else if (isUserDiscovery){
    console.log("discovery access")
}else {
    console.log("enjoy prime access")
}