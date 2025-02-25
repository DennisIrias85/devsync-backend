const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, default: 'To Do' }, 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: { type: String, default: "" },        
    reminder: { type: Date, default: null },
    dueDate: { type: Date, default: null }           
});

module.exports = mongoose.model('Task', taskSchema);