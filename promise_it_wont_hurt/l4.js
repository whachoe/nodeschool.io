/**
 * Created by cjpa on 10/01/15.
 */

var q = require('q');
var defer = q.defer();
//defer.promise is the actual promise itself
//defer.promise.then is the "Q" way of attaching a then handler
//your solution here

defer.promise.then(console.log);

defer.resolve("SECOND");
console.log('FIRST');