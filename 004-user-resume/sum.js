const readline = require('readline-sync');

console.log("sum of two numbers");

const numOne = readline.question("enter numOne");
const numTwo = readline.question("enter numTwo");
const sum = +numOne + +numTwo;

console.log(`sum of the ${numOne} and ${numTwo} is ${sum}`);

