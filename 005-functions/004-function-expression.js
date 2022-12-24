//Expressions produce a value, and that value will be passed into the function. Statements don't produce a value, and so they can't be used as function arguments.

//example for a expression (in which two values convert and give a single value)
//here expressions generate a single value which can be assigned in a variable
23 - 5;
45 * 10 > 11

//example for a statement 
let statement =  45 * 10 > 11

// the simple thing to remember about a function expression is just to assign the function in a variable

function greet(username) {
    console.log(`hey hello ${username}`)
}
greet("chisty");

let greetings = function greet(username) {
  
    console.log(`hey ${username} you are in a function expression`)
}
greetings('chisty');


let addition = function(xValue, yValue){
    return `${xValue + yValue}`;
  }
  addition(11 , 12);





