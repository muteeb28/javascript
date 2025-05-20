//create an object
let x = {name: "khalid", age : 34}
let y ={
    name:"hazik",
    age: 16
}
//access with . operator or square brackets inside put the key as a string
//acesss any value using the key 
//Note: from key u can access values but not viceversa
console.log(x["name"])
console.log(y.name)
//update object
//are object mutable ? yes
y.name = "iqram"
console.log(y)
//why we cannot access a value from a key(you will learn when u learn hashing)
// but a simple example is in an object key are unique but mutliple diff key can have 
//same value in an object
//ex
let z ={
    name:"mohsin",
    age: 16,
    marks: 16 
}
//the age key and marks has same value so which key wil you return

//how to add a new property to an already created object
x.marks = 100; //if marks key is present it will update it ,otherwise it will add it

x["company"] ="meta"
console.log(x)

//delete a property or key value pair
//we can use delete operator along with object.key
delete x.name;
console.log(x)
// based structure <key - value> in objects
//question: frequency of char
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






