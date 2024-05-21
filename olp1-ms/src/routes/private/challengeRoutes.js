const express = require('express');
const { getAll, getByLanguage, newChallenge, updateChallenge, deleteChallenge } = require('../../controllers/challengeController');

const router = express.Router();

router.get('/', getAll);
router.get('/:language_id', getByLanguage);
router.post('/', newChallenge);
router.put('/:id', updateChallenge);
router.delete('/:id', deleteChallenge);

module.exports = router;