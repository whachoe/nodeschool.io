/**
 * Created by cjpa on 10/01/15.
 */

var q = require('q');
var fs = require('fs');

//defer.promise is the actual promise itself
//defer.promise.then is the "Q" way of attaching a then handler
//your solution here

function parsePromised()
{
    var defer = q.defer();
    
    try {
        var jsonobject = JSON.parse(process.argv[2]);
    } catch (e) {
        defer.reject(e);
    }

    defer.resolve(jsonobject);
    return defer.promise;
}

parsePromised()
    .then(null, console.log);
    

