const express = require('express');
const { getAll, getByLanguage, newChallenge, updateChallenge } = require('../../controllers/challengeController');

const router = express.Router();

router.get('/', getAll);
router.get('/:language_id', getByLanguage);
router.post('/', newChallenge);
router.put('/:id', updateChallenge);

module.exports = router;