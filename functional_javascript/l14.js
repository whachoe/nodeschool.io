function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return false;
    
    return function () {
        operation();
        return repeat(operation, --num);
    }
}

function trampoline(fn) {
    while (fn) {
        fn = fn();
    }
}

module.exports = function(operation, num) {
    trampoline(function() {
       return repeat(operation, num); 
    });
}
