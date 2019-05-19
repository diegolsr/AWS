module.exports = app => {
    app.route('/users')
        .post(app.api.user.save) //POST para inserir
        .get(app.api.user.get) //GET para buscar

    app.route('/users/:id')
        .put(app.api.user.save) //PUT para atualizar
        .get(app.api.user.getById) //GET para buscar

    app.route('/bancos/:idcliente')
        .get(app.api.bancos.get) //GET para buscar

    app.route('/bancos/:idcliente/:idbanco')
        .get(app.api.bancos.getById) //GET para buscar

    app.route('/caplancamentomanual/:idcliente/:dtemissaoinicial/:dtemissaofinal')
        .get(app.api.filtrodedata.getByDateFilter) //GET para buscar

}