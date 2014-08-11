function Spy(target, method) {
    var oldfunction = target[method];
    var that = this;
    
    target[method] = function () {
        if (!that.count) that.count = 1;
        else that.count++;    
        
        return oldfunction.apply(target, arguments);
    }
    
    return that;
}

module.exports = Spy
