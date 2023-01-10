import readline from 'readline-sync'
let a = readline.questionInt("Enter the Table num you want to generate ? ")
let start = 10
let end =  1

while (start >= end){
    console.log(`${a} * ${start} =  ${ a * start} `);
    start--
}



//output

/* 
5 * 10 =  50
5 * 9 =  45
5 * 8 =  40
5 * 7 =  35
5 * 6 =  30
5 * 5 =  25
5 * 4 =  20
5 * 3 =  15
5 * 2 =  10
5 * 1 =  5
*/