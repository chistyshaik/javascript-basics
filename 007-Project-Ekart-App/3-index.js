import readline from 'readline-sync';

import chalk from 'chalk';

import { showShopMenu } from './1-Menu.js';

import { showShopItems } from './2-Menu-Items.js';

import { ThrowError } from './throwError.js';

console.log(chalk.bgCyanBright("**** Welcome to Ekart SHopping ****"))
console.log("Please select a shop Category")

const shCatogery = showShopMenu();
console.log(`selected shop category = ${shCatogery}`);

const shItem = showShopItems();
console.log(`user selected shop item ${shItem}`);

if (shItem){
    console.log(`Thanks for Buying ${shItem}`)
}else {
    ThrowError()
};