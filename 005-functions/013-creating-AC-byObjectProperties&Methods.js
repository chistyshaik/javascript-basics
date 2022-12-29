
// "property"- is a member of an object that associates a key with a value i.e properties are qualities in an object
//"method" - method causes something to happen to an object

const AC = {
    //examples of properties 
    name : "LLOYD",
    model : "NC-0WQ2545",
    year : 2022,
    isRunning : false ,
    temperature : 26,

    //examples of method 
    onTheAC : function () {
        AC.isRunning = true ;
    },
    offTheAC : function () {
        AC.isRunning = false ;
    },
    coolTheTemp : () => {
        AC.temperature = AC.temperature - 1;
    },
    increaseTemp : () => {
        AC.temperature = AC.temperature + 1 ;
    },
    superCoolMODE : () => {
        AC.temperature = 17 ;
    },

    ACinfo : () => {
        console.log(`
        name : ${AC.name},
        model : ${AC.model},
        year : ${AC.year},
        isRunning : ${AC.isRunning} ,
        temperature : ${AC.temperature}
        `);
    }
}

// console.log("AC details", AC);



AC.onTheAC(); // returns isRunning = true


AC.superCoolMODE(); //temperature becomes 17

AC.increaseTemp();
AC.increaseTemp();
AC.increaseTemp();
AC.increaseTemp();
AC.increaseTemp();
AC.increaseTemp();


AC.offTheAC(); // returns isRunning = false

AC.ACinfo();

