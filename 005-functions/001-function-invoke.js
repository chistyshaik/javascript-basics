let user = {
  firstName: "chisty",
  lastname: "shaik",
  company: "hcl",
  city: "guntur"
}

// by creating a function we can invoke the different data of pupil by just passing the data in arguments/parameters


function userDetails(FirstName, lastName, company, city , age) {
  const user = {
    firstname: FirstName,
    lastName: lastName,
    company: company,
    city: city,
    age : age
  }

  return user;
}


const newUser = userDetails('chisty', 'shaik', 'hcl', 'Hyderabad', '23'); // it will return an user object (value)
console.log(newUser);