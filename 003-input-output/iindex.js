const readline = require('readline-sync');

//output welcome message 
console.log("welcome to input and output programme");

//ask username froom the input qstn
 const name = readline.question("please enter ur name");
 const age = readline.question("please enter ur age");
 const city = readline.question("please enter ur city");

 console.log(`hello ${name} ur age is ${age} and u r from ${city}`)
