const marks = [44,54,85,95,57];

let total = 0 ;
let index = 0 ;
while (index < marks.length){
    const presentValue = marks[index];
    total = total + presentValue ;
    index++;
}

console.log('sum of numbers using while loop', total)


let totalValue = 0
for(let i = 0 ; i < marks.length ; i++){
    const presentValue = marks[i];
    totalValue = totalValue + presentValue ;
}
console.log('sum of numbers using for loop', totalValue);


/*
reduce was introduced in the latest ES6 version , instead of using the above methods we can opt the below reduce method...
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

@param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

@param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
 */

const sumOfMarks = marks.reduce( (firstValue, secondValue) => {
    return firstValue + secondValue
})

console.log('sum of numbers using reduce',sumOfMarks);

/*
const sumOfValues = marks.reduce(function (
  previousValue,
  currentValue,
  // currentIndex,
  // originalArray
) {

  // console.log(`Previous Value = `, previousValue);
  // console.log(`Current Value = `, currentValue);
  // console.log(`Current Index = `, currentIndex);
  // console.log(`Original Array = `, originalArray);

  return previousValue + currentValue;

})
 */

// note :-  we can use debugger -keyword to stop the code execution in reduce

const studentsMarks = [
    [45, 89, 76, 56, 45, 99], // 410
    [89, 78, 90, 45, 77, 56], // 435
    [87, 47, 38, 65, 88, 51], // 376
    [45, 77, 56, 45, 89, 76], // 388
    [78, 90, 45, 76, 38, 65], // 392
  ];

  const totalMarks = studentsMarks.map((arrayvalue)=>{
    return arrayvalue.reduce((prev , curr)=>{ prev + curr})
  })

 console.log(totalMarks);

 const averageMarks = totalMarks.map((value) => (value / 600) * 100);
console.log(averageMarks)

const convertToInteger = averageMarks.map(value => parseInt(value) + "%");
console.log(convertToInteger);

const markAbove65Percentage = averageMarks.filter((value) => {
  const valueInInterger = parseInt(value);
  return valueInInterger > 65;
});
console.log(markAbove65Percentage);