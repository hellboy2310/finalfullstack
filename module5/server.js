const express = require('express');

// you have to write it -> app signifies -> your server

const app = express();


//get krna hai data from sayhello
app.get('/sayhello',function(req,res){
    res.send('hello from server');
})
app.get('/',function(req,res){
    res.send("this is the home page");
})
// get karna he data from saybye
app.get('/sayBye',function(req,res){
    res.send("Bye");
})
app.post('/sayHello',function(req,res){
    console.log(req.name);
})


app.get('/getMultiply/:num1/:num2',function(req,res){
    let num1 = req.params.num1;
    let num2  = req.params.num2;
    let mul = num1 * num2;

    res.end("multiply of params are  " + mul)
})



//3000 is the address of the server -> on a given machine
app.listen(3000,function(){
    console.log("server started at 3000");
})

