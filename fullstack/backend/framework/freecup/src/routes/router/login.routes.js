var express=require('express')

var {getuser,deleteuser,updateuser,insetuser}=require('../../controllers/login.Ctrl')

var Router=express.Router()
Router.route('/login')
.get(getuser)
.post(insetuser)
.delete(deleteuser)
.put(updateuser)
module.exports=Router