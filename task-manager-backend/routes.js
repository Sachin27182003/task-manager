const express = require('express');
const router = express.Router();

// Import the controller functions
const { 
    getWelcome, 
    getAllTasks, 
    createTask, 
    updateTask, 
    deleteTask 
} = require('./taskController');

// ==========================================
// Define Routes
// ==========================================

router.get('/', getWelcome);
router.get('/tasks', getAllTasks);
router.post('/tasks', createTask);
router.patch('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

// Export the router so server.js can use it
module.exports = router;