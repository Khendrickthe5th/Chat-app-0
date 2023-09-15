require("dotenv").config()
const express = require("express");
const app = express()
const PORT = process.env.PORT || 3100


app.get("/", (req, res)=>{
    res.status(200).send("working")
})

app.listen(PORT, (err)=>{
    if(err){
        console.log("An error")
    }
    else{
        console.log("successfully created a server")
    }
})

