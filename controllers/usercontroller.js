const userModel = require("../models/usermodel");


exports.insertUser = (req,res)=>{
    const newuser = new userModel(
        {uname:req.body.uname,
            pwd:req.body.pwd}
            )
    newuser.save()
.then(()=>{console.log("record inseted ");
res.send("user inserted ");
        })
.catch(()=>
{console.log("Record not inserted")
    res.send("user not inserted")});
}