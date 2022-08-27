const  express = require("express")

// nodmailer password:-    oijiuobliaulkjpz

const app = express();

//npm i cookie-parser
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const planRouter = require("./routes/planRoutes"); 
const reviewRouter  = require("./routes/reviewRoutes");


app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth",authRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/plan",planRouter);


app.get("/api/v1/review",async function(req,res){
    try{
        let reviews = await foodReviewModel.find()
        .populate({path:'user',select:'name pic'})
        .populate({path:"plan",select:"name duration price"});
        res.status(200).json({
            review,
            result:"all reviews sent"
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
})

app.post("/api/v1/review",async function(req,res){
    try{
            let reviewData = req.body;
            let review = await foodReviewModel.create(reviewData);
            let rating = review.rating;
            let reviewId = review["_id"];
            let currentPlan = await foodPlanModel.findById(review.plan);
            let totalNumRating = currentPlan.review.length;
            let prevAvg = currentPlan.averageRating;
            if(prevAvg){
                let totalSumRating = prevAvg*totalNumRating;
                let newAvg = (totalSumRating + rating)/(totalNumRating + 1);
                currentPlan.averageRating = newAvg;
            }
            else{
                currentPlan.averageRating = rating;
            }
            currentPlan.reviews.push(reviewId);
            await currentPlan.save();
            res.status(201).json({
                review,
                result:"created"
            })
        }
    catch(err){
        console.log(err);
        res.status(500).json({message:err.message})
    }

})

app.listen(3000,function(){
    console.log("server started at 3000");
}) 