var express=require('express')
var Router=express.Router()

Router.route('/register')
.get((req,res)=>{
    res.render('register')
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