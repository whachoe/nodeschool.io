var ld = require('./listdir');

ld(process.argv[2], process.argv[3], function (err, list) {
	list.forEach(function (item) {
			console.log(item);
	});
});
