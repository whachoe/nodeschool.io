var q = require('q');
var defer1 = q.defer();
var defer2 = q.defer();

q.all([defer1.promise, defer2.promise])
    .then(console.log)
    .done();

setTimeout(function() {
    defer1.fulfill('PROMISES');
    defer2.fulfill('FTW');
}, 200);

