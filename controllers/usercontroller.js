const userModel = require("../models/usermodel");


exports.insertUser = (req,res)=>{
    const newuser = new userModel(
        {
            uname:req.body.uname,
            pwd:req.body.pwd}
            );            
    newuser.save()
.then(()=>{console.log("record inseted ");
console.log(req.body)
res.send("user inserted ");
        })
.catch(()=>
{console.log("Record not inserted")
    res.send("user not inserted")});
}


exports.updateUser = (req,res)=>{
    const condition = { uname:req.body.uname};
    const newdata =  {    
            pwd:req.body.pwd}
          
            userModel.updateMany(condition, newdata)
// userModel.findOneAndUpdate(condition, newdata)
.then((d)=>{
    console.log("record updatged");
    console.log(d);
res.send("user updated ");
        })
.catch(()=>
{console.log("Record notupdate")
    res.send("user not updated")});
}

exports.deleteUser = (req,res)=>
{
    userModel.deleteOne({uname:req.body.uname})
    .then((d)=>{
        console.log(d)
        console.log("record deleted");
        if(d.deletedCount>0)
        {
        res.send("record deleted");
        }
        else
        {
            res.send("record not found")
        }
    })
    .catch(()=>
    {console.log("record not deleted")})
}

exports.getUsers=async (req,res)=>
{
    const data =await  userModel.find()
    res.send(data);
}
exports.getUser = async(req,res)=>
{
    console.log(req.query)
    const data = await userModel.find({uname:req.query.uname});
    res.send(data);
}