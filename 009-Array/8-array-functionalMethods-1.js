const Users = ['chisty','rehan','roshan','imtiyaz','shoyab'];
Users.slice(2,4);
// returns [ 'roshan', 'imtiyaz' ] in node environment 
//note :- slice wont modify an array which means if we console users after slicing it will return the entire array again


// syntax -   [].splice(INDEX, END_INDEX);
const users2 = ['chisty','rehan','roshan','imtiyaz','shoyab'];
users2.splice(2,3)
//returns ['roshan','imtiyaz','shoyab'] in node environment 
//note :- splice modifies an array which means if we chech users2 after splicing it will return the remaining array [ 'chisty', 'rehan']

// [].forEach;  => will return undefined
// [].filter;   => will return LESS OR EQUAL LENGTH OF an ARRAY
// [].map;      => will return SAME LENGTH OF an ARRAY
// [].reduce;   => will return SINGLE VALUE
// [].some;
// [].find;

/*note :- The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.*/

const marks = [
    45,
    55,
    14,
    89,
    98,
    74
]

function doubleMarks(marksValue){
  const value =(marksValue * 2);
  console.log(value);
  return value ;
}

doubleMarks(marks[4])
//the function will return 110 in console, Whatever has been returned in console it wont be saved in memory
//note :- if there is no return statement in a function it will return undefined

const foreach_values = marks.forEach(doubleMarks);
//it returns 196
/*196
90
110
28
178
196
148 */
console.log(foreach_values);// it returns undefined as we assign foreach value to a variable

const map_values = marks.map(doubleMarks);
console.log(map_values); //it returns [ 90, 110, 28, 178, 196, 148 ]


const numbers = [1,2,3,4,5,6,7,8,9];
const doubleVal = numbers.map(value => value * 2) //if there is one param or value in a function we can skip paranthesis
console.log(doubleVal) 
/* return[
    2,  4,  6,  8, 10,
   12, 14, 16, 18
 ]*/
 const even_numbers = numbers.filter( value => value % 2 === 0 );
console.log(even_numbers);

const old_numbers = numbers.filter( value => value % 2 !== 0 );
console.log(old_numbers);

const users = [ 'Syed', 'Shaik', 'Chisty', 'Arif', 'Rehan', 'Roshan'];

const a_letter_users = users.filter( value => value[0] === 'S' ); //returns ['Syed','Shaik']
console.log(s_letter_users)

const r_letter_users = users.filter( value => value[0] === 'A' ); //returns ['Arif'] 
console.log(a_letter_users)