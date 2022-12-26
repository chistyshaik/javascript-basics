//there are three ways in creating a function :-

//1.through Function Declaration 

function multiply(a,b){
    return a*b
}

multiply(5,10)



//2.through Function Expression

let multiplication = function multiply(a,b){
    return a*b
}

console.log(multiplication(2,7))


//3.through  Arrow Function (in arrow function syntax there is no need to write keyword - function, must to place an => in between () and {} )

const addition = (a , b) => {
    return a + b
}

console.log(addition(30,53))

const subtraction = (a , b) =>{
    return a - b
}

console.log(subtraction(30,53))