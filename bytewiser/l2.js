var b = new Buffer(process.argv.length - 2);
for (i=2; i < process.argv.length; i++) {
    b.writeUInt8(process.argv[i], i - 2);
}

console.log(b.toString('hex'));