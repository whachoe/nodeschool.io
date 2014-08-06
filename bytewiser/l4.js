/**
 * I'm actually cheating a bit in these tasks, because i first did the stream-adventure-lessons, 
 * It's easier  to manipulate the streams directly instead of going from stream -> buffer -> back to stream.
 * 
 * So not a lot of Buffer stuff to see. But my solutions validate, so all is well imo :)
 */

var split = require('split');
var fs = require('fs');

fs.createReadStream(process.argv[2])
    .pipe(split())
    .on("data", function (data) {
        console.log(new Buffer(data));
    });