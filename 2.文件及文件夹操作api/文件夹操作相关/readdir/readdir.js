var fs = require('fs');
fs.readdir('./a',function(err,data){
	if(err)throw err;
	console.log(data);
});