/**
 * Created by ericzheng
 * js-class@qq.com
 *
 */

//自定义了一个函数，
//用于把mtime,atime,ctime的时间对象转换成我们可以认识的时间格式
function convertTime(time){
  return time.getHours() + "：" + time.getMinutes() + "：" + + time.getSeconds();
}

var fs = require("fs");
fs.watchFile("./1.txt",function(curr,pev){
  console.log("上次修改时间是：" + convertTime(curr.mtime),"这次修改时间是："+convertTime(pev.mtime)); 
  console.log("============");
});

//persistent这个没有必要设置，监视文件不存在只监视一次
//interval越小，则监视的频率越高，问题就是CPU计算过多造成电脑变慢
// var fs = require("fs");
// fs.watchFile("./1.txt",{persistent:true,interval:10},function(curr,pev){
//   console.log("上次修改时间是：" + convertTime(curr.mtime),"这次修改时间是："+convertTime(pev.mtime)); 
//   console.log("============");
// });