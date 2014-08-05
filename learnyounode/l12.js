var http = require('http');
var fs = require('fs');
var bl = require('bl');

var server = http.createServer(function (req, res) {
	req.pipe(bl(function (err, data) {
	    if (err) return callback(err);

	    var upper = data.toString().toUpperCase();
	    res.end(upper);
	}));
});

server.listen(process.argv[2]);
