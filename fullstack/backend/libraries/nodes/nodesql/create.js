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

    // con.query('CREATE DATABASE pratik',(err,result)=>{
    //     if(err)throw err;
    //     console.log('db created')
    // })
var q='CREATE TABLE sTudents(name VARCHAR(255),class VARCHAR(255))'
    con.query(q,(err,res)=>{
        if(err)throw err
        console.log('table created')
    })
})

