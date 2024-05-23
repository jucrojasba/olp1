const express = require('express');
const {
  getAll,
  getByLanguage,
  save,
  update,
  deleteChallenge,
} = require('../../controllers/challengeController');

const router = express.Router();

router.get('/', getAll);
router.get('/:language_id', getByLanguage);
router.post('/', save);
router.put('/:id', update);
router.delete('/:id', deleteChallenge);

module.exports = router;
