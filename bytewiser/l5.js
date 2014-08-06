var concat = require('concat-stream');

process.stdin.pipe(concat(function (all) {
    console.log(new Buffer(all));
}));