const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./config'); // Import the User model
const path = require('path');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/login', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));



// Route to serve main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'SaudiScent', 'index.html'));
});

// Route to serve login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'public', 'login.html'));
});

// Route to handle login form submission
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user exists in the database
        const user = await User.findOne({ name: username });

        // If the user exists, check the password
        if (user && user.password === password) {
            // Redirect the user to the main page
            res.redirect('/');
        } else {
            // If the user doesn't exist, display an error message
            res.status(401).send('Invalid username or password');
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Route to serve sign up page
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'public', 'signup.html'));
});

// Route to handle sign-up form submission
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user already exists in the database
        const existingUser = await User.findOne({ name: username });

        if (existingUser) {
            // If the user already exists, display an error message
            res.status(400).send('You are already signed up. Please log in.');
        } else {
            // Create a new user document and save it to the database
            const newUser = new User({ name: username, password });
            await newUser.save();

            // Redirect the user to the main page
            res.redirect('/');
        }
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
