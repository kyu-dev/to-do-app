import express from 'express';
import {
  getTasks,
  addTask,
  deleteTask,
} from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/', addTask);
router.delete('/', deleteTask);

export default router;
