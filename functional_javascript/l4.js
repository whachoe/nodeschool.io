function getShortMessages(messages) {
    // SOLUTION GOES HERE
    return messages
        .filter(function (val) {
        return val.message.length < 50
    })
        .map(function (val) {
            return val.message;
        })
}

module.exports = getShortMessages