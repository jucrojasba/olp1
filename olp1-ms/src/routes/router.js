const express = require('express')
const authRoutes = require('./public/authRoutes'); //import authentication/public routes
const privateRouter = require('./private/router'); //import private routes
const authMiddleware = require('../middlewares/authMiddleware'); //import middleware for authentication

//Create a new express router instance
const router = express.Router();

// Public routes
router.use('/auth', authRoutes);

// Private routes
router.use('/', authMiddleware, privateRouter);  // Middleware to ensure authentication is applied to private routes

module.exports = router;