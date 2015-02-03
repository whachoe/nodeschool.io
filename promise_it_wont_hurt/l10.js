/**
 * Created by cjpa on 4/02/15.
 */
var HTTP = require("q-io/http");

HTTP
    .read("http://localhost:1337")
    .then(function (data) {
        console.log(JSON.parse(data));
    })
    .then(null, console.error)
    .done();