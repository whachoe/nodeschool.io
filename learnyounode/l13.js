var http = require('http');
var fs = require('fs');
var bl = require('bl');
var url = require('url');

var server = http.createServer(function (req, res) {
	var url_info = url.parse(req.url, true);
	var query = url_info.query;
	var curtime = new Date(query.iso);
	var json = '';

	res.writeHead(200, { 'Content-Type': 'application/json' })
	switch (url_info.pathname) {
		case '/api/parsetime':
		        json = JSON.stringify( {
				"hour" : curtime.getHours(),
				"minute" : curtime.getMinutes(),
			     	"second" : curtime.getSeconds()
			}); 	
			break;
		case '/api/unixtime': 
			json = JSON.stringify({ "unixtime" : curtime.getTime()});
			break;	

	}

	res.end(json);
});

server.listen(process.argv[2]);
