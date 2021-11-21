var Mongodbclinet=require('mongodb').MongoClient;

var url='mongodb://127.0.0.1:27017/jhon'

Mongodbclinet.connect(url,(err,db)=>{
if(err)throw err
console.log('db connected')


var dbo=db.db('jhon')
var obj={name:90,age:56,country:'india'}
dbo.collection('students').insertOne(obj,(err,res)=>{
    if(err)throw err
    console.log('data inserted')
    db.close()
})


})