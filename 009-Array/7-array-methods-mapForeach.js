//Iterating Array using forEachMethod
/* 
1.For each METHOD should be applied only on an array
2.for each has three params in its syntax
3.The first param  always refers a VALUE
4.The second param always refers INDEX of VALUE
5.The third param always refers the complete ARRAY
6.  [].forEach(() => {});
7. [].forEach(function () { });
8. [].forEach(loopItems)
 */

const names = [];

names.push('chisty');              // we passed an argument using push method
console.log(names);
names[names.length] = 'shaik';     // we have assigned a value here
console.log(names);

function hvngReturnVal() {
    return 100 + 200 ;
}

function notHavingReturnVal() {
   const total = 100 + 500
}

let returnVal = hvngReturnVal()
let unreturn = notHavingReturnVal()

console.log(returnVal);  // returns 300
console.log(unreturn);   // retyurns undefoned 

// Note :- If there is no return statement in a function it returns undefined.....

[].forEach;
/*
(method) Array<never>.forEach(
  callbackfn: (value: never, index: number, array: never[]) => void, 
  thisArg?: any
): void(void means nothing foreach returns nothing)
Performs the specified action for each element in an array.
*/

[1,2,3,4].forEach((value)=>{
    return value + 100
});  // returns undefined in node environment

[].map;
/*
(method) Array<never>.map<U>(
  callbackfn: (value: never, index: number, array: never[]) => U, 
  thisArg?: any
): U[] it dont returns void it retuns some value in an array
Calls a defined callback function on each element of an array, and returns an array that contains the results.
*/

[1,2,3,4].map((value)=>{
    return value + 100
}); // returns [ 101, 102, 103, 104 ] in node environment


let greetNamesUsingForeach = names.forEach((value)=>{
    let message2 = `welcome ${names}`;
    console.log(message2);
    return message2
});

console.log(greetNamesUsingForeach) //returns undefined as we have assigned for each to a variable

let greetNamesUsingMap = names.map((value)=>{
    let message = `welcome ${names}`;
    console.log(message);
    return message
});
console.log(greetNamesUsingMap); // returns [ 'welcome chisty,shaik', 'welcome chisty,shaik' ]



const shoppingPrices = [456,258,143,3547];
const discountPrices = [];
const discount_percentage = 10 ;


///////////////////////////////////////////////////////////
for (let i =0 ; i <shoppingPrices.length ; i++){
    const value = shoppingPrices[i];
    //discount formulae = [value * discount_percentage]/100
    const discount = (value * discount_percentage)/100 ;
    const discountAmount = value - discount ;
    discountPrices.push(discountAmount);
}
console.log(shoppingPrices);
console.log(discountPrices);

//before the existence of map method we use the above old method .......
const value = shoppingPrices
function applyDiscount(amount , discount_percentage = 10) {
const discount = (amount * discount_percentage)/100 ;
const discountAmount = value - discount;
return discountAmount; 
}

const discount_values_using_map = shoppingPrices.map((amount) => {
    const discountAmount = applyDiscount(amount, discount_percentage);
    return discountAmount
});
