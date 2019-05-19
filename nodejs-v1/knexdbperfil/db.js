const config = require('./knexdbperfil')
const knex = require('knex')(config)

//knex.migrate.latest([config])
module.exports = knex