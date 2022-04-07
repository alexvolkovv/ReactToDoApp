import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  user: 'postgres',
  port: 5432,
  database: 'todo',
  password: 'alexwolf',
})

export default pool
