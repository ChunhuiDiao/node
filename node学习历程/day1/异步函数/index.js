//引入http模块(需要cnpm一下)
var http = require("http")
//引入文件模块
var fs = require('fs')
//当浏览器访问监听的端口与网址的时候才会执行
http.createServer(function(req,res){
	fs.readFile('./data.json',function(err,data){
		if(err){
			console.log(err)
		}else{
			console.log(JSON.parse(data.toString()))
		}
	})
}).listen(8080,"127.0.0.1")

//实际开发中需要尽量减少嵌套，函数最好单独罗列出来

