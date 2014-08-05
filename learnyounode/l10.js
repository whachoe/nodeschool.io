var net = require('net');
var time = require('strftime');

var server = net.createServer(function (socket) {
	timestring = time('%F %H:%M')
	socket.end(timestring);
    })

server.listen(process.argv[2]);
