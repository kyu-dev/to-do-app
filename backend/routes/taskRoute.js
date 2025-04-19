import express from 'express';
import {
  getTasks,
  addTask,
  deleteTask,
  modifyTask,
} from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/', addTask);
router.delete('/', deleteTask);
router.put('/', modifyTask);

export default router;
