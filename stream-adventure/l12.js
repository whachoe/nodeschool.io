var es = require('event-stream');
var through = require('through');

module.exports = function (counter) {
    // return a duplex stream to capture countries on the writable side
    // and pass through `counter` on the readable side
    var countries = {};
    var input = through(write, end);
    return es.duplex(input, counter);

    function write(country) {
        countries[country.country] = (countries[country.country] || 0 ) + 1;
    }
    function end() {
        counter.setCounts(countries);
    }
};
