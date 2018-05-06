//export 是将该接口暴漏，方便外部函数访问

// exports.con = function(){
// 	console.log("我是test1下面的输出")
// }

//module.export 与export是有区别的，建议module。export
module.exports.con = function(){
	console.log("我是test1下面的输出")
}
