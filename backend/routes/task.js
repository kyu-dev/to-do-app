import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'bonjour' });
});

// Exemple de route pour récupérer les tâches
router.get('/todos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM todos');
    res.json(result.rows);
  } catch (error) {
    console.error('Erreur lors de la récupération des tâches:', error);
    res.status(500).json({ message: 'Erreur interne du serveur' });
  }
});

export default router;
