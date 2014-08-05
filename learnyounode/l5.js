var fs = require("fs");

var file = fs.readdir(process.argv[2], function (err, list) {
	var regex = new RegExp("^.*\."+process.argv[3]+"$");
	list.forEach(function (item) {
		if (regex.test(item)) {
			console.log(item);
		}
	});

});
