//note: if we dont pass return in a function's body it will return undefined

//NESTED FUNCTION - to fit one function inside an another function.

function function1(a, b) {
    function function2(c) {
        return c * c * c
    }
    return function2(a) + function2(b);
}

const cube = function1(4, 2);
console.log(cube); // returns 72 (the cube of 4 is 64 , cube of 2 is 8 total =72) 


//here function1 is a outer function ,function2 is a inner function
//The inner function can be accessed only from statements in the outer function.


const onlineShopping = function (amount) {
    const billWidgst = () => {
        return amount + 40;
    }
    function discount() {
        return 30
    }
    const total = billWidgst() - discount()
    return total 
}

const bill = onlineShopping(200);
const dis_count = 30 ;
const gst = 40

console.log(`bill details {
    gst = ${gst},
    discount = ${dis_count}
    bill = ${bill}
}`);

