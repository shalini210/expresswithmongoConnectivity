const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/usercontroller")
router.get("/",(req,res)=>
{
// res.send("we will show users here")
usercontroller.getUsers(req,res);
});
router.get("/showuser",(req,res)=>
{

usercontroller.getUser(req,res);
});
router.post("/",(req,res)=>
{
    console.log("inside post");
usercontroller.insertUser(req,res);
});

router.put("/",(req,res)=>
{
    usercontroller.updateUser(req,res);
});
router.delete("/",(req,res)=>
{
    usercontroller.deleteUser(req,res);
});

module.exports = router;