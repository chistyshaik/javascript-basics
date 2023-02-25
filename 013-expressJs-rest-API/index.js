const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const USER_ENDPOINT = "/users";

const usersList = [];

//to get list of all users
app.get(USER_ENDPOINT , (req , res) => {
    res.json({
        success:true ,
        method:"get",
        users : usersList})
})

//to create new user in application 
app.post(USER_ENDPOINT, (req , res) => {
    const requestData = req.body
    const errors = [];

    const name = requestData.name;
    const email = requestData.email;
    const contact = requestData.contact;


    if(!email){
        errors.push(`email address is required`)
    };

    if(!name){
        errors.push(`name is required`)
    };

    if(!contact){
        errors.push(`contact is required`)
    };

    if(errors.length > 0){
        return res.json({
            status : false,
            errors : errors
        })
    };

    const newUser = {
        name : name ,
        email : email,
        contact : contact,
        id : usersList.length + 1
    }

    res.json({
        success:true , 
        method:"post",
        data : usersList.push(newUser)
         })
});

//to update existing user based on userID
app.put(`${USER_ENDPOINT}:/id`, (req , res) => {
    const userID = req.params.id ;
    res.json({success:true ,id : userID , method:"put"})
});

//to delete existing user based on userID
app.delete(`${USER_ENDPOINT}:/id`, (req , res) => {
    const userID = req.params.id ;
    // check if userId is available or not 
     const user = usersList.find((users)=> user.id === +userID // we r placing + symbol cuz params will always return a string n to conert string into number we used +
    )
    if(!user){
        return res.json({
            status : false,
            message : `user not found with user id ${userID}`
        })
    }
    
    res.json({
        success:true , 
        id : userID , 
        method:"delete"
    })
});

// //one more method to delete user is splice
// const userIdx = usersList.findIndex( (user) => user.id === +userID ) //findindex is a method
// usersList.splice(userIdx, 1)

// res.json({
//   status: true,
//   id : userID,
//   index: userIdx,
//   method: "delete"
// });


app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`)
  });

  