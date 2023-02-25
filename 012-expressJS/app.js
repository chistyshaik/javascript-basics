//  Express js is a framework (extrenal library just like readline-sync and chalk)
//  we need to download it from npm (node package manager) library 

const express = require("express");


const fs = require("fs"); //fs stands for file system

const bodyParser = require("body-parser"); //body-parser ia sn external middleware for parsing data in express

const app = express();

//define the above app to use bodyparser middleware's json parse in next step
app.use(bodyParser.json());  

app.get('/', (req, res) => {
    res.send("Express app is running....") //we wrote response.end in previous http project but in express js response.send is a method of getting response
});

/*
const productData = fs.readFileSync("../011-node-server/data/products.json"); // returns buffer data
const products = JSON.parse(productData); // converts buffer data into json data
*/

// we can create a function rather than following the above method so many times

function getFileData(path) {
    const productData = fs.readFileSync("../011-node-server/data/products.json");
    const productsInJson = JSON.parse(productData);
    return productsInJson
};

const DATA_FOLDER = "../011-node-server/data";
const products = getFileData(`${DATA_FOLDER}/products.json`);
const categories = getFileData(`${DATA_FOLDER}/categories.json`);

app.get('/products', (req, res) => {
    res.json(products);
});

/*
app.get('/categories', (req , res) =>{
    res.json(categories)
});

we can also write the above code of function in assigning it to a variable 
*/ 

const handleCategories = function(req , response){
    response.json(categories)
};

app.get('/categories', handleCategories);


//note ;- it is must to place a colon before any dynamic value
app.get('/products/:productID', (req , res)=>{
    const productID = req.params.productID; //like we have used req.url in http method need to use req.params in expressjs
    const product = products.find( p => p.id === parseInt(productID));

    if(!product){
        res.json(
            {error : true ,
            message : `No product found with product id ${productID} `})
    }else {
    res.json(product);
    }

});


app.post('/categories', (req , res) => {
    const categoryName = 'CategoryName' + categories.length;
    categories.push(categoryName);

    console.log('checking for request body')
    console.log(req.body)

    res.send({success : true, newCategory : categoryName })
});

/* 
Express body-parser is an npm module used to process data sent in an HTTP request body. It provides four express middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body. Before the target controller receives an incoming request, these middleware routines handle it.
*/


app.listen(3000 , (request , response ) => {
    console.log('server is running on http://localhost:3000')
})