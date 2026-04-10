const { v4: uuidv4 } = require('uuid');

// In-memory database
let tasks = [];

// ==========================================
// Controller Functions
// ==========================================

const getWelcome = (req, res) => {
    res.send('Welcome to the Task Manager API!');
};

const getAllTasks = (req, res) => {
    res.json(tasks);
};

const createTask = (req, res) => {
    const { title, description } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({ error: 'A valid task title is required.' });
    }

    const newTask = {
        id: uuidv4(),
        title: title.trim(),
        description: description?.trim() || '',
        completed: false,
        createdAt: new Date().toISOString()
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
};

const updateTask = (req, res) => {
    const { id } = req.params;
    const { completed, title, description } = req.body;

    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found.' });
    }

    if (completed !== undefined && typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'Completed status must be a boolean.' });
    }
    
    if (title !== undefined && (typeof title !== 'string' || title.trim() === '')) {
        return res.status(400).json({ error: 'Title must be a valid string.' });
    }

    const updatedTask = { 
        ...tasks[taskIndex], 
        ...(completed !== undefined && { completed }),
        ...(title !== undefined && { title: title.trim() }),
        ...(description !== undefined && { description: description.trim() })
    };

    tasks[taskIndex] = updatedTask;
    res.json(updatedTask);
};

const deleteTask = (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found.' });
    }

    // 1. Capture the task data BEFORE removing it
    const deletedTask = tasks[taskIndex];

    // 2. Remove the task from the array
    tasks.splice(taskIndex, 1);

    // 3. Return a 200 OK status along with the message and the deleted data
    res.status(200).json({ 
        message: 'Task successfully deleted.',
        task: deletedTask 
    });
};

// Export all functions so they can be used in routes.js
module.exports = {
    getWelcome,
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};