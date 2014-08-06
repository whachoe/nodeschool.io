/*
// Make a function that does the same as this one, only using Array.map
function doubleAll(numbers) {
    var result = []
    for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
    }
    return result
}
*/

function doubleAll(numbers) {
    return numbers.map(function (el) { return el*2 });
}

module.exports = doubleAll