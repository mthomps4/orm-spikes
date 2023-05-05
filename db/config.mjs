// module.exports = {
//   development: {
//     port: '5432',
//     username: 'postgres',
//     password: 'postgres',
//     database: 'orm-spikes_dev',
//     host: '127.0.0.1',
//     dialect: 'postgres',
//   },
//   test: {
//     username: 'postgres',
//     password: 'postgres',
//     database: 'orm-spikes_test',
//     host: '127.0.0.1',
//     dialect: 'postgres',
//   },
//   // production: {
//   //   username: 'postgres',
//   //   password: null,
//   //   database: 'database_production',
//   //   host: '127.0.0.1',
//   //   dialect: 'postgres' as Dialect,
//   //   ssl: true,
//   //   //... other config
//   // } as Partial<Config>,
// };

import { Sequelize } from 'sequelize';

// const dbName = process.env.DB_NAME as string;
// const dbUser = process.env.DB_USER as string;
// const dbHost = process.env.DB_HOST;
// const dbDriver = process.env.DB_DRIVER as Dialect;
// const dbPassword = process.env.DB_PASSWORD;

// const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
//   host: dbHost,
//   dialect: dbDriver,
// });

// export default sequelizeConnection;

const dbName = 'orm-spikes_dev';
const dbUser = 'postgres';
const dbHost = '127.0.0.1';
const dbPassword = 'postgres';

const databaseUrl = process.env.DATABASE_URL;

const sequelizeConnection = new Sequelize(databaseUrl, { dialect: 'postgres' });

export default sequelizeConnection;
