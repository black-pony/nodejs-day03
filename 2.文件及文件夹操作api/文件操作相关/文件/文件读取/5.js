var fs = require("fs");
fs.readFile("a.txt","utf-8",function(err,data){
  if(err){
    console.log("文件读取失败");
  }else{
    fs.writeFile("c.txt",data,function(err){
      if(err){
        console.log("文件写入失败");
      }else{
        console.log("文件写入成功");
      }
    });
  }
});