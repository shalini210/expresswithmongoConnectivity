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
const newuser        = new userModel({uname:"admin",pwd:"123"})
newuser.save()
.then(()=>console.log("record inseted "))
.catch(()=>console.log("Record not inserted"))
// var mongoose = require('mongoose');

//  mongoose.connect('mongodb://127.0.0.1:27017/test')

//  .then(() => console.log('Connected!'));
//  const userSchema = {
//     username:String,
//     pwd:String
//  };
//  const userModel = mongoose.model("User",userSchema);
//  const user = new userModel({
//     username:'Ram',
//     pwd:'3215'
//  });
//  user.save().then(()=>{console.log("success")})
//  .catch(()=>console.log("error"))
 