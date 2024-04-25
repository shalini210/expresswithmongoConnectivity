const express = require("express");
var app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routers/userrouter")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/user",userRouter)
app.get("/",(req,res)=>
{
    res.send("use /user for user ");
})
app.listen(3000,()=>console.log("server running "));
