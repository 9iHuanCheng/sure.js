var fs= require("fs") // 引入fs模块
var dirName = process.argv[2] // 你传的参数是从第 2 个开始的
// 判断的方法fs.exists(path, callback)
fs.exists(dirName, function(exists) {
  if(exists){
     console.log("目录存在或您输入错误")
  }
  if(!exists){
       console.log("开始初始化...")
       fs.mkdirSync("./" + dirName)
       console.log("文件夹初始化完毕...")
       process.chdir("./" + dirName)
       console.log("进入建立的文件夹,开始初始化模板文件...")
       fs.mkdirSync('css')
   	   fs.mkdirSync('js')
   	   fs.writeFileSync("./index.html","<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>")
  	   fs.writeFileSync("css/style.css", "h1{color: red;}")
  	   fs.writeFileSync("./js/main.js", "Hello World';\nalert(string)")
  	   console.log("初始化模板完成")
    }
});