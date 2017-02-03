/**
 * Created by ericzheng
 * js-class@qq.com
 *
 */
var fs = require("fs");
fs.writeFile("message1.txt","Hello world",function(err){
  //如果成功则err的值为null
  if(err){
    console.log(err);
  }else{
    console.log("success");
  }
});
console.log("我是第15行代码");