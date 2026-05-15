const express = require('express');
const router = express.Router();
const { getTasks, getTaskByID, createTask, updateTask, deleteTask } = require('../controllers/taskController')

// Get all tasks
router.get('/', getTasks);
// Get task by ID
router.get('/:id', getTaskByID);
// Add task
router.post('/', createTask);
// Edit task by ID
router.put('/:id', updateTask);
// Delete task by ID
router.delete(':id', deleteTask);

module.exports = router;