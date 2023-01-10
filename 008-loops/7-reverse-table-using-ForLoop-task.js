import readline from 'readline-sync'
let start = 1;
let a = readline.questionInt("Enter the Table num you want to generate ? ")
let b = readline.questionInt("you wanna end table at ?  ")


for (let table = start ; table <= b ; table++ ){
    console.log(`${a} * ${table} = ${a * table}`)
};

/* -- output ---
6 * 1 = 6
6 * 2 = 12
6 * 3 = 18
6 * 4 = 24
6 * 5 = 30
6 * 6 = 36
6 * 7 = 42
6 * 8 = 48
6 * 9 = 54
6 * 10 = 60
*/

let startTable = 10;
let c = readline.questionInt("Enter the Table num you want to generate in reverse ? ")
let d = readline.questionInt("you wanna end this reverse table at ?  ")


for (let table = startTable ; table >= d ; table-- ){
    console.log(`${c} * ${table} = ${c * table}`)
};

/*
--------- Output  -----------
Enter the Table num you want to generate in reverse ? 14
you wanna end this reverse table at ?  0
14 * 10 = 140
14 * 9 = 126
14 * 8 = 112
14 * 7 = 98
14 * 6 = 84
14 * 5 = 70
14 * 4 = 56
14 * 3 = 42
14 * 2 = 28
14 * 1 = 14
14 * 0 = 0
*/