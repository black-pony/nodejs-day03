var fs = require("fs");
var data = fs.readFileSync("./a.txt");
console.log(data.toString());