var bitarray = new Uint32Array(1);
bitarray[0] = parseInt(process.argv[2]);

var bitarray2 = new Uint16Array(bitarray.buffer);
console.log(JSON.stringify(bitarray2));