
var express=require('express')
var {gethome,deletehome,updatehome,insethome}=require('../../controllers/home.Ctrl')
var Router=express.Router()

Router.route('/home')
.get(gethome)
.post(insethome)
.delete(deletehome)
.put(updatehome)

module.exports=Router