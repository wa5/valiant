var nodemailer=require('nodemailer')


var tronsportter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'waseemahmed116@gmail.com',
        pass:''
    }
})


var mailoptions={
    from:'waseemahmed116@gmail.com',
    to:'johnnyleekahlong@gmail.com',
    subject:'testing our email program',
    text:'hello join r u understanding this topic'
}

tronsportter.sendMail(mailoptions,(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log('mail send')
    }
})