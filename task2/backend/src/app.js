const express = require("express");
const app = express();
const {noteRouter} = require("./routers/noteRouter")
const PORT = process.env.PORT
const cors = require('cors')

app.use(cors())
app.use("/",noteRouter)


app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
})