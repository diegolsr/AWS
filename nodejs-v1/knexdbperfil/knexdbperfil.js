// Update with your config settings.
module.exports = {
	client: 'mysql',
	connection: {
		host: 'nome do localhost',
		user: 'o usuário',
		password: 'a senha',
		database: 'nome do banco de dados'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
}