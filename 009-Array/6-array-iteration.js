const friends = [
    'chisty',
    'shoyab',
    'imtiyaz'
]

let index = 0;
while(index < friends.length){
    console.log(`welcome ${friends[index]}`)
    index++
};
/* welcome chisty
welcome shoyab
welcome imtiyaz */

for(let i=0; i<friends.length; i++ ){
    console.log(`hey ${friends[i]} you r in for loop`);
}
/* 
hey chisty you r in for loop
hey shoyab you r in for loop
hey imtiyaz you r in for loop
 */

// How to identify the value is Array or not ?
// by using Array.isArray(value) will true/false(it will return the boolean value);

console.log(Array.isArray(friends));   // returns true

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

friends.forEach((first,second,third)=>{
    console.log(`first param = `, first);
    console.log(`second param = `, second);
    console.log(`third param = `, third);
});

let friendsAge = [22,23,24]
friendsAge.forEach((value)=>{
    console.log(value);
}) 

friendsAge.forEach((value , index)=>{
    console.log(value , index)
})