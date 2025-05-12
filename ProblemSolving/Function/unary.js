/*
If assigned (y = a++), gives the old value to y.
If standalone (a++), just increments silently.
*/ 
let a = 10;
let y = a++;
console.log(a,y)
a++
console.log(a,y)