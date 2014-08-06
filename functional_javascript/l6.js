function countWords(inputWords) {
    return inputWords.reduce(function (list, curword) {
        list[curword] = (list[curword] ? list[curword] + 1 : 1);
        
        return list;
    }, {});
}

module.exports = countWords