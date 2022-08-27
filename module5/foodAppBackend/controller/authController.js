// const express = require('express');
// const app = express();


// const cookieParser = require('cookie-parser');

const jwt = require('jsonwebtoken');
const secretKey = 'lkanjgioahgiavvdalhga';


// app.use(express.json());
// app.use(cookieParser());

const userModel = require("../model/userModel");
const mailSender = require("../utilities/mailSender");

// app.listen(3000,function(){
//     console.log("server at port 3000");
// })

async function signupController(req,res){
    try{
        let data = req.body;
        
    let newUser = await userModel.create(data);
        console.log(newUser);
    res.json({
        message:"data received",
        data:data
    })
}
catch(err){
    res.send(err.message);
}
}

async function loginController(req,res){
    try{
            let data = req.body;
            let{email,password} = data;
            if(email && password){
                let user = await userModel.findOne({email:email});
                      
                  console.log(user);
                if(user){
                    if(user.password == password){
                        
                        //create jwt -> payload ,secret key , algo by default -> SHA256
                        const token  = jwt.sign({data:user['_id']},secretKey);
                        console.log(token);


                        res.cookie("JWT",token);
                        res.status(200).json({user});
                        
                    }
                    else{
                        res.status(400).json({result:"Email or Password does not match"})
                    }
                }
                else{
                    res.status(400),json({result:"user with this email does not exist.Kindly sign up"});
                }
            }
            else{
                res.status(400).json({
                    result:"kindly enter email and password both"
                })
            }
    
    }
        catch(err){
                    
                    res.status(500).json({
                        result:err.message
                    })
                
        }
    
}


async function forgetPasswordController(req,res){
    try{
        let {email} = req.body;
        
        let user = await userModel.findOne({email});
        if(user)
        {
        let otp = otpGenerator();
        let afterFiveMin  = Date.now() + 1000*60*5;
        await mailSender(email,otp);
        user.otp = otp;
        user.otpExpiry = afterFiveMin;
        await user.save();
        res.json({
            data:user,
            "message":"otp sent to your mail"
        })

        }
        else{
            res.json({
                result:"user with this email does not exist"
            })
        }
        
    }
    catch(err){
        res.send(err.message);
    }
}

async  function resetPasswordController(req,res){
    try{
            let{otp,password,confirmPassword,email} = req.body;
            let user = await userModel.findOne({email});
            let currentTime = Date.now();
            if(currentTime > user.otpExpiry){
                delete user.otp;
                delete user.otpExpiry;
                await user.save();
                res.json({
                    message:"otp expired"
                })
            }
            else{
              if(user.otp != otp)
             { 
                res.json({
                    message:"Otp does not match"
                })
              }
                else{
                    user = await userModel.findOneAndUpdate({otp},{password,confirmPassword},{runValidators:true,new:true}); 
                    delete user.otp,
                    delete user.otpExpiry
                    await user.save();

                    res.json({
                        user:user,
                        message:"user password reset complete"
                    })
                }
            }
           
    }
    catch(err){
        res.send(err.message);
    }
}

function otpGenerator(){
    return Math.floor(Math.random() * 1000000);
}


// app.get("/users",protectRoute,async function(req,res){
//     try{
//         let users = await userModel.find();
//         res.json(users);
//     }
//     catch(err){
//         res.send(err.message);
//     }
// })

// app.get("/user",protectRoute,async function(req,res){
//     try{
//         const userId = req.userId;
//         const user = await userModel.findById(userId);
//         //to send json data
//         res.json({
//             data:user,
//             message:"data about logged in user is send",
           
//         })
        
//     }
//     catch(err){
//             res.send(err.message);
//     }
// })

function protectRoute(req,res,next){
    try{
        let cookies = req.cookies;
        let JWT = cookies.JWT;
        if(cookies.JWT){
            const token = jwt.verify(JWT,secretKey);
            console.log(token);
           let userId = token.data;
           req.userId = userId;
            next();
        }
        else{
            res.send("you are not logged in , kindly login");
        }
    }
    catch(err){
        console.log(err);
        res.send(err.message);
    }
}

module.exports = {
    signupController,
    loginController,
    resetPasswordController,
    forgetPasswordController,
    protectRoute
}
