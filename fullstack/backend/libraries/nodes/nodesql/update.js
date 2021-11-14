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

    var q="UPDATE `students` SET `name`='sharuk' WHERE name='salman'"
    con.query(q,(err,res)=>{
        if(err)throw err
        console.log('insered')
    })

})