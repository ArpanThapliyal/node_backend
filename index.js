const express = require('express')
const app = express()
const port = 3000

//requiring mongodb connect file 
const connectDB = require('./db');
connectDB();  //called the fuction to connect to database

//body parser
app.use(express.json());

const item = require("./routes/item");
const bird = require("./routes/birds");
const route = require("./routes/route");
const users = require('./routes/users');


app.use("/api",item);
app.use("/fly",bird);
app.use("/auth",route);
app.use("/db",users);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


