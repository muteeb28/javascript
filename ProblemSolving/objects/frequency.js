//Q1: Given a string try to print no of occurences of each unique character of
//a string
//ex javascript (priniting can be done in any order)
/*  
j 1
a 2
v 1
s 1
c 1
r 1
i 1
p 1
t 1
*/ 
//how about we somewhow store frequency of each unique char we need a mapping
// based structure <key - value> in objects
let str = "javascript";
let freqMap ={}
for(const char of str){
    if(freqMap[char]){
        //if present update it 
        freqMap[char]+=1;

    }else{
        //if not present add it
        freqMap[char] =1;
    }
}
console.log(freqMap);

//note dont use freqMap.char reason is it will although char is a variable but
//it will not detect it as variable instead it will try to detect as key char
//that is why it is preferble to use [] based syntax
