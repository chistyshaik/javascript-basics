import readline from 'readline-sync';
import chalk from 'chalk';



const ADD_PRODUCT = 'Add a Product';
const SHOW_PRODUCT = 'Show the products';

const USER_INPUTS = [ADD_PRODUCT, SHOW_PRODUCT]

let runProgramme = true;
let productsInCart = [];

while (runProgramme) {
    let productIndex = readline.keyInSelect(USER_INPUTS);
    let productName = USER_INPUTS[productIndex];

    if (productName === ADD_PRODUCT) {
        const newProductName = readline.question('please enter the new product name ? ');
        if (newProductName) {
            productsInCart.push(newProductName);
            console.log(chalk.bgGreen(`A new product named ${newProductName} is added to cart`));
        }
    }
    else if (productName === SHOW_PRODUCT) {
            console.log(chalk.bgBlue(' ypu can see the list of products below in an array.........'));
            console.log(productsInCart);
        }    
        
    else {
            runProgramme = false;
        }
    

}
