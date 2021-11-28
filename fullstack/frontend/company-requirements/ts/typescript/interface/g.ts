
interface myprops{
    color:String;
    brand:String;
    model:Number
    on():Boolean
    off():Boolean
}


class Mbile1 implements myprops{
 color:String
 brand:String
 model:Number

constructor(color:string,brand:string,model:Number){
    this.color=color
    this.brand=brand
    this.model=model
    
}
   on():Boolean{
       return true
   }
   off():Boolean{
       return false
   }
}

var Samsung1=new Mbile1('blue','galaxi',66)