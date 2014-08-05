/**
 * When stream-adventure gets an update, we might be able to verify this one. Which is the one that actually makes sense
 * @type {exports}
 */
var crypto = require('crypto');
var zlib   = require('zlib');
var tar    = require('tar');
var through = require('through');

var parser = tar.Parse();

parser.on('entry', function (e) {
    if (e && e.type == 'File') {
        e
            .pipe(crypto.createHash('md5', { encoding: 'hex' }))
            .pipe(through(function write(md5data) {
                this.queue(md5data.toString() + ' '+ e.path + "\n");
            }))
            .pipe(process.stdout);
    }
});

// Read from stdin, decrypt, unzip, untar
process.stdin
    .pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
    .pipe(zlib.createGunzip())
    .pipe(parser);
    
