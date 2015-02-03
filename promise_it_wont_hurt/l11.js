/**
 * Created by cjpa on 4/02/15.
 */

var HTTP = require("q-io/http");

HTTP
    .read("http://localhost:7000")
    .then(function (data) {
        return HTTP.read("http://localhost:7001/" + data.toString());
    })
    .then(function (userdata) {
        console.log(JSON.parse(userdata));
    })
    .then(null, console.error)
    .done();