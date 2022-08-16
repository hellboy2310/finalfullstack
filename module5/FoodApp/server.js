const express = require('express');
const app = express();


const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

const userModel = require("./userModel");
app.listen(3000,function(){
    console.log("server at port 3000");
})

app.post("/signup",async function(req,res){
    try{
        let data = req.body;
    
    let newUser = await userModel.create(data);
        console.log(newUser);
    res.json({
        message:"data received",
        
    })
}
catch(err){
    res.send(err.message);
}
})

app.post("/login",async function(req,res){
    try{
            let data = req.body;
            let{email,password} = data;
            if(email && password){
                let user = await userModel.findOne({email:email});
                  
                  console.log(user);
                if(user){
                    if(user.password == password){
                        res.cookie("token","sample value");
                        res.send("user logged in");
                    }
                    else{
                        res.send("Email or Password does not match");
                    }
                }
                else{
                    res.send("User with this email id does not exists");
                }
            }
            else{
                res.send("Kindly enter email and password");
            }
    
    }
        catch(err){
                console.log(err.message);
        }
    
})

app.get("/users",function(req,res){
    console.log(req.cookies);
})