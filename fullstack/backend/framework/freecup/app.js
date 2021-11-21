require('dotenv').config()
var express=require('express')
//db configuration 
require('./config/db.config')
var app=express()
//port no configuration
app.set('port',process.env.PORT||8005)

//frontende settings
var path=require('path')
const ejs=require('ejs')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'src/views'))
//static file settings

app.use(express.static(path.join(__dirname,'src/public/imgs')))

//api setting
var add=require('./src/routes/index')

app.use('/api',add.home)

app.use('/api',add.login)

app.use('/api',add.register)


//url rewriting cocept
app.get('/cars/:data',(req,res)=>{
    var data=req.params.data
    console.log(req.params)
res.send(data)
})






app.listen(app.get('port'),()=>{
    console.log(`server started on  port${app.get('port')}`)
})