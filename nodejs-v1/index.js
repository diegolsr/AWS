const app = require('express')()
const consign = require('consign')
const db = require('./config/db.js')
const dbperfil = require('./knexdbperfil/db.js')

app.db = db
app.dbperfil = dbperfil

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./knexdbperfil/database.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando...')
})