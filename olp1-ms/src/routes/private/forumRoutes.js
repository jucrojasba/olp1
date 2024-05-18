const express = require('express');
const { getAll } = require('../../controllers/forumController');
const { newComment } = require ('../../models/forumModel')

const router = express.Router();

router.get('/', getAll)
router.post('/', newComment)

module.exports = router;