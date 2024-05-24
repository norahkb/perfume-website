const mongoose = require('mongoose');

// Define the Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create and export the Model
const User = mongoose.model('User', userSchema);
module.exports = User;

