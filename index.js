const express = require('express')
const app = express()
const port = 3000

const item = require("./routes/item");
const bird = require("./routes/birds");
const route = require("./routes/route");


app.use("/api",item);
app.use("/fly",bird);
app.use("/auth",route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


