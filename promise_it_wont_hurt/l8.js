/**
 * Created by cjpa on 10/01/15.
 */

var q = require('q');

//defer.promise is the actual promise itself
//defer.promise.then is the "Q" way of attaching a then handler
//your solution here

//q.fcall(JSON.parse,process.argv[2])
//    .then(null, console.log);

function throwMyGod() {
    throw new Error("OH NOES");
}

function iterate(num) {
    console.log(num++);
    return num;
}


q.fcall(iterate, 1)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(throwMyGod)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(null, console.log);
