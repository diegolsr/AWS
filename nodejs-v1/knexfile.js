// Update with your config settings.
module.exports = {
	client: 'mysql',
	connection: {
		host: 'tagsys.c9lqyg2n7zaq.us-east-2.rds.amazonaws.com',
		//host: 'localhost',
		user: 'user_operacao',
		password: 'OZonIbpP02Lr',
		//database: 'tag_schema_default'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
}

/*module.exports = {
	client: 'mysql',
	connection: {
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'oficicar_perfil'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
}*/