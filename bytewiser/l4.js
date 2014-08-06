var split = require('split');
var fs = require('fs');

fs.createReadStream(process.argv[2])
    .pipe(split())
    .on("data", function (data) {
        console.log(new Buffer(data));
    });