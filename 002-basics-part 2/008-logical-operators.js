//there are 3 logical operators in javascript they are &&(ampersand) , ||(pipe)  , !(negation). 

//The && operator gets true only if the two operands are true. it will return false if any one operand or both the operands are false 

 9 > 3 && 8 > 5         // true && true -> true
 9 > 3 && 8 < 5         // true && false -> false
 9 < 3 && 8 < 5         // false && false -> false


//The || operator gets true  if any one operand or both of the operand is true , it will return false only if both the operands are false

 9 > 3 || 8 < 5         // true  || false -> true
 9 > 3 || 8 > 5         // true  || true -> true
 9 < 3 || 8 < 5         // false || false -> false


//The ! operator negates true to false and false to true.


5 > 3                     // true
!(5 > 3)                  //  false