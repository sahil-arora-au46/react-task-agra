const express = require("express");

const app = express();
const {noteRouter} = require("./routers/noteRouter")


// app.use(express.json({extended:true}))
// app.use(express.urlencoded({extented:true}))
app.use("/",noteRouter)


app.listen(3000,()=>{
    console.log("app is running on 3000")
})