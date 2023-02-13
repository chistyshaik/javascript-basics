// HTTP module
// NodeJs inbuilt module (http)

//To use the HTTP server and client one must require('http').
const http = require('http');


//we can create servers using python java etc here we r creating a server using node.js
// method-1 for creating a server 

/*
const server = http.createServer(function (request, response) {
        response.writeHead(200);
        response.end('hey u r watching the data in node js server')
});
*/

//method - 2 in creating a server (we can seperately write a function and assinging it)

const requestListener = function(request , response){
    response.writeHead(200);
    response.end('hey u r watching the data in node js server')
}

const server = http.createServer(requestListener);

// if we dont execute the below process the code wont execute 
//Server.listen(port?: number | undefined, hostname?: string | undefined, backlog?: number | undefined, listeningListener?: (() => void) 
server.listen(80, 'localhost', ()=>{
    console.log('server is running.......')
});


/*
 we can access the local files in browser by typing - localhost in browser 
 curl localhost in cmd/terminal,

 to stop the server in a terminal type ctrl+c
 */