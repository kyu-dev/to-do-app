import pool from '../services/bd.js';

export const getTasks = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM todo ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
