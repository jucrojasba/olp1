const express = require('express');
const { getAll, newComment } = require('../../controllers/forumController');

const router = express.Router();

router.get('/', getAll);
router.post('/', newComment);

module.exports = router;
