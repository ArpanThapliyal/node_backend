const express = require('express');
const router = express.Router();

const User = require('../models/userModel');

// routes

// curd operation

// (view/read)
//fetching data of user from db
router.get("/users", async(req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({
            success: "false",
            message: err.message
        })
    }
})

//add data in db
router.post("/users",async(req,res)=>{
    try {
        const {name ,age ,weight} = req.body;
        const newUser = new User({name, age, weight});
        await newUser.save();
        res.status(201).json({
            success: 'true',
            message: newUser 
        })
    } 
    catch (err) {
        res.status(500).json({
            success: "false",
            message: err.message
        })
    }
})

//update the data in db
router.put("/users/:id",async (req,res)=>{

    const {id} = req.params; 
    const {name,age,weight} = req.body;

    try { 
       const updatedUser = await User.findByIdAndUpdate(id,{name,age,weight});

       if(!updatedUser){
        return res.status(404).json({
            success:"false",
            message:"no updates were made!!"
        });
       }

       //but if you have updated user sucessfully!!
       res.status(200).json({
        success:"true",
        message:`data updated sucessfully ${updatedUser}`
       })
       
    } 
    catch (err) {
        res.status(500).json({
            success:"false",
            message: err.message
        })
    }
})

//delete user from db
router.delete("/users/:id", async (req,res)=>{
    const {id} = req.params;

    try {
        const deleteUser = await User.findByIdAndDelete(id);

        if(!deleteUser){
            res.status(404).json({
                success: "false",
                message: "user not deleted!!"
            })
        }
        res.status(200).json({
            success: "true",
            user: deleteUser
        })
    } 
    catch (error) {
        res.status(500).json({
            success: "false",
            message: err.message
        })
    }

    
})

module.exports = router;