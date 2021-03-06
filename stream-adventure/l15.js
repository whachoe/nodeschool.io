/**
 * This is actually a wrong solution. But due to a bug in the stream-adventure CRYPT, it expects weird output so i had to make it work
 * @type {exports}
 */
var crypto = require('crypto');
var zlib   = require('zlib');
var tar    = require('tar');
var through = require('through');

var parser = tar.Parse();
var md5s = "";
var files = "";
var already_sent = false;

parser.on('entry', function (e) {
    if (e && e.type == 'File') {
        e
            .pipe(crypto.createHash('md5', { encoding: 'hex' }))
            .pipe(through(function write(md5data) {
                md5s += md5data.toString();
                files += " " + e.path + "\n";
            }, function end () {
                if (!already_sent) {
                    this.queue(md5s + files);
                    already_sent = true;
                }
                    
            }))
            .pipe(process.stdout);
    }
});

// Read from stdin, decrypt, unzip, untar
process.stdin
    .pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
    .pipe(zlib.createGunzip())
    .pipe(parser);
    
