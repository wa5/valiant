var {insertdatatodb}=require('../services/insert.service')

var sm=require('../helpers/sendmail')
var getuser=(req,res)=>{

    var name=req.query.name
    var email=req.query.email
    var password=req.query.password

    insertdatatodb(name,email,password)
    sm(name,email)
    console.log(req.query)
    res.render('login')
}
var deleteuser=(req,res)=>{
    res.send('thank for acess home api post')
}
var updateuser=(req,res)=>{
    res.send('thank for acess home api deltre')
}
var insetuser=(req,res)=>{
    res.send('thank for acess home put')
}

module.exports={ getuser,
    deleteuser,
     updateuser,
     insetuser}