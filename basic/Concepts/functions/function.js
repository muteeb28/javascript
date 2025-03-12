//create a function to check if the number is even or odd 
function isEven(num){
    if (num%2 ===0){
        return true
    }else {return false}
}

// console.log(isEven(10))
// among the first 20 number print even and oddd
// for (let i=1;i<=20;i+=1){
//     let result = isEven(i)
//     if (result === true){
//         console.log(i,"even")
//     }else 
//     {
//         console.log(i,"odd")
//     }
// }

//  check numbers are odd and even between 1 - 50

for (let i =1 ; i<=50 ; i+=1){
    let result = isEven(i)
    if (result === true){
        console.log( i, "even")
    }else{
        console.log(i, "odd")
    }
}