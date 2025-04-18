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

export const addTask = async (req, res) => {
  try {
    console.log('Reçu :', req.query); // ou req.body selon ta méthode

    const { description, name, due_date, status } = req.query;

    const result = await pool.query(
      'INSERT INTO todo (description, name, due_date, status) VALUES ($1, $2, $3, $4) RETURNING *',
      [description, name, due_date, status]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Erreur SQL :', err); // ← très important pour voir le message exact
    res.sendStatus(500);
  }
};
