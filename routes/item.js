const express = require('express')
const router = express.Router()

//if you want to show a file in any perticular route then do this
router.get('/',(req,res)=>{
    res.sendFile("../index.html",{root:__dirname});
});

router.post('/item',(req,res)=>{
    // res.send("this is a post request");
    res.json({a:1,b:2,c:3});
});

router.put("/item/:id",(req,res)=>{
    res.send("this is a put request");
})

router.delete("/item/:id",(req,res)=>{
    res.send("this is a delete request");
});

module.exports = router;
