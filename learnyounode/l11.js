var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
	var f = fs.createReadStream(process.argv[3]);
	f.pipe(res);
});

server.listen(process.argv[2]);
