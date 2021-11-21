require('../../../config/db.config')
var mongoose=require('mongoose')
var {Schema}=mongoose

var studentsStructure=new Schema({
name:String,
age:Number,
classs:String
})



module.exports=mongoose.model('student',studentsStructure)