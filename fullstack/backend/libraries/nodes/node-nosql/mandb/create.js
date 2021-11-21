var Mongodbclinet=require('mongodb').MongoClient;

var url='mongodb://127.0.0.1:27017/'

Mongodbclinet.connect(url,(err,db)=>{
if(err)throw err
console.log('db connected')

var dbo=db.db('jhon')
dbo.createCollection('students',(err,res)=>{
    if(err)throw err
    console.log('collection created')
    db.close()
})

})