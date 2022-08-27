const mongoose  = require("mongoose");
let planSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"kindly pass the name"],
        unique:[true,"plan name should be unique"],
        maxLength:[40,"your plan length is more than 40 characters"],
    },
    duration:{
        type:Number,
        required:[true,"you need to provide duration"]
    },
    price:{
        type:Number,
        required:[true,'you need to provide  price']
    },
    discount:{
        type:Number,
        validate:{
            validator:function(){
                return this.discount < this.price
            },
            message:"discount must be less than actual price"
        }
    }
})


const foodPlanModel = mongoose.model('foodPlanModel',planSchema)

module.exports = foodPlanModel;
