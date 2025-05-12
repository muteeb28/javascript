// Code example for if conditional statement
let age = 14;
if (age >=18){
    console.log('You are an adult');
}
// code example for if-else conditional statement
if (age >=18){
    console.log('You are an adult');
} else {
    console.log('You are a minor');
}
//example 2
let weather = 'sunny';
if (weather === 'rainy'){
    console.log('Take an umbrella');
} else {    
    console.log('Wear sunglasses');
}
// example of  else if
// On a streaming platform like Hotstar, users can have different levels of subscription:
// 1. **Premium:** Access to all content.
// 2. **VIP:** Access to VIP content but limited features compared to Premium.
// 3. **Free:** Limited content, with ads.

let subscription = "free";
if (subscription === "premium"){
    console.log("Access to all content")
}else if (subscription === "vip"){
    console.log("Access to vip content but limited features compared to premium")
}else{
    console.log("Limited content, with ads.")
}

//another solution
let isUserpremium = false;
let isUserVip = true;
if(isUserpremium){
    console.log("Enjoy the premium content of hotstar")
}else if (isUserVip){
    console.log("Enjoy the Vip content on hotstar.for more subcribe to premium")
} else {
    console.log("Please subscribe to VIP or Premium to enjoy you the content on hotstar")
}

//scenario based else if condition
// user can have both prime and discovery subscription or can have either
let userPrime = true;
let userDiscovery = false;
if(userDiscovery && userPrime){
    console.log("enjoy both benefits");
    //The problem is that the `else` statement should not have a condition. 
// You should use `else if` instead.
}else if(userPrime){
    console.log("you have subscribed to prime")
}else {
    console.log("please select a subscription")
}

console.log(0 && 6);// here it will return the falsy value