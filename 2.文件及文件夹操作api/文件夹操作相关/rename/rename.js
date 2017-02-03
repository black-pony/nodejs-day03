var fs = require('fs');
fs.rename('./nn1','./a/n1',function(err){
	if(err)throw err;
	console.log('文件夹改名字成功');
});