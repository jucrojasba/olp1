const express = require('express');
const { newModule } = require('../../models/moduleModel');

const router = express.Router();

router.post('/newmodule', newModule);

module.exports = router;

