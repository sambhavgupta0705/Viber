const express = require('express');
const {chats}=require("./data/data");
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const app = express();
const userRoutes=require('./routes/userRoutes');
dotenv.config();
connectDB();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("API is running")
})

app.use('/api/user',userRoutes)

const PORT=process.env.PORT || 5000;

app.listen(5000,console.log(`Port has started running on port ${PORT}`));