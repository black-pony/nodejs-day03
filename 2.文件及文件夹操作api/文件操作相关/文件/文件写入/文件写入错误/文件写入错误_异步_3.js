/**
 * Created by ericzheng
 * js-class@qq.com
 *
 */
var fs = require("fs");
//记忆要点：node所有回调规范就是第一个参数代表的是err错误信息
//记忆要点：
fs.writeFile("a b&*%.txt","hello world",function(err){
  //console.log(err);
  //如果不用if...else,也可以在if里用return的方式
  if(err){
    console.log("出错了");
  }else{
    console.log("创建成功");
  }

});