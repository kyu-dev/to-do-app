import express from 'express'; // Import d'Express avec ES6
import pool from './models/bd.js'; // Import de la connexion PostgreSQL

const app = express();

app.use(express.json());

// Exemple : récupérer tous les todos
app.get('/todos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM todo ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
