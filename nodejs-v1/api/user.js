const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    //Método encryptPassword
    //Função Arrow com constante
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    /*Utilizando o async await a função espera receber os parametros da requisição "req" e passa o body da requisição
    para a const user, que eventualmente terá armazenado todos os atributos (Como name, email, password)*/
    //Método save
    const save = async (req, res) => {
        const user = { ...req.body }//"..." operador spread, faz um clone da requisição

        if (req.params.id) user.id = req.params.id

        try {
            //essa validação é para quando usuário tenta inserir um novo Usuário no banco de dados
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.password, 'Senha não informada')
            existsOrError(user.confirmPassword, 'Confirmação de Senha inválida')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem')

            //Faz a consulta do email no banco de dados
            const userFromDB = await app.db('users')
                .where({ email: user.email }).first()
            if (!user.id) { notExistsOrError(userFromDB, 'Usuário já cadastrado') }

        } catch (msg) {
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password) /*Chama a função encryptPassword passando a 
        senha que o usuário digitou (user.password) para gerar a senha criptografada e armazena a senha no atributo user.password*/
        delete user.confirmPassword //deleta a confirmação da senha porque não vamos inserir ela no banco de dados

        //Se existir um user.id ele somente atualiza, senão ele insere o usuario
        if (user.id) {
            app.dbperfil('users')
                .update(user)
                .where({ id: user.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.dbperfil('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.dbperfil('usuarios')
            .select('id',
            'nome',
            'email',
            'permissao_acesso_usuario',
            'permissao_acesso_empresa',
            'developer',
            'bloqueado')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.dbperfil('users')
            .select('id', 'name', 'email', 'admin')
            .where({ id: req.params.id })
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getById }
}