const express = require("express");

const app = express();
const {noteRouter} = require("./routers/noteRouter")
var cors = require('cors')


app.use(cors())
app.use("/",noteRouter)


app.listen(3000,()=>{
    console.log("app is running on 3000")
})