//import readline from 'readline-sync';
//let tableNum = 1;
// import readline from 'readline-sync'
// while ( firstMultiple <= lastMultiple ){
//     console.log(`${tableNum} * ${firstMultiple} = ${ tableNum * firstMultiple}`)
//     firstMultiple++
// }


/*  nested loops are framed one loop inside another. The first loop usually calls the outer loop while the second loop calls the inner loop. The outer loop always executes first, and the inner loop executes inside the outer loop each time the outer loop executes once. */


let startTable = 1 ;
let endTable = 8 ;

while (startTable <= endTable){
    console.log(`This is a ${startTable} Table`)
    let firstMultiple = 1;
    let lastMultiple = 10 ;
    while ( firstMultiple <= lastMultiple ){
        console.log(`${startTable} * ${firstMultiple} = ${ startTable * firstMultiple}`)
        firstMultiple++
    }
    startTable++
}