import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv'; // Utilisation de dotenv en ES6

dotenv.config(); // Charge les variables d'environnement

const pool = new Pool({
  user: 'arthurvienotongaro',
  host: 'localhost',
  database: 'todo_app',
  password: '1008',
  port: 5431,
});

export default pool; // Export avec ES6
