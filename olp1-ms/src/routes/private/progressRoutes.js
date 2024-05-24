const express = require('express');
const { save, getAll } = require ('../../controllers/progressController');

const router = express.Router();

router.post('/', save);
router.get('/', getAll);

module.exports = router;

