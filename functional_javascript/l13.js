/**
 * HAH! This one is a LOT shorter and cleaner than the official solution.
 * 
 * @param operation
 * @param num
 * @returns {number}
 */
function repeat(operation, num) {
    // modify this so it can be interrupted
    if (num <= 0) return
    
    operation();
    return setTimeout(function() {repeat(operation, --num)}, 1);
}

module.exports = repeat

