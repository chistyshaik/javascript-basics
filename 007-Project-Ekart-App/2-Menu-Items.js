import readline from 'readline-sync';
import { ThrowError } from './throwError.js';
import chalk from 'chalk';

let menClothing = [
    'shirt         =  500 /- ',
    't-shirt       =  400 /- ',
    'pants         =  450 /- ']
let womensClothing = [
    'sarees        =  800/-  ',
    'dresses       =  600/-  ',
    'party-wear    =  900/-  ']
let kidsWear = [
    'tops          =  900/-  ',
    'frocks        =  800/-  ',
    'nickers       =  500/-  ']
let accessories =   [
    'ear-phones    =  500/-   ',
    'wallets       =  900/-   ',
    'shoes']
let Groceries = [
    'rice          =   50/-  ',
    'pulses        =  100/-  ',
    'veggies       =   80/-  ']
let homeDecor = [
    'bedSheets     = 500/- ',
    'pillowCovers  = 200/- ',
    'chairs        = 700/- ']

    const categories = {
       'men': menClothing ,
        'women' : womensClothing ,
        'kids' : kidsWear ,
        'acc':accessories, 
        'groc':Groceries , 
        'homD': homeDecor
    }

   export function showShopItems(Category) {
        const shopItems = categories[Category]
        if (shopItems){
            const userSelectedCategoryIndex = readline.keyInSelect(shopItems)
            const userSelectedCategory = shopItems[userSelectedCategoryIndex]
            return userSelectedCategory
        }else{
            ThrowError();
        }
    }

    showShopItems()
    
