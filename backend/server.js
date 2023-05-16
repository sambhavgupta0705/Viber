const express = require('express');
const {chats}=require("./data/data");

const app = express();

app.get("/",(req,res)=>{
    res.send("API is running")
})

app.get("/api/",(req,res)=>{
    res.send(chats)
})
app.listen(5000,console.log("Port has started running on port 5000"));