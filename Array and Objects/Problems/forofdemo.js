let arr =[10,11,14,120,-1]
for(const val of arr){
    console.log(val)
}
//you can try it with respective to var , const, let

//incase of string
let str = "khalid"
for (const char of str ){
    console.log(char)
}


//refer to loopingonobjects.js before for this content
let x ={
    name: "john",
    company: "Microsoft",
    salary: 40000,
    age :24,
    city: "bengaluru",
    team : "azure storage",
    designation: "software engineer"

}
//loop over an object
for(const entry of Object.entries(x) ){
    console.log(entry)
}
//there is one more way... for in loop
//for in loop actually help us loop over keys
for(const keys in x){
    console.log(keys,x[keys])
}

