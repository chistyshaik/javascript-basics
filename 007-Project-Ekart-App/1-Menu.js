import readline from 'readline-sync';

import chalk from 'chalk';

console.log(chalk.bgCyan('******* Welcome to E-kart SHOPPING *********'))


const men = 'mens';
const womens = 'womens';
const kids = 'kidswear';
const accesories = 'accesories';
const groceries = 'groceries';
const homDecor = 'HOME';


const homeMenu = [
    men,womens,kids,accesories,groceries,homDecor
]

export function showShopMenu() {
    const homeIndex = readline.keyInSelect(homeMenu);
    const categoryName = homeMenu[homeIndex];
    return categoryName
}

showShopMenu()




    
// const categoryIndex = readline.keyInSelect(categories);

// const categoryName = categories[categoryIndex];
// console.log(categoryName);