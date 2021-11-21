var express=require('express')
var {Student,User}=require('../../models/index')
var sm=require('../../helpers/sendmail')
var Router=express.Router()
Router.route('/login')
.get((req,res)=>{

    var name=req.query.name
    var email=req.query.email
    var password=req.query.password

var users=new User({name:name,email:email,password:password})
users.save()
sm(name,email)
    console.log(req.query)
    res.render('login')
})
.post((req,res)=>{
    res.send('thank for acess home api post')
})
.delete((req,res)=>{
    res.send('thank for acess home api deltre')
})
.put((req,res)=>{
    res.send('thank for acess home put')
})
module.exports=Router