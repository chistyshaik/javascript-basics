import readline from 'readline-sync';

const a = +readline.question(`Please enter the purchased amount = `); 
let amount = a ;

const onlineShopping = function () {
    const billWidgst = () => {
        return amount + 20;
    }
    function discount() {
        return 50
    }
    const total = billWidgst() - discount()
    return total 
}

const bill = onlineShopping(amount);
const dis_count = 50 ;
const gst = 20 ;

console.log(`bill details {
    Net Worth : ${amount},
    gst = ${gst},
    discount = ${dis_count},
    The final bill = ${bill} /-
}`);
