// scope means the chance or opportunity to do something
//Each function creates a new scope.
//Variables defined inside a function are not accessible from outside the function.


//global scope :-
/*Variables declared Globally (outside any function) have Global Scope.
any variable which is defined outside a function has global scope and they are called global variables
Global variables can be accessed from anywhere in a JavaScript program. */

function userDetails() {
    const userName = "chisty.shaik";
    let age = 23;
    let city = "guntur"

    console.log({
        Name: userName,
        age: 23,
        city: city
    })

}

userDetails()  //returns :- { Name: 'chisty.shaik', age: 23, city: 'guntur' }

console.log(userName); // returns a ReferenceError: userName is not defined (because we cant access a variable outside a function)

