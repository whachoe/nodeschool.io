function loadUsers(userIds, load, done) {
    var users = [];
    var donedone = 0;
    
    userIds.forEach(function (id, index) {
        return load(id, function (user) {
            users[index] = user;
            
            if (++donedone == userIds.length) {
                return done(users);
            }
        });
    });
}

module.exports = loadUsers
