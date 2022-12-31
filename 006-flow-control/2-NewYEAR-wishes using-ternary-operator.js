const readline = require('readline-sync');



//there is an alternate way to write if else condition 
//that is ternary operator 
//syntax :- condition ? trueBlock : falseBlock

console.log("answer the following question.....")
const enterYear = +readline.question('YOU ARE IN WHICH YEAR now ?');


let number = enterYear
number == 2023
  ? 
//   alert("*********happynewyear 2023***********")
//   :alert(`you entered the wrong year`)

  console.log('********* HAPPY NEWYEAR - 2023 ***********')
  :console.log('you entered the wrong year');
  

