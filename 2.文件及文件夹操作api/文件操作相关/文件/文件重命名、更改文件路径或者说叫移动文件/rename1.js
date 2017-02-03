var fs = require('fs');
fs.rename('./a.txt','./ceshi/a.txt',function(err){
	if(err)throw err;
	console.log('文件移动成功');
});