/**
 * Created by ericzheng
 * js-class@qq.com
 *
 */
var fs = require("fs");
fs.appendFile("a.txt","我是追加的内容",function(err,data){
    if(err){
        throw err;
    }
    console.log("追加成功");
});