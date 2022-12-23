function mathOperations(valOne, valTwo) { 
    console.log(`value of a = ${valOne}`);
    console.log(`value of b = ${valTwo}`);
    const addition = valOne +  valTwo ;
    const subtraction = valOne  - valTwo ;
    const multiply = valOne  * valTwo ;
    const division = valOne  / valTwo ;
    const modulo = valOne  % valTwo ;
  
    console.log(addition);
    console.log(subtraction);
    console.log(multiply);
    console.log(division);
    console.log(modulo);
  }
  


  console.log("Calling mathOperations with two arguments");
  mathOperations(20, 10);