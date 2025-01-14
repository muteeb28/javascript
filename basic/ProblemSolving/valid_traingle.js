// question: given three integers a,b,c check if we can form a traingle with the
// sides of the traingle having length a,b,c
// ex : a=7 ,b =10, c=3 {yes}
// ex: a= 1 , b=10, c =12 (no)
//note we are not only talking about right angle traingle


// we have three lengths a b c if we can form a traingle 
// sum of the other two sides should be greater than the one side
// a+b >a  and a+b>c and c+a >b
//if we want to create a traingle with a,b,c sides then for each side of the
// sum of other 2 sides should be greater

let a = 10 , b =12 , c =5;

if (a+b>c && a+c> b && b+c > a){
    console.log("yes")
}else{
    console.log("no")
}

let x = 1 , y = 10 , z =12;
if (x+y > z && x+z> y && y+z>x){
    console.log("yes")
}else{
    console.log("no")
}