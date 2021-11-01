var path=require('path')
var HtmlP=require('html-webpack-plugin')


module.exports={
    mode:'development',
    entry:{
        swim:'./src/swim.js',
        about:'./src/pages/about.js',
        home:'./src/pages/home.js'
    },

    output:{
        filename:'[name].[chunkhash].js',
        path:path.resolve(__dirname,'mangos')

    },


devServer:{
    port:1234,
    static:path.resolve(__dirname,'mangos')
},

//loaders
module:{
rules:[
    {
        test:/\.css$/,
        use:['style-loader',
    'css-loader']
    },
    {
        test:/\.(svg|ico|png|jpg|gif|jpeg)$/,
        type:'asset/resource'
    }
   
]
},


//extra efetures
plugins:[
new HtmlP({
    template:'./src/public/home.html',
    filename:'index.html',
    title:'my website',
    inject:'body'
})
]




}


//loaders

//plugings

