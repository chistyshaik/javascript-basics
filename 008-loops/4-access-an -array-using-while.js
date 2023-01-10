const cities = [
    'hyderabad',
    'chennai',
    'banglore',
    'pune',
    'delhi',
    'Ahmedabad'
]

let CityIndex = 0 ;
let City = cities.length ;

while(CityIndex < City){
    console.log(`The ${cities[CityIndex]} is in the index of ${CityIndex} `)
    CityIndex++
};


//note :- if we want to access the loop in a blank array it will return undefined
/*
The undefined is in the index of 6
The undefined is in the index of 7
The undefined is in the index of 8
The undefined is in the index of 9 
*/