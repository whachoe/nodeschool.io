process.stdin.on('readable', function() {
    // there is some data to read now
    var buf = process.stdin.read();
    if (buf) {
        var binaryArray = new Uint8Array(buf);    
        console.log(JSON.stringify(binaryArray));
    }
});