### ExpressJS REST-API 

#### Introduction to REST-API's

REST - Respresentational State Transfer 
API -  Application programming interface
REST APIs use HTTP METHODS :-
- GET
- POST
- PUT
- DELETE
- The above methods are used to interact with the resources which are represented by URLs/URIs(uniform resource identifiers)

REST APIs will return a RESPONSE data in different formats
- JSON
- XML
- HTML
- ByteArray

but JSON is the most common used format 

#### Instructions 
1. Initiazlize Project for Node environment 
```
npm init
```

2. Install Express package 
```
npm install express
```

3. To handle JSON Request/Response install body-parser library/middleware
- body-parser is a library just like an express, readline-sync,chalk libraries
- body parser is a middle ware
- express cannot handle or deal with JSON data or any format of data directly
_by adding body-parser middleware application in express app **it will allows us to parse/converts the JSON data in the request body**_
 

```
npm install body-parser
```

4. Create ExpressJS application 

```Javascript

const express = require("express");
const app = express();  //need to place parentheses() beside express to execute express in this step

```

5. Apply `body-parser` middleware to express app

```Javascript
const bodyParser = require("body-parser");
app.use(bodyParser.json());

```

6. Create/listen  Server on specific port 

```Javascript
// we can create server listener in two methods 
//Method-1
app.listen(PORT, onServerStart) // port is a number , onServerStart is a function

//method - 2
const PORT = 3000 ;
const onServerStart = function (){
    console.log(`Server is running on http://localhost:${PORT}`) //note :- need to place a colon just beside the port
}

app.listen(PORT , onServerStart);

```

### Routing in Express
Route is a specific endpoint in our application that defines the behaviour for a particular URL.
Q. what is the route in http://localhost/categories/4 ?
A.  4


routes completely depend upon express app we can define routes using  `app.HTTP_MEHOD()` //get, post, put, delete are HTTP_METHODS

TO create get method `app.get()` , the get method is used to handle HTTP GET requests.
```Javacsript

app.get('/', (request, response) => {
    response.send("Hello world !")
})

```

*** GET Request ***
```Javascript
    const USER_ENDPOINT = '/users' ;
    const apiHandler = (request , response) =>{
        response.json({success : true, method :  get});
    }

    app.get(USER_ENDPOINT , apiHandler)
```

*** POST Request ***
```Javascript
    const USER_ENDPOINT = '/users' ;
    app.post(USER_ENDPOINT , function (request , response) {
        response.json({success : true, method :  post});
    });

```

*** PUT Request ***
```Javascript
    const USER_ENDPOINT = '/users/:ID' ; //put method will automatically generate a request param(Id)
    app.put(USER_ENDPOINT , function (request , response) {
        const userID = request.params.ID;
        response.json({success : true,id : userID, method :  post});
        
    });
```

*** PUT Request ***
```Javascript
    const USER_ENDPOINT = '/users/:ID' ; //delete method will automatically generate a request param(Id)
    app.delete(USER_ENDPOINT , function (request , response) {
        const userID = request.params.ID;
        response.json({success : true,id : userID, method :  post});
    }); 
```