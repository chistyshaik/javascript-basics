var first_array = [10, 100];
var second_array = [10, 100];

console.log(first_array === second_array); // false (we cannot compare an array like this)

//                 10       ===       10
console.log( first_array[0] === second_array[0]) // true (we can compare the array with the array elements indices)


var marks = [10, 20, 10, 30];
var marks_copy = marks; 
console.log(marks === marks_copy); //here it returns true cuz marks_copy was assigned the same marks array