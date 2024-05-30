const express = require('express')
const authRoutes = require('./public/authRoutes');
const privateRouter = require('./private/router');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Public routes
router.use('/auth', authRoutes);

// Private routes
// router.use(authMiddleware); // same as below
router.use('/', privateRouter); //NO olvidar añadir el authMiddleware luego(para el token)

module.exports = router;