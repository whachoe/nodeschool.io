var fs = require("fs");

module.exports = function(dir, extension, callback) {

	var file = fs.readdir(dir, function (err, list) {
		if (err)
			return callback(err);

		var regex = new RegExp("^.*\."+extension+"$");
		var filtered_list = [];
		list.forEach(function (item) {
			if (regex.test(item)) {
				filtered_list.push(item);
			}
		});

		callback(null, filtered_list);
	});
}
