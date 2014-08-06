process.stdin.on('readable', function() {
    // there is some data to read now
    var buf = process.stdin.read();
    if (buf) {
    
        for (i=0; i < buf.length; i++) {
            if (buf[i] == 46) {
                buf.write('!', i); 
            }
        }
        
        console.log(buf);
    }
});