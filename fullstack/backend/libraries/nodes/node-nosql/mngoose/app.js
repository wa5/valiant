require('./config/db.config')


var {Student,User}=require('./src/models/index')

// const stu1=new Student({name:'pratik',age:89,classs:'mern'})
// stu1.save()

// Student.findOne({name:'pratik'},(err,res)=>{
// if(err)throw err
// console.log(res)
// })

//editing
// Student.findOneAndUpdate({name:'pratik'},{name:'pratik lakshman'}
// ,{overwrite:false,new:true},(err)=>{
//     if(err)throw err
//  console.log('updated')
// }
// )

Student.findOneAndDelete({name:'jhon'},(err,res)=>{
    if(err)throw err
    console.log(res)
    })
