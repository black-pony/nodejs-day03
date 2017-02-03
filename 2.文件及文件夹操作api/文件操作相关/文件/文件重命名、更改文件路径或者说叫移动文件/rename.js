var fs = require('fs');
//重命名文件
fs.rename('./a.txt','./b.txt',function(err){
	if(err)console.log(err);
	console.log('重命名成功');
});