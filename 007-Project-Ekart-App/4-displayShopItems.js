import chalk from "chalk";

function displayShopItems (CalledshopItem){
    const shopItems = categories[CalledshopItem]
        if (shopItems){
            const userSelectedCategoryIndex = readline.keyInSelect(shopItems);
            const userSelectedCategory = categories[userSelectedCategoryIndex];

            if(userSelectedCategory){
                console.log(chalk.bgGreen(`Thanks for Buying ${userSelectedCategory}`))
            } else {
                console.log(chalk.bgRed('u didnt select any shopItem'))
            }
        }else{
            console.log(chalk.bgRed('u didnt select any shopItem'))
        }
    }

    displayShopItems (CalledshopItem)