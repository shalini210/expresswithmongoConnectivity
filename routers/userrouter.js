const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/usercontroller")
router.get("/",(req,res)=>
{
res.send("we will show users here")
});
router.post("/",(req,res)=>
{
usercontroller.insertUser(req,res);
});
router.put("/",(req,res)=>
{

});
router.delete("/",(req,res)=>
{

});

module.exports = router;