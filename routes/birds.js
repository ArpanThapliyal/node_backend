const express = require('express')
const router = express.Router()

const loggingMiddleware = function (req,res,next){
  console.log("user logged in");
  next();
}

const authMiddleware = function(req,res,next){
  // console.log("user authenticated");
  res.send("user authentication done");
  // next();
}

const validationMiddleware = function(req,res,next){
  console.log("user validated");
  next();
}

router.use(loggingMiddleware);
router.use(authMiddleware);
router.use(validationMiddleware);

// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router;
