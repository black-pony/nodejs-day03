var fs = require("fs");
fs.readFile('./b.txt',function(err,data){
    if(err)throw err;
    console.log(data.toString());
});