import express, { json } from 'express';
import taskRouter from './routes/task.js';
const PORT = 5001;
const app = express();
app.use(json());
app.use('/task', taskRouter);

app.listen(PORT, () => {
  console.log(`🚀 serveur en écoute : http://localhost:${PORT} !!`);
});
