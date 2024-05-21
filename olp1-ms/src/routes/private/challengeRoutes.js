const express = require('express');
const { getAll, getByLanguage, newChallenge } = require('../../controllers/challengeController');

const router = express.Router();

router.get('/', getAll)
router.get('/:language_id', getByLanguage)
router.post('/', newChallenge)

module.exports = router;