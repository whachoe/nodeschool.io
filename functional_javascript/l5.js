function checkUsersValid(goodUsers) {
    return function(submittedUsers) {
        return submittedUsers.every(function (u) {
            return goodUsers.some(function (gu) {
                return gu.id == u.id;
            })
        });
    };
}

module.exports = checkUsersValid
