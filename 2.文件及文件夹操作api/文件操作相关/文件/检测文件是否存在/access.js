var fs = require('fs');
fs.access('./a.txt',function(err){
	if(err){
		console.log('不存在');
	}else{
		console.log('存在');
	}
});