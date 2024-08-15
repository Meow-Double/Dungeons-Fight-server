// import { Pool } from 'pg';

// export const pool = new Pool({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   database: process.env.DB_DATABASE,
// });

const { Sequelize } = require('sequelize');

// module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   dialect: 'postgres',
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
// });


module.exports = new Sequelize(process.env.POSTGRES_URL) 

// import pg from 'pg';

// const { Pool } = pg;

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL,
// })