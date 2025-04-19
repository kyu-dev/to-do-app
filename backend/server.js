import express from 'express';
import taskRouter from './routes/taskRoute.js';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use('/tasks', taskRouter);

app.listen(PORT, () => {
  console.log(`🚀 serveur en écoute : http://localhost:${PORT} !!`);
});
