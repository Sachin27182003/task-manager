require('dotenv').config(); 
const express = require('express');
const cors = require('cors');

// Import the routes file
const taskRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Mount Routes
// This tells Express to send all requests through your routes.js file
app.use('/', taskRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});