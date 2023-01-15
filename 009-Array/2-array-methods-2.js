//Push(): adding item in the end. To add item to the end of an existing array we use the push method.
const numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers) // -> [1,2,3,4,5,6]



//Pop() : Removing item in the end.
const popNumbers = [1,2,3,4,5];
popNumbers.pop()
console.log(popNumbers) // [1,2,3,4]



//shift(): Removing one array element in the beginning of the array.
let fruits = ['apple','mango','banana']
fruits.shift();
console.log(fruits);//[ 'mango', 'banana' ]




//unshift() : adds one array element at the beginning of an array
let fruitS = ['apple','mango','banana']
fruitS.unshift('pineApple');
console.log(fruitS);//[ 'pineApple', 'apple', 'mango', 'banana' ]


//reverse(): reverse the order of an array.
let vowels = ['A','E','I','O','U'];
vowels.reverse();
console.log(vowels);    //[ 'U', 'O', 'I', 'E', 'A' ]


//sort: arrange array elements in alphabetical order.

let things = ['melon','parrot','bat','kite','apple','rat','cup']
things.sort();
console.log(things) 

//output 
/* [
  'apple', 'bat',
  'cup',   'kite',
  'melon', 'parrot',
  'rat'
]
 */



