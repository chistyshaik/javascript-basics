// const chalk = require("chalk");
import chalk from 'chalk';

console.log("Hi");
console.log("Hey!");
console.log(chalk.yellow("Hello"));
console.log(chalk.bgCyan("Javascript Functions"));


function myFirstFunction() {
  console.log("Red");
  console.log("Blue");
  console.log("Green");
}

myFirstFunction();

var numOne = 20;
var numTwo = 30;
var output = numOne + numTwo;
console.log(output);

function addition(inputOne, inputTwo) {
  console.log("Calling addition function....");
  console.log(chalk.bgBlue(inputOne));
  console.log(chalk.bgRed(inputTwo));

  const output = inputOne + inputTwo;
  console.log( chalk.bgGreen(output) )
}

addition(10, 57);


function subtraction(valOne , valTwo){
  console.log("Calling subtraction function....");
  console.log(chalk.bgBlue(valOne));
  console.log(chalk.bgRed(valTwo));

  const subOutput = valOne - valTwo
  console.log(chalk.bgBlue(subOutput))
}
subtraction(55,23);


function multiplication(valOne , valTwo){
  console.log("calling multiplication function........");
  console.log(chalk.bgCyanBright(valOne));
  console.log(chalk.bgWhiteBright(valTwo));

  const mulOutput = valOne * valTwo ;
  console.log(chalk.bgRed(mulOutput));
}

multiplication(5,10);

function division(valOne , valTwo){
  console.log("calling division function.........");
  console.log(chalk.bgCyanBright(valOne));
  console.log(chalk.bgWhiteBright(valTwo));

  const divOutput = valOne / valTwo ;
  console.log(chalk.bgRed(divOutput));
}

division(500,25);

function modulo(valOne , valTwo){
  console.log("calling modulus function.........");
  console.log(chalk.bgCyanBright(valOne));
  console.log(chalk.bgWhiteBright(valTwo));

  const modOutput = valOne % valTwo ;
  console.log(chalk.bgRed(modOutput));
}

modulo(500,25);
