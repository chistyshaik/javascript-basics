//An array is a special variable, which can hold more than one value
//An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements.

const num = [10,20,30,40,50]
num[0] = 80;
console.log(num);  // output [ 80, 20, 30, 40, 50 ]

// Array Constructor ;-
let arr = Array()
console.log(arr);  // creates a single empty value in arr

let arr2 = Array(10);
console.log(arr2); // creates 10 empty values in arr2

// to create a static value in array use - fill

let arr3 = Array(10).fill('chisty');
console.log(arr3);

/*output- [
  'chisty', 'chisty',
  'chisty', 'chisty',
  'chisty', 'chisty',
  'chisty', 'chisty',
  'chisty', 'chisty'
]*/

//concat:To concatenate two arrays we can use concat or a spread operator 
let a = [1,2,3,4,5]
let b = [6,7,8,9,10]
let numbers = a.concat(b)
console.log(numbers);

/* output 
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
 */

//length : to find the size and items in an array 
let fruits = ["apple",'banana','mango','guava','berries']
console.log(fruits.length) // output - 5


// indexOf():To check if an item exist in an array. If it exists it returns the index else it returns -1.
let animals = ['lion','tiger','chimpanzee','cheetah','rhino','hippo']
console.log(animals.indexOf('tiger')); // returns 1
console.log(animals.indexOf('rhino')); //returns 4
console.log(animals.indexOf('Bear')); //returns -1

//includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

const numberS = [1, 2, 3, 4, 5]

console.log(numberS.includes(5)) // true
console.log(numberS.includes(0)) // false
console.log(numberS.includes(1)) // true
console.log(numberS.includes(6)) // false

//toString():Converts array to string

let friends = ['shoyab','chisty','imtiyaz']
console.log(friends); //[ 'shoyab', 'chisty', 'imtiyaz' ]
console.log(friends.toString()) //shoyab,chisty,imtiyaz

//Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

const countries = ['india','usa','uk','france','italy','australia']
console.log(countries.slice(2,5)); //[ 'uk', 'france', 'italy' ]

//Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

const Numbers = [1, 2, 3, 4, 5, 6]
Numbers.splice(3, 3, 7, 8, 9)
console.log(Numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

