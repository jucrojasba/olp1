const express = require('express');
const { getAll, save, getByLanguage, getById } = require('../../controllers/moduleController');

const router = express.Router();

router.get('/', getAll);
router.post('/:language_id', save);
router.get('/:language_id', getByLanguage);
router.get('/get/:id', getById);

module.exports = router;
