var http = require('http')
//回调函数的第一个参数是req，表示接收，第二个表示发送
var sever = http.createServer(function(req,res){
	//设置请求头
	res.setHeader('Content-Type','text/plain')
	//删除请求头
	//res.removeHeader
	//解决跨域
	res.setHeader('Access-Controls-Allow-Origin',"*")
	//设置状态码
	res.statusCode = 200
	res.write("hello word")
	res.end()
})
sever.listen(8080)