 ////////////// first question code ////////////////// :
 
 const readline = require("readline-sync");

 const name = readline.question("What is your name ?");
 
 console.log(`Hello,${name}!`);
 
 
//  ------OUTPUT--------
//  What is your name ?chisty
//  Hello ,chisty!
 
 
 
 //////////////// second question code ///////////////// :
 
 const readline = require("readline-sync");
 
 const firstName = readline.question("Enter your firstname : ");
 
 const lastName = readline.question("Enter your lastname : ");
 
 console.log(`Hello, ${firstName} ${lastName} !`);
 
//  --------OUTPUT --------------
//  $ NODE age.js
//  Enter your firstname : chisty
//  Enter your lastname : shaik
//  Hello, chisty shaik !
 
 
 
 
 //////////////// third question code ///////////////////// :
 
 const readline = require('readline-sync');
 
 console.log("what is your age ? ");
 
 const age = readline.question('enter your age: ');
 
 console.log(`You are ${age} years old`);
 
 console.log(`In 10 years you will be ${+age + +10} years old`);
 console.log(`In 20 years you will be ${+age + +20} years old`);
 console.log(`In 30 years you will be ${+age + +30} years old`);
 console.log(`In 40 years you will be ${+age + +40} years old`);
 console.log(`In 50 years you will be ${+age + +50} years old`);
 
 
//  ---------- OUTPUT ------------
 
//  $ node age.js
//  what is your age ?
//  enter your age: 22
//  You are 22 years old
//  In 10 years you will be 32 years old
//  In 20 years you will be 42 years old
//  In 30 years you will be 52 years old
//  In 40 years you will be 62 years old
//  In 50 years you will be 72 years old