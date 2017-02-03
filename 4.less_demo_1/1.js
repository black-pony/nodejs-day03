var fs = require("fs");
var less = require("less");
var path = require("path");

fs.readFile(path.join(__dirname,'./main.less'),"utf-8",function(err,data){
    if(err){
        throw err;
    }
    less.render(data,function(err,data){
        if(err){
            throw err;
        }
        fs.writeFile(path.join(__dirname,"./main.css"),data.css,function(err){
            if(err){
                throw err;
            }
            console.log("css文件编译成功");
        });
    });
});