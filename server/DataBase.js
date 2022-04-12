const pg = require('pg')
const { Pool } = pg

const pool = new Pool({
  user: 'postgres',
  port: 5432,
  database: 'todo',
  password: 'alexwolf',
})

module.exports = pool
