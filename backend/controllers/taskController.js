import pool from '../services/bd.js';

// requette pour récuperer toutes les taches
export const getTasks = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM todo ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

//requettes  pour créer une tache
export const addTask = async (req, res) => {
  try {
    console.log('Reçu :', req.body);

    const { description, name, due_date, status } = req.query;

    const result = await pool.query(
      'INSERT INTO todo (description, name, due_date, status) VALUES ($1, $2, $3, $4) RETURNING *',
      [description, name, due_date, status]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Erreur SQL :', err);
    res.sendStatus(500);
  }
};

// requette our delete une tache
export const deleteTask = async (req, res) => {
  const { id } = req.body;
  try {
    const result = await pool.query('DELETE FROM todo WHERE id = $1', [id]);
    res.status(200).json({ message: 'Tâche supprimée avec succès' });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
