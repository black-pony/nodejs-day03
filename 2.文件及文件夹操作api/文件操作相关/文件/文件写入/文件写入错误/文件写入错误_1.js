/**
 * Created by ericzheng
 * js-class@qq.com
 *
 */
var fs = require("fs");
fs.writeFileAsync("a b&*%.txt","hello world");
console.log("第8行代码被执行");//上一行代码出错了，这一行代码不会被执行