module.exports = app => {
    function banc() {
        const get = async (req, res) => {
            nome_database = await app.dbperfil('clientes')
                .select('nome_database')
                .where({ id: req.params.idcliente })
                .first()
            const temp = nome_database.nome_database + '.banco'
            req.params.idcliente = temp
            return temp
        }
    }
    return { banc }
}









// //const db = require('./db')
// module.exports = (app) => {
//     //Função que retorna valores
//     return async (req, res) => {
//         const nome_database = await app.dbperfil('clientes')
//             .select('nome_database')
//             .where({ id: req.params.idcliente })
//             .first()
//         const temp = nome_database.nome_database + '.banco'
//         console.log(temp)
//     }

//     //const cliente = { ...req.params }//"..." operador spread, faz um clone da requisição
//     //const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

//     // function nomeDataBase(value) {
//     //     console.log(value)
//     //     app.dbperfil('clientes')
//     //         .select('nome_database')
//     //         .where({ id: value })
//     //         .first()
//     //         .then(value => res.json(value))
//     // }
//     //notExistsOrError(nomedatabase, 'Categoria possui artigos.')
//     // const nomeDataBase = async (req, res) => {
//     //     const nome_database = await app.dbperfil('clientes')
//     //         .select('nome_database')
//     //         .where({ id: req.params.idcliente })
//     //         .first()

//     //     console.log(nome_database.idcliente)
//     //     return nome_database.idcliente
//     // }

//     // app.dbperfil('clientes')
//     //     //.select('*')
//     //     .select('nome_database')
//     //     .where({ id: req.params.idcliente })
//     //     .first()
//     //     .then(nome_database => res(nome_database))
//     //     .catch(err => res.status(500).send(err))
//     // console.log('GetByID')

//     //return { nomeDataBase }
// }