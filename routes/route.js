//here i am gonna write route specific midlewares
const express = require('express')
const router = express();

//middleware

//authenticating the user
const authentication = (req,res,next)=>{
    console.log("authenticating the user");

    req.user = {name:"aman",role:"admin"};

    if(req.user){
        next();
    }
    else{
        res.json({
            success : "false",
            message: "user not found"
        })
    }
}

// check for user as student
const isStudent = (req,res,next)=>{
    console.log("checking the user if he is a student");

    if(req.user.role == "student"){
        next();
    }
    else{
        res.json({
            success:"false",
            message:"cannot authorize, as user is not"
        })
    }
}

//check for user as admin
const isAdmin = (req,res,next)=>{
    console.log("checking for user if he is a admin");

    if(req.user.role == "admin"){
        next();
    }
    else{
        res.json({
            success:"false",
            message:"cannot authorise user as he does not have admin prevlages"
        })
    }
}

//routes

router.get("/student",authentication,isStudent,(req,res)=>{
    res.send("this is student's page!!");
})

router.get("/admin",authentication,isAdmin,(req,res)=>{
    res.send("this is admin's domain");
})



module.exports = router;