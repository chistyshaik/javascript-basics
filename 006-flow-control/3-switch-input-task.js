//Switch is an alternative for if else if else else.

const readline = require('readline-sync');


console.log("***********  Welcome to Pizza Maker  *********88")

const base = ["fluffy","crunchy","soft"]
const a = +readline.keyInSelect(base);
console.log(`hey user u have choose ${base[a]} pizza base`);

const sauce = ["tomato","spicyChilli","Mayo"]
const b = +readline.keyInSelect(sauce);
console.log(`hey user u have choose ${sauce[b]} pizza sauce`);

const toppings = ["veg","non-veg"]
let c = +readline.keyInSelect(toppings);
const userSelectedFood = toppings[c]
const veg = toppings[0];
const nonVeg = toppings[1];

switch (userSelectedFood) {
    case veg : 
    console.log(`ur order pizza with ${base[a]},${sauce[b]},${toppings[0]} type pizza`) 
    break;
    case nonVeg : 
    console.log(`u order a pizza with ${base[a]},${sauce[b]},${toppings[1]} type pizza`)
    break
    default :
    console.log("please select the pizza type")
};

setTimeout(() => {
    console.log(" your pizza is ready..............!!!!")
}, 8000);













