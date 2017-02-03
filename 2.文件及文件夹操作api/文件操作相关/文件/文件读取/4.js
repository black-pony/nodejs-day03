//读取a.txt的内容，写入b.txt
var fs = require("fs");
fs.readFile("a.txt",function(err,data){
  if(err){
    console.log("文件读取失败");
  }else{
    fs.writeFile("b.txt",data.toString(),function(err){
      if(err){
        console.log("文件写入失败");
      }else{
        console.log("文件写入成功");
      }
    });
  }
});