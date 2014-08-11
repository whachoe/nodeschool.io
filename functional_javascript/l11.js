module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function (output, val, index, arr) {
        output.push(fn(val, index, arr));
        return output;
    }, []);
}