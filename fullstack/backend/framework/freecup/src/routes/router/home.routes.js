
var express=require('express')
var Router=express.Router()

Router.route('/home')
.get((req,res)=>{
    var name=req.query.name
    console.log(req.query)
    res.render('home',{name:name})
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