var fs = require('fs');
fs.mkdir('./mmm1',function(err){
	if(err)throw err;
	console.log('创建成功');
});