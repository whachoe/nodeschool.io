var combine = require('stream-combiner')
var split = require('split');
var through = require('through');
var zlib = require('zlib');

module.exports = function () {
    var current_genre = null;
    
    return combine(
        // read newline-separated json,
        split(),
        // group books into genres,
        through(write, end),
        // then gzip the output
        zlib.createGzip()
    )
    
    function write(record) {
        if (record) {
            var rec = JSON.parse(record);
        
            if (rec.type == 'genre') {
                if (current_genre !== null) {
                    this.queue(JSON.stringify(current_genre) + "\n");
                }
                current_genre = {
                    name : rec.name,
                    books : []
                }
            }
            
            if (rec.type == "book") {
                current_genre.books.push(rec.name);
            }
        }
    }
    
    function end() {
        this.queue(JSON.stringify(current_genre) + "\n");
        this.queue(null);
    }
}
