var through = require('through');
var tr = through(uppercaser);

function uppercaser(buffer) {
    this.queue(buffer.toString().toUpperCase());
}
process.stdin.pipe(tr).pipe(process.stdout);