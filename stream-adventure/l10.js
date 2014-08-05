var through = require('through');
var trumpet = require('trumpet');
var concat = require('concat-stream');
var tr = trumpet();

var transformer = through(function write(buf) {
    this.queue(buf.toString().toUpperCase());
});

var stream = tr.createStream('span.loud');
stream
    .pipe(transformer)
    .pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);