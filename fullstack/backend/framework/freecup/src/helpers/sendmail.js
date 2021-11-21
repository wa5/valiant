var nodemailer=require('nodemailer')


function sm(name,email){

    var transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'waseemahmed116@gmail.com',
            pass:'1ac13cs034'
        }
    });
    
    var mailoption={
        from:'waseemahmed116@gmail.com',
        to:email,
        subject:`hi ${name} test mail from 3601`,
        text:'hi which candy is ur faverait'
    };
    
    
    transporter.sendMail(mailoption,(err,info)=>{
        if(err){
            console.log(err)
        }else{
            console.log('mail send')
        }
    })
}
module.exports=sm