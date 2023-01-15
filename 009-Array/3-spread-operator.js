//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

let a = [1,2,3,4,5]
let b = [6,7,8,9,10]
let d = [11,12,13,14,15]
let c = [...a,...b,...d]
console.log(c)

/*[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10,
  11,12,13,14,15
]
 */

// We can use the spread operator with objects too:

let Job = {
    company : 'hcl',
    role : 'front-end DEV',
    experience : '2 years'
}

let JobDetails = {
    skills : ['communication-skills','technical-skills'],
    qualification : 'degree',
    course : 'JS & React'
}

const Myjob = {...Job, ...JobDetails};

console.log(Myjob);


/* output:- 
{
  company: 'hcl',
  role: 'front-end DEV',
  experience: '2 years',
  skills: [ 'communication-skills', 'technical-skills' ],
  qualification: 'degree',
  course: 'JS & React'
}
 */