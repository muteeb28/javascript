
//prime number or not
/* lets decipher the logic
how to check if no is prime or not we need to check what type of no are prime
- primes are only divisible by 1 or no
- so x =12 (to check if it prime or not)
- if there is atleast one more number other than 1 and x that divedes x completey
then x is non prime (composite no)
lets take few example
9 we will start with modulu from 2 like 2%9 then 3&9 3%9 
49
13
so we the first number we find in this range that can divide x completey we will
immediately will return false
{2 -x-1}
*/ 

// if we exit loop without returning false,means no number in range (2 , x-1)
//can devide x ,hence x is prime
//Q1. Given a number x  write a function to determine whether the number is
function isPrime(x){
    for(let i =2; i<= x -1; i+=1){
        if(x % i == 0){
            return false;
        }

    } 
    return true;
}
console.log(isPrime(13))