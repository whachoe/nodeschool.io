var es = require('event-stream');
var spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
    var cmd = spawn(cmd, args);
    return es.duplex(cmd.stdin, cmd.stdout);
}
