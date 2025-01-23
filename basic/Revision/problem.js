//Question-1: check if the number is even or odd

let num = 2331;
if(num % 2 === 0){
    console.log("even")
}else{
    console.log("odd")
}
console.log("<br>")

//Question-2: find the minimum value among three integers

// let a = 12, b =13, c=2;
// if (a<b && a<c){
//     console.log(`a is the smallest of three`)
// }else if (b<a && b<c){
//     console.log(`b is the smallest of three`)
// }else{
//     console.log(`c is the smallest of three`)
//     console.log(`${c} is the smalllest`)
//}
console.log("<br>")
/*
Question-3: given three integers a,b,c check if we can form a traingle with the
sides of the traingle having length a,b,c
ex : a=7 ,b =10, c=3 {yes}
ex: a= 1 , b=10, c =12 (no)
note we are not only talking about right angle traingle
**/ 

let x =7, y =10, z =4;
if (x+y>z && x+z>y && y+z>x){
    console.log("this is a valid traingle")
}else{
    console.log("not a valid traingle")
}

/*
Question-4: Classify a traingle based on side lengths
1. equilateral: all sides are equal, 2. isosceles: two sides are equal and
one is different, 3. scalene: all three sides are different
*/ 
console.log("<br>")

let a =11 , b =12, c =13;
if (a==b && a==c && b==c){
    console.log("equilateral")
}else if (a !=b && a!=c && b!=c  ){
    console.log("scalene")
}else {
    console.log("isosceles")
}

/***
 * If you think, "But isosceles requires exactly two sides to be equal,
 * " that's incorrect. An equilateral triangle (all three sides equal) is
 *  also a special case of an isosceles triangle because it still satisfies 
 * the condition of "at least two sides are equal."
Summary:
The OR operator (||) works perfectly to check for isosceles triangles because 
it logically covers the definition of "at least two sides equal."
 It ensures the condition is true if any pair of sides matches. 
 Let me know if you'd like further clarification!
 */