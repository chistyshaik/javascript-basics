// const readline = require('readline-sync');
import readline from 'readline-sync';
import chalk from 'chalk';

const ingredientsBill = function(vegetables , fruits ,homeEssentials){
    const total = Number(vegetables) + Number(fruits) + Number(homeEssentials)
    return total;
}

const ingredientsAmount = readline.question("what is the total price : ");
const taxRate = readline.question("what is the tax prize : ");
const tip = readline.question("what is the tip price : ");

const totalBill = ingredientsBill(ingredientsAmount,taxRate,tip);

console.log(totalBill);



