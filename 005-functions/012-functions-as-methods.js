//An object is a non-primitive (changeble) data type that can take in collections of key-value pairs.

const threeUsersData = {
  userNames : ["chisty","shoyab","imtiyaz",],
  professions : ["UI dev","UX dev","fullStackDev"],
  age : [23,23,24],
  company : {
    user1company : "HCL",
    user2company : "TechMahindra",
    user3company : "Apple",
    note : function details(){
        console.log("the above data of users is arranged respectively")
      }
  }
}

console.log(threeUsersData);
console.log(`data type of threeUsers is ${typeof threeUsersData}`);


//as how the above data is furnished in a respective way we can grasp the data from objects in two methods 
// one by . dot notation 
//two by [] bracket notation (note : we must place the key in a string )

let info = () =>{
console.log(`the first user ${threeUsersData.userNames[0]} , he is ${threeUsersData.professions[0]} by profession , working in ${threeUsersData.company.user1company} and he is ${threeUsersData.age[0]} in age`)

console.log(`the second user ${threeUsersData["userNames"][1]} he is ${threeUsersData["professions"][1]} by profession ,working in ${threeUsersData["company"]["user2company"]} he is ${threeUsersData["age"][1]} in age`)

console.log(`the third user ${threeUsersData.userNames[2]} he is ${threeUsersData.professions[2]} by profession ,working in ${threeUsersData.company.user3company} he is ${threeUsersData.age[2]} in age`)
}

// i have used bracket notation in my second user's console

info();

//u can observe threeUsersData is an object which is having an another object named company in it 
// i've used threeUsersData["company"]["user2company"] syntax in bracket notation , threeUsersData.company.user1company syntax in dot notation.

// -------------------------------- output --------------------------------
/*
{
  userNames: [ 'chisty', 'shoyab', 'imtiyaz' ],
  professions: [ 'UI dev', 'UX dev', 'fullStackDev' ],
  age: [ 23, 23, 28 ],
  company: {
    user1company: 'HCL',
    user2company: 'TechMahindra',
    user3company: 'Apple',
    note: [Function: details]
  }
}
data type of threeUsers is object
the first user chisty , he is UI dev by profession , working in HCL and he is 23 in age
the second user shoyab he is UX dev by profession ,working in TechMahindra he is 23 in age
the third user imtiyaz he is fullStackDev by profession ,working in Apple he is 24 in age 
*/
