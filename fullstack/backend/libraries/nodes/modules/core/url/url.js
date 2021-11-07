var url=require('url')
var myurl="http://localhost:3009/about?name=jhon&age=23"
console.log(myurl)

var q=url.parse(myurl)
console.log(q.query)