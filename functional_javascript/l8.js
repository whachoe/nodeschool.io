function duckCount() {
    // SOLUTION GOES HERE
    return Array.prototype.filter.call(arguments, function (item) {
        return Object.prototype.hasOwnProperty.call(Array.prototype.shift.call(arguments), 'quack');
    }).length;
}

module.exports = duckCount
