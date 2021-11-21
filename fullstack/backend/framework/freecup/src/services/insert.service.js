
var {Student,User}=require('../models/index')
var insertdatatodb=(name,email,password)=>{
    var users=new User({name:name,email:email,password:password})
users.save()
}

module.exports={ insertdatatodb}