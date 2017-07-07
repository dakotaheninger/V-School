var fs = require("fs");

var contents = fs.readFileSync("menu.json", "utf8");
var obj = JSON.parse(contents);
console.log(obj.breakfast[0]);



