var fs = require("fs");
function copy(src,dist,callback){
  fs.readFile(src,"utf-8",function(err,data){
    if(err){
      console.log("文件读取失败");
    }else{
      fs.writeFile(dist,data,function(err){
        if(err){
          console.log("文件写入失败");
        }else{
          //console.log("文件写入成功");
          if(typeof callback === "function"){
            callback();
          }
        }
      });
    }
  });
}

copy("a.txt","d.txt",function(){
  console.log("文件写入成功");
});