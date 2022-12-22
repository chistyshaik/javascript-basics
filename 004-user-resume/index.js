const readline = require("readline-sync");


const firstName = readline.question('firstname: ');
const lastName = readline.question('lastname: ');

console.log(`full name: ${firstName} ${lastName}`);



/*
"label": "Programmer",
"image": "",
"email": "john@gmail.com",
"phone": "(912) 555-4321",
"url": "https://johndoe.com",
*/

console.log("****resume-maker*****");

const name = readline.question('name: ');
const label = readline.question('label: ');
const image = readline.question('image: ');
const email = readline.question('email: ');
const phone = readline.question('phone: ');
const url = readline.question('url: ');

const resume = {
    basics :{
        name : name,
        label : label,
        image : image,
        email : email,
        phone : phone,
        url : url


    }
}

console.log(resume);


