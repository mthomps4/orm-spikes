module.exports = {
  development: {
    port: '5432',
    username: 'postgres',
    password: 'postgres',
    database: 'orm-spikes_dev',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: 'postgres',
    database: 'orm-spikes_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  // production: {
  //   username: 'postgres',
  //   password: null,
  //   database: 'database_production',
  //   host: '127.0.0.1',
  //   dialect: 'postgres' as Dialect,
  //   ssl: true,
  //   //... other config
  // } as Partial<Config>,
};
