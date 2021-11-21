


var gethome=(req,res)=>{
    var name=req.query.name
    console.log(req.query)
    res.render('home',{name:name})
}
var deletehome=(req,res)=>{
    res.send('thank for acess home api post')
}
var updatehome=(req,res)=>{
    res.send('thank for acess home api deltre')
}
var insethome=(req,res)=>{
    res.send('thank for acess home put')
}

module.exports={  gethome,
     deletehome,
     updatehome,
     insethome
    }