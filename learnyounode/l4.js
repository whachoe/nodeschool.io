var fs = require("fs");

var file = fs.readFile(process.argv[2], function (err, data) {
	var numlines = data.toString().split("\n").length - 1;
	console.log(numlines);

});
