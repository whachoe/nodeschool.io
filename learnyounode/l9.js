var http = require('http');
var bl = require('bl');
var async = require('async');

function printUrl(url, callback) {
    http.get(url, function (response) {
	response.pipe(bl(function (err, data) {
		if (err) return callback(err);

		var buf = data.toString();
		return callback(null, buf);
	}));
    });
}

var urls = [];
for (i=2; i<process.argv.length; i++) {
 urls.push(process.argv[i]);
}

async.map(urls, printUrl, function (err, stuff) {
    stuff.forEach(function (item) {
	   console.log(item);
    });
});
