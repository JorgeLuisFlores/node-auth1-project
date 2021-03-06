const db = require('../data/db-config.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db('users').select('id', 'username');
}

function findBy(filter) {
    console.log(filter);
    return db('users')
        .select('id', 'username', 'password')
        .where(filter);

    /*
    SELECT id, username, password
    FROM users 
    WHERE username = 'sk4'
    */
}

function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
}

function findById(id) {
    return db('users')
        .select('id', 'username')
        .where({
            id
        })
        .first();
}