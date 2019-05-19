module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation
    const getByDateFilter = async (req, res) => {
        const nome_database = await app.dbperfil('clientes')
            .select('nome_database')
            .where({ id: req.params.idcliente })
            .first()
        const temp = nome_database.nome_database + '.caplancamentomanual'


        app.db(temp)
            //.select('id', 'name', 'email', 'admin')
            .whereBetween('emissão', [req.params.dtemissaoinicial, req.params.dtemissaofinal])
            .then(caplancamentomanual => res.json(caplancamentomanual))
            .catch(err => res.status(500).send(err))
    }

    return { getByDateFilter }
}