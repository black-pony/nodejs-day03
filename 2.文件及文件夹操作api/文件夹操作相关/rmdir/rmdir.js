var fs = require('fs');
fs.rmdir('./mmm',function(err){
	if(err)throw err;
	console.log('删除文件夹成功');
});