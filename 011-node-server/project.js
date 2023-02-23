const http = require("http");
const fs = require("fs");

const categories = fs.readFileSync("data/categories.json");
//console.log(categories);  // generates buffer data in console

const products = fs.readFileSync("data/products.json");
//console.log(products);  // generates buffer data in console
/*
example for a buffer data in bash terminal ;-
<Buffer 5b 0d 0a 20 20 20 20 22 65 6c 65 63 74 72 6f 6e 69 63 73 22 2c 0d 0a 20 20 20 20 22 6a 65 77 65 6c 65 72 79 22 2c 0d 0a 20 20 20 20 22 6d 
65 6e 27 73 ... 40 more bytes>
*/

function serverListener (request , response) {
    console.log(`server requested url`, request.url)//we can see the server requested url console that which he has entered in the browsers path

    const  REQUESTED_URL = request.url ;

    if(REQUESTED_URL === "/categories"){
        response.end(categories)
    }else if(REQUESTED_URL === "/products"){
        response.end(products)
    }else{


        if(REQUESTED_URL.includes("/products/")){

            // as how the above data is buffer data to convert the buffer data or an array in an array or object use JSON.parse
            const productsList = JSON.parse(products);
            const paths = REQUESTED_URL.split("/");//its splits the (/products/5) path into [ "","products","5"]
            const productID = paths[paths.length-1]; //note the productID is in string
            console.log('product id',productID )

             //find method should be only applied on an array
            //find method has a callback function in it
            const product = productsList.find(product => product.id === +productID); //to convert the string productID into number we placed +
            //we cannot place the product directly in response.end directly cuz response end will only accept string data 

            if(product){
            response.end(JSON.stringify(product));
            } else{
                response.end("No product found......")
            }

        }else{
            response.writeHead(404);
        response.end('Resource is not available, Please try with /categories or /products')
        }

        
    }

};

const server = http.createServer(serverListener);
const PORT = 8000;
const HOST = "localhost";


server.listen(PORT ,HOST , () => {
    console.log(`project server is running on http://${HOST}:${PORT}`)
});



