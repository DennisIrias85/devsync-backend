const express = require('express');
const Task = require('../models/Task');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.post('/', async (req, res) => {
    const { title, description, status, category, reminder } = req.body;
    console.log('User in POST route:', req.user); // <-- Added log

    const task = new Task({ 
        title, 
        description, 
        status, 
        category, 
        reminder, 
        user: req.user._id 
    });
    try {
        const savedTask = await task.save();
        console.log('Task successfully saved:', savedTask); // <-- Added log
        res.status(201).json(savedTask);
    } catch (err) {
        console.error('Error saving task:', err);
        res.status(400).json({ message: 'Error creating task' });
    }
});

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user._id }); 
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: 'Error deleting task' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        console.log('Updating task with ID:', req.params.id);
        
        const { title, description, status } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { title, description, status, category, reminder, dueDate },
            { new: true, runValidators: true }
        );

        if (!updatedTask) {
            console.log('Task not found:', req.params.id);
            return res.status(404).json({ message: 'Task not found' });
        }

        console.log('Task updated:', updatedTask);
        res.json(updatedTask);
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;