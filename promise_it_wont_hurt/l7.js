/**
 * Created by cjpa on 10/01/15.
 */

var q = require('q');

//defer.promise is the actual promise itself
//defer.promise.then is the "Q" way of attaching a then handler
//your solution here

q.fcall(JSON.parse,process.argv[2])
    .then(null, console.log);