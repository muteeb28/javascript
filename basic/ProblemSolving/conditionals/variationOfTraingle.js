// question: given the sides length of a traingle in the form of 3 integers. check if 
// the given  traingle is equilateral or scalene or isosceles
// Note: given input will always from a traingle


//ex: a =7, b=7, c=7 ans equilateral {all the sides are equal to each other}
//ex: a =8, b=12, c =5 ans scalene {non of the sides are equal to each other}
// ex: a =8, b=14, c =8 ans isosceles {any two sides are equal to each other 
// and the third one is different }

let a =8, b = 9 ,  c =7;

if (a==b && a==c && b==c){
    console.log("equilateral")
}else if (a==b || a==c || b==c){
    console.log("isosceles")
}
else {
    console.log("scalene")
}