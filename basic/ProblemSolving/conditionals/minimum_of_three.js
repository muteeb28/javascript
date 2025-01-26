// Consider three integer values,and find minimum value among the given input
// dont use any internal function only use if else


// somehow we have to consider all the three numbers in the comparisions
// in which case x will be the smallest
// x <y && x<z ; if these 2 conditons are true together the x is the smallest
// in no other case x will be the ans
// -> in what case y be will be smallest number
// y<x && y<z ; if these 2 conditions hold true together
//-> in what case z will be the smallest
// if x and y is not the answer then z will be the final answer
// note: there can be more ways to solve it

let x= 10, y =20, z =30; 
if (x<y && x<z){
    console.log(x)
}else if (y<x && y<z){
    console.log(y)
}else{
    console.log(z)
}