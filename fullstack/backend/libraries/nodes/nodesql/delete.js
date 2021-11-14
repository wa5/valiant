var mysql=require('mysql')

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'pratik'
})

con.connect((err)=>{
    if(err)throw err;
    console.log('db connected')

    var insert="DELETE FROM `students` WHERE name='sharuk'"
    con.query(insert,(err,res)=>{
        if(err)throw err
        console.log('insered')
    })

})