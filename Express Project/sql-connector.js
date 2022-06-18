const sqlite3 = require('sqlite3')
const knex = require('knex')
const config = require('config')
const db_conn_config = config.get('db_conn')


// knex connector
const connectedKnex = knex({
    client: db_conn_config.client,
    connection: {
        filename: db_conn_config.file_name
    }
})

module.exports.connectedKnex = connectedKnex;