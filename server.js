// server.js
const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files like CSS (if needed)
app.use(express.static('public'));

// Body parser for JSON
app.use(express.json());

// Task route API
app.use('/api/v1', taskRoutes);

// Route to render the frontend view
app.get('/', (req, res) => {
    res.render('task'); // Renders the views/task.ejs file
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
