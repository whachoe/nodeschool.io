var slice = Array.prototype.slice

function logger(namespace) {
    return function () {
        Array.prototype.unshift.call(arguments, namespace);
        console.log.apply(console, slice.call(arguments));
    }
}

module.exports = logger
