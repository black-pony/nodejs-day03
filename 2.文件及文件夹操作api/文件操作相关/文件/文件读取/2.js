/**
 * Created by ericzheng
 * js-class@qq.com
 *
 */
var fs = require("fs");
fs.readFile("a.txt",function(err,data){
  //或者这样写：if(err) throw err;
  //console.log(data);
  if(err){
    console.log("文件读取失败");
  }else{
    console.log(data.toString());//读取出来的是十六进制格式的数据(本质上是二进制的),toString方法可以把二进制转换成人类可以识别的字符
  }
});