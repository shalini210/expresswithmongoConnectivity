const express = require("express");
const cors = require('cors')
var app = express();
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
const bodyParser = require("body-parser");
const userRouter = require("./routers/userrouter")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/user",userRouter)
app.get("/",(req,res)=>
{
    res.send("use /user for user ");
})
app.listen(3030,()=>console.log("server running "));
