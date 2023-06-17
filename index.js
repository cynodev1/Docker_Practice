const express = require('express')
const app = express()
const port = 40001

app.get("/",(req,res)=>{
    res.send("Hi, Docker Done!!")
})

app.listen(port,()=>{
    console.log(`running on port ${port}`)
})