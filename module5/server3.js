const express = require('express');
const app = express();

app.use(express.json());

app.post("/simple",function(req,res,next){
    let data = req.body;
    //Object.keys(data) => ["name","age"]
    let length = Object.keys(data).length;
    if(length == 0)
    {
        res.send("kindly enter data in body");
    }
    else{
        next();
    }
})

app.post("/simple",function(req,res){
    console.log("data",req.body);
    res.send("hello from post2");
})

app.listen(3000,function(){
    console.log("server is started at 3000");
})