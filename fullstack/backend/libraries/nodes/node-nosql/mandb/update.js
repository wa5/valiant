var Mongodbclinet=require('mongodb').MongoClient;

var url='mongodb://127.0.0.1:27017/jhon'

Mongodbclinet.connect(url,(err,db)=>{
if(err)throw err
console.log('db connected')


var dbo=db.db('jhon')

var mynewvalue={$set:{name:'pratik laksman'}}

var myoldv={name:'pratik'}
dbo.collection('students').updateOne(myoldv,mynewvalue,(err,res)=>{
if(err)throw  err
console.log('updated')
})
})