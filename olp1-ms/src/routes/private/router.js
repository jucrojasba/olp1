const express = require('express');
const userRoutes = require('./userRoutes');
const challengeRoutes = require('./challengeRoutes');
const forumRoutes = require('./forumRoutes');
const moduleRoutes = require('./moduleRoutes');

const router = express.Router();

// Users
router.use('/users', userRoutes);

//Challenges
router.use('/challenges', challengeRoutes);

//Forum
router.use('/forum', forumRoutes);

//Modules
router.use('/modules', moduleRoutes);

module.exports = router;
