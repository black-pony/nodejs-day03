var fs = require("fs");
var iconv = require('iconv-lite');
fs.readFile('./b.txt',function(err,data){
    if(err)throw err;
    console.log(iconv.decode(data,"gbk"));
});