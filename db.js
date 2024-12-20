require('dotenv').config();
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }, // Necessary for Neon connections
  },
});

module.exports = db;