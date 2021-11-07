var http=require('http')


http.createServer((req,res)=>{

    if(req.url=='/home'){
        res.write('im home api')
        res.end()
    }else if(req.url=='/about'){
        res.write('im about api')
        res.end()
    }
    else if(req.url=='/contact'){
        res.write('im contact api')
        res.end()
    } else if(req.url=='*'){
        res.write('api does not exists')
        res.end()
    }
    
}).listen(3009,()=>{
    console.log('server started on port no 3009')
})