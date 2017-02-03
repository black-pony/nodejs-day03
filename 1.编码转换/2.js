var fs = require("fs");
fs.readFile("./a.txt","utf-8",function(err,data){
    if(err)throw err;
    console.log(data instanceof Buffer);
    console.log(typeof data);
    console.log(data);
});