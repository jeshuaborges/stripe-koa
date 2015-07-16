module.exports = {

  local: {
    client: 'postgresql',
    debug: true,
    connection: {
      database: 'pocket_stripe_koa_development',
      user:     '',
      password: ''
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  development: {
    client: 'mysql',
    connection: {
      host:     'homework-jesh.cnjorcjciimm.us-east-1.rds.amazonaws.com',
      database: 'homeworkdb',
      user:     'jesh',
      password: 'mK4cE(JhMc3yzcNT'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {}

};
