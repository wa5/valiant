require('../../../config/db.config')
var mongoose=require('mongoose')
var {Schema}=mongoose

var userStructure=new Schema({
name:String,
age:Number,
chocalate:String
})



module.exports=mongoose.model('user',userStructure)