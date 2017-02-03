var fs = require("fs");
var less = require("less");
var path = require("path");

var srcPath = path.join(__dirname,"./less_files/main.less");
var distPath = path.join(__dirname,"./css_files/main.css");

fs.watchFile(srcPath,{interval:500},function(current,previous){
    fs.readFile(srcPath,"utf-8",function(err,data){
        if(err){
            throw err;
        }
        less.render(data,function(err,data){
            if(err){
                throw err;
            }
            fs.writeFile(distPath,data.css,function(err){
                if(err){
                    throw err;
                }
                console.log("css文件编译成功");
            });
        });
    });
});