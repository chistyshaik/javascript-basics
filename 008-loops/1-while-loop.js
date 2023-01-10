// if we wanna run sa,e code number of times we can use loops

// syntax of while loop 
import readline from "readline-sync";

let b = 1 ;
while ( b < 10){
    console.log (b)
    b++
}



let a = readline.questionInt("Enter the Table num you want to generate ? ")
let start = 1 
let end =  readline.questionInt("you want to end the table at ? ")

while (start <= end){
    console.log(`${a} * ${start} =  ${ a * start} `);
    start++
};


//output
/*5 * 1 =  5
5 * 2 =  10
5 * 3 =  15
5 * 4 =  20
5 * 5 =  25
5 * 6 =  30
5 * 7 =  35
5 * 8 =  40
5 * 9 =  45
5 * 10 =  50 */