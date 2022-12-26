//Arrow Functions - these are introduced in ES6 version 
//(Note :- in arrow function syntax there is no need to write keyword - function and it is must to place an => in between () and {} )

const addition = (a , b) => {
    return a + b
}

console.log(addition(30,53))

const subtraction = (a , b) =>{
    return a - b
}

console.log(subtraction(30,53))


//if we pass values in parameter of a function it will return the value 

const sum = (a,b) => {
    return a + b 
}
sum(10,33);
43


//if we dont pass a parameter in a function it will return Nan 

const add = (a,b) => {
    return a + b
}

console.log(add())

// NaN



