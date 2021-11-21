
var jhony=<T>(a:T)=>{

    let count=Math.floor(Math.random()*6)
    let fruite='apple'
    return {...a,fruite,count}

}


var pratik=jhony({name:'bana',orange:5})
var triner=jhony({name:'bana',orange:5})
console.log(pratik.name)
console.log(triner)