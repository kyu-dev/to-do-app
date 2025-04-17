import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'arthurvienotongaro',
  host: 'localhost',
  database: 'todo_app',
  password: '1008',
  port: 5431,
});

export default pool;
