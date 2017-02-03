/**
 * Created by ericzheng
 * js-class@qq.com
 *
 */
var fs = require("fs");
fs.readFile("a.txt",function(err,data){
  if(err){
    console.log("文件读取失败");
  }else{
    console.log(data);//读取出来的是十六进制格式的数据(本质上是二进制的)
  }
});