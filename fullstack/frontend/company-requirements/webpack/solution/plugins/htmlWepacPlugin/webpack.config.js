var path=require('path')

console.log(__dirname)
const HtmlWebpackPlugin=require('html-webpack-plugin')


module.exports={
    mode:'development',
    entry:{
        app:'./src/app.js',
        about:'./src/pages/about.js',
        home:'./src/pages/home.js'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'mongo')
        
    },
  devServer:{
      port:1234,
      static:path.resolve(__dirname,'mongo')
  }


}