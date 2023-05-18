let cfg = require('./config.js');

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: cfg.host,
        user : cfg.user,
        password : cfg.password,
        database : cfg.database,
    }
});

module.exports = knex;