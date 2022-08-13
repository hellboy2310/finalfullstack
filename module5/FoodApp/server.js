const express = require('express');
const app = express();


const userModel = require("./userModel");
app.listen(3000,function(){
    console.log("server at port 3000");
})