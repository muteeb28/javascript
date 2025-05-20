//Q1:Function to check even or odd
function isEven(num){
    if (num %2 === 0){
       return true
    }else{
        return false
    }
}
// console.log(isEven(23)) ...solution

//Q2: Check which numbers are odd or even from 1-50
for (let i =1; i<=50;i+=1){
    let result = isEven(i)
    if (result == true){
        console.log(i,"even")
    }else{
        console.log(i,"odd")
    }
}
// ----------- another approach ---------

function isEvenOrOdd(num){
    if (num%2 === 0){
        return "even"
    }else{
        return "odd"
    }

}

for(let j =1; j<=20;j+=1){
    console.log(j, "is",isEvenOrOdd(j))
}


//question check odd even for three numbers