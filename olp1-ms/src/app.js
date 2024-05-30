require('dotenv').config(); // Import dotenv to load environment variables from .env file
const express = require('express'); // Import Express framework
const cors = require('cors'); // Import CORS middleware
const { unleashHTMLWelcome } = require('./helpers/unleash-welcome-a-la-nico');
const router = require('./routes/router'); // Import the router module

const app = express(); // Create an instance of the Express app

// Middlewares
app.use(cors()); // Distinguish the origin of requests
app.use(express.json()); // Parse the body of requests as JSON

// Routes
app.get('/', unleashHTMLWelcome);
app.use('/api', router); //Definte the route at /api url

// Export the Express app instance
module.exports = app;
