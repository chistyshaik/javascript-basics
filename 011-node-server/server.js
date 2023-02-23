const http = require("http");
const server = http.createServer( (request , response) => {
    const names = [ 
    'chisty',
    'shoyab',
    'imtiyaz'
];

const convertingNamesIntoString = JSON.stringify(names); ////to stringify the value in response.end we use json.stringify



    response.writeHead(300);
    response.end(convertingNamesIntoString); //in response.end whatever the value is it must be only in string
});


// in index.js we have defined then port value as 80 and again we r defining the port 80 in this server.js so the code wont execute which means we cannot define the same port value on a server at a time.......
/* 
server.listen(80 ,'localhost', ()=>{
    console.log('this server is running on 2nd localhost')
})
*/
server.listen(81 ,'localhost', ()=>{
    console.log('this server is running on http://localhost:81')
});

  // JSON.parse     => It convert your `string` type array/object into original object/array
  // JSON.stringify => It convert your array/object instance into plain string 

  