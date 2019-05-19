module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const get = async (req, res) => {
        const nome_database = await app.dbperfil('clientes')
            .select('nome_database')
            .where({ id: req.params.idcliente })
            .first()
        const temp = nome_database.nome_database + '.banco'

        app.db(temp)
            .select('id',
                'idempresa',
                'Banco',
                'Agência',
                'Conta',
                'bloqueado')
            .then(bancos => res.json(bancos))
            .catch(err => res.status(500).send(err))
    }

    const getById = async (req, res) => {
        const nome_database = await app.dbperfil('clientes')
            .select('nome_database')
            .where({ id: req.params.idcliente })
            .first()
        const temp = nome_database.nome_database + '.banco'


        app.db(temp)
            //.select('id', 'name', 'email', 'admin')
            .where({ id: req.params.idbanco })
            .first()
            .then(bancos => res.json(bancos))
            .catch(err => res.status(500).send(err))
    }

    return { get, getById }
}