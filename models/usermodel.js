const express = require("express")
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Fromexpress")
.then(()=>console.log("connected"))
.catch(()=>console.log("err"));

const userSchema = {
    uname:String,
    pwd:String
};
const userModel = mongoose.model("demo",userSchema);
module.exports = userModel;