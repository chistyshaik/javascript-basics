//if we dont pass a parameter in a function it will return Nan 

const add = (a,b) => {
    return a + b
}

console.log(add())


const sum = add();
console.log(`Sum of a plus b is ${sum}`);

//the above examples  will return Nan


const defaultValues = (a = 0,b =0) =>{
    return a * b
}

console.log(defaultValues())

const arrowfunc = defaultValues()
console.log(`hey the default value of ur function is ${arrowfunc}`)




//if we pass values in parameter of a function it will return the value 


const default2 = (a = 11,b =2) =>{
    return a * b
}

console.log(default2())

const arrowfunc2 = default2()
console.log(`hey the default value of ur function is ${arrowfunc2}`)





