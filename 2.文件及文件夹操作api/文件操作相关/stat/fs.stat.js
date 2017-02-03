var fs = require('fs');
fs.stat('./c.txt',function(err,stats){
	if(err)throw err;
	//toLocaleString把时间格式转换成本地区域时间格式
	console.log(stats.atime.toLocaleString());
	console.log(stats.mtime.toLocaleString());
	console.log(stats.ctime.toLocaleString());
	console.log(stats.birthtime.toLocaleString());
});