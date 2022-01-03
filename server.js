const express=require("express");
const app=express();
const DBconnect=require("./config/DBconnect");
require('dotenv').config()
DBconnect();
app.use(express.json())

app.use("/user",require('./routes/User'))
const PORT=5000;
app.listen(process.env.PORT,(err)=> err?console.log(err):console.log("server is runing"));
