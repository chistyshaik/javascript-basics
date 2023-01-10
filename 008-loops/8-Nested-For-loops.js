let start = 1;
let a = 1;
let b = 10;


let startTable = 1;
let endTable = 10;

for (let tableNum = startTable; tableNum <= endTable; tableNum++) {
    console.log(`
    *****  this is ${tableNum} table  ******
  `)
    for (let table = start; table <= b; table++) {
        console.log(`${tableNum} * ${table} = ${tableNum * table}`)
    };
};