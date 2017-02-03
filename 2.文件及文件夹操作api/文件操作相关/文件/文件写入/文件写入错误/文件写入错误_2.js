/**
 * Created by ericzheng
 * js-class@qq.com
 *
 */
var fs = require("fs");
//同步的写入文件方式可以通过try...catch的方式来防止下面的代码不能执行
try{
  fs.writeFileAsync("a b&*%.txt","hello world");
}catch(e){
  console.log(e);
}
console.log("这一行代码被执行");//上一行代码出错了，这一行代码不会被执行
