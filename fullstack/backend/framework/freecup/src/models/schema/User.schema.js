require('../../../config/db.config')
var mongoose=require('mongoose')
var {Schema}=mongoose

var userStructure=new Schema({
name:String,
email:String,
password:String
})



module.exports=mongoose.model('user',userStructure)