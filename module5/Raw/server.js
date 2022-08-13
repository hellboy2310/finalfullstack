const express = require('express');

// you have to write it -> app signifies -> your server

const app = express();

app.use(express.json());

let user;
//get krna hai data from sayhello
app.get('/sayhello',function(req,res){
    res.json(
        {
            user:user,
        }
    );
})
app.get('/',function(req,res){
    res.send("this is the home page");
})
// get karna he data from saybye
app.get('/sayBye',function(req,res){
    res.send("Bye");
})

//POST
app.post('/sayHello',function(req,res){
    user = req.body;
    res.json({
        message:"data received successfully",
        user:user
    })
    console.log(req.name);
})

//patch
app.patch("/sayhello",function(req,res){
    dataToupdate = req.body;

    for(key in dataToUpdate){
        user[key] = dataToUpdate[key];

    }
    res.json({
        message:"Data updated",
        user:user
    })
})

//delete
app.delete("/sayHello",function(req,res){
    user = {};
    res.json({
        message:"Deletion done",
        user:user
    })
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

